function MapSection({ rooms }) {
  return (
    <section className="map-section">
      <iframe
        title="Google Maps: Hamar katedralskole"
        src="https://www.google.com/maps?q=Hamar%20katedralskole%2C%20Ringgata%20235%2C%202315%20Hamar&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

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
