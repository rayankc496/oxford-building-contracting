import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Building2,
} from 'lucide-react';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to backend/email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__container">
          <motion.h1 className="page-hero__title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Contact Us
          </motion.h1>
          <motion.p className="page-hero__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Get in touch for a free consultation and quote
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <motion.div className="contact-info__card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <h2>Get In Touch</h2>
                <p>Have a project in mind? Contact us today for a free consultation and detailed quote. Our team is ready to discuss your construction needs.</p>

                <div className="contact-info__items">
                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3>Address</h3>
                      <p>faisal 2 - building office 405, King Faisal St, Al Nad, Sharjah, UAE</p>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3>Phone</h3>
                      <a href="tel:+971504181220">+971 50 418 1220</a>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h3>WhatsApp</h3>
                      <a href="https://wa.me/971504181220" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3>Email</h3>
                      <a href="mailto:INFO@OXFORDPWC.COM">INFO@OXFORDPWC.COM</a>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3>Working Hours</h3>
                      <p>Monday - Thursday: 7:00 AM - 5:00 PM</p>
                      <p>Saturday: 7:00 AM - 5:00 PM</p>
                      <p>Friday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info__certifications">
                  <div className="certification-badge">
                    <Shield size={20} />
                    <span>DEWA Registered</span>
                  </div>
                  <div className="certification-badge">
                    <Building2 size={20} />
                    <span>20+ Years Experience</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <motion.div className="contact-form-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <h2>Request a Quote</h2>
                <p>Fill out the form below and our team will get back to you within 24 hours.</p>

                {isSubmitted ? (
                  <motion.div className="contact-form__success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                    <CheckCircle size={48} />
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+971 50 000 0000" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Service Required</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        <option value="Construction Project Management">Construction Project Management</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="MEP Services">MEP Services</option>
                        <option value="Electrical Installations">Electrical Installations</option>
                        <option value="Fire Alarms & Security">Fire Alarms & Security</option>
                        <option value="Plumbing & Sanitary">Plumbing & Sanitary</option>
                        <option value="Painting & Finishing">Painting & Finishing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Project Details *</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="Tell us about your project requirements, timeline, and any specific needs..."></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary contact-form__submit">
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="section map-section">
        <div className="container">
          <motion.div className="map-wrapper" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="map-title">Find Us</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.839423456789!2d55.3900631!3d25.3380869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bc4fad888e7%3A0x5841ee92f4c5a053!2sOxford%20building%20contracting!5e0!3m2!1sen!2sae!4v1690000000000"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oxford Building Contracting Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
