import { useState, useEffect } from "react";
import Seo from "../seo/Seo";
import { organizationSchema, breadcrumbSchema } from "../seo/schema";
import "./Contact.css";
import kochiImage from "../assets/kochi-office.jpg";
import uaeOfficeImage from "../assets/lp/office.webp";

const ArrowIcon = () => (
    <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
        <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const LocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
    </svg>
);

const offices = [
    {
        city: "UAE",
        label: "UAE Office",
        desc: "C1 Building - Office C1 1F-SF6540, Free Zone, Al Butain, Ajman, United Arab Emirates. Our client-facing and strategy headquarters working directly with UAE businesses on growth engineering, web development, and AI automation.",
        image: uaeOfficeImage,
        mapUrl: "https://maps.google.com/?q=C1+Building,+Free+Zone,+Al+Butain,+Ajman,+UAE"
    },
    {
        city: "London",
        label: "UK Office",
        desc: "68 Endsleigh Gardens, Ilford IG1 3EG, United Kingdom. Our European delivery and consulting center directing international operations and strategy.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80",
        mapUrl: "https://maps.google.com/?q=68+Endsleigh+Gardens,+Ilford+IG1+3EG,+United+Kingdom"
    },
    {
        city: "Kochi",
        label: "India Office",
        desc: "3rd Floor, Oberon Mall, Padivattom, Edappally, Ernakulam, Kochi, Kerala 682024. Our core engineering powerhouse delivering robust web, cloud, and AI systems.",
        image: kochiImage,
        mapUrl: "https://share.google/KX27eRrKxncrDFibN"
    },
];

const services = [
    "Commerce Transformation",
    "AI & Data Intelligence",
    "Cloud & Platform Engineering",
    "Experience Design",
    "Managed Services",
    "Other",
];

