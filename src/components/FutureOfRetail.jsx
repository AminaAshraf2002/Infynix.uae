import { useState, useEffect, useRef } from "react";
import "./FutureOfRetail.css";

const GREEN = "#007A5E";

const innovations = [
    { title: "VisionEye", body: "Advanced computer vision platform enabling secure object tracking, real-time spatial analytics, and threat profiling." },
    { title: "GrowthFlow", body: "Custom framework engineered to automate user acquisition funnels and optimize client engagement pipelines." },
    { title: "OmniScale Hub", body: "Centralized control plane managing serverless configurations, auto-scaling, and active cloud deployments." },
    { title: "Sentinel Analytics", body: "High-speed edge processing engine facilitating local video analytics without cloud latency." },
    { title: "LeakDetector", body: "Automated analytics scanner that discovers and resolves conversion funnel drops through smart A/B testing." },
    { title: "SmartAlert System", body: "Predictive notification framework that filters false positives and alerts security response teams instantly." },
    { title: "Micro-Services Engine", body: "Modular application infrastructure designed to break down monolithic codebases into scalable services." },
    { title: "Personalization Loop", body: "Autonomous recommendation engine mapping user cohorts to custom experiences in real-time." },
    { title: "DeepSight SRE", body: "Integrated Site Reliability Engineering dashboard providing telemetry monitoring and proactive system failure recovery." },
];

function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
        );
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}

