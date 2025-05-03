import { motion } from 'framer-motion';
import { Code, Palette, Lightbulb, Smartphone, Database, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Code size={24} />,
    title: 'Web Development',
    description:
      'Building responsive, fast, and user-friendly websites using modern technologies like React, TypeScript, and Tailwind CSS.',
  },
  {
    icon: <Palette size={24} />,
    title: 'UI/UX Design',
    description:
      'Creating intuitive and visually appealing user interfaces that provide exceptional user experiences.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile Development',
    description:
      'Developing cross-platform mobile applications that work seamlessly on both iOS and Android devices.',
  },
  {
    icon: <Database size={24} />,
    title: 'Backend Development',
    description:
      'Building robust server-side applications and APIs that power your web and mobile applications.',
  },
  {
    icon: <LineChart size={24} />,
    title: 'SEO Optimization',
    description:
      'Improving your website\'s visibility in search engines to drive more organic traffic to your business.',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Consulting',
    description:
      'Providing expert advice on web technologies, digital strategies, and best practices for your projects.',
  },
];

const Services = () => {
  return (
    <>
      <section className="section bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Services</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here's what I can do for you and your business
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full w-fit mb-4">
                  <span className="text-primary-600">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">My Approach</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I believe in a collaborative approach to every project. By working closely with you, 
                I ensure that the final product not only meets but exceeds your expectations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-4 mt-1">
                    <span className="text-primary-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Discovery</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Understanding your business, goals, and requirements to lay a solid foundation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-4 mt-1">
                    <span className="text-primary-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Planning</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Creating a detailed roadmap with milestones to ensure timely delivery.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-4 mt-1">
                    <span className="text-primary-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Execution</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Implementing the solution with regular updates and feedback sessions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-4 mt-1">
                    <span className="text-primary-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Delivery & Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Launching your project and providing ongoing support to ensure success.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Me?</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-2">Expertise</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    With years of experience in web development and design, I bring a wealth of knowledge to every project.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">Quality</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm committed to delivering high-quality work that meets modern standards and best practices.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">Communication</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Clear and consistent communication ensures we're always on the same page throughout the project.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">Support</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I provide ongoing support after project completion to ensure everything continues to run smoothly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how I can help bring your vision to life.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white text-primary-600 hover:bg-primary-50"
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