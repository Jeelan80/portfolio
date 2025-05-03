import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Database, Server, Globe, Cpu, Award, MessageSquare, Wrench, Brain, Users } from 'lucide-react';

// Technical Skills with proficiency levels
const frontendSkills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3/SCSS', level: 90 },
  { name: 'JavaScript', level: 92 },
  { name: 'TypeScript', level: 88 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Framer Motion', level: 80 },
  { name: 'Web Design', level: 85 },
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
  { name: 'SQL', level: 82 },
  { name: 'Python', level: 88 },
  { name: 'Cloud Computing', level: 75 },
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
  { name: 'Chatbot Development', level: 78 },
  { name: 'Hardware Diagnostics', level: 72 },
];

// Soft Skills and Certifications
const softSkills = [
  { name: 'Problem Solving', icon: <Brain size={20} />, description: 'IDEATHON Winner' },
  { name: 'Team Leadership', icon: <Users size={20} />, description: 'Hackathon Organizer Certificate' },
  { name: 'Communication', icon: <MessageSquare size={20} />, description: 'Essential for collaborative development' },
  { name: 'Critical Thinking', icon: <Brain size={20} />, description: 'Essay Writing (1st)' },
  { name: 'Practical Thinking', icon: <Wrench size={20} />, description: 'IDEATHON Winner' },
  { name: 'Educational Leadership', icon: <Users size={20} />, description: 'Student of the Year' },
];

// Certifications and Achievements
const certifications = [
  {
    title: 'Python Developer',
    issuer: 'Sololearn',
    date: 'Jun 2024',
    description: 'Python Developer certification',
    icon: <Code size={24} />,
    credentialId: 'CC-KAAFYZFG',
    skills: ['Python Developer'],
    image: 'Python Developer'
  },
  {
    title: 'SQL Intermediate',
    issuer: 'Sololearn',
    date: 'Mar 2025',
    description: 'Advanced database management and query optimization',
    icon: <Database size={24} />,
    credentialId: 'CC-WTYODOAS',
    skills: ['SQL Intermediate'],
    image: 'SQL Intermediate'
  },
  {
    title: 'The Basics of Google Cloud Compute',
    issuer: 'Google Cloud Skills Boost',
    date: 'Apr 2025',
    description: 'Google Cloud computing fundamentals certification',
    icon: <Server size={24} />,
    skills: ['Cloud Computing'],
    image: 'the-basics-of-google-cloud-compute-skill-badge.png'
  },
  {
    title: 'CODE-A-THON Winner',
    issuer: 'BTI INCUBATION CENTRE',
    date: 'Mar 2025',
    description: 'Web design competition winner',
    icon: <Globe size={24} />,
    skills: ['Web Design'],
    image: 'Web Designing Hackathon.jpg'
  },
  {
    title: 'Introduction to SQL',
    issuer: 'Sololearn',
    date: 'Mar 2025',
    description: 'Fundamentals of database querying and management',
    icon: <Database size={24} />,
    credentialId: 'CC-XNYKS0QQ',
    skills: ['SQL'],
    image: 'Solo Learn Introduction to SQL.jpg'
  },
  {
    title: 'Hackathon',
    issuer: 'PES University',
    date: 'Sep 2024',
    description: 'Built and deployed conversational AI solutions',
    icon: <MessageSquare size={24} />,
    skills: ['Chatbot Development', 'Chatbot Responses'],
    image: 'PES University'
  },
  {
    title: 'IDEATHON Winner',
    issuer: 'Bangalore Technological Institute',
    date: 'Nov 2024',
    description: 'Team Lead for innovative solution development',
    icon: <Award size={24} />,
    credentialId: '037',
    skills: ['Team Lead', 'Problem Solving', 'Practical Thinking'],
    image: 'IDEATHON'
  },
  {
    title: 'Hackathon Organizer Certificate',
    issuer: 'Bangalore Technological Institute',
    date: 'Sep 2024',
    description: 'Organized and managed hackathon events',
    icon: <Users size={24} />,
    skills: ['Team Leadership'],
    image: 'Hackathon Organizer Certificate'
  },
  {
    title: 'Basic Computers',
    issuer: 'Dream A Dream',
    date: 'Apr 2023',
    description: 'Computer Science Education fundamentals',
    icon: <Cpu size={24} />,
    skills: ['Computer Science Education', 'Team Leadership'],
    image: 'Basic Computers'
  },
  {
    title: 'Student of the Year',
    issuer: 'New Wisdom Modern High School',
    date: 'Feb 2018',
    description: 'Academic excellence and leadership recognition',
    icon: <Award size={24} />,
    skills: ['Educational Leadership'],
    image: 'Best Student of the Year.'
  },
  {
    title: 'Student of the Year',
    issuer: 'New Wisdom Modern High School',
    date: 'May 2019',
    description: 'Academic excellence and leadership recognition',
    icon: <Award size={24} />,
    skills: ['Leadership Development'],
    image: 'Student of the Year'
  },
  {
    title: 'Essay Writing (1st)',
    issuer: 'New Wisdom Modern High School',
    date: '',
    description: 'First place in essay writing competition',
    icon: <Award size={24} />,
    skills: ['Critical Thinking'],
    image: 'Essay Writing'
  },
];

