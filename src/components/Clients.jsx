const Clients = () => {
  const logos = [
    { icon: '🏦', name: 'FinTrust Bank' },
    { icon: '🏥', name: 'MediCore Systems' },
    { icon: '🛒', name: 'RetailEdge' },
    { icon: '🏗️', name: 'BuildSmart Corp' },
    { icon: '✈️', name: 'AeroLink Travel' },
    { icon: '📦', name: 'LogiFlow Inc' },
    { icon: '🎓', name: 'EduTech Global' },
    { icon: '⚡', name: 'EnergyNow' },
    { icon: '🔬', name: 'BioSynth Labs' },
    { icon: '🏭', name: 'Manufact Pro' },
  ];

  // Duplicate for seamless marquee
  const allLogos = [...logos, ...logos];

  return (
    <section className="clients-section" aria-label="Our clients">
      <p className="clients-label">Trusted by industry leaders</p>
      <div className="clients-ticker" role="list" aria-label="Client logos">
        <div className="clients-ticker-inner">
          {allLogos.map((logo, i) => (
            <div key={i} className="client-logo" role="listitem">
              <div className="client-logo-icon">{logo.icon}</div>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
