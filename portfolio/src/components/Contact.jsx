import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiSend, FiPhone, FiMapPin, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or EmailJS
    setStatus('Message sent successfully! 🎉');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a192f] relative overflow-hidden">\n      {/* Background decoration */}\n      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#64ffda]/5 rounded-full blur-3xl"></div>\n      <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#64ffda] via-purple-400 to-[#64ffda] bg-clip-text text-transparent"
            >
              Get In Touch!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[#8892b0] text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </motion.p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Info Card */}
              <div className="bg-[#112240]/80 backdrop-blur-md rounded-2xl p-8 border border-[#233554] hover:border-[#64ffda]/30 transition-all duration-300 shadow-xl">
                <h3 className="text-2xl font-bold text-[#64ffda] mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center group-hover:bg-[#64ffda]/20 transition-all duration-300">
                      <FiMail className="text-[#64ffda] text-xl" />
                    </div>
                    <div>
                      <p className="text-[#8892b0] text-sm mb-1">Email</p>
                      <a href="mailto:your.email@example.com" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium">
                        your.email@example.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                      <FiPhone className="text-purple-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-[#8892b0] text-sm mb-1">Phone</p>
                      <a href="tel:+1234567890" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors font-medium">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                      <FiMapPin className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-[#8892b0] text-sm mb-1">Location</p>
                      <p className="text-[#ccd6f6] font-medium">Your City, Country</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#233554] to-transparent"></div>

                {/* Social Links */}
                <div>
                  <p className="text-[#8892b0] text-sm mb-4">Follow me on</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#0a192f] border border-[#233554] flex items-center justify-center hover:border-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300 group"
                    >
                      <FaGithub className="text-[#8892b0] group-hover:text-[#64ffda] text-xl transition-colors" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#0a192f] border border-[#233554] flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 group"
                    >
                      <FaLinkedin className="text-[#8892b0] group-hover:text-blue-400 text-xl transition-colors" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#0a192f] border border-[#233554] flex items-center justify-center hover:border-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300 group"
                    >
                      <FaTwitter className="text-[#8892b0] group-hover:text-[#64ffda] text-xl transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-[#112240]/80 backdrop-blur-md rounded-2xl p-8 border border-[#233554] hover:border-[#64ffda]/30 transition-all duration-300 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-[#ccd6f6] mb-2 font-medium">
                      Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8892b0]" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-[#0a192f]/50 border border-[#233554] rounded-xl text-[#ccd6f6] focus:border-[#64ffda] focus:outline-none focus:ring-2 focus:ring-[#64ffda]/20 transition-all duration-300 placeholder-[#8892b0]"  
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-[#ccd6f6] mb-2 font-medium">
                      Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8892b0]" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-[#0a192f]/50 border border-[#233554] rounded-xl text-[#ccd6f6] focus:border-[#64ffda] focus:outline-none focus:ring-2 focus:ring-[#64ffda]/20 transition-all duration-300 placeholder-[#8892b0]"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-[#ccd6f6] mb-2 font-medium">
                      Subject
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8892b0]" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-[#0a192f]/50 border border-[#233554] rounded-xl text-[#ccd6f6] focus:border-[#64ffda] focus:outline-none focus:ring-2 focus:ring-[#64ffda]/20 transition-all duration-300 placeholder-[#8892b0]"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-[#ccd6f6] mb-2 font-medium">
                      Message
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-4 text-[#8892b0]" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full pl-12 pr-4 py-3.5 bg-[#0a192f]/50 border border-[#233554] rounded-xl text-[#ccd6f6] focus:border-[#64ffda] focus:outline-none focus:ring-2 focus:ring-[#64ffda]/20 transition-all duration-300 resize-none placeholder-[#8892b0]"
                        placeholder="Your message here..."
                      />
                    </div>
                  </div>

                  {/* Status Message */}
                  {status && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#64ffda] text-center font-medium bg-[#64ffda]/10 py-2 rounded-lg"
                    >
                      {status}
                    </motion.p>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#64ffda] to-purple-500 text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <FiSend className="relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
