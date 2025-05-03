import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Layers, Cpu } from 'lucide-react';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, shopping cart, and payment processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: <Code size={24} />
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'A productivity app that helps users manage their tasks and projects. Features include drag-and-drop task organization, due dates, priority levels, and team collaboration.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: <Layers size={24} />
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'A weather application that provides current weather conditions and forecasts for locations worldwide. Utilizes the OpenWeatherMap API for real-time data.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: <Cpu size={24} />
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'A personal portfolio website showcasing my skills, projects, and professional experience. Built with modern web technologies and featuring a responsive design.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: <Code size={24} />
  },
  {
    id: 5,
    title: 'Recipe Finder App',
    category: 'Mobile Application',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'A mobile application that helps users find recipes based on ingredients they have. Includes features like recipe saving, meal planning, and nutritional information.',
    technologies: ['React Native', 'Redux', 'Firebase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: <Layers size={24} />
  },
  {
    id: 6,
    title: 'Blog Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'A full-featured blog platform with user authentication, content management, commenting system, and admin dashboard. Built with modern web technologies.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    icon: <Code size={24} />
  },
];

const categories = ['All', 'Web Development', 'Web Application', 'Mobile Application'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Hero Section with animated background */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-primary-600/20 bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
          </div>
          
          {/* Animated particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-400 dark:bg-primary-600 opacity-10"
              style={{
                width: Math.random() * 8 + 4,
                height: Math.random() * 8 + 4,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              whileInView={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Larger blobs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i + 100}
              className="absolute rounded-full bg-primary-400 dark:bg-primary-600 opacity-10"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(70px)',
              }}
              whileInView={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
                scale: [1, 1.1, 1],
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm dark:bg-primary-800/40 text-primary-600 dark:text-primary-300 text-sm font-medium mb-6 shadow-md"
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mr-2 inline-block text-lg"
              >
                🚀
              </motion.span>
              <motion.span
                animate={{
                  color: [
                    'rgb(79, 70, 229)', // primary-600
                    'rgb(147, 51, 234)', // secondary-600
                    'rgb(79, 70, 229)'
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Featured Projects
              </motion.span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-size-200 animate-gradient-x drop-shadow-sm"
            >
              My Projects
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative max-w-2xl mx-auto"
            >
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"
                animate={{
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <p className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 text-gray-600 dark:text-gray-400 text-lg shadow-sm border border-gray-100 dark:border-gray-800">
                A showcase of my recent work and creative development projects
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z" 
              fill="currentColor" 
              className="text-white dark:text-gray-900"
              whileInView={{
                d: [
                  "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z",
                  "M321.39,76.44c58-10.79,114.16-40.13,172-51.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,41,906.67,82,985.66,102.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"
                ]
              }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
      </section>

      {/* Projects Section with filter */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-400 dark:bg-primary-600 opacity-5"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(70px)',
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
                scale: [1, 1.05, 1],
              }}
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600"
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(0,0,0,0)", 
                  "0 0 10px rgba(79, 70, 229, 0.3)", 
                  "0 0 5px rgba(0,0,0,0)"
                ] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Project Gallery
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Browse through my latest work and development projects
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4 text-primary-600 dark:text-primary-400">
                        {project.icon}
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-800 rounded-full mb-2 dark:bg-primary-900/30 dark:text-primary-300">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-primary-50 text-primary-700 rounded-full dark:bg-primary-900/20 dark:text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-primary-50 text-primary-700 rounded-full dark:bg-primary-900/20 dark:text-primary-300">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center gap-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <button
                  aria-label="Close project details"
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100/80 backdrop-blur-sm text-primary-800 rounded-full mb-2">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">Description</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedProject.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-3 py-1 text-sm bg-primary-50 text-primary-700 rounded-full dark:bg-primary-900/20 dark:text-primary-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 justify-end mt-8">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                  >
                    <Github size={16} /> View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-md transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;