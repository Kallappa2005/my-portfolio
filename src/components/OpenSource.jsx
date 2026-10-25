import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
            }}>05.</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800, color: '#ccd6f6',
              fontFamily: 'Inter, sans-serif',
            }}>Open Source Contribution</h2>
            <div className="section-line" />
          </div>

          <p style={{
            color: '#8892b0', fontSize: 16, marginBottom: 24,
            fontFamily: 'Inter, sans-serif', maxWidth: 760, paddingLeft: 50,
          }}>
            I participated in GSSoC 2026. During the program, I focused on issue triage, bug fixes, and feature pull requests across multiple repositories.
          </p>

          <div style={{ marginBottom: 28, maxWidth: 760 }}>
            <ul style={{ color: '#ccd6f6', fontSize: 15, lineHeight: 1.8, paddingLeft: 18 }}>
              <li>Raised <strong>9+</strong> issues across projects such as <em>eventra</em> and <em>ardupilot-log-diagnosis</em>.</li>
              <li>Opened <strong>7+</strong> pull requests which were reviewed and successfully merged.</li>
              <li>Recognised globally with a reward of <strong>130 rank</strong> among ~35,000 contributors for active participation.</li>
            </ul>
          </div>

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
                border: '1px solid rgba(168,85,247,0.12)',
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
                Contributed to open-source repositories by identifying bugs, improving code quality, and collaborating with maintainers to deliver reliable fixes and features.
              </p>

              <div style={{ display: 'grid', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#a855f7', fontWeight: 800, marginTop: 2 }}>▹</span>
                  <span style={{ color: '#ccd6f6', fontSize: 14, lineHeight: 1.7 }}>Selected for GSSoC 2026</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#a855f7', fontWeight: 800, marginTop: 2 }}>▹</span>
                  <span style={{ color: '#ccd6f6', fontSize: 14, lineHeight: 1.7 }}>Contributed across multiple open-source repositories</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#a855f7', fontWeight: 800, marginTop: 2 }}>▹</span>
                  <span style={{ color: '#ccd6f6', fontSize: 14, lineHeight: 1.7 }}>Raised issues and submitted merged pull requests</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#a855f7', fontWeight: 800, marginTop: 2 }}>▹</span>
                  <span style={{ color: '#ccd6f6', fontSize: 14, lineHeight: 1.7 }}>Collaborated with maintainers through Git and GitHub workflows</span>
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