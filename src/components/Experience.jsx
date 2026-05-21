import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const highlights = [
  '6+ months internship in MERN stack',
  'Worked on Anveshana REVA Research Portal',
  'Built user-facing features and maintained responsive UI flows',
  'Collaborated on practical product development in a team setting',
];

const offerLetters = [
  { src: '/Offer_letter_1.jpeg', label: 'Offer Letter' },
  { src: '/Offer_letter_2.jpeg', label: '' },
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
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass"
              style={{
                borderRadius: 24,
                padding: 30,
                border: '1px solid rgba(100,255,218,0.12)',
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
                MERN Stack Intern
              </h3>
              <p style={{ color: '#64ffda', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                Anveshana REVA Research Portal
              </p>
              <p style={{ color: '#8892b0', fontSize: 15, lineHeight: 1.8, marginBottom: 22 }}>
                I completed a 6+ month internship focused on MERN stack development, where I worked on
                research portal features, UI improvements, and practical product development workflows.
              </p>

              <div style={{ display: 'grid', gap: 12 }}>
                {highlights.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: '#64ffda', fontWeight: 800, marginTop: 2 }}>▹</span>
                    <span style={{ color: '#ccd6f6', fontSize: 14, lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 26,
                paddingTop: 18,
                borderTop: '1px solid rgba(100,255,218,0.12)',
                color: '#8892b0',
                fontSize: 14,
                lineHeight: 1.7,
              }}>
                This section highlights the internship proof documents you already added in the public folder.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'grid', gap: 18 }}
            >
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                  {offerLetters.map((doc, index) => (
                    <div
                      key={doc.label}
                      className="glass offer-card"
                      style={{
                        borderRadius: 12,
                        padding: 10,
                        border: index === 0 ? '1px solid rgba(100,255,218,0.12)' : '1px solid rgba(168,85,247,0.12)',
                        width: 260,
                        maxWidth: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                      }}
                    >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#ccd6f6', fontWeight: 600, fontSize: 13 }}>{doc.label}</span>
                      <span style={{ color: '#8892b0', fontSize: 11 }}>Public asset</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: 460,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      borderRadius: 10,
                      background: 'rgba(10,25,47,0.55)'
                    }}>
                      <img
                        src={doc.src}
                        alt={doc.label}
                        style={{
                          width: 'auto',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;