import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiExternalLink, FiFileText } from 'react-icons/fi';

const resumeUrl = '/Resume.pdf';

const Resume = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="resume"
      className="mesh-bg-1"
      style={{ padding: '110px 24px', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', top: -80, right: -120, width: 380, height: 380,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,255,218,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -120, width: 360, height: 360,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="glass"
          style={{
            borderRadius: 24,
            border: '1.5px solid rgba(100,255,218,0.16)',
            padding: '34px clamp(18px, 4vw, 40px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                border: '1px solid rgba(100,255,218,0.3)',
                background: 'rgba(100,255,218,0.08)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64ffda',
              }}>
                <FiFileText size={17} />
              </span>
              <span style={{
                color: '#64ffda',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                letterSpacing: 1.6,
              }}>
                RESUME
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: 1.2,
              fontWeight: 800,
              color: '#ccd6f6',
              fontFamily: 'Inter, sans-serif',
              marginBottom: 12,
            }}>
              Download My Resume
            </h2>

            <p style={{
              color: '#8892b0',
              fontSize: 16,
              lineHeight: 1.75,
              fontFamily: 'Inter, sans-serif',
              maxWidth: 680,
            }}>
              Get the complete summary of my technical skills, internship experience, projects, and achievements in one document.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'flex-start' }}>
            <motion.a
              href={resumeUrl}
              download="Kallappa-M-Kabboor-Resume.pdf"
              whileHover={{ y: -2, boxShadow: '0 10px 28px rgba(100,255,218,0.25)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                textDecoration: 'none',
                padding: '12px 22px',
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: 'Inter, sans-serif',
                color: '#0a192f',
                background: 'linear-gradient(135deg, #64ffda, #6ee7b7)',
                border: '1px solid rgba(100,255,218,0.5)',
              }}
            >
              <FiDownload size={16} />
              Download Resume
            </motion.a>

            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                textDecoration: 'none',
                padding: '12px 22px',
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: 'Inter, sans-serif',
                color: '#ccd6f6',
                background: 'rgba(255,255,255,0.04)',
                border: '1.5px solid rgba(255,255,255,0.12)',
              }}
            >
              <FiExternalLink size={16} />
              Preview PDF
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
