import { useState, useEffect } from "react";
import "./Contact.css";
import kochiImage from "../assets/kochi-office.jpg";

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
        city: "London",
        label: "UK Headquarters",
        desc: "1-75 Shelton St, London, WC2H 9JQ. Our global executive headquarters directing international operations, technology consulting, and enterprise client strategy across European and American regions.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80",
    },
    {
        city: "Dubai",
        label: "UAE Office",
        desc: "Business Bay, Dubai, UAE. Our strategic regional office managing partnerships, cloud growth projects, and AI system installations across the Middle East and GCC countries.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80",
    },
    {
        city: "Kochi",
        label: "Kerala Office",
        desc: "7th Floor, National Pearl Star Building, Edappally, Kochi, Kerala 682024. Our core engineering powerhouse and development center delivering robust backend growth architecture.",
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
            {/* ── HERO SECTION ── */}
            <section className="contact-form-section">
                <div className="contact-form-section-bg-text">CONTACT</div>
                
                <div className="contact-hero-top-inner" style={{position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%'}}>
                    <div className="contact-header-wrap" style={{textAlign: 'center', marginBottom: '2rem', marginTop: '2.7rem'}}>
                        <h1 className="contact-headline-dark">
                            Let's work together.
                        </h1>
                        <p className="contact-italic-dark" style={{fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: "300", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#00e6b0", marginBottom: "1rem"}}>Tell us what you need.</p>
                        <p className="contact-subtitle-dark" style={{marginBottom: "0.5rem", maxWidth: '600px', margin: '0 auto 0.5rem'}}>
                            Send us a message to see how our tools can help your business.
                        </p>
                        <p className="contact-subtitle-dark" style={{marginBottom: "0.5rem", maxWidth: '600px', margin: '0 auto 0.5rem'}}>
                            Whether you need a fast website, smart AI, or better marketing, we can help.
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
                                <p className="sidebar-query-title">Sales-Related Queries</p>
                                <a href="mailto:office@infynixsolutions.ae" className="sidebar-query-val">office@infynixsolutions.ae</a>
                            </div>
                            <div className="sidebar-divider" />
                            <div className="sidebar-query-block">
                                <p className="sidebar-query-title">HR Related Queries</p>
                                <p className="sidebar-query-val">+91 99959 11140</p>
                                <a href="mailto:hr@infynixsolutions.ae" className="sidebar-query-val">hr@infynixsolutions.ae</a>
                            </div>
                            <div className="sidebar-divider" />
                            <div className="sidebar-query-block">
                                <p className="sidebar-query-title">General Queries &amp; Support</p>
                                <a href="mailto:info@infynixsolutions.ae" className="sidebar-query-val">info@infynixsolutions.ae</a>
                                <a href="#" className="sidebar-careers-btn">
                                    Careers <ArrowIcon />
                                </a>
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