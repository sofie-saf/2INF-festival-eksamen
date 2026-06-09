import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Program from './pages/Program.jsx'
import Visitors from './pages/Visitors.jsx'
import Map from './pages/Map.jsx'
import PracticalInfo from './pages/PracticalInfo.jsx'
import './styles/App.css'
import './styles/Pages.css'

function App() {
  const [activePage, setActivePage] = useState('home')

  function renderPage() {
    if (activePage === 'program') {
      return <Program />
    }

    if (activePage === 'visitors') {
      return <Visitors />
    }

    if (activePage === 'map') {
      return <Map />
    }

    if (activePage === 'practical-info') {
      return <PracticalInfo />
    }

    return <Home />
  }

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
