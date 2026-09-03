import { useState } from 'react';
import { useIxReveal } from './WhoWeAre';

const RiversideChatSection = () => {
  useIxReveal();
  const [form, setForm] = useState({
    name: '',
    inquiryType: '',
    email: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest, ${form.name}! We will get in touch with you shortly.`);
    setForm({ name: '', inquiryType: '', email: '' });
  };

  return (
    <section id="riverside-chat" style={{ padding: 'clamp(60px, 10vw, 120px) 0', background: 'var(--ix-off)', position: 'relative' }}>
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40vw', height: '100%', background: 'linear-gradient(to left, rgba(0,122,94,0.05), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
        
        {/* Left Side: Video Preview */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <span className="ix-eyebrow" data-aos-delay="100" data-aos="fade-up">Riverside Chat | Episode 3</span>
            <h2 data-aos-delay="200" data-aos="fade-up" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--ix-dark)', lineHeight: 1.2, margin: 0 }}>
              Internet of Intelligence and the <span style={{ color: 'var(--ix-primary)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Future</span>
            </h2>
          </div>
          
          <div data-aos-delay="300" data-aos="fade-up" style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,122,94,0.1)', cursor: 'pointer', group: 'video' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#000' }}>
              <img src="/riverside_chat_cover.png" alt="Riverside Chat Podcast" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              
              {/* Play Button */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', background: 'rgba(0,122,94,0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'}>
                <svg viewBox="0 0 24 24" width="32" height="32" fill="#fff" style={{ marginLeft: '4px' }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* YouTube Label */}
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '8px 16px', borderRadius: '100px', color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div style={{ flex: '1 1 400px', background: '#fff', padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid var(--ix-border-n)' }} data-aos-delay="200" data-aos="fade-up">
          <h2 style={{ fontSize: '1.5rem', color: 'var(--ix-dark)', marginBottom: '1rem', lineHeight: 1.4 }}>
            We don't like anything artificial.<br />
            So, we created <span style={{ color: 'var(--ix-primary)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>'Neural Intelligence'.</span>
          </h2>
          <p style={{ color: 'var(--ix-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            To stay ahead of the curve. To be part of the future tech. Share your interest, and we'll chat!
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ix-dark)' }}>Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--ix-border-n)', background: '#f9fafb', fontSize: '1rem', transition: 'border-color 0.3s ease, background 0.3s ease' }} onFocus={(e) => { e.target.style.borderColor = 'var(--ix-primary)'; e.target.style.background = '#fff'; }} onBlur={(e) => { e.target.style.borderColor = 'var(--ix-border-n)'; e.target.style.background = '#f9fafb'; }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
              <label htmlFor="inquiryType" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ix-dark)' }}>Inquiry Type</label>
              <select id="inquiryType" name="inquiryType" value={form.inquiryType} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--ix-border-n)', background: '#f9fafb', fontSize: '1rem', appearance: 'none', cursor: 'pointer', transition: 'border-color 0.3s ease, background 0.3s ease' }} onFocus={(e) => { e.target.style.borderColor = 'var(--ix-primary)'; e.target.style.background = '#fff'; }} onBlur={(e) => { e.target.style.borderColor = 'var(--ix-border-n)'; e.target.style.background = '#f9fafb'; }}>
                <option value="" disabled>--Select your Inquiry Type--</option>
                <option value="business">Business Partnership</option>
                <option value="technical">Technical Consultation</option>
                <option value="general">General Inquiry</option>
              </select>
              <div style={{ position: 'absolute', right: '1rem', top: '2.5rem', pointerEvents: 'none', color: 'var(--ix-muted)', transform: 'rotate(90deg)' }}>›</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ix-dark)' }}>Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--ix-border-n)', background: '#f9fafb', fontSize: '1rem', transition: 'border-color 0.3s ease, background 0.3s ease' }} onFocus={(e) => { e.target.style.borderColor = 'var(--ix-primary)'; e.target.style.background = '#fff'; }} onBlur={(e) => { e.target.style.borderColor = 'var(--ix-border-n)'; e.target.style.background = '#f9fafb'; }} />
            </div>

            <button type="submit" className="ix-btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RiversideChatSection;
