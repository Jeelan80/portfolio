import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Heart, Award, Coffee, Code, Building } from 'lucide-react';
const About = () => {
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
                My Story
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
              About Me
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
                Get to know more about me, my background, and what drives me.
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

      {/* Who I Am Section */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-200 to-secondary-200 dark:from-primary-900 dark:to-secondary-900 rounded-2xl transform -rotate-6 -z-10"
                animate={{ 
                  rotate: [-6, -4, -6],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-secondary-200 to-primary-200 dark:from-secondary-900 dark:to-primary-900 rounded-2xl transform rotate-3 -z-10"
                animate={{ 
                  rotate: [3, 5, 3],
                  scale: [1, 1.01, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
              />
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/Images/Profile_Org.jpg" 
                  alt="Jeelan Basha" 
                  className="w-full aspect-square object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent opacity-0 hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                  Who I Am
                </motion.h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 text-lg"
              >
                Hello! I'm Jeelan Basha, a passionate web developer, Python developer, and CEO of PrackZen based in Bangalore. 
                With over 3+ years of experience in the field, I've had the opportunity to work on a 
                diverse range of projects that have helped me refine my skills and approach to creating 
                digital experiences.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 text-lg"
              >
                As the CEO of PrackZen and a Chartered Accountant at Emertxe, I combine my technical expertise with business acumen. 
                I'm also an AIML Engineering student with a passion for problem-solving and teamwork. My experience includes winning IDEATHON 
                and serving as a CodeVerse Admin, where I've honed my skills in event hosting and collaborative development.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 text-lg"
              >
                When I'm not coding or managing PrackZen, you can find me exploring new technologies, reading tech blogs, and contributing to open-source projects. I'm always 
                eager to learn new technologies and techniques to stay at the forefront of web development and artificial intelligence.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
              >
                {[
                  { icon: <Calendar className="text-primary-600 dark:text-primary-400" size={22} />, text: "Born: May 24, 2004" },
                  { icon: <MapPin className="text-primary-600 dark:text-primary-400" size={22} />, text: "Location: Bangalore, India" },
                  { icon: <Briefcase className="text-primary-600 dark:text-primary-400" size={22} />, text: "Experience: 3+ Years" },
                  { icon: <GraduationCap className="text-primary-600 dark:text-primary-400" size={22} />, text: "Degree: B.E in AI&ML" },
                  { icon: <Building className="text-primary-600 dark:text-primary-400" size={22} />, text: "CEO: PrackZen" },
                  { icon: <Award className="text-primary-600 dark:text-primary-400" size={22} />, text: "IDEATHON Winner" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm"
                  >
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
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
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-800/40 text-primary-600 dark:text-primary-300 text-sm font-medium mb-4"
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mr-2 inline-block"
              >
                🎓
              </motion.span>
              Education
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 animate-gradient-x"
            >
              Academic Background
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
            >
              My educational journey and qualifications.
            </motion.p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                school: "Bangalore Technological Institute",
                degree: "Artificial Intelligence and Machine Learning, Information Technology",
                period: "Sep 2023 - Sep 2027",
                grade: "A",
                activities: "Python Developer, Coding (Learning New Programming Languages), Problem Solving unlike Traditional Methods, Badminton Player 🏸."
              },
              {
                school: "Sri Sai Ram College",
                degree: "1st and 2nd PUC, Computer Science",
                period: "Jan 2023",
                grade: "A+",
                activities: ""
              },
              {
                school: "New Wisdom Modern High School",
                degree: "SSLC, High School Certificate of Competence Program",
                period: "Feb 2017 - Apr 2021",
                grade: "A+",
                activities: "Class Representative(CR), Event Anchoring, Badminton, Football, Cricket."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">{item.school}</h3>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{item.degree}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <div className="bg-primary-50 dark:bg-primary-900/30 px-4 py-1 rounded-full text-primary-600 dark:text-primary-300 text-sm font-medium">{item.period}</div>
                    {item.grade && (
                      <div className="mt-2 bg-green-50 dark:bg-green-900/30 px-4 py-1 rounded-full text-green-600 dark:text-green-300 text-sm font-medium">Grade: {item.grade}</div>
                    )}
                  </div>
                </div>
                
                {item.activities && (
                  <div className="mt-4">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Activities & Societies</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.activities}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* PrackZen Section */}
      <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <motion.div 
                className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6 aspect-square max-w-md mx-auto border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 p-4 w-full h-full flex items-center justify-center">
                  <img 
                    src="/Images/PrackZen Logo Org.png" 
                    alt="PrackZen Logo" 
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                  About PrackZen
                </motion.h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 text-lg"
              >
                PrackZen is an innovative tech startup I founded that focuses on developing cutting-edge solutions 
                for businesses and individuals. Our mission is to bridge the gap between complex technology and 
                everyday users through intuitive design and powerful functionality.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 text-lg"
              >
                As CEO, I lead a talented team of developers and designers who share my passion for creating 
                impactful digital experiences. We specialize in web applications, AI solutions, and custom 
                software development that helps our clients achieve their goals.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <motion.a
                  href="#"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn more about PrackZen</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Fun Facts Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Fun Facts</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Some interesting things about me and my work.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Code size={24} />, number: "500+", text: "Projects Completed" },
              { icon: <Coffee size={24} />, number: "1,000+", text: "Cups of Coffee" },
              { icon: <Award size={24} />, number: "20+", text: "Awards Won" },
              { icon: <Heart size={24} />, number: "100+", text: "Happy Clients" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow-md transition-all duration-300"
              >
                <motion.div 
                  className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-primary-600 dark:text-primary-400"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400"
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
                  {item.number}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
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