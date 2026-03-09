import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaPython,
  FaDatabase,
  FaCube,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiDocker,
  SiPostgresql,
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Three.js', icon: FaCube, color: '#000000' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Database', icon: FaDatabase, color: '#4479A1' },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#112240] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#64ffda]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-12">
            <span className="text-[#64ffda] font-mono text-2xl md:text-3xl mr-4 font-bold">02.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6]">
              Skills & Technologies
            </h2>
            <div className="h-px bg-gradient-to-r from-[#64ffda] to-transparent ml-8 flex-grow max-w-md"></div>
          </div>

          <div className="grid gap-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-[#64ffda] mb-8 font-mono flex items-center">
                  <span className="mr-3 text-xl">→</span>
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.2 + index * 0.05,
                      }}
                      whileHover={{ scale: 1.08, y: -12 }}
                      className="relative bg-[#0a192f]/50 backdrop-blur-sm p-8 rounded-xl border-2 border-[#233554] hover:border-[#64ffda] transition-all duration-300 flex flex-col items-center justify-center gap-4 group cursor-pointer"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#64ffda]/0 via-[#64ffda]/0 to-[#64ffda]/0 group-hover:from-[#64ffda]/10 group-hover:via-[#64ffda]/5 group-hover:to-[#64ffda]/10 transition-all duration-500"></div>
                      
                      {/* Icon */}
                      <skill.icon
                        className="text-6xl transition-all duration-300 relative z-10 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(100,255,218,0.5)]"
                        style={{ color: skill.color }}
                      />
                      
                      {/* Skill name */}
                      <span className="text-[#ccd6f6] font-semibold text-center group-hover:text-[#64ffda] transition-colors relative z-10 text-base">
                        {skill.name}
                      </span>
                      
                      {/* Corner accent */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-[#64ffda] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Shadow on hover */}
                      <div className="absolute -inset-1 bg-[#64ffda] rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
