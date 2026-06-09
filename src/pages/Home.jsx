import dataset from '../data/dataset.json'

function Home() {
  const { festival } = dataset

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Skolefestival for informasjonsteknologi</p>
        <h2>{festival.navn}</h2>
        <p>{festival.beskrivelse}</p>
        <div className="hero-details">
          <span>{festival.dato}</span>
          <span>{festival.sted}</span>
          <span>{festival.bygning}</span>
        </div>
      </section>

      <section className="card-grid" aria-label="Festivalinformasjon">
        <article className="card feature-card">
          <span className="tag">Tid</span>
          <h3>
            {festival.startTid} - {festival.sluttTid}
          </h3>
          <p>Festivalen varer hele skoledagen med foredrag, stands og møter med bedrifter.</p>
        </article>
        <article className="card feature-card">
          <span className="tag">Sted</span>
          <h3>{festival.sted}</h3>
          <p>Arrangementet holdes i {festival.bygning}.</p>
        </article>
        <article className="card feature-card">
          <span className="tag">Kontakt</span>
          <h3>E-post</h3>
          <p>{festival.kontaktEpost}</p>
        </article>
      </section>
    </main>
  )
}

export default Home
