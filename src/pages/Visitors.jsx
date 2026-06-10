import CompanyCard from '../components/CompanyCard.jsx'
import VisitorCard from '../components/VisitorCard.jsx'
import dataset from '../data/dataset.json'

function Visitors() {
  return (
    <main className="page">
      <section className="page-heading">
        <p className="eyebrow">Hvem kommer?</p>
        <h2>Besøkende</h2>
        <p>Festivalen viser bedrifter, lærere og elever.</p>
      </section>

      <section className="visitor-group">
        <h3>Bedrifter</h3>
        <div className="card-grid">
          {dataset.bedrifter.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </section>

      <section className="visitor-group">
        <h3>Lærere</h3>
        <div className="card-grid compact-grid">
          {dataset.laerere.map((teacher) => (
            <VisitorCard key={teacher.id} visitor={teacher} type="Lærer" />
          ))}
        </div>
      </section>

      <section className="visitor-group">
        <h3>Elever</h3>
        <div className="card-grid compact-grid">
          {dataset.elever.map((student) => (
            <VisitorCard key={student.id} visitor={student} type="Elev" />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Visitors
