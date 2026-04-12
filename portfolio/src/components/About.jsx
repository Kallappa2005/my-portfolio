import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '3+',  label: 'Years Experience' },
  { value: '20+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '∞',   label: 'Passion' },
];

const skills = [
  'JavaScript (ES6+)',
  'React.js',
  'Node.js',
  'Three.js',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'MongoDB',
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      id="about"
      className="mesh-bg-1"
      style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: 80, right: -80, width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,255,218,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 80, left: -80, width: 350, height: 350,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section heading */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 64 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#64ffda', fontSize: 20, fontWeight: 600, marginRight: 14,
            }}>01.</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#ccd6f6',
              fontFamily: 'Inter, sans-serif',
            }}>About Me</h2>
            <div className="section-line" />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 56,
            alignItems: 'start',
          }}>
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ gridColumn: 'span 2' }}
              className="about-text-col"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                {[
                  `Hello! I'm a passionate developer who loves creating things that live on the internet. My interest in web development started back in 2021 when I decided to try building my first website — turns out hacking together a custom website taught me a lot about HTML & CSS!`,
                  `Fast-forward to today, and I've had the privilege of working on various projects ranging from e-commerce platforms to interactive 3D experiences. My main focus these days is building accessible, inclusive products and digital experiences with cutting-edge technology.`,
                  `I'm particularly excited about the intersection of creativity and technology, especially in 3D web experiences using Three.js and React Three Fiber.`,
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{
                      color: '#8892b0',
                      fontSize: 17,
                      lineHeight: 1.85,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <p style={{
                color: '#ccd6f6', fontWeight: 600, fontSize: 17,
                marginBottom: 20, fontFamily: 'Inter, sans-serif',
              }}>
                Technologies I've been working with recently:
              </p>
              <ul style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px 32px',
                listStyle: 'none',
                padding: 0,
              }}>
                {skills.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      color: '#8892b0', fontSize: 15,
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'default',
                    }}
                  >
                    <span style={{
                      color: '#64ffda', fontSize: 12, fontWeight: 700,
                      fontFamily: 'JetBrains Mono, monospace',
                    }}>▹</span>
                    <span style={{ transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#64ffda'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8892b0'}>
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Avatar card + stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 28 }}
            >
              {/* Avatar */}
              <div style={{ position: 'relative' }}>
                <div
                  className="glass"
                  style={{
                    borderRadius: 24,
                    overflow: 'hidden',
                    position: 'relative',
                    aspectRatio: '1',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1.5px solid rgba(100,255,218,0.2)',
                    boxShadow: '0 0 40px rgba(100,255,218,0.1)',
                  }}
                >
                  {/* Background gradient */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(100,255,218,0.1) 0%, rgba(17,34,64,0.8) 50%, rgba(168,85,247,0.1) 100%)',
                  }} />
                  <span style={{
                    fontSize: 100,
                    position: 'relative', zIndex: 1,
                    animation: 'float 5s ease-in-out infinite',
                    filter: 'drop-shadow(0 0 30px rgba(100,255,218,0.4))',
                  }}>
                    👨‍💻
                  </span>
                  {/* Corner accents */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0,
                    width: 40, height: 40,
                    borderTop: '3px solid #64ffda', borderLeft: '3px solid #64ffda',
                    borderRadius: '0 0 8px 0',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: 40, height: 40,
                    borderBottom: '3px solid #a855f7', borderRight: '3px solid #a855f7',
                    borderRadius: '8px 0 0 0',
                  }} />
                </div>
                {/* Decorative frame offset */}
                <div style={{
                  position: 'absolute', inset: -8,
                  border: '1.5px solid rgba(168,85,247,0.2)',
                  borderRadius: 30, zIndex: -1,
                  transform: 'translate(8px, 8px)',
                }} />
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="glass"
                    style={{
                      borderRadius: 16, padding: '20px 16px',
                      textAlign: 'center',
                      border: '1px solid rgba(100,255,218,0.12)',
                      cursor: 'default',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(100,255,218,0.4)';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(100,255,218,0.15)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(100,255,218,0.12)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      fontSize: 30, fontWeight: 900,
                      fontFamily: 'Inter, sans-serif',
                      background: 'linear-gradient(135deg, #64ffda, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>{s.value}</div>
                    <div style={{
                      fontSize: 11, color: '#8892b0', marginTop: 4,
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500, letterSpacing: 0.5,
                    }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
