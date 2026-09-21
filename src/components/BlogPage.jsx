import { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  fetchBloggerPosts,
  parseIdFromSlug,
  INITIAL_POSTS,
} from '../lib/bloggerService';
import SEOManager from './SEOManager';
import { SITE_URL } from '../seo/siteConfig';

const OFF_WHITE = '#F5F5F3';
const CHARCOAL = '#1A1A1A';
const GREEN = '#007A5E';
const BORDER = '#E5E5E5';

const CORE_CATEGORIES = ['ALL POSTS', 'AGENCY', 'MEDIA', 'DEVELOPMENT'];

const BlogPage = () => {
  const { id: paramId } = useParams();
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL POSTS');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paramId]);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      const data = await fetchBloggerPosts();
      if (isMounted && data && data.length > 0) {
        setPosts(data);
      }
      if (isMounted) {
        setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  // Determine current active post if viewing single post route
  const currentPost = useMemo(() => {
    if (!paramId) return null;
    const targetId = parseIdFromSlug(paramId);
    return posts.find((p) => p.id === targetId || p.slug === paramId);
  }, [paramId, posts]);

  // Filtered posts for list view
  const filteredPosts = useMemo(() => {
    if (activeFilter === 'ALL POSTS') return posts;
    const filterKey = activeFilter.toLowerCase();
    return posts.filter((p) => {
      const matchCat = p.categories?.some((cat) =>
        cat.toLowerCase().includes(filterKey)
      );
      const matchText =
        p.title?.toLowerCase().includes(filterKey) ||
        p.summary?.toLowerCase().includes(filterKey);
      return matchCat || matchText;
    });
  }, [activeFilter, posts]);

  const featuredPost = filteredPosts[0] || posts[0];
  const gridPosts = filteredPosts.slice(1);

  // ─────────────────────────────────────────────────────────────
  // SINGLE POST VIEW (/blog/:id)
  // ─────────────────────────────────────────────────────────────
  if (paramId) {
    if (!currentPost && loading) {
      return (
        <div style={{ background: OFF_WHITE, minHeight: '80vh', padding: '160px 20px', textAlign: 'center', fontFamily: "'Montserrat', sans-serif" }}>
          <div style={{ display: 'inline-block', width: '40px', height: '40px', border: `3px solid ${GREEN}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
          <p style={{ marginTop: '20px', color: '#666' }}>Loading article...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      );
    }

    if (!currentPost) {
      return (
        <div style={{ background: OFF_WHITE, minHeight: '80vh', padding: '160px 20px', textAlign: 'center', fontFamily: "'Montserrat', sans-serif" }}>
          <h2 style={{ fontSize: '2rem', color: CHARCOAL, marginBottom: '20px' }}>Article Not Found</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>The post you are looking for might have been updated or moved.</p>
          <Link to="/blog" style={{ background: GREEN, color: '#fff', padding: '12px 28px', borderRadius: '50px', textDecoration: 'none', fontWeight: 600 }}>
            ← Back to Blog
          </Link>
        </div>
      );
    }

    return (
      <div className="blog-page-wrapper" style={{ background: OFF_WHITE, minHeight: '100vh', fontFamily: "'Montserrat', sans-serif", color: CHARCOAL, position: 'relative' }}>
        {/* Continuous Global Vertical Dashed Lines */}
        <div className="blog-dashed-line-left" />
        <div className="blog-dashed-line-right" />

        <SEOManager
          title={`${currentPost.title} | Infynix Blog`}
          description={currentPost.summary}
          canonicalUrl={`/blog/${currentPost.slug}`}
          schemaData={{
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: currentPost.title,
            description: currentPost.summary,
            author: { '@type': 'Organization', name: 'Infynix Solutions' },
            publisher: { '@id': `${SITE_URL}/#organization` },
            datePublished: currentPost.published,
            dateModified: currentPost.updated,
            mainEntityOfPage: `${SITE_URL}/blog/${currentPost.slug}`,
            image: currentPost.thumbnail,
          }}
        />

        {/* ── ARTICLE HEADER ── */}
        <section style={{ padding: '120px clamp(36px, 6vw, 80px) 24px', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: '-50px', right: 0, width: '800px', height: '250px', background: 'radial-gradient(ellipse at center, rgba(0, 122, 94, 0.4) 0%, rgba(204, 255, 0, 0.12) 55%, rgba(255,255,255,0) 85%)', filter: 'blur(90px)', pointerEvents: 'none', zIndex: 0 }} />
          
          <div style={{ maxWidth: '1020px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '18px' }}>
              {currentPost.categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    display: 'inline-block',
                    padding: '5px 12px',
                    background: GREEN,
                    color: '#fff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    borderRadius: '4px',
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>

            <h1 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 600, margin: '0 auto 16px', lineHeight: 1.28, color: CHARCOAL, maxWidth: '960px' }}>
              {currentPost.title}
            </h1>

            <p style={{ fontStyle: 'italic', color: '#666', fontSize: '0.9rem', margin: 0 }}>
              Published by Infynix Solutions • {currentPost.formattedDate}
            </p>
          </div>
        </section>

        {/* ── ARTICLE HERO IMAGE ── */}
        {currentPost.thumbnail && (
          <section style={{ padding: '0 clamp(36px, 6vw, 80px) 36px' }}>
            <div style={{ maxWidth: '840px', margin: '0 auto', height: 'clamp(210px, 26vw, 380px)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.07)' }}>
              <img src={currentPost.thumbnail} alt={currentPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </section>
        )}

        {/* ── ARTICLE CONTENT CONTAINER ── */}
        <section style={{ padding: '0 clamp(36px, 6vw, 80px) 80px' }}>
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <div
              className="blog-prose"
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.85',
                color: '#333',
              }}
            />

            {/* ── UAE BUSINESS CONSULTATION CTA ── */}
            <div style={{ marginTop: '50px', padding: '40px', background: '#fff', border: `1px solid ${BORDER}`, borderLeft: `5px solid ${GREEN}`, borderRadius: '14px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', color: GREEN, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Growth Systems for UAE Enterprises
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: '0 0 12px', color: CHARCOAL }}>
                Work with Infynix Agency, Media & Development
              </h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                Whether you need revenue-focused performance marketing, high-production video and brand storytelling, or custom web and CRM architecture, our unified teams build measured systems across Dubai, Abu Dhabi, and the Northern Emirates.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/contact" style={{ background: GREEN, color: '#fff', padding: '12px 28px', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'background 0.2s' }}>
                  Schedule Strategy Session →
                </Link>
                {currentPost.bloggerUrl && (
                  <a href={currentPost.bloggerUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#666', border: `1px solid ${BORDER}`, padding: '12px 24px', borderRadius: '50px', textDecoration: 'none', fontSize: '0.85rem' }}>
                    View on Blogger ↗
                  </a>
                )}
              </div>
            </div>

            {/* Back to Blog Button */}
            <div style={{ marginTop: '50px', textAlign: 'center' }}>
              <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: GREEN, textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', border: `1.5px solid ${GREEN}`, padding: '12px 30px', borderRadius: '100px', transition: 'all 0.3s' }}>
                ← Back to all Blog Posts
              </Link>
            </div>
          </div>
        </section>

        <style>{`
          .blog-dashed-line-left {
            position: absolute;
            left: clamp(20px, 4vw, 60px);
            top: 0;
            bottom: 0;
            border-left: 1.5px dashed rgba(0, 0, 0, 0.11);
            pointer-events: none;
            z-index: 50;
          }
          .blog-dashed-line-right {
            position: absolute;
            right: clamp(20px, 4vw, 60px);
            top: 0;
            bottom: 0;
            border-right: 1.5px dashed rgba(0, 0, 0, 0.11);
            pointer-events: none;
            z-index: 50;
          }
          @media (max-width: 768px) {
            .blog-dashed-line-left, .blog-dashed-line-right {
              display: none;
            }
          }
          .blog-page-wrapper section::before,
          .blog-page-wrapper section::after {
            display: none !important;
          }
          .blog-prose h2 { font-size: 1.38rem; font-weight: 700; margin: 28px 0 10px; color: #111; line-height: 1.3; }
          .blog-prose h3 { font-size: 1.15rem; font-weight: 600; margin: 20px 0 8px; color: #222; }
          .blog-prose p { margin-bottom: 14px; line-height: 1.75; font-size: 0.98rem; color: #374151; }
          .blog-prose ul, .blog-prose ol { padding-left: 20px; margin-bottom: 16px; font-size: 0.98rem; }
          .blog-prose li { margin-bottom: 6px; line-height: 1.65; }
          .blog-prose strong { color: #111; font-weight: 600; }
          .blog-prose hr { border: 0; border-top: 1px solid #E5E5E5; margin: 24px 0; }
          .blog-prose a { color: ${GREEN}; text-decoration: underline; }
          .blog-prose img { max-width: 100%; height: auto; border-radius: 12px; margin: 24px auto; display: block; }
        `}</style>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // BLOG LISTING VIEW (/blog)
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="blog-page-wrapper" style={{ background: OFF_WHITE, minHeight: '100vh', fontFamily: "'Montserrat', sans-serif", color: CHARCOAL, position: 'relative' }}>
      {/* Continuous Global Vertical Dashed Lines */}
      <div className="blog-dashed-line-left" />
      <div className="blog-dashed-line-right" />

      <SEOManager
        title="Blog | Infynix Solutions UAE"
        description="Official blog of Infynix Solutions UAE: Strategic perspectives across Agency performance, Media production, and Software Development."
        canonicalUrl="/blog"
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Infynix Solutions Blog',
          description: 'Official blog of Infynix Solutions UAE covering Agency, Media, and Development.',
          publisher: { '@type': 'Organization', name: 'Infynix Solutions' },
        }}
      />

      <style>{`
        .blog-dashed-line-left {
          position: absolute;
          left: clamp(20px, 4vw, 60px);
          top: 0;
          bottom: 0;
          border-left: 1.5px dashed rgba(0, 0, 0, 0.11);
          pointer-events: none;
          z-index: 50;
        }
        .blog-dashed-line-right {
          position: absolute;
          right: clamp(20px, 4vw, 60px);
          top: 0;
          bottom: 0;
          border-right: 1.5px dashed rgba(0, 0, 0, 0.11);
          pointer-events: none;
          z-index: 50;
        }
        @media (max-width: 768px) {
          .blog-dashed-line-left, .blog-dashed-line-right {
            display: none;
          }
        }
        /* Disable section-level pseudo-elements that cut into the page content */
        .blog-page-wrapper section::before,
        .blog-page-wrapper section::after {
          display: none !important;
        }
        .blog-hero { padding: clamp(100px, 12vw, 140px) 0 40px; }
        .blog-badge { font-size: 0.75rem; font-weight: 700; color: ${GREEN}; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 0.8rem; display: block; }
        .blog-h1 { font-family: 'Montserrat', sans-serif; font-size: clamp(2.4rem, 4.5vw, 3.5rem); font-weight: 600; line-height: 1.1; margin-bottom: 1.2rem; color: #111; }
        .blog-p { font-size: clamp(0.95rem, 2vw, 1.05rem); color: #4B5563; line-height: 1.7; max-width: 620px; }
        .blog-cat-pill { padding: 8px 18px; border-radius: 50px; font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; transition: all 0.2s ease; }
        .blog-card { background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid ${BORDER}; transition: transform 0.3s ease, box-shadow 0.3s ease; text-decoration: none; color: inherit; display: flex; flex-direction: column; }
        .blog-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .featured-post-card:hover { transform: translateY(-4px); box-shadow: 0 24px 48px rgba(0,0,0,0.09); }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section className="blog-hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: '-80px', right: '-100px', width: '800px', height: '300px', background: 'radial-gradient(ellipse at center, rgba(0, 122, 94, 0.45) 0%, rgba(204, 255, 0, 0.15) 50%, rgba(255,255,255,0) 80%)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 clamp(40px, 6vw, 80px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="blog-badge">INFYNIX SOLUTIONS BLOG</span>
              <h1 className="blog-h1">Growth, Media & Systems</h1>
              <p className="blog-p">
                Strategic insights, technical breakdowns, and regional updates across our three pillars: <strong>Agency</strong>, <strong>Media</strong>, and <strong>Development</strong>.
              </p>
            </div>
            
            {/* Live Blogger status badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: `1px solid ${BORDER}`, padding: '8px 16px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600, color: '#666', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
              Live Synced with Blogger
            </div>
          </div>

          {/* ── CATEGORY FILTER PILLS ── */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '36px', flexWrap: 'wrap' }}>
            {CORE_CATEGORIES.map((cat) => {
              const active = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="blog-cat-pill"
                  style={{
                    border: active ? `1.5px solid ${GREEN}` : `1.5px solid ${BORDER}`,
                    background: active ? GREEN : '#fff',
                    color: active ? '#fff' : '#555',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: 1140, margin: '0 auto', padding: '0 clamp(40px, 6vw, 80px) 80px', position: 'relative', zIndex: 1 }}>
        {featuredPost && (
          <div style={{ marginBottom: '40px' }}>
            <Link
              to={`/blog/${featuredPost.slug}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: `1px solid ${BORDER}`,
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="featured-post-card"
            >
              <div style={{ height: 'clamp(200px, 22vw, 260px)', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={featuredPost.thumbnail}
                  alt={featuredPost.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: GREEN, color: '#fff', padding: '5px 12px', borderRadius: '4px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '1px' }}>
                  FEATURED
                </div>
              </div>

              <div style={{ padding: 'clamp(20px, 3vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: GREEN, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {featuredPost.categories[0] || 'INFYNIX'}
                  </span>
                  <span style={{ color: '#ccc' }}>•</span>
                  <span style={{ fontSize: '0.78rem', color: '#888' }}>{featuredPost.formattedDate}</span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.15rem, 1.7vw, 1.42rem)', fontWeight: 600, lineHeight: 1.3, margin: '0 0 12px', color: CHARCOAL }}>
                  {featuredPost.title}
                </h2>

                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.6, margin: '0 0 18px' }}>
                  {featuredPost.summary}
                </p>

                <span style={{ color: GREEN, fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Read Full Story →
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* ── GRID OF REMAINING POSTS ── */}
        {gridPosts.length > 0 && (
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 24px', color: '#555' }}>
              More Articles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
              {gridPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card">
                  <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: '14px', left: '14px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px' }}>
                      {post.categories[0] || 'BLOG'}
                    </span>
                  </div>
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span style={{ fontSize: '0.75rem', color: '#888', marginBottom: '10px' }}>{post.formattedDate}</span>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: CHARCOAL, margin: '0 0 12px', lineHeight: 1.3 }}>
                      {post.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.6, margin: '0 0 20px', flexGrow: 1 }}>
                      {post.summary}
                    </p>
                    <span style={{ color: GREEN, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
