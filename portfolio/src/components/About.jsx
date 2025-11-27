import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Coffee } from 'lucide-react';
import './About.css';

const highlights = [
  { icon: Code2, label: "Clean Code", value: "5+ Years" },
  { icon: Palette, label: "UI/UX Design", value: "Pixel Perfect" },
  { icon: Rocket, label: "Projects", value: "50+" },
  { icon: Coffee, label: "Coffee Cups", value: "∞" },
];

export default function About() {
  const ref = useRef(null);

  return (
    <section id="about" className="about-section" ref={ref}>

      <div className="about-container">
        {/* Section Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="about-title">
            <span className="about-number">01.</span> About Me
          </h2>
          <div className="about-divider" />
        </motion.div>

        <div className="about-grid">
          {/* Image */}
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-decoration" />
              <div className="about-image-content">
                <img 
                  src="/adnanepic.jpg" 
                  alt="About John Doe" 
                  className="about-image" 
                />
                <div className="about-image-overlay" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
                    <h1>EL MENOUAR Adnane</h1>

            <div className="about-text">
              <p>
                Salut, je suis Adnane, Étudiant motivé ,passionné par le développement et les technologies, cherchant à renforcer ses compétences à travers des projets et expériences pratiques . 
              </p>
            </div>

            {/* Tech Stack */}
            <motion.div
              className="tech-stack"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="tech-stack-title">
                Here are a few technologies I've been working with recently:
              </p>
              <div className="tech-grid">
                {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Next.js", "PostgreSQL"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="tech-item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="tech-bullet">▹</span>
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          className="highlights-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          {highlights.map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              className="highlight-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Icon className="highlight-icon" />
              <p className="highlight-value">{value}</p>
              <p className="highlight-label">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}