// Future Skills - what's trending in the industry
const futureSkills = [
  'Artificial Intelligence',
  'Machine Learning',
  'Blockchain Development',
  'Quantum Computing',
  'AR/VR Development',
  'Edge Computing',
  'Cybersecurity',
  'DevOps',
  'Low-Code Development',
  'IoT Development',
  'Data Science',
  'Serverless Architecture',
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full"
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
  // Add this state to manage the modal
// Removed unused state variable selectedImage
const [, setSelectedImage] = useState<string | null>(null);

  // Function to close the modal
// Removed unused closeModal function

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
                Expertise & Capabilities
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
              My Skills
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
                A comprehensive overview of my technical expertise and professional capabilities
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

      {/* Technical Skills Section with enhanced cards */}
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
              Technical Proficiency
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My expertise across various technologies and development areas
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 dark:bg-primary-900/20 rounded-bl-full opacity-50"></div>
              <div className="relative z-10">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Frontend</h3>
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 dark:bg-primary-900/20 rounded-bl-full opacity-50"></div>
              <div className="relative z-10">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                  <Server size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Backend</h3>
                {backendSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 dark:bg-primary-900/20 rounded-bl-full opacity-50"></div>
              <div className="relative z-10">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                  <Wrench size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Other Skills</h3>
                {otherSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section with card grid */}
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
              Certifications & Achievements
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and notable achievements in my career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                onClick={() => cert.image && setSelectedImage(`/Images/${cert.image}`)}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4 text-primary-600 dark:text-primary-400">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer} • {cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Credential ID: {cert.credentialId}</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{cert.description}</p>
                
                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-primary-50 text-primary-700 rounded-full dark:bg-primary-900/20 dark:text-primary-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Preview indicator */}
                {cert.image && (
                  <div className="mt-4 text-primary-600 dark:text-primary-400 text-sm font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Certificate
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
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
              Professional Skills
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"></p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4 text-primary-600 dark:text-primary-400">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{cert.description}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">{cert.date}</span>
                  <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-50 dark:bg-primary-900/20 p-1 rounded-full"
                  >
                    <Award size={16} className="text-primary-600 dark:text-primary-400" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section with hexagon grid */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
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
              Soft Skills & Leadership
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Essential professional skills that complement my technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 flex items-start"
              >
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-xl mr-4 text-white">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Skills Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
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
              Skills for the Future
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary-100 mb-12 max-w-2xl mx-auto"
            >
              Technologies and skills I'm exploring to stay ahead in the rapidly evolving tech landscape
            </motion.p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {futureSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                >
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">My Learning Journey</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm passionate about continuous learning and staying up-to-date with the latest technologies 
                and best practices in web development. Here's a glimpse into my learning journey:
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4 mt-1 w-10 h-10 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-primary-600 dark:text-primary-400">Formal Education</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Bachelor's degree in Computer Science with a focus on web technologies.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4 mt-1 w-10 h-10 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-primary-600 dark:text-primary-400">Online Courses</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Completed numerous courses on platforms like Udemy, Coursera, and Frontend Masters.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4 mt-1 w-10 h-10 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-primary-600 dark:text-primary-400">Certifications</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Earned certifications in various technologies and methodologies.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4 mt-1 w-10 h-10 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-primary-600 dark:text-primary-400">Open Source Contributions</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Actively contribute to open source projects to learn from and collaborate with other developers.
                    </p>
                  </div>
                </motion.div>
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
                Currently Learning
              </motion.h3>
              
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
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.1)" }}
                    className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 transition-all duration-300"
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
