import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiSend, FiPhone, FiMapPin, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'kallappakabbur874@gmail.com',
    href: 'mailto:kallappakabbur874@gmail.com',
    color: '#64ffda',
    bg: 'rgba(100,255,218,0.1)',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 6361664259',
    href: 'tel:+916361664259',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.1)',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'India',
    href: null,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)',
  },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/kallappa2005', label: 'GitHub', color: '#ccd6f6', hover: '#64ffda' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kallappa-k-abboor-a9a46329b/', label: 'LinkedIn', color: '#ccd6f6', hover: '#0077b5' },
];

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setStatus('Message sent successfully! 🎉 I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  const inputStyle = (field) => ({
    width: '100%',
    background: focused === field
      ? 'rgba(100,255,218,0.05)'
      : 'rgba(10, 25, 47, 0.6)',
    border: focused === field
      ? '1.5px solid rgba(100,255,218,0.5)'
      : '1.5px solid rgba(255,255,255,0.07)',
    borderRadius: 12,
    padding: '14px 16px 14px 48px',
    color: '#ccd6f6',
    fontSize: 15,
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: focused === field ? '0 0 20px rgba(100,255,218,0.1)' : 'none',
  });

  return (
    <section
      id="contact"
      className="mesh-bg-2"
      style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Blobs */}
      <div style={{
        position: 'absolute', top: 80, left: '20%', width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,255,218,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 80, right: '15%', width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                marginBottom: 16,
                padding: '6px 18px', borderRadius: 100,
                background: 'rgba(100,255,218,0.08)',
                border: '1px solid rgba(100,255,218,0.2)',
              }}
            >
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                color: '#64ffda', fontSize: 13, letterSpacing: 3,
              }}>07. CONTACT</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 900, fontFamily: 'Inter, sans-serif',
                marginBottom: 16,
                background: 'linear-gradient(135deg, #ffffff 0%, #64ffda 50%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get In Touch!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                color: '#8892b0', fontSize: 17, maxWidth: 520,
                margin: '0 auto', lineHeight: 1.7,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Have a project in mind or just want to say hello? I&apos;d love to hear from you!
            </motion.p>
          </div>

          {/* Two-col layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 32,
          }}>
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              {/* Contact Info Card */}
              <div
                className="glass"
                style={{
                  borderRadius: 20, padding: 28,
                  border: '1.5px solid rgba(100,255,218,0.1)',
                }}
              >
                <h3 style={{
                  color: '#64ffda', fontWeight: 700, fontSize: 18,
                  fontFamily: 'Inter, sans-serif', marginBottom: 24,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#64ffda',
                    display: 'inline-block',
                    boxShadow: '0 0 8px #64ffda',
                  }} />
                  Contact Information
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {contactInfo.map((info) => (
                    <div
                      key={info.label}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}
                    >
                      <div style={{
                        width: 42, height: 42, borderRadius: 12,
                        background: info.bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        border: `1px solid ${info.color}25`,
                      }}>
                        <info.icon style={{ color: info.color, fontSize: 18 }} />
                      </div>
                      <div>
                        <p style={{
                          color: '#8892b0', fontSize: 12, marginBottom: 4,
                          fontFamily: 'Inter, sans-serif', fontWeight: 500,
                          textTransform: 'uppercase', letterSpacing: 1,
                        }}>{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            style={{
                              color: '#ccd6f6', fontFamily: 'Inter, sans-serif',
                              fontSize: 15, fontWeight: 500, textDecoration: 'none',
                              transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = info.color}
                            onMouseLeave={e => e.currentTarget.style.color = '#ccd6f6'}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p style={{
                            color: '#ccd6f6', fontFamily: 'Inter, sans-serif',
                            fontSize: 15, fontWeight: 500,
                          }}>{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{
                  height: 1, margin: '28px 0',
                  background: 'linear-gradient(90deg, transparent, rgba(100,255,218,0.2), transparent)',
                }} />

                {/* Socials */}
                <p style={{
                  color: '#8892b0', fontSize: 12, fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase',
                  marginBottom: 16,
                }}>Follow me on</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  {socials.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{ scale: 1.12, y: -4 }}
                      whileTap={{ scale: 0.92 }}
                      style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: 'rgba(10,25,47,0.6)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: s.color, textDecoration: 'none',
                        transition: 'all 0.25s ease',
                        fontSize: 18,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = s.hover;
                        e.currentTarget.style.borderColor = s.hover + '60';
                        e.currentTarget.style.background = s.hover + '15';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = s.color;
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.background = 'rgba(10,25,47,0.6)';
                      }}
                    >
                      <s.icon />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div
                className="glass"
                style={{
                  borderRadius: 16, padding: '16px 24px',
                  border: '1px solid rgba(100,255,218,0.15)',
                  display: 'flex', alignItems: 'center', gap: 14,
                }}
              >
                <div style={{ position: 'relative' }}>
                  <div style={{
                    width: 12, height: 12, borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 10px rgba(34,197,94,0.6)',
                  }} />
                  <div style={{
                    position: 'absolute', inset: -3,
                    borderRadius: '50%', background: 'rgba(34,197,94,0.2)',
                    animation: 'pulseDot 2s ease-in-out infinite',
                  }} />
                </div>
                <div>
                  <p style={{
                    color: '#22c55e', fontWeight: 700, fontSize: 14,
                    fontFamily: 'Inter, sans-serif',
                  }}>Available for freelance</p>
                  <p style={{
                    color: '#8892b0', fontSize: 12,
                    fontFamily: 'Inter, sans-serif',
                  }}>Open to new opportunities</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div
                className="glass"
                style={{
                  borderRadius: 20, padding: 32,
                  border: '1.5px solid rgba(100,255,218,0.1)',
                }}
              >
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                  {/* Name */}
                  <div>
                    <label style={{
                      display: 'block', color: '#ccd6f6', marginBottom: 8,
                      fontSize: 14, fontWeight: 500, fontFamily: 'Inter, sans-serif',
                    }}>Name</label>
                    <div style={{ position: 'relative' }}>
                      <FiUser style={{
                        position: 'absolute', left: 16, top: '50%',
                        transform: 'translateY(-50%)',
                        color: focused === 'name' ? '#64ffda' : '#8892b0',
                        fontSize: 16, transition: 'color 0.3s',
                      }} />
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange}
                        required placeholder="Your Name"
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        style={inputStyle('name')}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{
                      display: 'block', color: '#ccd6f6', marginBottom: 8,
                      fontSize: 14, fontWeight: 500, fontFamily: 'Inter, sans-serif',
                    }}>Email</label>
                    <div style={{ position: 'relative' }}>
                      <FiMail style={{
                        position: 'absolute', left: 16, top: '50%',
                        transform: 'translateY(-50%)',
                        color: focused === 'email' ? '#64ffda' : '#8892b0',
                        fontSize: 16, transition: 'color 0.3s',
                      }} />
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        required placeholder="your.email@example.com"
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        style={inputStyle('email')}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{
                      display: 'block', color: '#ccd6f6', marginBottom: 8,
                      fontSize: 14, fontWeight: 500, fontFamily: 'Inter, sans-serif',
                    }}>Subject</label>
                    <div style={{ position: 'relative' }}>
                      <FiMessageSquare style={{
                        position: 'absolute', left: 16, top: '50%',
                        transform: 'translateY(-50%)',
                        color: focused === 'subject' ? '#64ffda' : '#8892b0',
                        fontSize: 16, transition: 'color 0.3s',
                      }} />
                      <input
                        type="text" id="subject" name="subject"
                        value={formData.subject} onChange={handleChange}
                        required placeholder="What's this about?"
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused('')}
                        style={inputStyle('subject')}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{
                      display: 'block', color: '#ccd6f6', marginBottom: 8,
                      fontSize: 14, fontWeight: 500, fontFamily: 'Inter, sans-serif',
                    }}>Message</label>
                    <div style={{ position: 'relative' }}>
                      <FiMessageSquare style={{
                        position: 'absolute', left: 16, top: 18,
                        color: focused === 'message' ? '#64ffda' : '#8892b0',
                        fontSize: 16, transition: 'color 0.3s',
                      }} />
                      <textarea
                        id="message" name="message"
                        value={formData.message} onChange={handleChange}
                        required rows={5}
                        placeholder="Tell me about your project..."
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused('')}
                        style={{
                          ...inputStyle('message'),
                          resize: 'vertical',
                          minHeight: 130,
                          paddingTop: 16,
                        }}
                      />
                    </div>
                  </div>

                  {/* Status */}
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      style={{
                        padding: '12px 20px', borderRadius: 12,
                        background: 'rgba(100,255,218,0.1)',
                        border: '1px solid rgba(100,255,218,0.3)',
                        color: '#64ffda',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 14, textAlign: 'center',
                      }}
                    >
                      {status}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={!sending ? { scale: 1.02, boxShadow: '0 0 30px rgba(100,255,218,0.4)' } : {}}
                    whileTap={!sending ? { scale: 0.98 } : {}}
                    style={{
                      width: '100%', padding: '15px 24px',
                      borderRadius: 12, border: 'none',
                      cursor: sending ? 'wait' : 'pointer',
                      background: sending
                        ? 'rgba(100,255,218,0.3)'
                        : 'linear-gradient(135deg, #64ffda 0%, #a855f7 100%)',
                      color: sending ? '#ccd6f6' : '#0a192f',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 16, fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(100,255,218,0.2)',
                    }}
                  >
                    {sending ? (
                      <>
                        <div style={{
                          width: 18, height: 18,
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTop: '2px solid #ccd6f6',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite',
                        }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
