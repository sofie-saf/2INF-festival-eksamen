import dataset from '../data/dataset.json'

function PracticalInfo() {
  const { festival } = dataset

  return (
    <main className="page">
      <section className="page-heading">
        <p className="eyebrow">Før du kommer</p>
        <h2>Praktisk info</h2>
        <p>Viktig informasjon for elever, lærere, bedrifter og andre besøkende.</p>
      </section>

      <div className="info-grid">
        <article className="card info-card">
          <h3>Kontakt</h3>
          <p>{festival.kontaktEpost}</p>
        </article>
        <article className="card info-card">
          <h3>Tid</h3>
          <p>
            {festival.dato}, kl. {festival.startTid} - {festival.sluttTid}
          </p>
        </article>
        <article className="card info-card">
          <h3>WiFi</h3>
          <p>Bruk skolens gjestenett. Spør ved informasjonspunktet hvis du trenger passord.</p>
        </article>
        <article className="card info-card">
          <h3>Regler</h3>
          <p>Hold gangveier frie, møt opp i riktig rom til riktig tid, rydd etter deg og ta kontakt med en lærer ved spørsmål.</p>
        </article>
      </div>
    </main>
  )
}

export default PracticalInfo
