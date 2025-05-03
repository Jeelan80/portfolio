import { motion } from 'framer-motion';

const frontendSkills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3/SCSS', level: 90 },
  { name: 'JavaScript', level: 92 },
  { name: 'TypeScript', level: 88 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Framer Motion', level: 80 },
];

const backendSkills = [
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 82 },
  { name: 'MongoDB', level: 78 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'GraphQL', level: 70 },
  { name: 'REST API', level: 88 },
  { name: 'Firebase', level: 80 },
  { name: 'AWS', level: 65 },
];

const otherSkills = [
  { name: 'Git/GitHub', level: 90 },
  { name: 'Docker', level: 70 },
  { name: 'CI/CD', level: 75 },
  { name: 'Figma', level: 85 },
  { name: 'Adobe XD', level: 80 },
  { name: 'Responsive Design', level: 95 },
  { name: 'Performance Optimization', level: 85 },
  { name: 'SEO', level: 80 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-primary-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Frontend</h2>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Backend</h2>
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Other Skills</h2>
              {otherSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
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
            <h2 className="section-title">Tools & Technologies</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The tools and technologies I use to bring projects to life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'Express',
              'MongoDB',
              'PostgreSQL',
              'GraphQL',
              'Tailwind CSS',
              'Framer Motion',
              'Git',
              'Docker',
              'AWS',
              'Firebase',
              'Figma',
              'Adobe XD',
              'VS Code',
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 flex items-center justify-center"
              >
                <span className="font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
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
              <h2 className="text-3xl font-bold mb-6">My Learning Journey</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm passionate about continuous learning and staying up-to-date with the latest technologies 
                and best practices in web development. Here's a glimpse into my learning journey:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-4 mt-1">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Formal Education</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Bachelor's degree in Computer Science with a focus on web technologies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-4 mt-1">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Online Courses</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Completed numerous courses on platforms like Udemy, Coursera, and Frontend Masters.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-4 mt-1">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Certifications</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Earned certifications in various technologies and methodologies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-4 mt-1">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Open Source Contributions</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Actively contribute to open source projects to learn from and collaborate with other developers.
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
            >
              <h2 className="text-3xl font-bold mb-6">Currently Learning</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I believe in continuous improvement and am always expanding my skill set. Here are some 
                technologies and concepts I'm currently focusing on:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Web3 Development',
                  'Blockchain Technologies',
                  'Advanced Animation Techniques',
                  'Serverless Architecture',
                  'Machine Learning Basics',
                  'Progressive Web Apps',
                  'Micro Frontends',
                  'Performance Optimization',
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4"
                  >
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;