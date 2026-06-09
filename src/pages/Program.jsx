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

  return (
    <main className="page">
      <section className="page-heading">
        <p className="eyebrow">Hva skjer?</p>
        <h2>Program</h2>
        <p>Her er foredragene fra festivalprogrammet, hentet fra dataset.json.</p>
      </section>

      <div className="list">
        {foredragMedBedrift.map((item) => (
          <ProgramCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}

export default Program
