import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Award,
  Shield,
  Users,
  CheckCircle,
  Target,
  Eye,
  Heart,
  Building2,
} from 'lucide-react';
import './About.css';

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

const values = [
  { icon: Target, title: 'Mission', desc: 'To deliver exceptional construction solutions that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability.' },
  { icon: Eye, title: 'Vision', desc: 'To be the most trusted and sought-after construction partner in the UAE, recognized for our innovation, reliability, and commitment to excellence.' },
  { icon: Heart, title: 'Values', desc: 'Integrity, quality, safety, innovation, and client satisfaction form the foundation of everything we do at Oxford Power Contracting.' },
];

const milestones = [
  { year: '2006', title: 'Company Founded', desc: 'Established in Sharjah with a vision to deliver quality construction services.' },
  { year: '2010', title: 'DEWA Registration', desc: 'Became a registered contractor with Dubai Electricity & Water Authority.' },
  { year: '2015', title: 'Major Expansion', desc: 'Expanded operations across UAE with landmark healthcare and commercial projects.' },
  { year: '2020', title: 'Industrial Growth', desc: 'Entered industrial and infrastructure sectors with large-scale projects.' },
  { year: '2024', title: '20+ Years Strong', desc: 'Celebrating over 20 years of construction excellence and iconic project delivery.' },
];

const team = [
  { name: 'Leadership Team', role: 'Executive Management', desc: 'Experienced leaders driving our vision for construction excellence.' },
  { name: 'Engineering Team', role: 'Technical Experts', desc: 'Qualified engineers specializing in civil, MEP, and structural engineering.' },
  { name: 'Project Management', role: 'On-Site Supervision', desc: 'Dedicated project managers ensuring timely delivery and quality control.' },
  { name: 'Safety & Quality', role: 'Compliance & Standards', desc: 'Dedicated team maintaining the highest health and safety standards.' },
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

export default function About() {
  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__container">
          <AnimateOnScroll>
            <motion.h1 className="page-hero__title" variants={fadeUp} custom={0}>About Us</motion.h1>
            <motion.p className="page-hero__subtitle" variants={fadeUp} custom={1}>
              Building trust through two decades of construction excellence
            </motion.p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== COMPANY STORY ===== */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story__grid">
            <AnimateOnScroll>
              <div className="about-story__content">
                <h2>Our Story</h2>
                <p>
                  <strong>Oxford Power Contracting LLC</strong>, operating as <strong>Oxford Building Contracting</strong>, was founded in 2006 with a vision to deliver exceptional construction services in the UAE.
                </p>
                <p>
                  For almost 20 years, we have shaped the skylines of major cities, set the infrastructure for large industrial facilities, and built landmark projects in healthcare, hospitality, commercial, and residential sectors.
                </p>
                <p>
                  Our success is built on our total commitment to quality and meeting client requirements by coupling innovation and technology. We are registered with DEWA and maintain the highest health and safety standards across all our projects.
                </p>
                <div className="about-story__features">
                  <div className="about-story__feature">
                    <CheckCircle size={20} />
                    <span>DEWA Registered Contractor</span>
                  </div>
                  <div className="about-story__feature">
                    <CheckCircle size={20} />
                    <span>ISO Certified Processes</span>
                  </div>
                  <div className="about-story__feature">
                    <CheckCircle size={20} />
                    <span>20+ Years Experience</span>
                  </div>
                  <div className="about-story__feature">
                    <CheckCircle size={20} />
                    <span>500+ Projects Delivered</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="about-story__image">
                <div className="about-story__placeholder">
                  <Building2 size={64} />
                  <span>20+ Years of Excellence</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== MISSION, VISION, VALUES ===== */}
      <section className="section values">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-title">
              <h2>Our Foundation</h2>
              <p>The principles that guide every project we undertake.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="values__grid">
              {values.map((item, index) => (
                <motion.div key={index} className="value-card" custom={index} variants={fadeUp}>
                  <div className="value-card__icon">
                    <item.icon size={32} />
                  </div>
                  <h3 className="value-card__title">{item.title}</h3>
                  <p className="value-card__desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="section timeline-section">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-title">
              <h2>Our Journey</h2>
              <p>Key milestones in our 20+ year history of construction excellence.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="timeline">
              {milestones.map((item, index) => (
                <motion.div key={index} className="timeline__item" custom={index} variants={fadeUp}>
                  <div className="timeline__marker" />
                  <div className="timeline__content">
                    <span className="timeline__year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section team">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-title">
              <h2>Our Teams</h2>
              <p>Dedicated professionals driving excellence in every project.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="team__grid">
              {team.map((member, index) => (
                <motion.div key={index} className="team-card" custom={index} variants={fadeUp}>
                  <div className="team-card__avatar">
                    <Users size={40} />
                  </div>
                  <h3 className="team-card__name">{member.name}</h3>
                  <span className="team-card__role">{member.role}</span>
                  <p className="team-card__desc">{member.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
