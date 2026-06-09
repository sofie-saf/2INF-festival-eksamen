import '../styles/Navbar.css'

const navItems = [
  { id: 'home', label: 'Forside' },
  { id: 'program', label: 'Program' },
  { id: 'visitors', label: 'Besøkende' },
  { id: 'map', label: 'Kart' },
  { id: 'practical-info', label: 'Praktisk info' },
]

function Navbar({ activePage, setActivePage }) {
  return (
    <header className="site-header">
      <div className="nav-content">
        <h1>2INF Festival</h1>

        <nav className="navbar" aria-label="Hovednavigasjon">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activePage === item.id ? 'active' : ''}
              onClick={() => setActivePage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
