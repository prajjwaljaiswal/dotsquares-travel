import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__container">
        <NavLink to="/" className="site-header__logo" onClick={closeMenu}>
          <span className="site-header__logo-mark" aria-hidden="true">
            ✈
          </span>
          <span className="site-header__logo-text">TravelCo</span>
        </NavLink>

        <button
          type="button"
          className={`site-header__toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="site-header__toggle-bar"></span>
          <span className="site-header__toggle-bar"></span>
          <span className="site-header__toggle-bar"></span>
        </button>

        <nav
          className={`site-header__nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="site-header__nav-list">
            {navLinks.map((link) => (
              <li key={link.to} className="site-header__nav-item">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `site-header__nav-link ${isActive ? 'is-active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="site-header__cta" onClick={closeMenu}>
            Book Now
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
