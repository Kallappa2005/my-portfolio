import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs,
  FaGitAlt, FaPython, FaDatabase, FaAws, FaDocker,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiTypescript,
  SiPostgresql, SiFlask, SiExpress,
  SiKubernetes, SiPrometheus, SiTerraform, SiGithubactions,
  SiMlflow,
} from 'react-icons/si';


// Fallback icon for tools that may not have direct icons
const TextIcon = ({ text, color }) => (
  <div style={{
    width: 48, height: 48,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: 10,
    background: `${color}20`,
    border: `1.5px solid ${color}40`,
    fontSize: 11,
    fontWeight: 700,
    color: color,
    fontFamily: 'JetBrains Mono, monospace',
    letterSpacing: 0.5,
    textAlign: 'center',
    lineHeight: 1.2,
  }}>{text}</div>
);

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building beautiful, responsive user interfaces',
    color: '#64ffda',
    gradient: 'linear-gradient(135deg, rgba(100,255,218,0.12), rgba(100,255,218,0.03))',
    borderColor: 'rgba(100,255,218,0.25)',
    glowColor: 'rgba(100,255,218,0.35)',
    dotColor: '#64ffda',
    skills: [
      { name: 'React.js',      icon: FaReact,       color: '#61DAFB', type: 'icon' },
      { name: 'HTML5',         icon: FaHtml5,       color: '#E34F26', type: 'icon' },
      { name: 'JavaScript',    icon: FaJs,          color: '#F7DF1E', type: 'icon' },
      { name: 'Tailwind CSS',  icon: SiTailwindcss, color: '#06B6D4', type: 'icon' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Scalable server-side systems & APIs',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(168,85,247,0.03))',
    borderColor: 'rgba(168,85,247,0.25)',
    glowColor: 'rgba(168,85,247,0.35)',
    dotColor: '#a855f7',
    skills: [
      { name: 'Node.js',   icon: FaNodeJs,   color: '#339933', type: 'icon' },
      { name: 'Python',    icon: FaPython,   color: '#3776AB', type: 'icon' },
      { name: 'Flask',     icon: SiFlask,    color: '#FFFFFF', type: 'icon' },
      { name: 'Express.js', icon: SiExpress, color: '#808080', type: 'icon' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Storing & managing data efficiently',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.03))',
    borderColor: 'rgba(59,130,246,0.25)',
    glowColor: 'rgba(59,130,246,0.35)',
    dotColor: '#3b82f6',
    skills: [
      { name: 'MongoDB',    icon: SiMongodb,    color: '#47A248', type: 'icon' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', type: 'icon' },
    ],
  },
  {
    id: 'mlops',
    title: 'MLOps',
    description: 'Operationalizing machine learning at scale',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.03))',
    borderColor: 'rgba(245,158,11,0.25)',
    glowColor: 'rgba(245,158,11,0.35)',
    dotColor: '#f59e0b',
    skills: [
      { name: 'DVC',           icon: null,            color: '#f59e0b', type: 'text', text: 'DVC' },
      { name: 'MLflow',        icon: SiMlflow,        color: '#0194E2', type: 'icon' },
      { name: 'Docker',        icon: FaDocker,        color: '#2496ED', type: 'icon' },
      { name: 'CI/CD Actions', icon: SiGithubactions, color: '#2088FF', type: 'icon' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Infrastructure, monitoring & cloud deployment',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(236,72,153,0.03))',
    borderColor: 'rgba(236,72,153,0.25)',
    glowColor: 'rgba(236,72,153,0.35)',
    dotColor: '#ec4899',
    skills: [
      { name: 'Docker',         icon: FaDocker,        color: '#2496ED', type: 'icon' },
      { name: 'Kubernetes',     icon: SiKubernetes,    color: '#326CE5', type: 'icon' },
      { name: 'Prometheus',     icon: SiPrometheus,    color: '#E6522C', type: 'icon' },
      { name: 'Loki',           icon: null,            color: '#F5A623', type: 'text', text: 'Loki' },
      { name: 'Terraform',      icon: SiTerraform,     color: '#7B42BC', type: 'icon' },
      { name: 'AWS',            icon: FaAws,           color: '#FF9900', type: 'icon' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF', type: 'icon' },
    ],
  },
];

const SkillCard = ({ skill, catColor, glowColor, delay, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.92 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.35, delay }}
    whileHover={{ y: -8, scale: 1.06 }}
    style={{
      position: 'relative',
      background: 'rgba(10, 25, 47, 0.65)',
      backdropFilter: 'blur(12px)',
      borderRadius: 16,
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      border: '1px solid rgba(255,255,255,0.06)',
      cursor: 'default',
      overflow: 'hidden',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = catColor + '55';
      e.currentTarget.style.boxShadow = `0 0 28px ${glowColor}, 0 8px 24px rgba(0,0,0,0.25)`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {/* Subtle bg radial */}
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(circle at center, ${skill.color}08 0%, transparent 65%)`,
    }} />

    {/* Icon or text badge */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      {skill.type === 'icon' && skill.icon ? (
        <skill.icon
          style={{
            fontSize: 44,
            color: skill.color,
            filter: `drop-shadow(0 0 8px ${skill.color}50)`,
            transition: 'all 0.3s ease',
          }}
        />
      ) : (
        <TextIcon text={skill.text} color={skill.color} />
      )}
    </div>

    <span style={{
      color: '#ccd6f6', fontWeight: 600, fontSize: 12.5,
      textAlign: 'center', position: 'relative', zIndex: 1,
      fontFamily: 'Inter, sans-serif',
      letterSpacing: 0.2,
    }}>
      {skill.name}
    </span>
  </motion.div>
);

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="skills"
      className="mesh-bg-2"
      style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: 60, right: -60, width: 450, height: 450,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,255,218,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 60, left: -60, width: 450, height: 450,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Heading */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 72 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#64ffda', fontSize: 20, fontWeight: 600, marginRight: 14,
            }}>02.</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800, color: '#ccd6f6',
              fontFamily: 'Inter, sans-serif',
            }}>Skills & Technologies</h2>
            <div className="section-line" />
          </div>

          {/* Categories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: ci * 0.12 }}
              >
                {/* Category header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                  {/* Glowing dot */}
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: cat.color,
                    boxShadow: `0 0 12px ${cat.color}, 0 0 24px ${cat.color}60`,
                    flexShrink: 0,
                  }} />

                  {/* Pill badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '6px 18px', borderRadius: 100,
                    background: cat.gradient,
                    border: `1px solid ${cat.borderColor}`,
                  }}>
                    <h3 style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      color: cat.color, fontSize: 13, fontWeight: 700,
                      letterSpacing: 1.5, margin: 0,
                    }}>
                      {cat.title.toUpperCase()}
                    </h3>
                  </div>

                  {/* Description */}
                  <span style={{
                    color: '#495670', fontSize: 13,
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'italic',
                  }}>
                    — {cat.description}
                  </span>

                  {/* Tail line */}
                  <div style={{
                    height: 1, flex: 1,
                    background: `linear-gradient(90deg, ${cat.borderColor}, transparent)`,
                  }} />
                </div>

                {/* Skill cards grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                  gap: 14,
                }}>
                  {cat.skills.map((skill, si) => (
                    <SkillCard
                      key={`${cat.id}-${skill.name}`}
                      skill={skill}
                      catColor={cat.color}
                      glowColor={cat.glowColor}
                      delay={ci * 0.1 + si * 0.05}
                      inView={inView}
                    />
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
