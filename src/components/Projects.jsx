import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const projects = [
  {
    title: 'E-Commerce Platform (MERN)',
    description:
      'Full-stack MERN e-commerce platform with payment integration, admin dashboard, and real-time inventory & order management. Includes product catalog, cart, checkout and role-based admin panels.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'],
    github: 'https://github.com/Kallappa2005/ecommerce-app',
    live: 'https://example.com/ecommerce',
    image: '/ecommerce.png',
    featured: true,
    accent: '#a855f7',
  },
  {
    title: 'Red Wine Quality Prediction (MLOps)',
    description:
      'Production-style MLOps pipeline for predicting red wine quality. Includes data preprocessing, model training, validation, and a CI/CD workflow to deploy models reproducibly.',
    tech: ['Python', 'scikit-learn', 'Docker', 'MLflow', 'CI/CD'],
    github: 'https://github.com/Kallappa2005/MLOPS_RED_WINE_QUALITY_PREDICTION',
    live: 'https://wine-quality-predictor-01.onrender.com/',
    image: '/winequality.png',
    accent: '#6ee7b7',
  },
  {
    title: 'Kidney Disease Prediction (MLOps)',
    description:
      'MLOps pipeline and deployed service for kidney disease detection. Automated training pipelines, model monitoring, and a lightweight web interface for inference.',
    tech: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'Prometheus'],
    github: 'https://github.com/Kallappa2005/MLOPS_KIDNEY_DISEASE_CNN',
    live: 'https://mlops-kidney-disease-cnn.onrender.com',
    image: '/kidneydesease.png',
    accent: '#60a5fa',
  },
  {
    title: 'Employee Management System (DevOps)',
    description:
      'DevOps-focused employee management system with CI/CD, containerized services, infrastructure as code, and secure deployment pipelines for scalable team operations.',
    tech: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'PostgreSQL'],
    github: 'https://github.com/Kallappa2005/devops-WorkForce-Hub-system',
    // live: 'https://example.com/employee-management',
    image: '/employee.png',
    accent: '#f59e0b',
  },
  {
    title: 'Researcher & AI Agent for Blog Writing',
    description:
      'An AI-powered assistant that researches topics and drafts blog posts. Integrates retrieval, generation, and human-in-the-loop editing to produce high-quality articles.',
    tech: ['Python', 'LangChain', 'OpenAI', 'Vector DB'],
    github: 'https://github.com/Kallappa2005/Researcher_and_AiAgent_For_Blog_Writing',
    live: 'https://example.com/ai-blog-agent',
    image: '/aiagent.png',
    accent: '#ec4899',
  },
  {
    title: 'JobShield AI',
    description:
      'Fake job detection and security-focused analysis platform. Built with Python and Flask, includes neo4j-based link analysis and heuristics to identify fraudulent job listings.',
    tech: ['Python', 'Flask', 'Neo4j', 'Security'],
    github: 'https://github.com/Kallappa2005/JobShield-AI',
    live: 'https://example.com/jobshield',
    image: '/project_jobshield.png',
    accent: '#10b981',
  },
];

const ProjectCard = ({ project, index, inView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        background: 'rgba(17, 34, 64, 0.7)',
        backdropFilter: 'blur(16px)',
        border: hovered
          ? `1.5px solid ${project.accent}60`
          : '1.5px solid rgba(255,255,255,0.06)',
        boxShadow: hovered
          ? `0 0 40px ${project.accent}20, 0 20px 60px rgba(0,0,0,0.4)`
          : '0 4px 24px rgba(0,0,0,0.2)',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        cursor: 'pointer',
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div style={{
          position: 'absolute', top: 16, left: 16, zIndex: 10,
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '4px 12px', borderRadius: 100,
          background: 'rgba(100,255,218,0.15)',
          border: '1px solid rgba(100,255,218,0.35)',
          backdropFilter: 'blur(8px)',
        }}>
          <HiSparkles style={{ color: '#64ffda', fontSize: 14 }} />
          <span style={{
            color: '#64ffda', fontSize: 11, fontWeight: 700,
            fontFamily: 'JetBrains Mono, monospace', letterSpacing: 1,
          }}>FEATURED</span>
        </div>
      )}

      {/* Image */}
      <div style={{
        position: 'relative', height: 220, overflow: 'hidden',
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to bottom, transparent 30%, rgba(17,34,64,0.95) 100%)`,
        }} />
        {/* Accent glow on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${project.accent}15, transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }} />

      </div>

      {/* Content */}
      <div style={{ padding: '24px 24px 28px' }}>
        <h3 style={{
          color: hovered ? project.accent : '#ccd6f6',
          fontSize: 20, fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          marginBottom: 10,
          transition: 'color 0.3s ease',
        }}>
          {project.title}
        </h3>
        <p style={{
          color: '#8892b0', fontSize: 14,
          lineHeight: 1.75, marginBottom: 20,
          fontFamily: 'Inter, sans-serif',
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {project.tech.map(t => (
            <span
              key={t}
              style={{
                padding: '4px 12px', borderRadius: 100,
                fontSize: 11, fontWeight: 600,
                fontFamily: 'JetBrains Mono, monospace',
                color: project.accent,
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}30`,
                letterSpacing: 0.5,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: 10 }}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '10px 16px',
              borderRadius: 10,
              textDecoration: 'none',
              fontSize: 13, fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              color: '#0a192f',
              background: `linear-gradient(135deg, ${project.accent}, ${project.accent}cc)`,
              boxShadow: `0 4px 14px ${project.accent}30`,
              transition: 'all 0.25s ease',
              letterSpacing: 0.3,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 6px 20px ${project.accent}55`;
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `0 4px 14px ${project.accent}30`;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FiExternalLink size={14} />
            Live View
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '10px 16px',
              borderRadius: 10,
              textDecoration: 'none',
              fontSize: 13, fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              color: '#ccd6f6',
              background: 'rgba(255,255,255,0.05)',
              border: '1.5px solid rgba(255,255,255,0.1)',
              transition: 'all 0.25s ease',
              letterSpacing: 0.3,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#64ffda50';
              e.currentTarget.style.color = '#64ffda';
              e.currentTarget.style.background = 'rgba(100,255,218,0.06)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = '#ccd6f6';
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FiGithub size={14} />
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="projects"
      className="mesh-bg-1"
      style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Blobs */}
      <div style={{
        position: 'absolute', top: 100, left: -100, width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 60%)',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', bottom: 100, right: -100, width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 60%)',
        filter: 'blur(60px)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Heading */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#64ffda', fontSize: 20, fontWeight: 600, marginRight: 14,
            }}>04.</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800, color: '#ccd6f6',
              fontFamily: 'Inter, sans-serif',
            }}>Featured Projects</h2>
            <div className="section-line" />
          </div>
          <p style={{
            color: '#8892b0', fontSize: 16, marginBottom: 56,
            fontFamily: 'Inter, sans-serif',
            paddingLeft: 50,
          }}>
            A selection of my recent work that showcases my skills and passion.
          </p>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 28,
          }}>
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} inView={inView} />
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            style={{ textAlign: 'center', marginTop: 64 }}
          >
            <motion.a
              href="https://github.com/kallappa2005?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(100,255,218,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                textDecoration: 'none',
                padding: '14px 36px', borderRadius: 12,
                border: '1.5px solid rgba(100,255,218,0.4)',
                color: '#64ffda',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 14, fontWeight: 600,
                background: 'rgba(100,255,218,0.05)',
                letterSpacing: 1,
                transition: 'all 0.3s ease',
              }}
            >
              View All on GitHub
              <FiExternalLink size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
