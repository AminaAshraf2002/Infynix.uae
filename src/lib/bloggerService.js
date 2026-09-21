// Blogger Service for Infynix Solutions UAE
// Fetches live posts from Google Blogger via JSONP (bypasses browser CORS completely)

export const BLOGGER_URL = 'https://infynixsolutionsuae.blogspot.com';

const FALLBACK_CATEGORY_IMAGES = {
  Agency: '/agency_marketing_uae.jpg',
  Media: '/media_production_uae.jpg',
  Development: '/dev_engineering_uae.jpg',
  Default: '/unified_growth_model.jpg',
};

// Formats date into readable string
export const formatBloggerDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Strips HTML and creates clean plain-text snippet
export const createSnippet = (htmlContent, maxLength = 180) => {
  if (!htmlContent) return '';
  const text = htmlContent
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Extracts first <img> src from HTML content, or matches topic, or falls back to category
export const extractThumbnail = (htmlContent, categories = [], title = '') => {
  if (htmlContent) {
    const imgMatch = htmlContent.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
  }

  // Title-based distinct image matching (ensures each of the 6 posts gets its exact unique image)
  const t = (title || '').toLowerCase();

  // 1. High-Ticket Lead Generation (Real Estate & Luxury) -> Dubai Downtown Skyline
  if (t.includes('lead generation') || t.includes('high-ticket') || t.includes('luxury real estate') || t.includes('luxury services')) {
    return '/lead_generation_uae.jpg';
  }

  // 2. Performance Marketing & SEO (Agency) -> Analytics Executive Suite
  if (t.includes('performance marketing') || t.includes('vanity metrics') || t.includes('marketing in dubai')) {
    return '/agency_marketing_uae.jpg';
  }

  // 3. Commercial Video Production (Media) -> Cinema Production Rig
  if (t.includes('video production') || t.includes('cinematic') || t.includes('commercial video') || t.includes('cuts cac')) {
    return '/media_production_uae.jpg';
  }

  // 4. Custom Web Development & Engineering (Development) -> Code & Engineering Workstation
  if (t.includes('engineering for conversion') || t.includes('custom web') || t.includes('generic templates') || t.includes('web platforms')) {
    return '/dev_engineering_uae.jpg';
  }

  // 5. AI Automation & Intelligent CRMs -> Enterprise Global Neural Network
  if (/\bai\b/i.test(title) || t.includes('automation') || t.includes('intelligent crm') || t.includes('manual work')) {
    return '/ai_automation_uae.jpg';
  }

  // 6. Unified Growth Model -> Infynix Team Office
  if (t.includes('unified growth') || t.includes('growth model') || t.includes('three separate vendors') || t.includes('under one roof')) {
    return '/unified_growth_model.jpg';
  }

  for (const cat of categories) {
    if (FALLBACK_CATEGORY_IMAGES[cat]) {
      return FALLBACK_CATEGORY_IMAGES[cat];
    }
  }
  return FALLBACK_CATEGORY_IMAGES.Default;
};

export const extractPostId = (idString) => {
  if (!idString) return '';
  const parts = idString.split('.post-');
  return parts.length > 1 ? parts[1] : idString;
};

export const generateSlug = (title, id) => {
  if (!title) return id;
  const clean = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .substring(0, 50);
  return `${clean}-${id}`;
};

export const parseIdFromSlug = (slugOrId) => {
  if (!slugOrId) return '';
  const match = slugOrId.match(/(\d{15,25})$/);
  return match ? match[1] : slugOrId;
};

// Fallback initial post so UI is NEVER empty even before network returns
export const INITIAL_POSTS = [
  {
    id: '3672986851097605036',
    slug: 'the-unified-growth-model-why-uae-businesses-need-3672986851097605036',
    title: 'The Unified Growth Model: Why UAE Businesses Need Agency, Media, and Development Under One Roof',
    content: `<p>In the UAE's fast-moving business ecosystem—from Dubai to Abu Dhabi and the Northern Emirates—most companies manage their digital presence across three separate vendors: a creative video crew, an external marketing agency, and a third-party software development team.</p>
<p>The result? <strong>Disconnected messaging, broken lead tracking, and wasted budget.</strong></p>
<p>At <strong>Infynix Solutions</strong>, we operate with a unified model connecting three core pillars: <strong>Agency, Media, and Development</strong>. Here is why this integrated approach is winning in the UAE market.</p>
<hr/>
<h2>1. Infynix Agency: Strategy, Search & Performance</h2>
<p>An agency shouldn't just buy clicks; it should build predictable revenue pipelines. The <strong>Infynix Agency</strong> division focuses on measurable outcomes:</p>
<ul>
  <li><strong>Technical SEO:</strong> Dominating high-intent search rankings across Dubai and the UAE in English and Arabic.</li>
  <li><strong>Revenue Attribution:</strong> Server-side tracking (GA4, CAPI) that maps every inquiry back to the specific campaign and keyword.</li>
  <li><strong>CRM & Lead Routing:</strong> Automated flows ensuring leads from Google, Meta, or LinkedIn are contacted within minutes.</li>
</ul>
<h2>2. Infynix Media: High-Impact Video & Creative Production</h2>
<p>Stock photos and generic templates do not build trust with UAE clients. <strong>Infynix Media</strong> is our dedicated production unit equipped with its own crews and gear:</p>
<ul>
  <li><strong>Brand & Corporate Films:</strong> High-production storytelling for enterprise clients, real estate developments, and healthcare providers.</li>
  <li><strong>Native Social Video:</strong> Platform-native vertical video crafted for TikTok, Instagram Reels, and Snapchat.</li>
  <li><strong>Bilingual Content:</strong> Native Arabic and English scriptwriting and editing tailored specifically to regional cultural nuances.</li>
</ul>
<h2>3. Infynix Development: Robust Software & Web Engineering</h2>
<p>Marketing and creative can only succeed if the underlying technology converts. Our <strong>Development</strong> team engineers digital platforms built for scale:</p>
<ul>
  <li><strong>Custom Web Applications:</strong> Ultra-fast, responsive web platforms built with modern frameworks and sub-second load times.</li>
  <li><strong>Workflow & AI Automation:</strong> Custom internal tools and API integrations connecting your CRM, inventory, and communication channels.</li>
  <li><strong>Enterprise Security & Reliability:</strong> Architectures designed to handle high transaction volumes without slowdown.</li>
</ul>
<hr/>
<h2>Why The 3 Pillars Must Work as One System</h2>
<p>When <strong>Media</strong> produces the visuals, <strong>Development</strong> builds the high-speed landing pages, and <strong>Agency</strong> drives the targeted traffic and tracks the conversions, there are zero gaps. Marketing spend becomes accountable, and every campaign is optimized from shoot day to final closed deal.</p>
<hr/>
<h2>Partner with Infynix Solutions</h2>
<p>Looking to scale your presence across the UAE? Explore how our <strong>Agency, Media, and Development</strong> teams can support your next phase of growth.</p>
<p><a href="https://www.infynixsolutions.ae/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Speak with our team in Ajman & Dubai →</a></p>`,
    summary: 'Discover why separating marketing, media production, and software development hurts business growth in Dubai and the UAE—and how a unified system drives higher ROI.',
    published: '2026-09-21T02:57:40.817-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T02:57:40.817-07:00',
    categories: ['Agency', 'Development', 'Infynix Solutions', 'Media', 'UAE Business'],
    author: 'Infynix',
    thumbnail: '/unified_growth_model.jpg',
    bloggerUrl: 'https://infynixsolutionsuae.blogspot.com/2026/09/The%20Unified%20Growth%20Model%20Why%20UAE%20Businesses%20Need%20Agency%20Media%20and%20Development%20Under%20One%20Roof.html',
  },
  {
    id: '4918294820194820101',
    slug: 'performance-marketing-dubai-first-party-attribution-4918294820194820101',
    title: 'Performance Marketing in Dubai: Why Vanity Metrics Hurt UAE ROI',
    content: `<p>In Dubai and Abu Dhabi's hyper-competitive commercial landscape, businesses frequently spend tens of thousands of dirhams on ad campaigns only to celebrate superficial metrics: impressions, video views, and clicks.</p>
<p>Yet when the month ends, the revenue ledger remains unchanged. <strong>Vanity metrics do not pay rent or payroll in the UAE.</strong></p>
<hr/>
<h2>The Pitfall of Disconnected Paid Media</h2>
<p>Most UAE enterprises rely on external media buyers who optimize for low Cost-Per-Click (CPC) rather than qualified sales calls or closed contracts. In sectors like luxury real estate, B2B services, and enterprise retail, a 50 AED click from an unqualified audience is pure waste.</p>
<p>To win in this market, marketing must transition from lead generation to <strong>revenue engineering</strong>.</p>
<h2>1. First-Party Server-Side Tracking (GA4 & CAPI)</h2>
<p>With iOS privacy updates and browser ad blockers, client-side tracking pixels lose up to 40% of conversion data. Infynix Agency deploys server-side Google Tag Manager and Conversions API (Meta, LinkedIn, Google) to map every dirham directly to client acquisition.</p>
<h2>2. Localized Search Dominance (English & Arabic)</h2>
<p>Over 60% of high-intent B2B and government procurement searches in the UAE occur across bilingual terms. High-ranking search engine visibility requires localized technical architecture, schema structured data, and authoritative regional backlink profiles.</p>
<h2>3. Automated Speed-to-Lead Routing</h2>
<p>Studies show that contacting an inbound UAE business lead within 5 minutes increases conversion odds by 391%. By integrating web webhooks into CRM automations (HubSpot, Zoho, WhatsApp Business API), lead drop-off is practically eliminated.</p>
<hr/>
<h2>Scale Your Marketing ROI with Infynix Agency</h2>
<p>Ready to replace vanity reports with verified pipeline growth? Connect with our growth team in Dubai & Ajman.</p>
<p><a href="https://www.infynixsolutions.ae/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Schedule your marketing audit today →</a></p>`,
    summary: 'Discover why vanity metrics like clicks and impressions are costing UAE businesses valuable budget, and how revenue-focused attribution and bilingual SEO drive real ROI.',
    published: '2026-09-21T03:30:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T03:30:00.000-07:00',
    categories: ['Agency', 'UAE Business', 'SEO', 'Infynix Solutions'],
    author: 'Infynix',
    thumbnail: '/agency_marketing_uae.jpg',
    bloggerUrl: 'https://infynixsolutionsuae.blogspot.com',
  },
  {
    id: '6820194820193850202',
    slug: 'commercial-video-production-uae-cuts-cac-6820194820193850202',
    title: 'Commercial Video Production in the UAE: How Cinematic Media Cuts CAC',
    content: `<p>Consumer attention in the UAE has migrated entirely to short-form and high-fidelity video. Whether on Instagram Reels, LinkedIn, or TikTok, static image ads are increasingly ignored by decision-makers and high-net-worth consumers.</p>
<p>Yet many companies treat video as an afterthought—hiring one-off videographers with no understanding of brand narrative or conversion psychology.</p>
<hr/>
<h2>Why Generic Stock Imagery Destroys Brand Equity</h2>
<p>UAE buyers are discerning. Using generic stock videos of foreign skylines immediately signals that a business lacks authentic regional infrastructure. Authentic, locally shot production builds instant credibility in Dubai, Abu Dhabi, and across the Emirates.</p>
<h2>1. Native Vertical Video for Paid Social</h2>
<p>Producing cinematic vertical video optimized for TikTok and Meta feeds yields up to 3x higher retention. The key is hook-driven storytelling within the first 3 seconds, matched with authentic local voices.</p>
<h2>2. Executive & Founder Thought Leadership</h2>
<p>People buy from founders and leadership teams they trust. High-production podcast series, studio interviews, and documentary-style case studies elevate executives into industry authorities across the GCC.</p>
<h2>3. Repurposing Engine for Multi-Channel Dominance</h2>
<p>A single dedicated shoot day with Infynix Media produces 1 master brand film, 6 targeted social cutdowns, and dozens of high-resolution stills—maximizing your production investment across website, social, and sales collateral.</p>
<hr/>
<h2>Transform Your Visual Storytelling</h2>
<p>Equip your brand with studio-grade production and regional storytelling that turns viewers into paying clients.</p>
<p><a href="https://www.infynixsolutions.ae/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Book a video production briefing →</a></p>`,
    summary: 'Discover how cinematic video production, vertical social reels, and authentic regional storytelling dramatically lower customer acquisition costs in the UAE.',
    published: '2026-09-21T03:45:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T03:45:00.000-07:00',
    categories: ['Media', 'UAE Business', 'Video Production', 'Infynix Solutions'],
    author: 'Infynix',
    thumbnail: '/media_production_uae.jpg',
    bloggerUrl: 'https://infynixsolutionsuae.blogspot.com',
  },
  {
    id: '7930294810294820303',
    slug: 'engineering-for-conversion-why-uae-brands-need-custom-platforms-7930294810294820303',
    title: 'Engineering for Conversion: Why UAE Brands Need Custom Web Platforms Over Generic Templates',
    content: `<p>A beautiful design that loads slowly is an expensive liability. In the UAE, where mobile internet speeds are among the fastest in the world, users abandon websites that take longer than 2.5 seconds to render.</p>
<p>Yet the majority of enterprise websites in the region are burdened by bloated page builders, unmaintained WordPress plugins, and sluggish shared hosting.</p>
<hr/>
<h2>The Hidden Costs of Off-the-Shelf Templates</h2>
<p>Generic templates carry hundreds of unnecessary scripts, uncompressed assets, and outdated database queries. Every millisecond of latency directly slashes Google search rankings and degrades ad conversion rates.</p>
<h2>1. Sub-Second Architecture (React, Vite & SSR)</h2>
<p>By building on modern engineering stacks with pre-rendering and headless CMS infrastructure, pages load instantly across mobile networks. Zero layout shifts and perfect Core Web Vitals elevate organic search rankings.</p>
<h2>2. Custom API Integrations & Regional Gateways</h2>
<p>UAE businesses require seamless connectivity with payment gateways (Stripe, Telr, Network International), SMS providers, and custom ERPs. Bespoke engineering guarantees resilient uptime and automated synchronization.</p>
<h2>3. Enterprise Scalability & Cloud Security</h2>
<p>Whether handling seasonal traffic spikes during DSF (Dubai Shopping Festival) or scaling across international markets, scalable architectures guarantee that your digital storefront never collapses under load.</p>
<hr/>
<h2>Build Your Next-Generation Digital Platform</h2>
<p>Upgrade from sluggish website templates to high-velocity software engineering built for measurable commercial scale.</p>
<p><a href="https://www.infynixsolutions.ae/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Discuss your technical requirements with Infynix Development →</a></p>`,
    summary: 'Learn why bloated website templates hurt conversion rates and Google rankings, and why custom web engineering and sub-second performance are essential for UAE growth.',
    published: '2026-09-21T04:00:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T04:00:00.000-07:00',
    categories: ['Development', 'UAE Business', 'Web Engineering', 'Infynix Solutions'],
    author: 'Infynix',
    thumbnail: '/dev_engineering_uae.jpg',
    bloggerUrl: 'https://infynixsolutionsuae.blogspot.com',
  },
  {
    id: '8192039481920394850',
    slug: 'ai-automation-enterprise-crm-uae-8192039481920394850',
    title: 'AI Automation & Intelligent CRMs: How UAE Enterprises Eliminate Manual Work in 2026',
    content: `<p>Across the UAE's commercial hubs—from DIFC and Business Bay in Dubai to ADGM in Abu Dhabi—operations teams are spending hundreds of weekly hours on repetitive manual data entry, lead forwarding, and appointment scheduling.</p>
<p>In 2026, manual business operations are a competitive bottleneck. <strong>Forward-thinking UAE companies are deploying autonomous AI middleware and CRM automation to scale without ballooning headcount.</strong></p>
<hr/>
<h2>The Cost of Fragmented Business Tools</h2>
<p>A typical UAE enterprise operates between 4 to 8 disconnected software platforms: a website form, WhatsApp Business, an accounting suite, an email client, and an off-the-shelf CRM. When data fails to flow automatically between these channels, deals stall and customer inquiries go cold.</p>
<h2>1. Autonomous WhatsApp Business API Workflows</h2>
<p>In the GCC, WhatsApp is the primary business communication channel. Infynix Development builds intelligent WhatsApp conversational bots integrated directly into core CRMs (Zoho, HubSpot, Salesforce). Inquiries receive instant qualification, pricing estimations, and calendar bookings in both Arabic and English 24/7.</p>
<h2>2. AI-Powered Document Parsing & Invoicing</h2>
<p>Extracting data from trade licenses, supplier invoices, and customs documentation used to require dedicated administrative staff. Custom AI models process unstructured PDFs and sync line items directly with regional accounting platforms (such as Zoho Books or Xero) within seconds.</p>
<h2>3. Unified Executive Dashboards</h2>
<p>Instead of compiling weekly spreadsheets, leadership teams access real-time BI dashboards that synthesize marketing spend, conversion velocity, and operational backlog into a single pane of glass.</p>
<hr/>
<h2>Automate Your Enterprise Workflows</h2>
<p>Explore how Infynix Development engineers custom AI workflows and system integrations built for regional scale.</p>
<p><a href="https://www.infynixsolutions.ae/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Schedule an enterprise automation consultation →</a></p>`,
    summary: 'Discover how UAE enterprises in Dubai and Abu Dhabi use custom AI middleware, automated WhatsApp workflows, and intelligent CRM pipelines to cut administrative overhead by 70%.',
    published: '2026-09-21T04:15:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T04:15:00.000-07:00',
    categories: ['Development', 'AI Automation', 'UAE Business', 'Infynix Solutions'],
    author: 'Infynix',
    thumbnail: '/ai_automation_uae.jpg',
    bloggerUrl: 'https://infynixsolutionsuae.blogspot.com',
  },
  {
    id: '9283746192837461928',
    slug: 'high-ticket-lead-gen-dubai-luxury-real-estate-9283746192837461928',
    title: 'High-Ticket Lead Generation in Dubai Real Estate & Luxury Services: The Omnichannel Blueprint',
    content: `<p>Securing high-ticket clients in Dubai—whether for off-plan luxury real estate developments, private wealth advisory, or yacht charters—requires a completely different playbook than standard consumer lead generation.</p>
<p>High-net-worth individuals (HNWIs) in the UAE do not fill out generic social media lead forms. <strong>They demand high-production brand authority, exclusive access, and seamless digital concierge experiences.</strong></p>
<hr/>
<h2>The High-Ticket Acquisition Funnel</h2>
<p>Standard lead funnels fail in the UAE luxury market because they look cheap. Low-resolution creatives and basic landing pages immediately destroy the prestige required to command million-dirham investments.</p>
<h2>1. Cinematic Media as a Trust Accelerator</h2>
<p>Infynix Media captures architectural grandeur and executive authority through cinema-grade aerial cinematography, interior lighting design, and documentary-style founder interviews. When high-value prospects watch your brand film, their trust barrier drops instantly.</p>
<h2>2. Micro-Targeted Account-Based Marketing (ABM)</h2>
<p>Using proprietary audience layering across LinkedIn Enterprise, Meta VIP targeting, and localized Google search keywords, our Agency team targets decision-makers and international investors entering the UAE ecosystem.</p>
<h2>3. VIP Digital Concierge Landing Architecture</h2>
<p>Rather than dumping traffic onto a crowded corporate home page, each campaign directs prospects to dedicated, lightning-fast private access portals with bespoke video walkthroughs, gated financial prospectuses, and direct calendar reservation options.</p>
<hr/>
<h2>Attract High-Value Clients Across the UAE</h2>
<p>Discover how Infynix combines Media production with Agency precision to engineer premium client acquisition pipelines.</p>
<p><a href="https://www.infynixsolutions.ae/contact" style="color: #007A5E; font-weight: bold; text-decoration: underline;">Request a private growth strategy briefing →</a></p>`,
    summary: 'Learn why generic lead forms fail for luxury real estate and wealth services in Dubai, and how cinematic storytelling paired with hyper-targeted paid media captures ultra-high-net-worth clients.',
    published: '2026-09-21T04:30:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T04:30:00.000-07:00',
    categories: ['Agency', 'Media', 'UAE Business', 'Lead Generation', 'Infynix Solutions'],
    author: 'Infynix',
    thumbnail: '/lead_generation_uae.jpg',
    bloggerUrl: 'https://infynixsolutionsuae.blogspot.com',
  },
];

let cachedPosts = null;

// Parse standard Blogger feed entry
const parseEntries = (entries) => {
  return entries.map((entry) => {
    const fullId = entry.id?.$t || '';
    const id = extractPostId(fullId);
    const title = entry.title?.$t || 'Untitled Post';
    const content = entry.content?.$t || '';
    const published = entry.published?.$t || '';
    const updated = entry.updated?.$t || published;

    const categories = (entry.category || [])
      .map((cat) => {
        if (typeof cat === 'string') return cat;
        return cat.term || '';
      })
      .filter(Boolean);

    const alternateLink = (entry.link || []).find(
      (l) => l.rel === 'alternate' && l.type === 'text/html'
    )?.href || '';

    const authorName = entry.author?.[0]?.name?.$t || 'Infynix';
    const thumbnail = extractThumbnail(content, categories, title);
    const summary = createSnippet(content, 180);
    const slug = generateSlug(title, id);

    return {
      id,
      slug,
      title,
      content,
      summary,
      published,
      formattedDate: formatBloggerDate(published),
      updated,
      categories,
      author: authorName,
      thumbnail,
      bloggerUrl: alternateLink,
    };
  });
};

export const fetchBloggerPosts = async (forceRefresh = false) => {
  if (!forceRefresh && cachedPosts && cachedPosts.length > 0) {
    return cachedPosts;
  }

  // If running in SSR / Node environment where window is undefined
  if (typeof window === 'undefined') {
    return INITIAL_POSTS;
  }

  return new Promise((resolve) => {
    const callbackName = `bloggerCallback_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const timer = setTimeout(() => {
      cleanup();
      cachedPosts = cachedPosts || INITIAL_POSTS;
      resolve(cachedPosts);
    }, 4000);

    const cleanup = () => {
      clearTimeout(timer);
      try {
        delete window[callbackName];
        const script = document.getElementById(callbackName);
        if (script) script.remove();
      } catch {
        // ignore cleanup errors
      }
    };

    window[callbackName] = (data) => {
      cleanup();
      try {
        const entries = data?.feed?.entry || [];
        if (entries.length > 0) {
          const parsed = parseEntries(entries);
          // Combine live Blogger posts with initial posts so categories are never empty
          const parsedTitles = new Set(parsed.map((p) => p.title.toLowerCase().trim()));
          const remainingInitial = INITIAL_POSTS.filter(
            (p) => !parsedTitles.has(p.title.toLowerCase().trim())
          );
          const combined = [...parsed, ...remainingInitial];
          cachedPosts = combined;
          resolve(combined);
          return;
        }
      } catch (err) {
        console.warn('Error parsing Blogger JSONP feed:', err);
      }
      cachedPosts = cachedPosts || INITIAL_POSTS;
      resolve(cachedPosts);
    };

    try {
      const script = document.createElement('script');
      script.id = callbackName;
      script.src = `${BLOGGER_URL}/feeds/posts/default?alt=json-in-script&callback=${callbackName}`;
      script.onerror = () => {
        cleanup();
        cachedPosts = cachedPosts || INITIAL_POSTS;
        resolve(cachedPosts);
      };
      document.head.appendChild(script);
    } catch {
      cleanup();
      cachedPosts = cachedPosts || INITIAL_POSTS;
      resolve(cachedPosts);
    }
  });
};
