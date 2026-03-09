import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.8}>
      <MeshDistortMaterial
        color="#64ffda"
        attach="material"
        distort={0.6}
        speed={1.5}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <pointLight position={[-10, -10, -5]} color="#64ffda" intensity={1} />
          <Stars
            radius={100}
            depth={50}
            count={8000}
            factor={6}
            saturation={0}
            fade
            speed={1}
          />
          <AnimatedSphere />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.8}
            enablePan={false}
          />
        </Canvas>
      </div>

      {/* Enhanced Double Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/70 via-[#0a192f]/50 to-[#0a192f] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.15)_0%,transparent_70%)] z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#64ffda] font-mono mb-6 text-lg md:text-xl tracking-widest uppercase"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #ccd6f6 0%, #64ffda 50%, #ccd6f6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(100, 255, 218, 0.5))',
            }}
          >
            Your Name
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
            style={{
              background: 'linear-gradient(90deg, #8892b0 0%, #64ffda 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            I build amazing 3D experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[#8892b0] max-w-3xl mx-auto mb-14 text-lg md:text-xl leading-relaxed px-4"
          >
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on creating interactive 3D web applications that push the boundaries of web technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-8 mb-14"
          >
            {[
              { icon: FiGithub, href: 'https://github.com' },
              { icon: FiLinkedin, href: 'https://linkedin.com' },
              { icon: FiTwitter, href: 'https://twitter.com' },
              { icon: FiMail, href: 'mailto:your.email@example.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, y: -10 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <div className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300 relative z-10">
                  <social.icon size={38} strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 bg-[#64ffda]/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-150"></div>
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.08, boxShadow: '0 0 60px rgba(100, 255, 218, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-6 border-2 border-[#64ffda] text-[#64ffda] rounded-xl bg-[#64ffda]/5 hover:bg-[#64ffda]/10 transition-all duration-300 font-mono text-lg font-bold relative overflow-hidden group shadow-[0_0_30px_rgba(100,255,218,0.3)]"
          >
            <span className="relative z-10">Check out my work!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/0 via-[#64ffda]/10 to-[#64ffda]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.a>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-8 h-14 border-2 border-[#64ffda] rounded-full flex justify-center p-2 shadow-[0_0_20px_rgba(100,255,218,0.4)]">
            <motion.div
              animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 bg-[#64ffda] rounded-full shadow-[0_0_10px_rgba(100,255,218,0.8)]"
            />
          </div>
          <span className="text-[#64ffda] text-xs font-mono">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
