import React from 'react';

const EngineeringMethod = () => {
  const stages = [
    {
      id: '01',
      title: 'Measure',
      desc: 'Score the business across six pillars before recommending a single deliverable.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
          <path d="M12 19V9" />
          <path d="M8 19v-4" />
          <path d="M16 19v-7" />
          <path d="M4 19h16" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'Design',
      desc: 'Map the stack layers that close the specific gaps the measurement found.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Build',
      desc: 'Ship the system: content, campaigns, platforms, and the automation connecting them.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      id: '04',
      title: 'Re-Measure',
      desc: 'Score the business again, and adjust the system for the next cycle.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      )
    }
  ];

  return (
    <section className="em-section" style={{ 
      backgroundColor: '#ffffff',
      position: 'relative',
      fontFamily: '"Inter", "Helvetica Neue", sans-serif'
    }}>
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        position: 'relative',
        padding: '120px 40px', /* Increased padding for more margin around content */
        backgroundImage: `
          linear-gradient(to right, rgba(0, 122, 94, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 122, 94, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}>
        
        {/* Top Header - METHOD */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '50px' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#007A5E', fontWeight: 600 }}>Method</span>
          <div style={{ height: '1px', background: 'rgba(0, 122, 94, 0.3)', flex: 1 }}></div>
        </div>

        {/* Main Title */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#111', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>
            The Engineering <span style={{ color: '#007A5E' }}>Method</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#444', fontStyle: 'italic', maxWidth: '600px', margin: 0 }}>
            Four stages, applied the same way regardless of which stack layer the work sits in.
          </p>
        </div>

        {/* 4 Stages Layout */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', flexWrap: 'wrap', marginBottom: '60px' }}>
          
          {stages.map((stage, idx) => (
            <React.Fragment key={stage.id}>
              {/* Stage Box */}
              <div style={{ 
                flex: '1 1 200px', 
                minWidth: '220px',
                background: '#fff', 
                border: '1px solid #007A5E', 
                padding: '24px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px' 
              }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#007A5E', letterSpacing: '0.1em' }}>STAGE {stage.id}</span>
                <div style={{ width: '28px', height: '28px', color: '#007A5E' }}>
                  {stage.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', margin: 0 }}>
                  {stage.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.5, margin: 0 }}>
                  {stage.desc}
                </p>
              </div>

              {/* Arrow separator (except last) */}
              {idx < stages.length - 1 && (
                <div style={{ color: '#007A5E', flexShrink: 0, display: 'flex', alignItems: 'center' }} className="em-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Quote Box */}
        <div style={{ 
          background: 'rgba(0, 122, 94, 0.05)', 
          borderLeft: '4px solid #007A5E', 
          padding: '20px 30px', 
          maxWidth: '900px'
        }}>
          <p style={{ fontSize: '1.05rem', color: '#111', margin: 0, fontStyle: 'italic', fontWeight: 500 }}>
            The layer changes depending on what a business needs. The method underneath it does not.
          </p>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .em-section {
          padding: 0 60px;
        }
        @media (max-width: 1024px) {
          .em-arrow {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .em-section {
            padding: 0 16px;
          }
        }
      `}} />
    </section>
  );
};

export default EngineeringMethod;
