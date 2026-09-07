import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Wrench,
  Building2,
  HardHat,
  Zap,
  Droplets,
  Paintbrush,
  Layers,
  Shield,
  Settings,
  Flame,
  Tv,
  Lightbulb,
  Wind,
  DoorOpen,
  ClipboardList,
  Hammer,
} from 'lucide-react';
import './Services.css';

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
  visible: { transition: { staggerChildren: 0.08 } },
};

const coreServices = [
  {
    icon: ClipboardList,
    title: 'Construction Project Management',
    desc: 'End-to-end management from planning to delivery, ensuring timely completion and adherence to quality standards.',
  },
  {
    icon: Building2,
    title: 'Civil Engineering',
    desc: 'Expert civil engineering solutions for infrastructure, foundations, structural works, and site development across the UAE.',
  },
  {
    icon: Settings,
    title: 'MEP Services',
    desc: 'Complete Mechanical, Electrical, and Plumbing services for commercial, residential, and industrial construction projects.',
  },
  {
    icon: Zap,
    title: 'Electrical Installations',
    desc: 'Professional electrical system design, installation, testing, and maintenance for all building types and scales.',
  },
];

const specializedServices = [
  {
    icon: Flame,
    title: 'Fire Alarms & Security',
    desc: 'Comprehensive fire detection, alarm systems, and security alarm installations ensuring safety compliance.',
  },
  {
    icon: Tv,
    title: 'SMATV & Door Entry',
    desc: 'Satellite master antenna TV systems and advanced door entry/intercom solutions for modern buildings.',
  },
  {
    icon: Lightbulb,
    title: 'Emergency Lighting',
    desc: 'Emergency and exit lighting systems design and installation for commercial and industrial safety compliance.',
  },
  {
    icon: Wind,
    title: 'HVAC & Ventilation',
    desc: 'Air-conditioning, ventilation, and climate control systems installation and maintenance for optimal comfort.',
  },
  {
    icon: Droplets,
    title: 'Plumbing & Sanitary',
    desc: 'Complete plumbing and sanitary contracting for new construction, renovation, and maintenance projects.',
  },
  {
    icon: Layers,
    title: 'Tiling & Flooring',
    desc: 'Professional floor and wall tiling services with premium materials and precision installation.',
  },
  {
    icon: Paintbrush,
    title: 'Painting & Plastering',
    desc: 'High-quality painting, plastering, block work, and finishing services for interior and exterior surfaces.',
  },
  {
    icon: Hammer,
    title: 'Block Work & Plastering',
    desc: 'Expert masonry, block work, and plastering services for structural and decorative applications.',
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

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const displayedServices =
    activeTab === 'all'
      ? [...coreServices, ...specializedServices]
      : activeTab === 'core'
      ? coreServices
      : specializedServices;

  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__container">
          <motion.h1 className="page-hero__title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Our Services
          </motion.h1>
          <motion.p className="page-hero__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Comprehensive construction solutions tailored to meet the diverse needs of the UAE market
          </motion.p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section services-list">
        <div className="container">
          <AnimateOnScroll>
            <div className="services-tabs">
              <button
                className={`services-tab ${activeTab === 'all' ? 'services-tab--active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Services
              </button>
              <button
                className={`services-tab ${activeTab === 'core' ? 'services-tab--active' : ''}`}
                onClick={() => setActiveTab('core')}
              >
                Core Services
              </button>
              <button
                className={`services-tab ${activeTab === 'specialized' ? 'services-tab--active' : ''}`}
                onClick={() => setActiveTab('specialized')}
              >
                Specialized Services
              </button>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="services-grid">
              {displayedServices.map((service, index) => (
                <motion.div key={index} className="service-card" custom={index} variants={fadeUp}>
                  <div className="service-card__header">
                    <div className="service-card__icon">
                      <service.icon size={32} />
                    </div>
                    <h3 className="service-card__title">{service.title}</h3>
                  </div>
                  <p className="service-card__desc">{service.desc}</p>
                  <div className="service-card__features">
                    <span className="service-card__feature">
                      <CheckCircle size={16} /> Professional Execution
                    </span>
                    <span className="service-card__feature">
                      <CheckCircle size={16} /> Quality Assured
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section services-cta">
        <div className="container">
          <motion.div
            className="services-cta__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Need a Custom Solution?</h2>
            <p>Contact our team to discuss your specific construction requirements and get a tailored proposal.</p>
            <a href="/contact" className="btn btn-primary">
              Get In Touch <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
