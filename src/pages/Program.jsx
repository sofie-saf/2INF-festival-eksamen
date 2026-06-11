import { useState } from 'react'
import ProgramCard from '../components/ProgramCard.jsx'
import dataset from '../data/dataset.json'

const rooms = ['Auditorium A', 'Auditorium B']
const times = ['09:00', '10:00', '11:00', '12:00', '13:00']

function Program() {
  const [program, setProgram] = useState(dataset.foredrag)
  const [selectedCompanyId, setSelectedCompanyId] = useState(
    String(dataset.bedrifter[0]?.id ?? ''),
  )
  const [selectedRoom, setSelectedRoom] = useState(rooms[0])
  const [selectedTime, setSelectedTime] = useState(times[0])
  const [error, setError] = useState('')

  const foredragMedBedrift = program.map((foredrag) => {
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

  function handleSubmit(event) {
    event.preventDefault()

    const selectedCompany = dataset.bedrifter.find(
      (bedrift) => bedrift.id === Number(selectedCompanyId),
    )

    if (!selectedCompany) {
      setError('Velg en bedrift før du legger til foredrag.')
      return
    }

    const isRoomBooked = program.some(
      (foredrag) =>
        foredrag.rom === selectedRoom && foredrag.startTid === selectedTime,
    )

    if (isRoomBooked) {
      setError(`${selectedRoom} er allerede booket kl. ${selectedTime}.`)
      return
    }

    const newTalk = {
      id: Date.now(),
      tittel: `Foredrag med ${selectedCompany.navn}`,
      beskrivelse:
        'Foredrag lagt til av festivalsjefen for eksamensdagen.',
      holderBedriftId: selectedCompany.id,
      startTid: selectedTime,
      sluttTid: '',
      maksPlasser: selectedRoom === 'Auditorium A' ? 80 : 60,
      kategori: 'Bedrift',
      rom: selectedRoom,
    }

    setProgram((currentProgram) =>
      [...currentProgram, newTalk].sort((a, b) =>
        a.startTid.localeCompare(b.startTid),
      ),
    )
    setError('')
  }

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

      <section className="card admin-panel" aria-labelledby="festival-chief">
        <div>
          <p className="eyebrow">Admin</p>
          <h3 id="festival-chief">Festivalsjef</h3>
          <p className="muted">
            Koble en bedrift til et auditorium og et tidspunkt. Systemet
            hindrer dobbeltbooking av samme rom på samme tid.
          </p>
        </div>

        <form className="schedule-form" onSubmit={handleSubmit}>
          <label>
            Bedrift
            <select
              value={selectedCompanyId}
              onChange={(event) => setSelectedCompanyId(event.target.value)}
            >
              {dataset.bedrifter.map((bedrift) => (
                <option value={bedrift.id} key={bedrift.id}>
                  {bedrift.navn}
                </option>
              ))}
            </select>
          </label>

          <label>
            Rom
            <select
              value={selectedRoom}
              onChange={(event) => setSelectedRoom(event.target.value)}
            >
              {rooms.map((room) => (
                <option value={room} key={room}>
                  {room}
                </option>
              ))}
            </select>
          </label>

          <label>
            Tid
            <select
              value={selectedTime}
              onChange={(event) => setSelectedTime(event.target.value)}
            >
              {times.map((time) => (
                <option value={time} key={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>

          <button type="submit">Legg til i program</button>
        </form>

        {error && <p className="form-error">{error}</p>}
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
