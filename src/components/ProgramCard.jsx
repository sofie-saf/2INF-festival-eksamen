function ProgramCard({ item }) {
  return (
    <article className="card program-card">
      <div className="program-time">
        {item.startTid}
        <span>{item.sluttTid}</span>
      </div>
      <div>
        <span className="tag">{item.kategori}</span>
        <h3>{item.tittel}</h3>
        <p className="muted">{item.beskrivelse}</p>
        <p>
          <strong>Bedrift:</strong> {item.companyName}
        </p>
        <p>
          <strong>Rom:</strong> {item.rom}
        </p>
        <p>
          <strong>Plasser:</strong> {item.maksPlasser}
        </p>
      </div>
    </article>
  )
}

export default ProgramCard
