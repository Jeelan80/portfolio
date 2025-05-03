import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-dark/80 shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-primary-600">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <motion.li
                  key={link.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors hover:text-primary-600 ${
                        isActive ? 'text-primary-600' : 'text-gray-700 dark:text-gray-300'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/Jeelan80"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://x.com/JeelanBasha80"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jeelan-basha-508a19314/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <ul className="flex flex-col space-y-4 py-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block text-sm font-medium transition-colors hover:text-primary-600 ${
                          isActive ? 'text-primary-600' : 'text-gray-700 dark:text-gray-300'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center space-x-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <motion.a
                  href="https://github.com/Jeelan80"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://x.com/JeelanBasha80"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/jeelan-basha-508a19314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;