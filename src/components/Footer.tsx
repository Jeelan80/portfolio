import { Github, Linkedin, Twitter, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-10 relative overflow-hidden"> 
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-600/20 bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
        </div>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-400 dark:bg-primary-600 opacity-10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(70px)',
            }}
            whileInView={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              scale: [1, 1.05, 1],
            }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
          {/* Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-3" 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Portfolio</span>
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-4 max-w-md" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A showcase of my work, skills, and professional journey. Let's build something amazing together.
            </motion.p>
            <motion.div 
              className="flex space-x-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { icon: <Github size={20} />, url: "https://github.com/Jeelan80", label: "GitHub" },
                { icon: <Twitter size={20} />, url: "https://x.com/JeelanBasha80", label: "X" },
                { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/jeelan-basha-508a19314/", label: "LinkedIn" },
                { icon: <Mail size={20} />, url: "mailto:jeelanqwer@gmail.com", label: "Email" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  aria-label={item.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-3" 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Contact</span>
            </motion.h3>
            <motion.div 
              className="space-y-3" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full">
                  <Mail size={18} className="text-primary-600 dark:text-primary-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  jeelanqwer@gmail.com
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full">
                  <MapPin size={18} className="text-primary-600 dark:text-primary-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Bangalore, India
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full">
                  <Clock size={18} className="text-primary-600 dark:text-primary-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Available for freelance work and collaborations
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-4" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Projects', path: '/projects' },
            { name: 'Skills', path: '/skills' },
            { name: 'Contact', path: '/contact' }
          ].map((link, index) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
              viewport={{ once: true }}
            >
              <Link 
                to={link.path}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 px-4 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300" 
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span>© {currentYear}</span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-medium"
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(0,0,0,0)", 
                  "0 0 10px rgba(79, 70, 229, 0.3)", 
                  "0 0 5px rgba(0,0,0,0)"
                ] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Jeelan Basha
            </motion.span>
            <span>• All rights reserved</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;