export default function Contact() {
    const [activeOffice, setActiveOffice] = useState(0);
    const [formData, setFormData] = useState({
        name: "", email: "", service: "", message: "",
    });
    const [serviceOpen, setServiceOpen] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleChange = (key, val) =>
        setFormData((prev) => ({ ...prev, [key]: val }));

    return (
        <div className="contact-page">
            <Seo
                title="Contact Infynix | Dubai Growth Engineering Agency"
                description="Get in touch with Infynix's Dubai office to discuss web development, AI automation, or performance marketing for your UAE business."
                path="/contact"
                ogType="website"
                schema={[
                    organizationSchema(),
                    breadcrumbSchema([
                        { name: 'Home', path: '/' },
                        { name: 'Contact', path: '/contact' },
                    ]),
                ]}
            />
            {/* ── HERO SECTION ── */}
            <section className="contact-form-section">
                <div className="contact-form-section-bg-text">CONTACT</div>
                
                <div className="contact-hero-top-inner" style={{position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%'}}>
                    <div className="contact-header-wrap" style={{textAlign: 'center', marginBottom: '2rem', marginTop: '2.7rem'}}>
                        <h1 className="contact-headline-dark">
                            Ready to Engineer Your Growth Infrastructure?
                        </h1>
                        <p className="contact-italic-dark" style={{fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: "300", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#00e6b0", marginBottom: "1rem"}}>Partner with our Dubai team.</p>
                        <p className="contact-subtitle-dark" style={{marginBottom: "0.5rem", maxWidth: '600px', margin: '0 auto 0.5rem'}}>
                            Book a discovery call to discuss web development, AI automation, or performance marketing for your UAE business.
                        </p>
                        <p className="contact-subtitle-dark" style={{marginBottom: "2rem", maxWidth: '600px', margin: '0 auto 2rem'}}>
                            We will reply within 24 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CONTACT FORM & LINKS SECTION ── */}
            <section className="contact-hero" style={{paddingTop: '4rem'}}>
                <div className="contact-hero-inner">
                    {/* LEFT (Just the form) */}
                    <div className="contact-left" style={{paddingTop: '0'}}>
                        <div className="contact-form" style={{marginTop: '0'}}>
                            <div className="cf-field">
                                <label className="cf-label">Name</label>
                                <input
                                    className="cf-input"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                />
                            </div>
                            <div className="cf-field">
                                <label className="cf-label">Email</label>
                                <input
                                    className="cf-input"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                />
                            </div>

                            {/* Custom dropdown */}
                            <div className="cf-field cf-dropdown-wrap">
                                <button
                                    className="cf-dropdown-btn"
                                    onClick={() => setServiceOpen((o) => !o)}
                                    type="button"
                                >
                                    <span className={formData.service ? "cf-selected" : "cf-placeholder"}>
                                        {formData.service || "What services do you need?"}
                                    </span>
                                    <span className={`cf-chevron ${serviceOpen ? "open" : ""}`}>∨</span>
                                </button>
                                {serviceOpen && (
                                    <ul className="cf-dropdown-list">
                                        {services.map((s) => (
                                            <li key={s}>
                                                <button
                                                    className="cf-dropdown-item"
                                                    onClick={() => { handleChange("service", s); setServiceOpen(false); }}
                                                    type="button"
                                                >
                                                    {s}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="cf-field">
                                <label className="cf-label">Let us know how we can help solve a problem or a challenge</label>
                                <input
                                    className="cf-input"
                                    type="text"
                                    value={formData.message}
                                    onChange={(e) => handleChange("message", e.target.value)}
                                />
                            </div>

                            <button className="cf-submit" type="button">
                                Submit <ArrowIcon />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="contact-sidebar" style={{marginTop: '0'}}>
                        {/* Queries card */}
                        <div className="sidebar-card">
                            <div className="sidebar-query-block">
                                <p className="sidebar-query-title">Sales &amp; Partnerships</p>
                                <a href="mailto:office@infynixsolutions.ae" className="sidebar-query-val">office@infynixsolutions.ae</a>
                            </div>
                            <div className="sidebar-divider" />
                            <div className="sidebar-query-block">
                                <p className="sidebar-query-title">Direct Contact Numbers</p>
                                <a href="tel:+971542575702" className="sidebar-query-val">UAE: +971 54 257 5702</a>
                                <a href="tel:+919995911173" className="sidebar-query-val">India: +91 99959 11173</a>
                                <a href="tel:+447436670553" className="sidebar-query-val">UK: +44 7436 670553</a>
                            </div>
                            <div className="sidebar-divider" />
                            <div className="sidebar-query-block">
                                <p className="sidebar-query-title">General Queries &amp; Support</p>
                                <a href="mailto:office@infynixsolutions.ae" className="sidebar-query-val">office@infynixsolutions.ae</a>
                                <a href="mailto:careers@infynixsolutions.ae" className="sidebar-careers-btn">
                                    Careers <ArrowIcon />
                                </a>
                            </div>
                            <div className="sidebar-divider" />
                            <div className="sidebar-query-block">
                                <p className="sidebar-query-title">Follow Us</p>
                                <div className="contact-socials">
                                    <a
                                        href="https://www.linkedin.com/company/infynix-solutions-uae/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="contact-social-link"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/infynixsolutions.ae/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="contact-social-link"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/people/Infynix-Solutions-UAE/61584754534164/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="contact-social-link"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Discovery call card */}
                        <div className="sidebar-card sidebar-green">
                            <p className="sidebar-green-sub">Would you rather have a call with us?</p>
                            <p className="sidebar-green-title">
                                Book a free discovery call to discuss your project.
                            </p>
                            <a href="#" className="sidebar-green-btn">
                                Book a call <ArrowIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR OFFICES ── */}
            <section className="offices-section">
                <h2 className="offices-heading">Our Offices</h2>

                <div className="offices-layout">
                    {/* Image */}
                    <div className="offices-img-wrap">
                        <img
                            key={activeOffice}
                            src={offices[activeOffice].image}
                            alt={offices[activeOffice].city}
                            className="offices-img"
                        />
                    </div>

                    {/* Right info + pills */}
                    <div className="offices-info">
                        <div className="offices-city-row">
                            <h3 className="offices-city">{offices[activeOffice].city}</h3>
                        </div>
                        <div className="offices-label-row">
                            <span className="offices-label">{offices[activeOffice].label}</span>
                            {offices[activeOffice].mapUrl ? (
                                <a href={offices[activeOffice].mapUrl} target="_blank" rel="noreferrer" className="offices-map-btn" title="View on map">
                                    <LocationIcon />
                                </a>
                            ) : (
                                <button className="offices-map-btn" title="View on map">
                                    <LocationIcon />
                                </button>
                            )}
                        </div>
                        <p className="offices-desc" style={{ marginTop: "1rem", marginBottom: "2rem", color: "#666", fontSize: "0.85rem", lineHeight: "1.6", maxWidth: "420px" }}>
                            {offices[activeOffice].desc}
                        </p>

                        {/* Pills grid */}
                        <div className="offices-pills">
                            {offices.map((o, i) => (
                                <button
                                    key={o.city}
                                    className={`offices-pill ${i === activeOffice ? "active" : ""}`}
                                    onClick={() => setActiveOffice(i)}
                                >
                                    {o.city}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}