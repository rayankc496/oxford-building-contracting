import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight, ExternalLink } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Construction Project Management',
    'Civil Engineering',
    'MEP Services',
    'Electrical Installations',
    'Plumbing & Sanitary',
    'Painting & Finishing',
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Company Info */}
          <div className="footer__section footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill="var(--color-accent)"/>
                <path d="M12 28L20 12L28 28H12Z" fill="white" stroke="var(--color-primary)" strokeWidth="2"/>
              </svg>
              <div>
                <div className="footer__logo-name">OXFORD POWER CONTRACTING</div>
                <div className="footer__logo-tagline">Shaping Skylines, Building Landmarks</div>
              </div>
            </div>
            <p className="footer__description">
              Leading construction contractor in the UAE with 20+ years of experience delivering iconic projects across healthcare, hospitality, commercial, residential, and industrial sectors.
            </p>
            <div className="footer__social">
              <a href="https://www.facebook.com/oxforduae" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <ExternalLink size={20} />
              </a>
              <a href="https://www.instagram.com/oxfordbuilding" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    <ChevronRight size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h3 className="footer__heading">Our Services</h3>
            <ul className="footer__links">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer__service-item">
                    <ChevronRight size={14} />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h3 className="footer__heading">Contact Us</h3>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <MapPin size={18} />
                <span>faisal 2 - building office 405, King Faisal St, Al Nad, Sharjah, UAE</span>
              </div>
              <div className="footer__contact-item">
                <Phone size={18} />
                <a href="tel:+971504181220">+971 50 418 1220</a>
              </div>
              <div className="footer__contact-item">
                <Mail size={18} />
                <a href="mailto:INFO@OXFORDPWC.COM">INFO@OXFORDPWC.COM</a>
              </div>
              <div className="footer__contact-item">
                <Clock size={18} />
                <span>Mon-Thu: 7AM-5PM | Sat: 7AM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Oxford Power Contracting LLC. All rights reserved.
          </p>
          <p className="footer__tagline">
            DEWA Registered Contractor | 20+ Years of Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
