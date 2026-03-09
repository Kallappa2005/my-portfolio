import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a192f]/90 backdrop-blur-md shadow-lg shadow-[#0a192f]/50 border-b border-[#64ffda]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#64ffda] text-2xl md:text-3xl font-bold cursor-pointer hover:drop-shadow-[0_0_10px_rgba(100,255,218,0.5)] transition-all duration-300"
          >
            <span className="text-white">&lt;</span>
            Portfolio
            <span className="text-white">/&gt;</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-all duration-300 font-medium text-lg group relative"
              >
                <span className="text-[#64ffda] mr-1 font-mono text-sm">{`0${index + 1}.`}</span>
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64ffda] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#64ffda] p-2 hover:bg-[#64ffda]/10 rounded-lg transition-all duration-300"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#112240]/95 backdrop-blur-md border-b-2 border-[#64ffda]/20"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-[#ccd6f6] hover:text-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300 rounded-lg text-lg font-medium"
                >
                  <span className="text-[#64ffda] mr-2 font-mono text-sm">{`0${index + 1}.`}</span>
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
