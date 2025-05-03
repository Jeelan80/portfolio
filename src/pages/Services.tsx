import { motion } from 'framer-motion';
import { Code, Palette, Camera, Smartphone, Calendar, ClipboardList } from 'lucide-react';

const services = [
  {
    icon: <Palette size={24} />,
    title: 'Web Design',
    description:
      'Creating stunning, modern web designs that capture your brand identity and provide exceptional user experiences.',
  },
  {
    icon: <Camera size={24} />,
    title: 'Commercial Photography',
    description:
      'Professional photography services for products, events, and marketing materials that make your business stand out.',
  },
  {
    icon: <Code size={24} />,
    title: 'Web Development',
    description:
      'Building responsive, fast, and user-friendly websites using modern technologies like React, TypeScript, and Tailwind CSS.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile Application Development',
    description:
      'Developing cross-platform mobile applications that work seamlessly on both iOS and Android devices.',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Event Planning',
    description:
      'Comprehensive event planning services from concept to execution, ensuring memorable and successful events.',
  },
  {
    icon: <ClipboardList size={24} />,
    title: 'Project Management',
    description:
      'Efficient project management services to ensure your projects are completed on time, within budget, and to specification.',
  },
];

const Services = () => {
  return (
    <>      
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-primary-600/20 bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
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
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
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
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
                scale: [1, 1.1, 1],
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
                ✨
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
                What I Offer
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
              My Services
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
                Here's what I can do for you and your business
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z" 
              fill="currentColor" 
              className="text-white dark:text-gray-900"
              animate={{
                d: [
                  "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z",
                  "M321.39,76.44c58-10.79,114.16-40.13,172-51.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,41,906.67,82,985.66,102.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"
                ]
              }}
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

      {/* Services Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative"
              >
                <motion.div 
                  className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full opacity-10 dark:opacity-5" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path 
              fill="#4F46E5"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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
                My Approach
              </motion.h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I believe in a collaborative approach to every project. By working closely with you, 
                I ensure that the final product not only meets but exceeds your expectations.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    number: "1",
                    title: "Discovery",
                    description: "Understanding your business, goals, and requirements to lay a solid foundation."
                  },
                  {
                    number: "2",
                    title: "Planning",
                    description: "Creating a detailed roadmap with milestones to ensure timely delivery."
                  },
                  {
                    number: "3",
                    title: "Execution",
                    description: "Implementing the solution with regular updates and feedback sessions."
                  },
                  {
                    number: "4",
                    title: "Delivery & Support",
                    description: "Launching your project and providing ongoing support to ensure success."
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md"
                  >
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4 mt-1 w-10 h-10 flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-primary-600 dark:text-primary-400">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600"
                animate={{ 
                  textShadow: [
                    "0 0 5px rgba(0,0,0,0)", 
                    "0 0 10px rgba(79, 70, 229, 0.3)", 
                    "0 0 5px rgba(0,0,0,0)"
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Why Choose Me?
              </motion.h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Expertise",
                    description: "With years of experience in web development and design, I bring a wealth of knowledge to every project."
                  },
                  {
                    title: "Quality",
                    description: "I'm committed to delivering high-quality work that meets modern standards and best practices."
                  },
                  {
                    title: "Communication",
                    description: "Clear and consistent communication ensures we're always on the same page throughout the project."
                  },
                  {
                    title: "Support",
                    description: "I provide ongoing support after project completion to ensure everything continues to run smoothly."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm"
                  >
                    <h4 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss your project and how I can help bring your vision to life.
            </motion.p>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;