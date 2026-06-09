import { useState } from 'react'

function MapSection({ rooms }) {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="map-section">
      {!imageError ? (
        <img
          src="/images/map.png"
          alt="Kart over festivalområdet"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="map-placeholder">
          Kartbildet er ikke lagt inn ennå. Bruk romoversikten under.
        </div>
      )}

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
