// WhoWeAre.jsx  —  About Page — Infynix "Digital Momentum" Design
// Primary: #007A5E | Selective dark sections only

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./InfynixDesign.css";
import storyVideo from "../assets/video.mp4";
import teamImg from '../assets/team.png';

export function useIxReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".ix-reveal, .ix-reveal-left, .ix-reveal-right, .ix-reveal-scale");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("ix-visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const CULTURE_CARDS = [
  { title: "Precision", icon: "⬡", text: "We write clean code. We test everything carefully. Your systems will not break under pressure." },
  { title: "Velocity", icon: "△", text: "We build things fast but we build them right. We add new features quickly without causing errors." },
  { title: "Ownership", icon: "◎", text: "We treat your project like it is ours. We find problems early and make sure everything runs smoothly." },
  { title: "Security", icon: "⬛", text: "We keep your data safe. We use strong security tools to stop attacks and protect your business." },
];

const STATS = [
  { num: "900+", label: "Rapidly growing tribe" },
  { num: "7×", label: "Great Place to Work award winner" },
  { num: "90%", label: "Growth from referrals" },
  { num: "150+", label: "Enterprise systems shipped" },
];

const METHODOLOGY = [
  { title: "1. Review & Plan", desc: "We look at your current setup. We find what is slowing you down and plan how to fix it.", icon: "⬡" },
  { title: "2. Set Up Tracking", desc: "We add clear tracking tools. You will know exactly where your money comes from.", icon: "◎" },
  { title: "3. Build Apps & Sites", desc: "We build fast websites and apps. They are designed to get you more sales.", icon: "△" },
  { title: "4. Drive Traffic", desc: "We run smart ads and use SEO to bring ready-to-buy customers to your site.", icon: "◇" },
  { title: "5. Automate Work", desc: "We use AI and smart tools to connect your software. This stops manual daily work.", icon: "⬛" },
];

