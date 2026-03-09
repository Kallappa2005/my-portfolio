import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: '3D Portfolio Website',
      description:
        'A stunning 3D portfolio website built with React, Three.js, and Framer Motion. Features interactive 3D models, smooth animations, and responsive design.',
      tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '🌐',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management. Built with modern technologies.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '🛒',
    },
    {
      title: 'AI Chat Application',
      description:
        'Real-time chat application with AI-powered responses. Features include group chats, file sharing, and smart reply suggestions.',
      tech: ['React', 'Socket.io', 'OpenAI', 'Firebase'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '💬',
    },
    {
      title: 'Task Management System',
      description:
        'Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.',
      tech: ['React', 'TypeScript', 'PostgreSQL', 'Docker'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '📋',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Beautiful weather dashboard with interactive maps, detailed forecasts, and location-based recommendations.',
      tech: ['React', 'Weather API', 'Chart.js', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '🌤️',
    },
    {
      title: 'Social Media Analytics',
      description:
        'Analytics dashboard for social media metrics with data visualization, trend analysis, and automated reporting.',
      tech: ['Next.js', 'D3.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '📊',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a192f] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 left-20 w-[500px] h-[500px] bg-[#64ffda]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <span className="text-[#64ffda] font-mono text-2xl md:text-3xl mr-4 font-bold">03.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6]">
              Featured Projects
            </h2>
            <div className="h-px bg-gradient-to-r from-[#64ffda] to-transparent ml-8 flex-grow max-w-md"></div>
          </div>
          <p className="text-[#8892b0] mb-12 text-lg ml-16 hover:text-[#ccd6f6] transition-colors duration-300">
            Here are some of my recent projects that showcase my skills and creativity
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="bg-[#112240]/70 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-[#233554] hover:border-[#64ffda] transition-all duration-300 group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-[#64ffda] rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
                
                {/* Project Image/Icon */}
                <div className="h-56 bg-gradient-to-br from-[#64ffda]/20 via-[#112240] to-[#0a192f] flex items-center justify-center border-b-2 border-[#233554] group-hover:from-[#64ffda]/40 group-hover:border-[#64ffda]/50 transition-all duration-300 relative overflow-hidden">
                  <span className="text-9xl animate-float group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_20px_rgba(100,255,218,0.3)]">{project.image}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4 group-hover:text-[#64ffda] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#8892b0] mb-6 leading-relaxed group-hover:text-[#ccd6f6] transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-[#64ffda] bg-[#64ffda]/10 px-3 py-1.5 rounded-lg hover:bg-[#64ffda]/20 transition-colors border border-[#64ffda]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-[#64ffda] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]"
                    >
                      <FiGithub size={24} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-[#64ffda] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]"
                    >
                      <FiExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-xl hover:bg-[#64ffda]/10 transition-all duration-300 font-mono text-lg font-semibold hover:shadow-[0_0_30px_rgba(100,255,218,0.3)] hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">View More Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
