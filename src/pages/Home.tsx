
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  // Add mobile detection
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-400 dark:bg-primary-600 opacity-20 will-change-transform"
              style={{
                width: Math.random() * 60 + 10,
                height: Math.random() * 60 + 10,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              whileInView={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.3, 0.1],
              }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-left space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-800/40 text-primary-600 dark:text-primary-300 text-sm font-medium mb-2"
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2 inline-block"
                >
                  ✨
                </motion.span>
                Welcome to my portfolio
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-size-200 animate-gradient-x leading-tight tracking-tight"
              >
                Hi, I'm<br />
                <motion.span 
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-secondary-500 via-primary-600 to-secondary-500 animate-gradient-x"
                  whileInView={{ 
                    textShadow: [
                      "0 0 5px rgba(0,0,0,0)", 
                      "0 0 15px rgba(79, 70, 229, 0.5)", 
                      "0 0 5px rgba(0,0,0,0)"
                    ] 
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Jeelan Basha
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl font-medium tracking-wide"
              >
                A passionate developer crafting
                <motion.span 
                  className="text-primary-600 dark:text-primary-400 font-semibold"
                  whileInView={{ 
                    color: ["#4F46E5", "#EC4899", "#4F46E5"] 
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 5, repeat: Infinity }}
                > beautiful digital </motion.span>
                experiences
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/projects" className="btn btn-primary text-lg px-8 py-3 relative overflow-hidden group">
                    <span className="relative z-10">View My Work</span>
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact" className="btn btn-outline text-lg px-8 py-3 relative overflow-hidden group">
                    <span className="relative z-10">Get In Touch</span>
                    <motion.span 
                      className="absolute inset-0 bg-primary-50 dark:bg-gray-800 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex items-center space-x-5 mt-8"
              >
                {[
                  { name: 'GitHub', icon: 'ri-github-fill', url: 'https://github.com/Jeelan80', ariaLabel: 'GitHub' },
                  { name: 'LinkedIn', icon: 'ri-linkedin-fill', url: 'https://www.linkedin.com/in/jeelan-basha-508a19314/', ariaLabel: 'LinkedIn' },
                  { name: 'X', icon: 'ri-twitter-x-fill', url: 'https://x.com/JeelanBasha80', ariaLabel: 'X (formerly Twitter)' }
                ].map((platform, index) => (
                  <motion.a 
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1, color: '#4F46E5' }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                    aria-label={platform.ariaLabel}
                  >
                    <i className={`${platform.icon} text-xl`}></i>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative max-w-md mx-auto">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-200 to-secondary-200 dark:from-primary-900 dark:to-secondary-900 rounded-2xl transform -rotate-6"
                  animate={{ 
                    rotate: [-6, -4, -6],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-secondary-200 to-primary-200 dark:from-secondary-900 dark:to-primary-900 rounded-2xl transform rotate-3"
                  animate={{ 
                    rotate: [3, 5, 3],
                    scale: [1, 1.01, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
                />
                <motion.div 
                  className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl p-1"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/Images/Profile_Org.png"
                    alt="Jeelan Basha"
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent opacity-0 hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services - OPTIMIZED */}
      <section className="section bg-white dark:bg-gray-900 relative overflow-hidden py-20">
        {/* Simplified background for better performance */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-primary-600/20 bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
          </div>
          
          {/* Reduced number of blobs with simplified animations */}
          {[...Array(isMobile ? 1 : 3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-400 dark:bg-primary-600 opacity-10"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(50px)',
              }}
              whileInView={{
                scale: [1, 1.05, 1],
              }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: isMobile ? 15 : 10,
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
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-800/40 text-primary-600 dark:text-primary-300 text-sm font-medium mb-4"
            >
              {/* Replace JS animation with CSS for the sparkle */}
              <span className="mr-2 inline-block animate-gentle-pulse">✨</span>
              My Services
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 animate-gradient-x"
            >
              What I Do
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
            >
              I specialize in creating modern, responsive, and user-friendly digital experiences.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service Card 1 - Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={isMobile ? {} : { y: -15, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)" }}
              className="card p-8 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary-100 dark:bg-primary-900/30 p-5 rounded-2xl w-fit mb-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-transparent opacity-60 dark:opacity-30" />
                {/* Simplified icon animation */}
                <div className={isMobile ? "" : "animate-gentle-float"}>
                  <Code className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500"
              >
                Web Development
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
              >
                Building responsive and performant websites with modern technologies.
              </motion.p>
              <motion.div
                whileHover={isMobile ? {} : { x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="absolute bottom-8"
              >
                <Link
                  to="/services"
                  className="text-primary-600 font-medium inline-flex items-center hover:underline group text-lg"
                >
                  Learn more 
                  {/* Simplified arrow animation */}
                  <span className="ml-1 bg-primary-100 dark:bg-primary-900/30 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Service Card 2 - UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={isMobile ? {} : { y: -15, boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)" }}
              className="card p-8 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 to-secondary-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-secondary-100 dark:bg-secondary-900/30 p-5 rounded-2xl w-fit mb-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-200 to-transparent opacity-60 dark:opacity-30" />
                {/* Simplified icon animation */}
                <div className={isMobile ? "" : "animate-gentle-float"}>
                  <Palette className="text-secondary-600 dark:text-secondary-400" size={32} />
                </div>
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-secondary-500"
              >
                UI/UX Design
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
              >
                Creating intuitive and beautiful user interfaces and experiences.
              </motion.p>
              <motion.div
                whileHover={isMobile ? {} : { x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="absolute bottom-8"
              >
                <Link
                  to="/services"
                  className="text-secondary-600 font-medium inline-flex items-center hover:underline group text-lg"
                >
                  Learn more 
                  {/* Simplified arrow animation */}
                  <span className="ml-1 bg-secondary-100 dark:bg-secondary-900/30 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Service Card 3 - Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={isMobile ? {} : { y: -15, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)" }}
              className="card p-8 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-primary-100 dark:bg-primary-900/30 p-5 rounded-2xl w-fit mb-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-transparent opacity-60 dark:opacity-30" />
                {/* Simplified icon animation */}
                <div className={isMobile ? "" : "animate-gentle-float"}>
                  <Lightbulb className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500"
              >
                Consulting
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
              >
                Providing expert advice on web technologies and digital strategies.
              </motion.p>
              <motion.div
                whileHover={isMobile ? {} : { x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="absolute bottom-8"
              >
                <Link
                  to="/services"
                  className="text-primary-600 font-medium inline-flex items-center hover:underline group text-lg"
                >
                  Learn more 
                  {/* Simplified arrow animation */}
                  <span className="ml-1 bg-primary-100 dark:bg-primary-900/30 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600"></div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
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
            className="text-center text-white max-w-3xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-white/50 mx-auto mb-8 rounded-full"
            />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to start your project?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/80 mb-10 text-lg max-w-2xl mx-auto"
            >
              Let's collaborate to bring your ideas to life. I'm currently available for freelance work.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)" }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white px-8 py-3 text-lg font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="btn btn-outline border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3 text-lg font-medium"
                >
                  View My Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated grid pattern */}
          <div className="absolute w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-primary-600/20 bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
          </div>
          
          {/* Animated floating circles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-400 dark:bg-primary-600 opacity-10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(60px)',
              }}
              animate={{
                y: [0, Math.random() * 60 - 30],
                x: [0, Math.random() * 60 - 30],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Animated particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-primary-500 dark:bg-primary-400"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Animated geometric shapes */}
          {[...Array(4)].map((_, i) => {
            const shapes = ['polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)']
            return (
              <motion.div
                key={`shape-${i}`}
                className="absolute bg-gradient-to-br from-primary-300 to-secondary-300 dark:from-primary-700 dark:to-secondary-700"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.05,
                  clipPath: shapes[i % shapes.length],
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: Math.random() * 30 + 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )
          })}
          
          {/* SVG wave animation */}
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-800/40 text-primary-600 dark:text-primary-300 text-sm font-medium mb-4 shadow-sm"
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mr-2 inline-block"
              >
                🚀
              </motion.span>
              My Expertise
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 animate-gradient-x"
            >
              Skills & Technologies
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Here are some of the technologies and tools I specialize in
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "React", level: 90, color: "from-blue-500 to-blue-600" },
              { name: "TypeScript", level: 85, color: "from-blue-600 to-indigo-600" },
              { name: "Node.js", level: 80, color: "from-green-500 to-green-600" },
              { name: "UI/UX Design", level: 75, color: "from-purple-500 to-purple-600" },
              { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-cyan-600" },
              { name: "Next.js", level: 85, color: "from-gray-700 to-gray-800" },
              { name: "GraphQL", level: 70, color: "from-pink-500 to-pink-600" },
              { name: "MongoDB", level: 75, color: "from-green-600 to-green-700" }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="h-2 w-full bg-gradient-to-r ${skill.color}"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <motion.div 
                      className="text-xl font-bold text-primary-600 dark:text-primary-400"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.3 + (0.1 * index),
                        type: "spring",
                        stiffness: 300
                      }}
                      viewport={{ once: true }}
                    >
                      {skill.level}%
                    </motion.div>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                    <motion.div 
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.2 + (0.1 * index),
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="absolute top-0 right-0 h-full w-5 bg-white opacity-30"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link 
              to="/skills" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-100 dark:hover:bg-gray-700 transition-all duration-300 group shadow-md hover:shadow-lg"
            >
              <span>View all my skills</span>
              <motion.span
                className="ml-2 bg-primary-100 dark:bg-primary-800/50 p-1 rounded-full"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  ease: "easeInOut" 
                }}
              >
                <ArrowRight size={16} className="group-hover:ml-1 transition-all" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;

