import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="4" fill="currentColor"/>
              <path d="M12 28L20 12L28 28H12Z" fill="white" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">OXFORD</span>
            <span className="navbar__logo-tagline">Power Contracting</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="navbar__nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__nav-link ${isActive ? 'navbar__nav-link--active' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <Link to="/contact" className="navbar__cta btn btn-primary hidden-mobile">
          Request Quote
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="navbar__mobile">
          <nav className="navbar__mobile-nav" aria-label="Mobile navigation">
            <ul className="navbar__mobile-list">
              {navLinks.map((link, index) => (
                <li
                  key={link.path}
                  className="navbar__mobile-item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="navbar__mobile-item">
                <Link to="/contact" className="btn btn-primary navbar__mobile-cta">
                  Request Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
