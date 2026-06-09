function CompanyCard({ company }) {
  return (
    <article className="card company-card">
      <span className="tag">{company.standnummer}</span>
      <h3>{company.navn}</h3>
      <p>{company.bransje}</p>
      <p className="muted">{company.beskrivelse}</p>
      <p>
        <strong>Kontakt:</strong> {company.kontaktperson}
      </p>
    </article>
  )
}

export default CompanyCard
