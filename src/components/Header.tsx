import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

interface NavLinkItem {
  label: string
  to: string
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__container">
        <Link to="/" className="site-header__logo" onClick={closeMenu}>
          <span className="site-header__logo-mark" aria-hidden="true">
            ✈
          </span>
          <span className="site-header__logo-text">Dotsquares Travel</span>
        </Link>

        <button
          type="button"
          className={`site-header__toggle ${isMenuOpen ? 'site-header__toggle--open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
        </button>

        <nav
          className={`site-header__nav ${isMenuOpen ? 'site-header__nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="site-header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="site-header__nav-item">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `site-header__nav-link ${isActive ? 'site-header__nav-link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="site-header__cta" onClick={closeMenu}>
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header