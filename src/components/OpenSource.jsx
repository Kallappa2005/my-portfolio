import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const badges = [
  { src: '/contributor.png', label: 'Contributor Badge' },
  { src: '/open.png', label: 'Open Source Badge' },
];

const OpenSource = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="opensource"
      className="mesh-bg-2"
      style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', top: 70, left: '12%', width: 420, height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,255,218,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 70, right: '10%', width: 380, height: 380,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 28 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#64ffda', fontSize: 20, fontWeight: 600, marginRight: 14,
            }}>05.</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800, color: '#ccd6f6',
              fontFamily: 'Inter, sans-serif',
            }}>Open Source Contribution</h2>
            <div className="section-line" />
          </div>

          <p style={{
            color: '#8892b0', fontSize: 16, marginBottom: 44,
            fontFamily: 'Inter, sans-serif', maxWidth: 760,
          }}>
            Selected for GSSoC 2026 and actively contributing through open source learning, badges, and selection proof.
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
                border: '1px solid rgba(168,85,247,0.12)',
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 999,
                background: 'rgba(168,85,247,0.08)',
                border: '1px solid rgba(168,85,247,0.18)',
                color: '#a855f7',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                letterSpacing: 1,
                marginBottom: 18,
              }}>
                GSSoC 2026
              </div>

              <h3 style={{
                color: '#ccd6f6', fontSize: 28, fontWeight: 800,
                fontFamily: 'Inter, sans-serif', marginBottom: 10,
              }}>
                Open Source Contributor
              </h3>
              <p style={{ color: '#64ffda', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                Selected for GirlScript Summer of Code 2026
              </p>
              <p style={{ color: '#8892b0', fontSize: 15, lineHeight: 1.8, marginBottom: 22 }}>
                This section shows the selection email and the badge images from the public folder as proof of
                contribution and selection.
              </p>

              <div style={{ display: 'grid', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#a855f7', fontWeight: 800, marginTop: 2 }}>▹</span>
                  <span style={{ color: '#ccd6f6', fontSize: 14, lineHeight: 1.7 }}>Selected for GSSoC 2026</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#a855f7', fontWeight: 800, marginTop: 2 }}>▹</span>
                  <span style={{ color: '#ccd6f6', fontSize: 14, lineHeight: 1.7 }}>Open source learning and badge milestones</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#a855f7', fontWeight: 800, marginTop: 2 }}>▹</span>
                  <span style={{ color: '#ccd6f6', fontSize: 14, lineHeight: 1.7 }}>Selection email and badge screenshots included</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'grid', gap: 18 }}
            >
              <div style={{ display: 'grid', gap: 12 }}>
                <div
                  className="glass"
                  style={{
                    borderRadius: 14,
                    padding: 12,
                    border: '1px solid rgba(168,85,247,0.12)',
                    maxWidth: 420,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ color: '#ccd6f6', fontWeight: 600 }}>Selection Email</span>
                    <span style={{ color: '#8892b0', fontSize: 11 }}>Public asset</span>
                  </div>
                  <div style={{ width: '100%', height: 180, overflow: 'hidden', borderRadius: 10, background: 'rgba(10,25,47,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src="/email-image.png"
                      alt="GSSoC selection email"
                      style={{ width: 'auto', height: '100%', objectFit: 'contain', display: 'block' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {badges.map((badge) => (
                    <div
                      key={badge.label}
                      className="glass"
                      style={{
                        borderRadius: 12,
                        padding: 10,
                        border: '1px solid rgba(100,255,218,0.12)',
                        width: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <div style={{ width: 100, height: 75, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src={badge.src}
                          alt={badge.label}
                          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                        />
                      </div>
                      <p style={{ color: '#ccd6f6', fontSize: 12, fontWeight: 600, textAlign: 'center', margin: 0 }}>{badge.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;