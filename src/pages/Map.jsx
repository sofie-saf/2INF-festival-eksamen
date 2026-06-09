import MapSection from '../components/MapSection.jsx'
import dataset from '../data/dataset.json'

function Map() {
  return (
    <main className="page">
      <section className="page-heading">
        <p className="eyebrow">Finn fram</p>
        <h2>Kart</h2>
        <p>Her er en enkel oversikt over rommene i dataset.json.</p>
      </section>
      <MapSection rooms={dataset.rom} />
    </main>
  )
}

export default Map
