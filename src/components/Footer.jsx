import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: FiGithub, href: 'https://github.com/kallappa2005', label: 'GitHub', color: '#ccd6f6', hover: '#64ffda' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kallappa-kabboor-a9a46329b/', label: 'LinkedIn', color: '#ccd6f6', hover: '#0077b5' },
    { icon: FiMail, href: 'mailto:kallappakabbur874@example.com', label: 'Email', color: '#ccd6f6', hover: '#64ffda' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: '#090f1f',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top gradient line */}
      <div style={{
        height: 2,
        background: 'linear-gradient(90deg, transparent, #64ffda, #a855f7, transparent)',
      }} />

      {/* Wave-like ambient glow at top */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 500, height: 200,
        borderRadius: '0 0 50% 50%',
        background: 'radial-gradient(ellipse, rgba(100,255,218,0.06) 0%, transparent 70%)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '60px 24px 40px',
        position: 'relative', zIndex: 1,
      }}>
        {/* Main footer row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 32, marginBottom: 48,
        }}>
          {/* Logo + tagline */}
          <div>
            <div style={{
              fontSize: 28, fontWeight: 900,
              fontFamily: 'Inter, sans-serif',
              marginBottom: 8,
              letterSpacing: '-1px',
            }}>
              <span style={{ color: '#8892b0' }}>&lt;</span>
              <span style={{
                background: 'linear-gradient(135deg, #64ffda, #a855f7)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Kallappa</span>
              <span style={{ color: '#8892b0' }}>/&gt;</span>
            </div>
            <p style={{
              color: '#8892b0', fontSize: 14,
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: 1,
            }}>
              Building digital experiences
            </p>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Resume', href: '#resume' },
              { label: 'Experience', href: '#experience' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Open Source', href: '#opensource' },
              { label: 'Contact', href: '#contact' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#8892b0', textDecoration: 'none',
                  fontSize: 14, fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#64ffda'}
                onMouseLeave={e => e.currentTarget.style.color = '#8892b0'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social + Back to top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: s.color, textDecoration: 'none',
                  fontSize: 17,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = s.hover;
                  e.currentTarget.style.borderColor = s.hover + '40';
                  e.currentTarget.style.background = s.hover + '12';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = s.color;
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                <s.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: 1, marginBottom: 28,
          background: 'linear-gradient(90deg, transparent, rgba(100,255,218,0.15), rgba(168,85,247,0.15), transparent)',
        }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <p style={{
              color: '#8892b0', fontFamily: 'Inter, sans-serif', fontSize: 13,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              Designed & Built with
              <FiHeart style={{ color: '#64ffda', animation: 'pulseDot 1.5s ease-in-out infinite' }} size={13} />
              by{' '}
              <span style={{
                background: 'linear-gradient(135deg, #64ffda, #a855f7)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              }}>Kallappa</span>
            </p>
            <p style={{
              color: '#495670', fontSize: 12,
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              © {year} · Built with{' '}
              <span style={{ color: '#61DAFB' }}>React</span>
              {' · '}
              <span style={{ color: '#64ffda' }}>Three.js</span>
              {' · '}
              <span style={{ color: '#c084fc' }}>Framer Motion</span>
              {' · '}
              <span style={{ color: '#06B6D4' }}>Tailwind CSS</span>
            </p>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4, boxShadow: '0 0 20px rgba(100,255,218,0.3)' }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'rgba(100,255,218,0.08)',
              border: '1.5px solid rgba(100,255,218,0.2)',
              color: '#64ffda',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
