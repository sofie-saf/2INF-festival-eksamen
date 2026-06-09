function VisitorCard({ visitor, type }) {
  return (
    <article className="card visitor-card">
      <span className="tag">{type}</span>
      <h3>{visitor.navn}</h3>
      {visitor.ansvarsomraade && <p>{visitor.ansvarsomraade}</p>}
      {visitor.rolle && <p>{visitor.rolle}</p>}
      {visitor.klasse && (
        <p>
          {visitor.klasse} - gruppe {visitor.gruppe}
        </p>
      )}
      {visitor.epost && <p className="muted">{visitor.epost}</p>}
    </article>
  )
}

export default VisitorCard
