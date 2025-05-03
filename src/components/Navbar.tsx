import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Moon, Sun } from 'lucide-react';

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
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has previously set a preference
    const savedTheme = localStorage.getItem('theme');
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Initialize dark mode based on saved preference or system preference
    const initialDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    // Apply initial theme to document
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return initialDarkMode;
  });
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Update the document class
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md'}`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="relative group">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500"
            >
              Portfolio
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 group-hover:w-full transition-all duration-300"
                whileHover={{ width: '100%' }}
              />
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors hover:text-primary-600 relative py-2 px-1 ${isActive ? 'text-primary-600' : 'text-gray-700 dark:text-gray-300'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.span
                            layoutId="navbar-indicator"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center space-x-5">
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              
              <motion.a
                href="https://github.com/Jeelan80"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 transition-colors duration-300"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://x.com/JeelanBasha80"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 transition-colors duration-300"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jeelan-basha-508a19314/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none bg-gray-100 dark:bg-gray-800 p-2 rounded-lg"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="md:hidden mt-4 overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-lg"
            >
              <ul className="flex flex-col space-y-4 p-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block text-sm font-medium transition-colors hover:text-primary-600 ${isActive ? 'text-primary-600' : 'text-gray-700 dark:text-gray-300'}`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-6">
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
                
                <motion.button
                  onClick={toggleDarkMode}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300 focus:outline-none"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;