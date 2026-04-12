import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home',     href: '#home' },
  { name: 'About',    href: '#about' },
  { name: 'Skills',   href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact',  href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        ...(scrolled ? {
          background: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(100, 255, 218, 0.12)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
        } : {
          background: 'transparent',
        }),
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 72 }}>

          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              textDecoration: 'none',
              fontSize: 26,
              fontWeight: 900,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-1px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span style={{ color: '#8892b0' }}>&lt;</span>
            <span className="gradient-text-teal">Portfolio</span>
            <span style={{ color: '#8892b0' }}>/&gt;</span>
          </motion.a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="hidden md:flex">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.2 }}
                style={{
                  textDecoration: 'none',
                  color: activeSection === item.href.slice(1) ? '#64ffda' : '#8892b0',
                  fontWeight: 500,
                  fontSize: 15,
                  fontFamily: 'Inter, sans-serif',
                  position: 'relative',
                  padding: '4px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  transition: 'color 0.3s ease',
                }}
                whileHover={{ color: '#64ffda' }}
              >
                {item.name}
                {/* Active underline */}
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    borderRadius: 1,
                    background: 'linear-gradient(90deg, #64ffda, #a855f7)',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === item.href.slice(1) ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            {/* Resume Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(100,255,218,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                textDecoration: 'none',
                padding: '8px 22px',
                borderRadius: 8,
                border: '1.5px solid #64ffda',
                color: '#64ffda',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 13,
                fontWeight: 600,
                background: 'rgba(100, 255, 218, 0.05)',
                cursor: 'pointer',
                letterSpacing: 0.5,
                transition: 'all 0.3s ease',
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="flex md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#64ffda',
              cursor: 'pointer',
              padding: 8,
              borderRadius: 8,
            }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(10, 25, 47, 0.97)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(100,255,218,0.1)',
              borderBottom: '1px solid rgba(100,255,218,0.1)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '16px 24px 24px' }}>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    color: '#ccd6f6',
                    fontWeight: 500,
                    fontSize: 16,
                    marginBottom: 4,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
