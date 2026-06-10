import ProgramCard from '../components/ProgramCard.jsx'
import dataset from '../data/dataset.json'

function Program() {
  const foredragMedBedrift = dataset.foredrag.map((foredrag) => {
    const bedrift = dataset.bedrifter.find(
      (item) => item.id === foredrag.holderBedriftId,
    )

    return {
      ...foredrag,
      companyName: bedrift ? bedrift.navn : 'Ukjent bedrift',
    }
  })
  const antallRom = new Set(foredragMedBedrift.map((item) => item.rom)).size
  const antallKategorier = new Set(
    foredragMedBedrift.map((item) => item.kategori),
  ).size

  return (
    <main className="page program-page">
      <section className="program-hero">
        <div>
          <p className="eyebrow">Hva skjer?</p>
          <h2>Program</h2>
          <p>
            Utforsk foredrag om utvikling, drift, design, sikkerhet og
            teknologi fra bedriftene som besøker festivalen.
          </p>
        </div>

        <div className="program-stats" aria-label="Programoversikt">
          <article>
            <strong>{foredragMedBedrift.length}</strong>
            <span>foredrag</span>
          </article>
          <article>
            <strong>{antallRom}</strong>
            <span>rom</span>
          </article>
          <article>
            <strong>{antallKategorier}</strong>
            <span>temaer</span>
          </article>
        </div>
      </section>

      <div className="program-list">
        {foredragMedBedrift.map((item) => (
          <ProgramCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}

export default Program
