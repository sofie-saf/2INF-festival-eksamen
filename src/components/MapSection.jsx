import { useState } from 'react'

const locations = [
  {
    id: 'auditorium-a',
    name: 'Auditorium A',
    description: 'Stort auditorium for bedriftspresentasjoner og foredrag.',
    area: 'Auditoriumsfløyen, 1. etasje',
    usedFor: 'Foredrag, åpning og samlinger med mange deltakere.',
  },
  {
    id: 'auditorium-b',
    name: 'Auditorium B',
    description: 'Auditorium med lydanlegg og skjerm for parallelle foredrag.',
    area: 'Auditoriumsfløyen, 1. etasje',
    usedFor: 'Bedriftsforedrag og teknologipresentasjoner.',
  },
  {
    id: 'toaletter',
    name: 'Toaletter',
    description: 'Toaletter ligger ved gangen mellom auditoriene og kantina.',
    area: 'Hovedgangen, 1. etasje',
    usedFor: 'Publikum, elever og besøkende gjennom hele dagen.',
  },
  {
    id: 'spiseomrade',
    name: 'Spiseområde',
    description: 'Kantineområde med sitteplasser og enkel servering.',
    area: 'Kantina, 1. etasje',
    usedFor: 'Pauser, lunsj og uformelle møter med bedrifter.',
  },
  {
    id: 'informasjonspunkt',
    name: 'Informasjonspunkt',
    description: 'Bemannet punkt der besøkende kan få hjelp og programinfo.',
    area: 'Ved hovedinngangen',
    usedFor: 'Registrering, spørsmål, veiledning og praktisk informasjon.',
  },
  {
    id: 'inngang',
    name: 'Inngang',
    description: 'Hovedinngangen til festivalområdet på skolen.',
    area: 'Ringgata 235',
    usedFor: 'Ankomst, skilting og første møte med festivalvertene.',
  },
]

function MapSection({ rooms }) {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  return (
    <section className="map-section">
      <iframe
        title="Google Maps: Hamar katedralskole"
        src="https://www.google.com/maps?q=Hamar%20katedralskole%2C%20Ringgata%20235%2C%202315%20Hamar&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <section className="find-way-section" aria-labelledby="find-way-title">
        <div className="find-way-header">
          <div>
            <p className="eyebrow">Interaktivt kart</p>
            <h3 id="find-way-title">Finn fram</h3>
          </div>
          <p className="muted">
            Klikk på et sted for å se hvor det ligger og hva området brukes
            til.
          </p>
        </div>

        <div className="location-layout">
          <div className="location-buttons" aria-label="Velg sted">
            {locations.map((location) => (
              <button
                className={
                  selectedLocation.id === location.id ? 'active' : ''
                }
                type="button"
                key={location.id}
                onClick={() => setSelectedLocation(location)}
              >
                {location.name}
              </button>
            ))}
          </div>

          <article className="card location-detail">
            <span className="tag">{selectedLocation.area}</span>
            <h3>{selectedLocation.name}</h3>
            <p>{selectedLocation.description}</p>
            <p className="muted">
              <strong>Brukes til:</strong> {selectedLocation.usedFor}
            </p>
          </article>
        </div>
      </section>

      <div className="room-grid">
        {rooms.map((room) => (
          <article className="card room-card" key={room.id}>
            <span className="tag">{room.bygning}</span>
            <h3>{room.romnummer}</h3>
            <p>Kapasitet: {room.kapasitet}</p>
            <p className="muted">{room.utstyr.join(', ')}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MapSection
