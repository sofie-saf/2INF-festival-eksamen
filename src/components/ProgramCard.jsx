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
        <div className="program-meta">
          <span>{item.companyName}</span>
          <span>{item.rom}</span>
          <span>{item.maksPlasser} plasser</span>
        </div>
      </div>
    </article>
  )
}

export default ProgramCard
