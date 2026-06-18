import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const AnimatedSphere = () => (
  <Sphere args={[1, 100, 200]} scale={2.6}>
    <MeshDistortMaterial
      color="#64ffda"
      attach="material"
      distort={0.55}
      speed={1.8}
      roughness={0}
      metalness={0.9}
      wireframe={false}
    />
  </Sphere>
);

const ROLES = [
  'Full Stack Developer',
  'Machine Learning Engineer',
  'MLOps Engineer',
  'DevOps Engineer',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const role = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const socials = [
    { icon: FiGithub, href: 'https://github.com/kallappa2005', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kallappa-kabboor/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:kallappakabbur874@email.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* 3D Canvas */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <pointLight position={[-10, -10, -5]} color="#64ffda" intensity={1.5} />
          <pointLight position={[10, -5, 5]} color="#a855f7" intensity={0.8} />
          <Stars radius={120} depth={60} count={8000} factor={6} saturation={0} fade speed={0.8} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} enablePan={false} />
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(10,25,47,0.6) 0%, rgba(10,25,47,0.4) 40%, rgba(10,25,47,0.95) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at center, rgba(100,255,218,0.08) 0%, transparent 65%)',
      }} />

      {/* Grid pattern overlay */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.4 }} />

      {/* Floating ambient orbs */}
      <div className="animate-orb1" style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,255,218,0.06) 0%, transparent 70%)',
        top: '10%', left: '5%', zIndex: 1, filter: 'blur(30px)',
      }} />
      <div className="animate-orb2" style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
        bottom: '15%', right: '8%', zIndex: 1, filter: 'blur(30px)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: 1000, margin: '0 auto',
        padding: '0 24px', textAlign: 'center',
      }}>
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginBottom: 20,
            padding: '6px 18px', borderRadius: 100,
            background: 'rgba(100,255,218,0.08)',
            border: '1px solid rgba(100,255,218,0.2)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span style={{
            width: 8, height: 8, borderRadius: '50%', background: '#64ffda',
            display: 'inline-block',
            animation: 'pulseDot 1.5s ease-in-out infinite',
          }} />
          <span style={{
            color: '#64ffda',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 13,
            letterSpacing: 3,
            textTransform: 'uppercase',
          }}>
            Hi, my name is
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: 'clamp(52px, 10vw, 100px)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 16,
            fontFamily: 'Inter, sans-serif',
            background: 'linear-gradient(135deg, #ffffff 0%, #ccd6f6 40%, #64ffda 80%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 40px rgba(100,255,218,0.25))',
          }}
        >
          Kallappa
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginBottom: 24, minHeight: 60 }}
        >
          <span style={{
            fontSize: 'clamp(20px, 4vw, 36px)',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            background: 'linear-gradient(90deg, #8892b0, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            I am{' '}
          </span>
          <span style={{
            fontSize: 'clamp(20px, 4vw, 36px)',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            color: '#64ffda',
            textShadow: '0 0 20px rgba(100,255,218,0.5)',
          }}>
            {displayed}
          </span>
          <span style={{
            fontSize: 'clamp(20px, 4vw, 36px)',
            fontWeight: 300,
            color: '#64ffda',
            animation: 'blink 0.9s step-end infinite',
            marginLeft: 2,
          }}>|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            color: '#8892b0',
            maxWidth: 600,
            margin: '0 auto 40px',
            fontSize: 'clamp(15px, 2vw, 18px)',
            lineHeight: 1.8,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Passionate about software engineering, open source, AI, and building practical technology solutions that create real-world impact and meaningful user experiences.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 48 }}
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.08 }}
              whileHover={{ scale: 1.2, y: -6 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 48, height: 48, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(100,255,218,0.06)',
                border: '1px solid rgba(100,255,218,0.15)',
                color: '#8892b0',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="social-btn"
            >
              <s.icon size={20} />
              {/* Hover glow */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(100,255,218,0.15), rgba(168,85,247,0.15))',
                opacity: 0, transition: 'opacity 0.3s',
                borderRadius: 12,
              }} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(100,255,218,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: 'none',
              padding: '14px 36px',
              borderRadius: 12,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 15,
              fontWeight: 600,
              color: '#0a192f',
              background: 'linear-gradient(135deg, #64ffda 0%, #52e4c2 100%)',
              boxShadow: '0 0 20px rgba(100,255,218,0.3)',
              letterSpacing: 1,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168,85,247,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: 'none',
              padding: '14px 36px',
              borderRadius: 12,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 15,
              fontWeight: 600,
              color: '#ccd6f6',
              background: 'rgba(168,85,247,0.1)',
              border: '1.5px solid rgba(168,85,247,0.4)',
              letterSpacing: 1,
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: 36,
          left: '50%', transform: 'translateX(-50%)',
          zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
        >
          <div style={{
            width: 28, height: 46, borderRadius: 14,
            border: '2px solid rgba(100,255,218,0.4)',
            display: 'flex', justifyContent: 'center', padding: '6px 0',
          }}>
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{
                width: 4, height: 4, borderRadius: '50%',
                background: '#64ffda',
                boxShadow: '0 0 8px rgba(100,255,218,0.8)',
              }}
            />
          </div>
          <span style={{
            color: '#64ffda',
            fontSize: 10,
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: 2,
            textTransform: 'uppercase',
            opacity: 0.7,
          }}>Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
