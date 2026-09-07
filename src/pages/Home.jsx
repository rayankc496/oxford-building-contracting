import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Award,
  Shield,
  Users,
  ChevronRight,
  Play,
  Star,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import './Home.css';

/* ---------- Animation variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ---------- Stats ---------- */
const stats = [
  { label: 'Years of Experience', value: 20, suffix: '+' },
  { label: 'Projects Completed', value: 120, suffix: '+' },
  { label: 'DEWA Registered', value: 100, suffix: '%' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
];

/* ---------- Services ---------- */
const services = [
  {
    title: 'Construction Project Management',
    desc: 'End-to-end management of construction projects from planning to delivery, ensuring timely completion and quality standards.',
  },
  {
    title: 'Civil Engineering',
    desc: 'Expert civil engineering solutions for infrastructure, foundations, and structural works across UAE.',
  },
  {
    title: 'MEP Services',
    desc: 'Complete Mechanical, Electrical, and Plumbing services for commercial, residential, and industrial projects.',
  },
  {
    title: 'Electrical Installations',
    desc: 'Professional electrical system design, installation, and maintenance for all building types.',
  },
  {
    title: 'Plumbing & Sanitary',
    desc: 'Comprehensive plumbing and sanitary contracting for new construction and renovation projects.',
  },
  {
    title: 'Painting & Finishing',
    desc: 'High-quality painting, plastering, and finishing services with attention to detail and durability.',
  },
];

/* ---------- Why Choose Us ---------- */
const whyUs = [
  { icon: Award, title: '20+ Years Experience', desc: 'Two decades of delivering landmark construction projects across the Middle East.' },
  { icon: Shield, title: 'DEWA Registered', desc: 'Fully licensed and registered contractor meeting all UAE regulatory standards.' },
  { icon: Users, title: 'Expert Team', desc: 'Highly qualified and experienced staff dedicated to quality and safety.' },
  { icon: CheckCircle, title: 'Quality Commitment', desc: 'Total commitment to quality while maintaining the highest health and safety standards.' },
];

/* ---------- Testimonials ---------- */
const testimonials = [
  {
    text: 'Oxford Power Contracting delivered our hospital project on time and beyond expectations. Their attention to detail is unmatched.',
    author: 'Project Director',
    company: 'Healthcare Infrastructure LLC',
    rating: 5,
  },
  {
    text: 'Professional team, excellent work quality, and great communication throughout the project. Highly recommended.',
    author: 'Facilities Manager',
    company: 'Al Ghurair Properties',
    rating: 5,
  },
  {
    text: 'Their MEP team is exceptional. They handled our complex commercial tower project with expertise and precision.',
    author: 'Engineering Head',
    company: 'Emirates Construction Co.',
    rating: 5,
  },
];

function AnimateOnScroll({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__container">
          <motion.div className="hero__content" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span className="hero__badge" variants={fadeUp} custom={0}>
              Established 2006 • UAE
            </motion.span>
            <motion.h1 className="hero__title" variants={fadeUp} custom={1}>
              Shaping Skylines,<br />
              <span className="hero__accent">Building Landmarks</span>
            </motion.h1>
            <motion.p className="hero__subtitle" variants={fadeUp} custom={2}>
              Leading construction contractor in the UAE with 20+ years of experience delivering iconic projects across healthcare, hospitality, commercial, residential, and industrial sectors.
            </motion.p>
            <motion.div className="hero__actions" variants={fadeUp} custom={3}>
              <Link to="/contact" className="btn btn-primary">Request Quote</Link>
              <Link to="/projects" className="btn btn-secondary">View Projects</Link>
            </motion.div>
            <motion.div className="hero__contact" variants={fadeUp} custom={4}>
              <a href="tel:+971504181220" className="hero__contact-item">
                <Phone size={18} />
                <span>+971 50 418 1220</span>
              </a>
              <a href="https://wa.me/971504181220" className="hero__contact-item">
                <span className="whatsapp-icon">💬</span>
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section about">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-title">
              <h2>About Oxford Power Contracting</h2>
              <p>For almost 20 years, we have shaped the skylines of major cities and built landmark projects across the Middle East.</p>
            </div>
          </AnimateOnScroll>
          <div className="about__grid">
            <AnimateOnScroll>
              <div className="about__text">
                <p>
                  <strong>Oxford Power Contracting LLC</strong>, operating as <strong>Oxford Building Contracting</strong>, is a leading construction contractor in the UAE region with a portfolio that includes some of the Middle East's most iconic and sophisticated construction masterpieces.
                </p>
                <p>
                  We focus on delivering quality while maintaining the highest health and safety standards. Our registered status with DEWA and commitment to innovation and technology has built our reputation as a trusted partner for construction projects of all scales.
                </p>
                <p>
                  From healthcare facilities to luxury hospitality projects, from commercial towers to industrial complexes, we bring the same level of expertise, dedication, and precision to every contract.
                </p>
                <div className="about__highlights">
                  <div className="about__highlight">
                    <Shield size={24} />
                    <div>
                      <strong>DEWA Registered</strong>
                      <p>Fully licensed and compliant</p>
                    </div>
                  </div>
                  <div className="about__highlight">
                    <Award size={24} />
                    <div>
                      <strong>20+ Years</strong>
                      <p>Of construction excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="about__image">
                <div className="about__image-placeholder">
                  <Play size={48} />
                  <span>Our Work in Action</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats">
        <div className="container">
          <AnimateOnScroll>
            <div className="stats__grid">
              {stats.map((stat, index) => (
                <div key={index} className="stats__item">
                  <div className="stats__value">
                    <span className="stats__number">{stat.value}</span>
                    <span className="stats__suffix">{stat.suffix}</span>
                  </div>
                  <p className="stats__label">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section services">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-title">
              <h2>Our Services</h2>
              <p>Comprehensive construction solutions tailored to meet the diverse needs of the UAE market.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="services__grid">
              {services.map((service, index) => (
                <motion.div key={index} className="service-card" custom={index} variants={fadeUp}>
                  <div className="service-card__icon">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-us">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-title">
              <h2>Why Choose Us</h2>
              <p>We deliver excellence through experience, quality, and unwavering commitment to our clients.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="why-us__grid">
              {whyUs.map((item, index) => (
                <motion.div key={index} className="why-us__card" custom={index} variants={fadeUp}>
                  <div className="why-us__icon">
                    <item.icon size={32} />
                  </div>
                  <h3 className="why-us__title">{item.title}</h3>
                  <p className="why-us__desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="section projects">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-title">
              <h2>Featured Projects</h2>
              <p>A showcase of our most iconic construction projects across the UAE and Middle East.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="projects__grid">
              {[
                { title: 'Al Noor Hospital', cat: 'Healthcare', loc: 'Dubai, UAE' },
                { title: 'Marina Heights Tower', cat: 'Commercial', loc: 'Abu Dhabi, UAE' },
                { title: 'Al Khaleej Resort', cat: 'Hospitality', loc: 'Sharjah, UAE' },
                { title: 'Emirates Industrial Park', cat: 'Industrial', loc: 'Ajman, UAE' },
                { title: 'Sunset Residences', cat: 'Residential', loc: 'Dubai, UAE' },
                { title: 'Metro Station Complex', cat: 'Infrastructure', loc: 'Dubai, UAE' },
              ].map((project, index) => (
                <motion.div key={index} className="project-card" custom={index} variants={fadeUp}>
                  <div className="project-card__image">
                    <div className="project-card__placeholder">
                      <span>{project.title}</span>
                    </div>
                    <div className="project-card__overlay">
                      <Link to="/projects" className="project-card__link">
                        View Details <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                  <div className="project-card__info">
                    <span className="project-card__category">{project.cat}</span>
                    <h3>{project.title}</h3>
                    <p className="project-card__location">
                      <MapPin size={14} /> {project.loc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="projects__cta">
              <Link to="/projects" className="btn btn-dark">View All Projects</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-title">
              <h2>What Our Clients Say</h2>
              <p>Trusted by leading organizations across the UAE for exceptional construction delivery.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="testimonials__grid">
              {testimonials.map((item, index) => (
                <motion.div key={index} className="testimonial-card" custom={index} variants={fadeUp}>
                  <div className="testimonial-card__stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-card__text">"{item.text}"</p>
                  <div className="testimonial-card__author">
                    <strong>{item.author}</strong>
                    <span>{item.company}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="section contact-cta">
        <div className="container">
          <AnimateOnScroll>
            <div className="contact-cta__card">
              <h2>Ready to Start Your Project?</h2>
              <p>Contact us today for a free consultation and quote. Our team is ready to discuss your construction needs.</p>
              <div className="contact-cta__actions">
                <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
                <a href="tel:+971504181220" className="btn btn-secondary">
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
