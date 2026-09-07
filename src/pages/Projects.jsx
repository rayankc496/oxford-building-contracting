import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import './Projects.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const projects = [
  { id: 1, title: 'Al Noor Hospital', category: 'Healthcare', location: 'Dubai, UAE', year: '2023', desc: 'Complete MEP and civil works for a 200-bed hospital facility including specialized medical gas systems.' },
  { id: 2, title: 'Marina Heights Tower', category: 'Commercial', location: 'Abu Dhabi, UAE', year: '2022', desc: '35-story commercial tower with full construction project management and fit-out services.' },
  { id: 3, title: 'Al Khaleej Resort', category: 'Hospitality', location: 'Sharjah, UAE', year: '2023', desc: 'Luxury resort development with 150 rooms, pool complex, and landscaped gardens.' },
  { id: 4, title: 'Emirates Industrial Park', category: 'Industrial', location: 'Ajman, UAE', year: '2021', desc: 'Large-scale industrial complex with warehouses, office buildings, and infrastructure.' },
  { id: 5, title: 'Sunset Residences', category: 'Residential', location: 'Dubai, UAE', year: '2022', desc: 'Premium residential complex with 120 apartments, parking, and community facilities.' },
  { id: 6, title: 'Metro Station Complex', category: 'Infrastructure', location: 'Dubai, UAE', year: '2020', desc: 'Infrastructure works for metro station including civil, electrical, and MEP systems.' },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeLightbox = () => setSelectedProject(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setSelectedProject(projects[(currentIndex + 1) % projects.length]);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setSelectedProject(projects[(currentIndex - 1 + projects.length) % projects.length]);
  };

  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__container">
          <motion.h1 className="page-hero__title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Our Projects
          </motion.h1>
          <motion.p className="page-hero__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Showcasing landmark construction projects across the UAE and Middle East
          </motion.p>
        </div>
      </section>

      {/* ===== PROJECTS GRID ===== */}
      <section className="section projects-page">
        <div className="container">
          <motion.div className="projects-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}>
            {projects.map((project, index) => (
              <motion.div key={project.id} className="project-card" custom={index} variants={fadeUp} onClick={() => openLightbox(project, index)}>
                <div className="project-card__image">
                  <div className="project-card__placeholder">
                    <span>{project.title}</span>
                  </div>
                  <div className="project-card__overlay">
                    <span className="project-card__view">View Details</span>
                  </div>
                </div>
                <div className="project-card__info">
                  <span className="project-card__category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p className="project-card__location">
                    <MapPin size={14} /> {project.location} • {project.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {selectedProject && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            <X size={24} />
          </button>
          <button className="lightbox__prev" onClick={(e) => { e.stopPropagation(); prevProject(); }} aria-label="Previous">
            <ChevronLeft size={32} />
          </button>
          <button className="lightbox__next" onClick={(e) => { e.stopPropagation(); nextProject(); }} aria-label="Next">
            <ChevronRight size={32} />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__image">
              <div className="lightbox__placeholder">
                <span>{selectedProject.title}</span>
              </div>
            </div>
            <div className="lightbox__details">
              <span className="lightbox__category">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
              <p className="lightbox__location">
                <MapPin size={16} /> {selectedProject.location} • {selectedProject.year}
              </p>
              <p className="lightbox__desc">{selectedProject.desc}</p>
              <div className="lightbox__counter">
                {currentIndex + 1} / {projects.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
