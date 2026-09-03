import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./News.css";

const newsArticles = [
    {
        slug: "infynix-solutions-launches-ai-surveillance-and-autonomous-growth-platform",
        date: "May 7",
        location: "San Jose, California",
        title: "Infynix Solutions Unveils Advanced AI Surveillance & Autonomous Growth Platform",
        sections: [
            {
                body: `San Jose, California – In a strategic move to optimize enterprise operations and scaling capabilities, Infynix Solutions has officially launched its new autonomous AI Surveillance platform, integrated directly with high-performance Growth Systems.`,
            },
            {
                body: `This release marks a significant milestone for Infynix Solutions as it expands its suite of AI-first products and scalable infrastructure tools designed to automate real-time analytics and accelerate customer acquisition loops.`,
            },
            {
                heading: "Next-Gen AI Systems & Spatial Telemetry",
                body: `"Our unified architecture combines computer vision and self-evolving growth marketing models, enabling businesses to automate complex decisions without manual database scripting," said the Chief Architect of Infynix Solutions. "We are investing heavily in secure local edge processing to ensure enterprise security and zero-latency performance."`,
            },
            {
                body: `The company has initiated pilot implementations of this system across major logistics hubs, global e-commerce systems, and high-volume digital platforms.`,
            },
            {
                body: `Early evaluations show significant drops in server overhead and a measurable boost in conversion rates, with plans to expand the features globally.`,
            },
            {
                heading: "Modular Frameworks Built for Scalability",
                body: `The core platform is built on modular Site Reliability Engineering (SRE) workflows and event-driven microservices. This allows engineering teams to deploy and manage containerized systems across hybrid cloud environments effortlessly.`,
            },
            {
                heading: "Bridging Security and Performance",
                body: `By prioritizing privacy-first data routing, Infynix Solutions strikes the perfect balance between real-time spatial surveillance and customer trust, deploying encrypted API endpoints that safeguard enterprise data.`,
            },
        ],
    },
];

const relatedNews = [
    { label: "Infynix Solutions' C-Commerce – commerce like never before!", href: "#" },
    { label: "Infynix Solutions Reimagines the Future of Workplaces – a true bi-directional 'flatarchy' organization", href: "#" },
    { label: "Infynix Solutions, a 100% retail-focused technology service provider, has launched a new Retail Hive benchmark report on independent beauty brands in the U.S.", href: "#" },
    { label: "Infynix Solutions Unveils Advanced AI Surveillance & Autonomous Growth Platform", href: "#" },
];

export default function News() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const article = newsArticles[0];

    return (
        <div className="news-page">
            {/* ── ARTICLE AREA ── */}
            <div className="news-layout">
                <div className="dashes-l" />
                <div className="dashes-r" />

                <article className="news-article">
                    <h1 className="news-title">{article.title}</h1>

                    <div className="news-body">
                        {article.sections.map((sec, i) => (
                            <div key={i} className="news-block">
                                {sec.heading && (
                                    <h2 className="news-subheading">{sec.heading}</h2>
                                )}
                                <p className="news-para">{sec.body}</p>
                            </div>
                        ))}
                    </div>
                </article>
            </div>

            {/* ── DIVIDER ── */}
            <div className="news-divider" />

            {/* ── RELATED NEWS ── */}
            <div className="news-related-wrap">
                <div className="dashes-l" />
                <div className="dashes-r" />
                <div className="news-related">
                    <h2 className="news-related-heading">News</h2>
                    <ul className="news-related-list">
                        {relatedNews.map((item, i) => (
                            <li key={i}>
                                <a href={item.href} className="news-related-link">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}