import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know more about me, my background, and what drives me.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="/Images/Profile_Orginal.jpg" 
                  alt="Jeelan Basha" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Hello! I'm Jeelan Basha, a passionate web developer and designer based in Bangalore. 
                With over 3+ years of experience in the field, I've had the opportunity to work on a 
                diverse range of projects that have helped me refine my skills and approach to creating 
                digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I believe in crafting websites and applications that not only look beautiful but also 
                provide intuitive, seamless user experiences. My goal is to help businesses and individuals 
                establish a strong online presence that effectively communicates their message and engages 
                their audience.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                When I'm not coding or designing, you can find me [Your Hobbies/Interests]. I'm always 
                eager to learn new technologies and techniques to stay at the forefront of web development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="text-primary-600 mr-2" size={20} />
                  <span className="text-gray-600 dark:text-gray-400">Born: May 24, 2004</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary-600 mr-2" size={20} />
                  <span className="text-gray-600 dark:text-gray-400">Location: Bangalore, India</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="text-primary-600 mr-2" size={20} />
                  <span className="text-gray-600 dark:text-gray-400">Experience: 3+ Years</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="text-primary-600 mr-2" size={20} />
                  <span className="text-gray-600 dark:text-gray-400">Degree: B.E in AI&ML</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">My Journey</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The path that led me to where I am today.
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-600"></div>
              <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">2020 - Present</div>
              <h3 className="text-xl font-bold mb-2">Senior Web Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Company Name, Location
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Leading development of web applications, mentoring junior developers, and implementing 
                best practices for scalable and maintainable code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-600"></div>
              <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">2017 - 2020</div>
              <h3 className="text-xl font-bold mb-2">Web Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Company Name, Location
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Developed responsive websites and web applications for clients across various industries, 
                focusing on performance optimization and user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-600"></div>
              <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">2015 - 2017</div>
              <h3 className="text-xl font-bold mb-2">Junior Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Company Name, Location
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Started my professional journey building websites and learning modern web development 
                practices under the guidance of senior developers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;