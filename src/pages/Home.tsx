import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-left space-y-6"
            >
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-size-200 animate-gradient-x leading-tight tracking-tight"
              >
                Hi, I'm<br />
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-secondary-500 via-primary-600 to-secondary-500 animate-gradient-x">Jeelan Basha</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl font-medium tracking-wide"
              >
                A passionate developer crafting
                <span className="text-primary-600 dark:text-primary-400 font-semibold"> beautiful digital </span>
                experiences
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/projects" className="btn btn-primary text-lg px-8 py-3">
                    View My Work
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="btn btn-outline text-lg px-8 py-3">
                    Get In Touch
                  </Link>
                </motion.div>
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
                  animate={{ rotate: -6 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-secondary-200 to-primary-200 dark:from-secondary-900 dark:to-primary-900 rounded-2xl transform rotate-3"
                  animate={{ rotate: 3 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
                />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl p-1">
                  <img
                    src="/Images/Profile_Org.png"
                    alt="Jeelan Basha"
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I specialize in creating modern, responsive, and user-friendly digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full w-fit mb-4">
                <Code className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Building responsive and performant websites with modern technologies.
              </p>
              <Link
                to="/services"
                className="text-primary-600 font-medium inline-flex items-center hover:underline"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-full w-fit mb-4">
                <Palette className="text-secondary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Creating intuitive and beautiful user interfaces and experiences.
              </p>
              <Link
                to="/services"
                className="text-primary-600 font-medium inline-flex items-center hover:underline"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full w-fit mb-4">
                <Lightbulb className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Consulting</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Providing expert advice on web technologies and digital strategies.
              </p>
              <Link
                to="/services"
                className="text-primary-600 font-medium inline-flex items-center hover:underline"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life. I'm currently available for freelance work.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;