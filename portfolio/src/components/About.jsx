import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a192f] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#64ffda]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#64ffda]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-12">
            <span className="text-[#64ffda] font-mono text-2xl md:text-3xl mr-4 font-bold">01.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6]">
              About Me
            </h2>
            <div className="h-px bg-gradient-to-r from-[#64ffda] to-transparent ml-8 flex-grow max-w-md"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="text-[#8892b0] space-y-6 text-lg leading-relaxed">
                <p className="hover:text-[#ccd6f6] transition-colors duration-300">
                  Hello! I'm a passionate developer who loves creating things that live on
                  the internet. My interest in web development started back in 2018 when I
                  decided to try building my first website — turns out hacking together a
                  custom website taught me a lot about HTML & CSS!
                </p>
                <p className="hover:text-[#ccd6f6] transition-colors duration-300">
                  Fast-forward to today, and I've had the privilege of working on various
                  projects ranging from e-commerce platforms to interactive 3D experiences.
                  My main focus these days is building accessible, inclusive products and
                  digital experiences with cutting-edge technology.
                </p>
                <p className="hover:text-[#ccd6f6] transition-colors duration-300">
                  I'm particularly excited about the intersection of creativity and technology,
                  especially in 3D web experiences using Three.js and React Three Fiber.
                </p>
                <p className="font-semibold text-[#ccd6f6] text-xl mt-8">Here are a few technologies I've been working with recently:</p>

                <ul className="grid grid-cols-2 gap-3 mt-6">
                  {skills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      className="flex items-center text-base group"
                    >
                      <span className="text-[#64ffda] mr-3 text-xl group-hover:translate-x-1 transition-transform">▹</span>
                      <span className="group-hover:text-[#64ffda] group-hover:translate-x-1 transition-all duration-300">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-1 relative group"
            >
              <div className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full aspect-square bg-gradient-to-br from-[#64ffda]/30 via-[#112240] to-[#0a192f] flex items-center justify-center border-2 border-[#64ffda] backdrop-blur-sm">
                    <span className="text-9xl animate-float filter drop-shadow-[0_0_30px_rgba(100,255,218,0.6)]">
                      👨‍💻
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#64ffda]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#64ffda] via-[#52e4c2] to-[#64ffda] rounded-2xl opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500 -z-10"></div>
              </div>
              <div className="absolute inset-0 border-4 border-[#64ffda]/30 rounded-2xl transform translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 -z-20"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
