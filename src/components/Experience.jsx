import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';

const highlights = [
  'Completed an 8-month Backend Developer Internship at REVA Development Centre, developing features for the Anveshana Research Portal.',
  'Optimized MongoDB schemas and Redis caching, reducing API response time by 38%.',
  'Implemented JWT authentication, role-based access control, and REST APIs using Node.js and Express.js.',
  'Wrote automated API tests using Jest to improve reliability and code quality.',
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      className="mesh-bg-1"
      style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', top: 80, right: -80, width: 420, height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,255,218,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 60, left: -100, width: 380, height: 380,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#64ffda', fontSize: 20, fontWeight: 600, marginRight: 14,
            }}>02.</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800, color: '#ccd6f6',
              fontFamily: 'Inter, sans-serif',
            }}>Experience</h2>
            <div className="section-line" />
          </div>

          <p style={{
            color: '#8892b0', fontSize: 16, marginBottom: 44,
            fontFamily: 'Inter, sans-serif', maxWidth: 760, paddingLeft: 50,
          }}>
            Internship experience and project work from my MERN stack role at Anveshana REVA Research Portal.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 32,
            alignItems: 'start',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass"
              style={{
                borderRadius: 24,
                padding: 'clamp(24px, 4vw, 36px)',
                border: '1px solid rgba(100,255,218,0.12)',
                maxWidth: 900,
                width: '100%',
                margin: '0 auto',
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 999,
                background: 'rgba(100,255,218,0.08)',
                border: '1px solid rgba(100,255,218,0.18)',
                color: '#64ffda',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                letterSpacing: 1,
                marginBottom: 18,
              }}>
                Internship
              </div>

              <h3 style={{
                color: '#ccd6f6', fontSize: 28, fontWeight: 800,
                fontFamily: 'Inter, sans-serif', marginBottom: 10,
              }}>
                Backend Developer
              </h3>
              <p style={{ color: '#64ffda', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                Anveshana REVA Research Portal
              </p>
              <p style={{ color: '#8892b0', fontSize: 15, lineHeight: 1.8, marginBottom: 22 }}>
                I completed an 8-month Backend Developer Internship focused on developing scalable REST APIs using Node.js and Express.js, implementing JWT authentication and role-based access control, optimizing MongoDB queries with Redis caching, and improving API reliability through automated testing.
              </p>

              <div style={{ display: 'grid', gap: 12 }}>
                {highlights.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: '#64ffda', fontWeight: 800, marginTop: 2 }}>▹</span>
                    <span style={{ color: '#ccd6f6', fontSize: 14, lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://researchportal.reva.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 26,
                  padding: '11px 18px',
                  borderRadius: 10,
                  color: '#64ffda',
                  border: '1px solid rgba(100,255,218,0.35)',
                  background: 'rgba(100,255,218,0.06)',
                  textDecoration: 'none',
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Visit REVA Research Portal
                <FiExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;