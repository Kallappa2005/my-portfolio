import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import './App.css';

const LoadingScreen = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(135deg, #0a192f 0%, #0d1b2a 50%, #0a192f 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}
  >
    {/* Ambient orbs */}
    <div style={{
      position: 'absolute', width: 300, height: 300,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(100,255,218,0.15) 0%, transparent 70%)',
      top: '20%', left: '20%', filter: 'blur(40px)',
      animation: 'orbFloat1 8s ease-in-out infinite',
    }} />
    <div style={{
      position: 'absolute', width: 250, height: 250,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
      bottom: '20%', right: '20%', filter: 'blur(40px)',
      animation: 'orbFloat2 10s ease-in-out infinite',
    }} />

    {/* Logo */}
    <div style={{ marginBottom: 32, textAlign: 'center' }}>
      <div style={{
        fontSize: 42,
        fontWeight: 900,
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '-2px',
        marginBottom: 8,
      }}>
        <span style={{ color: '#8892b0' }}>&lt;</span>
        <span style={{
          background: 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Portfolio</span>
        <span style={{ color: '#8892b0' }}>/&gt;</span>
      </div>
      <p style={{
        color: '#64ffda',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 13,
        letterSpacing: 4,
        textTransform: 'uppercase',
        opacity: 0.8,
      }}>
        Loading Experience...
      </p>
    </div>

    {/* Progress bar */}
    <div style={{
      width: 240,
      height: 3,
      background: 'rgba(100,255,218,0.15)',
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: 24,
    }}>
      <div style={{
        height: '100%',
        borderRadius: 4,
        background: 'linear-gradient(90deg, #64ffda, #a855f7)',
        animation: 'loadBar 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      }} />
    </div>

    {/* Spinning ring */}
    <div style={{
      width: 48, height: 48,
      border: '3px solid rgba(100,255,218,0.1)',
      borderTop: '3px solid #64ffda',
      borderRight: '3px solid #a855f7',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    }} />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div style={{ background: '#0a192f', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <MobileNav />
      <Footer />
    </div>
  );
}

export default App;