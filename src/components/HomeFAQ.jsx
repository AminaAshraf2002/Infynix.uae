import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Growth Engineering?",
    answer: "Growth Engineering is the discipline of designing, building, and continuously improving interconnected business systems—combining technology, marketing, operations, and data—to create sustainable growth."
  },
  {
    question: "How is Infynix different from a digital agency?",
    answer: "Unlike traditional agencies that focus on isolated deliverables (like just a website or just an ad campaign), we take a business-first engineering approach. We build unified systems where your technology, automation, and marketing work together to drive measurable outcomes."
  },
  {
    question: "Do you develop custom software?",
    answer: "Yes. We engineer bespoke web applications, mobile apps, and business systems tailored exactly to your operational workflows and architecture."
  },
  {
    question: "Do you provide SEO?",
    answer: "Yes. We provide technical, local, and enterprise SEO strategies designed to capture high-intent traffic and build sustainable domain authority over the long term."
  },
  {
    question: "Can AI improve my business?",
    answer: "Absolutely. We build custom AI solutions, machine learning pipelines, and autonomous AI agents that can automate complex processes, reduce manual overhead, and unlock predictive insights for your business."
  },
  {
    question: "Do you build CRM systems?",
    answer: "Yes, we develop custom CRM and ERP integrations that connect your marketing data with your operational execution, creating a single source of truth for your business."
  },
  {
    question: "How long does development take?",
    answer: "Timelines depend on the complexity of the system being engineered. A standard performance website may take a few weeks, while complex AI integrations or custom ERP systems can take several months. We prioritize rapid, iterative deployment to get you ROI as quickly as possible."
  }
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '80px 20px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, textAlign: 'center', marginBottom: '50px', color: '#111', fontFamily: '"Montserrat", sans-serif' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: '#fff', 
                borderRadius: '8px', 
                border: '1px solid #E5E7EB', 
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button 
                onClick={() => toggleFaq(idx)}
                style={{ 
                  width: '100%', 
                  padding: '20px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111', fontFamily: '"Montserrat", sans-serif' }}>
                  {faq.question}
                </span>
                <span style={{ fontSize: '1.5rem', color: '#007A5E', transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
                  +
                </span>
              </button>
              <div 
                style={{ 
                  maxHeight: openIndex === idx ? '500px' : '0', 
                  padding: openIndex === idx ? '0 20px 20px' : '0 20px', 
                  opacity: openIndex === idx ? 1 : 0, 
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                <p style={{ margin: 0, color: '#4B5563', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
