import '../components/LandingPage.css';

// Deep content for a service page: the sections that take a 400-word
// catalogue entry to the depth the ranking field carries. Data comes from
// src/content/serviceDepth, keyed by slug, and is written per market so the
// three domains do not publish the same body. Reuses the landing page section
// styles so services and location pages read as one system.
export default function ServiceDepth({ depth, title }) {
  if (!depth) return null;
  const {
    overview,
    capabilitiesHeading, capabilities,
    specsHeading, specsColumns, specs,
    useCasesHeading, useCases,
    engagementsHeading, engagements,
    detail,
  } = depth;

  return (
    <div className="lp service-depth" style={{ paddingTop: 40, paddingBottom: 40 }}>
      {overview?.length > 0 && (
        <section className="lp-section lp-intro">
          <p className="lp-lead">{overview[0]}</p>
          {overview.length > 1 && (
            <div className="lp-intro-cols">
              {overview.slice(1).map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}
        </section>
      )}

      {capabilities?.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">{capabilitiesHeading || `What ${title} includes`}</h2>
          <div className="lp-cap-grid">
            {capabilities.map((c) => (
              <article key={c.name} className="lp-cap">
                <h3 className="lp-h3">{c.name}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {specs?.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">{specsHeading || 'Scope and timeline'}</h2>
          <div className="lp-table-scroll">
            <table className="lp-table">
              <thead><tr>{specsColumns.map((c) => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>
                {specs.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {useCases?.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">{useCasesHeading || 'Who this is for'}</h2>
          <div className="lp-grid">
            {useCases.map((u) => (
              <article key={u.name} className="lp-card">
                <h3 className="lp-h3">{u.name}</h3>
                <p>{u.desc}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {engagements?.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">{engagementsHeading || 'How we work together'}</h2>
          <div className="lp-cap-grid">
            {engagements.map((e) => (
              <article key={e.name} className="lp-cap">
                <h3 className="lp-h3">{e.name}</h3>
                <p>{e.desc}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {detail?.length > 0 && detail.map((block) => (
        <section className="lp-section" key={block.heading}>
          <h2 className="lp-h2">{block.heading}</h2>
          {block.body.map((para, i) => <p key={i} className="lp-body">{para}</p>)}
          {block.points?.length > 0 && (
            <div className="lp-cap-grid" style={{ marginTop: '22px' }}>
              {block.points.map((pt) => (
                <article key={pt.name} className="lp-cap">
                  <h3 className="lp-h3">{pt.name}</h3>
                  <p>{pt.desc}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
