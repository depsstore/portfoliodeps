import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
// Import gambar logo Anda
import LogoBrand from '../../assets/brandnolatar.png' // Sesuaikan nama file & ekstensinya

export function Header() {
  const [isActive, setActive] = useState(false)
  
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  
  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        {/* 1. LOGO BRAND */}
        <HashLink smooth to="#home" className="logo" onClick={closeMenu}>
          <img src={LogoBrand} alt="Dep Frans Logo" className="logo-img" />
        </HashLink>

        {/* 2. AREA KANAN (COLLAB BUTTON & HAMBURGER) */}
        <div className="header-right">
          {/* Collab Button selalu tampil */}
          <a href="#contact" className="collab-btn" onClick={closeMenu}>
            Let's Collaborate
          </a>

          {/* Hamburger Menu selalu tampil di semua layar */}
          <div
            aria-expanded={isActive ? 'true' : 'false'}
            aria-haspopup="true"
            aria-label={isActive ? 'Tutup menu' : 'Buka menu'}
            className={isActive ? 'menu active' : 'menu'}
            onClick={() => setActive(!isActive)}
          ></div>
        </div>

        {/* NAVIGASI (Muncul saat hamburger diklik) */}
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#experience" onClick={closeMenu}>
            Experience
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          
          {/* Tombol Theme Toggle (opsional, dipindah ke dalam menu agar rapi) */}
          <div className="theme-toggle-wrapper">
            <input
              onChange={toggleTheme}
              className="container_toggle"
              type="checkbox"
              id="switch"
              name="mode"
            />
            <label htmlFor="switch">Toggle</label>
          </div>
        </nav>
      </Router>
    </Container>
  )
}