const Arrow = () => (
  <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WhoWeAre() {
  useIxReveal();

  return (
    <div style={{ background: "#fff" }}>

      {/* ══ HERO — Zendesk Replica ══ */}
      <section className="solutions-hero-section" style={{
        background: '#ffffff',
        minHeight: '85vh',
        display: 'grid',
        alignItems: 'center',
        position: 'relative',
        padding: '120px var(--section-px) 80px',
        gap: '4rem',
        overflow: 'hidden'
      }}>
        {/* Radial ambient glow */}
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '0',
          width: '100%',
          height: '250px',
          background: 'radial-gradient(ellipse at 80% 50%, rgba(0, 122, 94, 0.7) 0%, rgba(0, 122, 93, 0.13) 55%, rgba(255,255,255,0) 85%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        {/* Left */}
        <div style={{ position: 'relative', zIndex: 1 }} data-aos="fade-up">
          <h1 style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 500, fontSize: 'clamp(2.3rem, 4.3vw,3.8rem)', color: '#111', lineHeight: 1.1, marginTop: '0', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Built for Real Growth.
          </h1>
          <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1rem', color: '#111', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '520px' }}>
            Most agencies give you one piece of the puzzle. We give you the whole picture. We are a Growth Engineering company.
          </p>
          <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1.1rem', color: '#111', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '520px' }}>
            We combine custom software, clear data, and smart marketing. We build systems that get real results.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#007A5E', color: '#ffffffff', padding: '0.9rem 1.8rem', borderRadius: '40px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background = '#96c200'} onMouseLeave={e => e.currentTarget.style.background = '#a7d600'}>
              Try it for free
            </Link>
            <a href="#story" style={{ background: '#fff', border: '1px solid #ccc', color: '#111', padding: '0.9rem 1.8rem', borderRadius: '40px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'border-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#999'} onMouseLeave={e => e.currentTarget.style.borderColor = '#ccc'}>
              View demo
            </a>
          </div>
        </div>

        {/* Right — Image */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="200">
          <img src="https://web-assets.zendesk.com/is/image/zendesk/Hero-4?fmt=avif-alpha&qlt=65" alt="Who We Are" style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '40px', objectFit: 'cover', aspectRatio: '1/1', }} />
        </div>
      </section>

      {/* ══ WHAT WE DELIVER — white ══ */}
      <section className="ix-section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "clamp(2rem, 5vw, 4rem)" }}>
            <span className="ix-teal-bar" />
            <h2 data-aos="fade-up" style={{ fontFamily: "var(--ix-font-display)", fontWeight: 600, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "var(--ix-text)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Our<br />
              <em style={{ fontFamily: "var(--ix-font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--ix-primary)" }}>Methodology</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1px", background: "var(--ix-border-n)", border: "1px solid var(--ix-border-n)", borderRadius: 20, overflow: "hidden" }}>
            {METHODOLOGY.map((item, i) => (
              <div
                key={item.title}
                className={`-scale ix-d${Math.min(i + 1, 7)} data-aos="fade-up"`}
                style={{ background: "#fff", padding: "2.2rem", transition: "background 0.3s", cursor: "default" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--ix-primary)";
                  e.currentTarget.querySelectorAll("[data-c]").forEach(el => el.style.color = el.dataset.hc);
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.querySelectorAll("[data-c]").forEach(el => el.style.color = el.dataset.dc);
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--ix-primary)", transition: "color 0.3s" }}>{item.icon}</div>
                <h3 data-c="1" data-dc="var(--ix-text)" data-hc="#fff" style={{ fontFamily: "var(--ix-font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--ix-text)", marginBottom: "0.6rem", transition: "color 0.3s" }}>{item.title}</h3>
                <p data-c="1" data-dc="var(--ix-muted)" data-hc="rgba(255,255,255,0.7)" style={{ fontFamily: "var(--ix-font-body)", fontSize: "0.87rem", color: "var(--ix-muted)", lineHeight: 1.7, transition: "color 0.3s" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STORY + VIDEO — light teal bg + dark right ══ */}
      <section id="story" className="about-story-section">
        {/* Left — teal bg */}
        <div style={{
          background: "var(--ix-primary-bg)",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(56px, 8vw, 100px) var(--section-px)",
          borderRight: "1px solid var(--ix-border)",
        }}>
          <span className="ix-eyebrow" data-aos="fade-up">Our Story</span>
          <h2 data-aos-delay="100" data-aos="fade-up" style={{ fontFamily: "var(--ix-font-display)", fontWeight: 600, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", lineHeight: 1.05, color: "var(--ix-text)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
            How We<br />
            <em style={{ fontFamily: "var(--ix-font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--ix-primary)" }}>Started</em>
          </h2>
          <p data-aos-delay="200" data-aos="fade-up" style={{ fontFamily: "var(--ix-font-body)", fontSize: "0.97rem", color: "var(--ix-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
            We saw a big problem: businesses had great ideas but terrible tech. Marketing was not talking to sales. Websites were slow. We started a team to fix that.
          </p>
          <p data-aos-delay="300" data-aos="fade-up" style={{ fontFamily: "var(--ix-font-body)", fontSize: "0.97rem", color: "var(--ix-muted)", lineHeight: 1.8 }}>
            Today, we are a global partner for growing companies. We build the websites, apps, and marketing systems that actually help you sell more.
          </p>
        </div>

        {/* Right — video */}
        <div style={{ position: "relative", overflow: "hidden", background: "var(--ix-dark)" }}>
          <video src={storyVideo} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.85 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--ix-primary-bg) 0%, transparent 25%)" }} />
        </div>
      </section>

      {/* ══ STATS STRIP — exact design ══ */}
      <section className="ix-section" style={{ background: "var(--ix-primary-bg)", overflow: 'hidden', position: 'relative' }}>


        <div style={{ maxWidth: 1400, margin: "0 auto", position: 'relative', zIndex: 1, padding: '0 2rem' }}>
          <div className="about-stats-grid">

            {/* Left Column */}
            <div data-aos="fade-right">
              <div style={{ fontSize: '0.75rem', color: 'var(--ix-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, borderBottom: '2px solid var(--ix-text)', paddingBottom: '0.5rem', marginBottom: '2.5rem', display: 'inline-block' }}>
                OUR SCALE
              </div>
              <h2 style={{ fontFamily: "var(--ix-font-display)", fontWeight: 600, fontSize: "clamp(3rem, 5vw, 4.5rem)", color: "var(--ix-text)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 1.5rem" }}>
                Impact by<br />
                <em style={{ fontFamily: "var(--ix-font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--ix-primary)" }}>the Numbers</em>
              </h2>
              <p style={{ fontFamily: "var(--ix-font-body)", fontSize: "1.1rem", color: "var(--ix-text)", lineHeight: 1.6, maxWidth: "400px", marginBottom: "3rem" }}>
                Engineering high-performance growth for the world's most ambitious brands.
              </p>

              <div style={{ borderRadius: '16px', overflow: 'hidden', filter: 'grayscale(100%) opacity(80%)' }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team Collaboration" style={{ width: '100%', display: 'block', objectFit: 'cover', height: '280px' }} />
              </div>

            </div>

            {/* Right Column */}
            <div data-aos="fade-left">
              {/* Stat Cards */}
              <div className="about-stats-cards">
                {[
                  { num: "900+", label: "CLIENTS SERVED" },
                  { num: "7x", label: "GROWTH MULTIPLIER" },
                  { num: "90%", label: "RETENTION RATE" },
                  { num: "150+", label: "ENGINEERS" },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#fff', padding: '2.5rem 1.8rem 2rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--ix-muted)', marginBottom: '3.5rem', fontWeight: 600 }}>0{i + 1}</span>
                    <div style={{ fontSize: 'clamp(1.8rem, 2.7vw, 2.8rem)', fontWeight: 800, color: 'var(--ix-primary)', marginBottom: '0.5rem', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ix-text)', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Card */}
              <div style={{ background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ix-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '0.2rem' }}>
                    <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
                    <path d="M16 7H22V13" />
                  </svg>
                  <div>
                    <h3 style={{ fontFamily: 'var(--ix-font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--ix-primary)', marginBottom: '0.5rem' }}>Scale your engineering team today</h3>
                    <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '.9rem', color: 'var(--ix-muted)', margin: 0, maxWidth: '400px', lineHeight: 1.6 }}>We provide the technical backbone for rapid-growth tech ecosystems.</p>
                  </div>
                </div>

                <Link to="/case-studies" style={{ textDecoration: 'none', color: 'var(--ix-text)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', borderBottom: '1.5px solid var(--ix-text)', paddingBottom: '0.2rem' }}>
                  EXPLORE CASE STUDIES
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ TEAM PHOTOS — light teal bg ══ */}
      {/* <section className="ix-section" style={{ background: "var(--ix-primary-bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="ix-teal-bar" />
          <h2 data-aos="fade-up" style={{ fontFamily: "var(--ix-font-display)", fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "var(--ix-text)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
            Get to Know<br />
            <em style={{ fontFamily: "var(--ix-font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--ix-primary)" }}>the People Behind It</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <div className="-left" data-aos="fade-up" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "3/4" }}>
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" alt="Infynix team leader" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div className="-right" data-aos="fade-up" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "16/9" }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Infynix engineering team" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>

          <p data-aos="fade-up" style={{ fontFamily: "var(--ix-font-body)", fontSize: "1.05rem", color: "var(--ix-muted)", lineHeight: 1.8, maxWidth: 700, marginBottom: "2rem" }}>
            We foster an environment of high ownership, uniting senior engineers and creative thinkers to design and deploy resilient digital systems.
          </p>

          <div data-aos-delay="100" data-aos="fade-up" style={{ borderRadius: 20, overflow: "hidden", height: "clamp(240px, 40vw, 480px)" }}>
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80" alt="Infynix full team" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section> */}

      {/* ══ CULTURE CARDS — white ══ */}
      <section className="ix-section" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="ix-teal-bar" />
          <h2 data-aos="fade-up" style={{ fontFamily: "var(--ix-font-display)", fontWeight: 600, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "var(--ix-text)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "clamp(2rem, 5vw, 4rem)" }}>
            Culture that<br />
            <em style={{ fontFamily: "var(--ix-font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--ix-primary)" }}>Drives Excellence</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {CULTURE_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`ix-d${Math.min(i + 1, 7)} data-aos="fade-up"`}
                style={{ background: "var(--ix-primary-bg)", border: "1px solid var(--ix-border)", borderRadius: 20, padding: "2.2rem", transition: "transform 0.3s, box-shadow 0.3s, background 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,122,94,0.12)"; e.currentTarget.style.background = "var(--ix-primary)"; e.currentTarget.querySelectorAll("[data-cx]").forEach(el => el.style.color = el.dataset.hx); }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.background = "var(--ix-primary-bg)"; e.currentTarget.querySelectorAll("[data-cx]").forEach(el => el.style.color = el.dataset.dx); }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: "1.2rem", color: "var(--ix-primary)", transition: "color 0.3s" }}>{card.icon}</div>
                <h3 data-cx="1" data-dx="var(--ix-text)" data-hx="#fff" style={{ fontFamily: "var(--ix-font-display)", fontWeight: 800, fontSize: "1.15rem", color: "var(--ix-text)", marginBottom: "0.8rem", transition: "color 0.3s" }}>{card.title}</h3>
                <p data-cx="1" data-dx="var(--ix-muted)" data-hx="rgba(255,255,255,0.7)" style={{ fontFamily: "var(--ix-font-body)", fontSize: "0.87rem", color: "var(--ix-muted)", lineHeight: 1.75, transition: "color 0.3s" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GLOBAL STATEMENT — teal ══ */}
      <section style={{ background: "var(--ix-primary)", padding: "clamp(64px, 10vw, 120px) var(--section-px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p data-aos="fade-up" style={{ fontFamily: "var(--ix-font-display)", fontWeight: 600, fontSize: "clamp(1.8rem, 4.4vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "#fff" }}>
            Partnering with leading brands to deploy scalable growth systems and next-generation AI security solutions —{" "}
            <em style={{ fontFamily: "var(--ix-font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--ix-primary-mid)" }}>globally.</em>
          </p>
        </div>
      </section>

      {/* ══ CTA — dark teal ══ */}
      <section className="ix-section" style={{ background: "var(--ix-dark)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="ix-eyebrow ix-eyebrow--light" data-aos="fade-up" style={{ justifyContent: "center" }}>Let's Build Together</span>
          <h2 data-aos-delay="100" data-aos="fade-up" style={{ fontFamily: "var(--ix-font-display)", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, color: "#fff", letterSpacing: "-0.025em", marginBottom: "1.2rem" }}>
            Interested in<br />
            <em style={{ fontFamily: "var(--ix-font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--ix-primary-lt)" }}>partnering with us?</em>
          </h2>
          <p data-aos-delay="200" data-aos="fade-up" style={{ fontFamily: "var(--ix-font-body)", fontSize: "0.97rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Whether you're scaling a startup or transforming an enterprise, Infynix engineers your path to sustainable growth.
          </p>
          <div data-aos-delay="300" data-aos="fade-up" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/contact" className="ix-btn-primary">Book a Systems Audit ↗</Link>
            <Link to="/growth-engineering" className="ix-btn-outline-wh">Discover Growth Engineering</Link>
          </div>
        </div>
      </section>

    </div>
  );
}