const ArrowIcon = () => (
    <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
        <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function FutureOfRetail() {
    const [settled, setSettled] = useState(false);
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", company: "", priority: "", message: "", agree: false,
    });

    useReveal();

    useEffect(() => {
        const onScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            setSettled(-rect.top > 80);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const TRANSITION = "all 0.75s cubic-bezier(0.4, 0, 0.2, 1)";
    const TRANSITION_SLOW = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";

    return (
        <>
            <section ref={sectionRef} style={{ position: "relative", height: "calc(100vh + 400px)" }}>
                <div style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    overflow: "hidden",
                    background: "#fff",
                }}>
                    <div className="dashes-l" />
                    <div className="dashes-r" />

                    {/* ── TITLE + HEADING — fades up and out ── */}
                    <div style={{
                        position: "absolute",
                        left: "8vw",
                        top: "14vh",
                        opacity: settled ? 0 : 1,
                        transform: settled ? "translateY(-30px)" : "translateY(0px)",
                        transition: TRANSITION,
                        zIndex: 4,
                        pointerEvents: "none",
                    }}>
                        <h1 style={{
                            fontFamily: "'Albert Sans', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
                            lineHeight: 1.04,
                            letterSpacing: "-0.03em",
                            color: "#4d4c4c",
                            whiteSpace: "nowrap",
                            marginBottom: "1.4rem",
                            marginLeft: "50px",
                            marginTop: "50px",
                        }}>
                            Future of{" "}
                            <em style={{
                                fontFamily: "'Playfair Display', serif",
                                fontStyle: "italic",
                                fontWeight: 400,
                                color: GREEN,
                            }}>
                                Scale & AI
                            </em>
                        </h1>

                        <h2 style={{
                            fontFamily: "'Albert Sans', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(2rem, 3.2vw, 3.4rem)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.01em",
                            color: "#353434",
                            marginBottom: "0.55rem",
                            marginLeft: "50px",
                            marginTop: "30px",
                        }}>
                            Architecting High-Performance
                            <br />
                            <em style={{
                                fontFamily: "'Playfair Display', serif",
                                fontStyle: "italic",
                                fontWeight: 400,
                                color: "#353434",
                                marginTop: "50px",
                            }}>
                                Growth Engineering Frameworks
                            </em>
                        </h2>

                        <p className="s-sub" style={{ marginLeft: "50px" }}>
                            Engineering resilient growth networks and smart surveillance systems
                        </p>
                    </div>

                    {/* ── IMAGE — wide centered → left card ── */}
                    <div style={{
                        position: "absolute",
                        left: "11vw",
                        top: settled ? "16vh" : "52vh",
                        width: settled ? "40vw" : "70vw",
                        height: settled ? "50vh" : "52vh",
                        borderRadius: settled ? "38px" : "24px",
                        overflow: "hidden",
                        transition: TRANSITION_SLOW,
                        zIndex: 2,
                        marginTop: "50px",


                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                            alt="Intelligent surveillance systems"
                            style={{
                                width: "100%", height: "100%",
                                objectFit: "cover", objectPosition: "center 20%",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* ── RIGHT CONTENT — centered vertically ── */}
                    <div style={{
                        position: "absolute",
                        left: "52vw",
                        right: "4vw",
                        top: "10vh",
                        bottom: "10vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        opacity: settled ? 1 : 0,
                        transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
                        zIndex: 3,
                        pointerEvents: settled ? "auto" : "none",
                        marginLeft: "30px",
                    }}>
                        <p className="s-label" style={{ marginBottom: "0.7rem" }}>Infynix Paradigm</p>
                        <h2 style={{
                            fontFamily: "'Albert Sans', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(2rem, 3.2vw, 3.4rem)",
                            lineHeight: 1.2,
                            letterSpacing: "-0.01em",
                            color: "#424242",
                            marginBottom: "0.8rem",
                        }}>
                            Architecting High-Performance
                            <br />
                            <em style={{
                                fontFamily: "'Playfair Display', serif",
                                fontStyle: "italic",
                                fontWeight: 400,
                                color: "#424242",
                            }}>
                                Growth Engineering Frameworks
                            </em>
                        </h2>
                        <p className="s-sub">Engineering resilient growth networks and smart surveillance systems</p>
                    </div>

                    {/* ── REPORT CARD — fades in last ── */}
                    <div style={{
                        position: "absolute",
                        left: "8vw",
                        right: "8vw",
                        top: settled ? "calc(66vh + 1.5vh)" : "calc(90vh + 1.5vh)",
                        opacity: settled ? 1 : 0,
                        transform: settled ? "translateY(0px)" : "translateY(10px)",
                        transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
                        pointerEvents: settled ? "auto" : "none",
                        zIndex: 3,
                        marginTop: "40px",
                    }}>
                        <div className="report-row">
                            <p>
                                Infynix Solutions' Growth Systems Framework transitions enterprises from static, siloed infrastructures to high-performance, automated Growth Engineering & AI Surveillance solutions.
                            </p>
                            <a href="#download" className="outline-btn">
                                Download Whitepaper <ArrowIcon />
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── LIME QUOTE ── */}
            <section className="lime-section" style={{ position: "relative" }}>
                <div className="dashes-l" style={{ borderColor: "rgba(0,0,0,0.14)" }} />
                <div className="dashes-r" style={{ borderColor: "rgba(0,0,0,0.14)" }} />
                <span className="lime-quote-mark">"</span>
                <blockquote className="lime-quote reveal">
                    As companies are deciding how to scale in the AI era,
                    leaders will have to determine where to place their digital bets.
                    But it's clear, brands that successfully leverage the balance of
                    AI surveillance and growth marketing systems to automate insights and
                    accelerate growth will be the ones that remain relevant in the future
                </blockquote>
                <p className="lime-attr reveal">Michael Witty, Director – Scale & Analytics, ISG Americas</p>
                <span className="lime-close">"</span>
            </section>

            {/* ── BODY TEXT + IMAGE ── */}
            <section className="body-section">
                <div className="dashes-l" />
                <div className="dashes-r" />
                <p className="body-text reveal">
                    With the rapid pace of technological developments and evolving organizational expectations,
                    the dated manual scaling paradigm will soon cease to exist. Today companies have limited scope for
                    real-time monitoring and the innate awareness of operational and user bottlenecks is missing. As things
                    stand, the burden of manual analysis is on the operational teams, thereby slowing growth. This new
                    system leverages AI surveillance and growth engineering to automate insights and accelerate scale.
                </p>
                <div className="body-img reveal">
                    <img
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
                        alt="Futuristic scale & surveillance experience"
                        loading="lazy"
                    />
                </div>
            </section>

            {/* ── PURPLE SPLIT ── */}
            <section className="purple-section">
                <div className="dashes-wl" />
                <div className="dashes-wr" />
                <div className="purple-grid">
                    <p className="purple-text reveal">
                        Modern enterprises must update their legacy software architectures and scaling channels to remain competitive. Infynix Solutions designs custom Growth Systems frameworks that focus on resilient system metrics and secure data routing, moving far beyond standard cloud configurations. This overview details the architectural case for modern modular systems.
                    </p>
                    <div>
                        <blockquote className="purple-quote reveal">
                            "Infynix Solutions' Growth Systems Framework offers an integrated approach to scaling and AI surveillance. By replacing siloed configurations with automated processing loops, they deliver exceptional performance and security."
                        </blockquote>
                        <p className="purple-attr reveal">Dr. Sarah Jenkins, Director of Cloud Architecture Research</p>
                    </div>
                </div>
            </section>

            {/* ── BLACK BIG TEXT ── */}
            <section className="black-section">
                <div className="dashes-wl" />
                <div className="dashes-wr" />
                <p className="black-text reveal">
                    Standard monitoring tools fail to capture deep operational inefficiencies, leaving organizations blind to critical bottlenecks. We engineer frameworks that merge edge computer vision, real-time feedback telemetry, and dynamic load-balancing growth systems to automate intelligence.
                </p>
            </section>

            {/* ── ISG INFO + FORM ── */}
            <section className="isg-section" id="download">
                <div className="dashes-l" />
                <div className="dashes-r" />
                <div className="isg-inner">
                    <h3 className="isg-title reveal">About ISG Research™</h3>
                    <p className="isg-body reveal">
                        ISG Research™ provides proprietary research, advisory consulting and executive event
                        services focused on market trends and disruptive technologies driving change in business
                        computing. ISG Research™ gives business and technology leaders the insight and guidance
                        they need to accelerate growth and create more value.
                    </p>
                    <h3 className="form-title reveal">Register to Download</h3>
                    <div className="form-grid reveal">
                        {[
                            { label: "Name", key: "name", type: "text" },
                            { label: "Work Email", key: "email", type: "email" },
                            { label: "Phone Number", key: "phone", type: "tel" },
                            { label: "Company Name", key: "company", type: "text" },
                        ].map(({ label, key, type }) => (
                            <div className="field-group" key={key}>
                                <label>{label}</label>
                                <input
                                    className="field-input"
                                    type={type}
                                    value={formData[key]}
                                    onChange={(ev) => setFormData((prev) => ({ ...prev, [key]: ev.target.value }))}
                                />
                            </div>
                        ))}
                        <div className="field-group select-wrapper">
                            <label>Current top digital priority?</label>
                            <select
                                className="field-select"
                                value={formData.priority}
                                onChange={(ev) => setFormData((prev) => ({ ...prev, priority: ev.target.value }))}
                            >
                                <option value="">Select…</option>
                                <option>Growth Engineering</option>
                                <option>AI Surveillance</option>
                                <option>Growth Marketing System</option>
                                <option>Cloud-DevOps & SRE</option>
                                <option>Quality Assurance</option>
                            </select>
                            <span className="select-arrow">↓</span>
                        </div>
                        <div className="field-group">
                            <label>Message</label>
                            <input
                                className="field-input"
                                type="text"
                                value={formData.message}
                                onChange={(ev) => setFormData((prev) => ({ ...prev, message: ev.target.value }))}
                            />
                        </div>
                    </div>
                    <div className="checkbox-row reveal">
                        <input
                            type="checkbox"
                            id="agree"
                            checked={formData.agree}
                            onChange={(ev) => setFormData((prev) => ({ ...prev, agree: ev.target.checked }))}
                            style={{ accentColor: GREEN }}
                        />
                        <label htmlFor="agree">
                            I agree to receive communications from Infynix. For more information, please review our{" "}
                            <a href="#">Privacy Policy</a>
                        </label>
                    </div>
                    <button className="outline-btn reveal">Download Report <ArrowIcon /></button>
                </div>
            </section>

            {/* ── INNOVATION GRID ── */}
            <section className="inno-section">
                <div className="dashes-l" />
                <div className="dashes-r" />
                <h2 className="inno-heading reveal">Innovation</h2>
                <div className="inno-grid">
                    {innovations.map((card) => (
                        <div className="inno-card reveal" key={card.title}>
                            <h3 className="inno-card-title">{card.title}</h3>
                            <p className="inno-card-body">{card.body}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}