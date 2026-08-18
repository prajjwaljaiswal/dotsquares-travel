import { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <NavLink to="/" className="site-header__logo" onClick={closeMenu}>
          <span className="site-header__logo-mark" aria-hidden="true">
            DT
          </span>
          <span className="site-header__logo-text">Dotsquares Travel</span>
        </NavLink>

        <button
          type="button"
          className={`site-header__toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
          <span className="site-header__toggle-bar" />
        </button>

        <nav
          id="primary-navigation"
          className={`site-header__nav ${isMenuOpen ? 'site-header__nav--open' : ''}`}
        >
          <ul className="site-header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="site-header__nav-item">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `site-header__nav-link ${isActive ? 'site-header__nav-link--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a href="#book" className="site-header__cta" onClick={closeMenu}>
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
