import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0a192f] border-t-2 border-[#64ffda]/20 py-12 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#64ffda]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-[#8892b0] hover:text-[#64ffda] transform hover:scale-125 hover:-translate-y-2 transition-all duration-300 relative group"
              aria-label={social.label}
            >
              <social.icon size={28} />
              <div className="absolute -inset-2 bg-[#64ffda] rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#64ffda] to-transparent mx-auto mb-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#8892b0] space-y-3"
        >
          <p className="font-mono text-base flex items-center justify-center hover:text-[#ccd6f6] transition-colors duration-300">
            <span>Designed & Built with</span>
            <FiHeart className="mx-2 text-[#64ffda] animate-pulse" />
            <span>by Your Name</span>
          </p>
          <p className="text-sm font-mono">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>

        {/* Tech Stack Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6"
        >
          <p className="text-[#8892b0] text-sm font-mono hover:text-[#64ffda] transition-colors duration-300">
            Built with <span className="text-[#61DAFB]">React</span>, <span className="text-[#000] bg-white px-1 rounded">Three.js</span>, <span className="text-[#FF0080]">Framer Motion</span> & <span className="text-[#06B6D4]">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
