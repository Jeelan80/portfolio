import { useState, FormEvent, ChangeEvent, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin, MessageSquare, Heart, Star } from 'lucide-react';
import { sendEmail } from '../utils/email';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  const [activeField, setActiveField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  // For the floating elements animation
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Shake the form on error
      if (formRef.current) {
        formRef.current.classList.add('shake-animation');
        setTimeout(() => {
          formRef.current?.classList.remove('shake-animation');
        }, 500);
      }
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      await sendEmail(formData);
  
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.',
      });
  
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error("Error sending email:", error);
  
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                💌
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
                Let's Connect
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
              Get In Touch
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
                Have a question or want to work together? I'd love to hear from you!
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
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
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <motion.h2 
                  className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(0,0,0,0)", 
                      "0 0 10px rgba(79, 70, 229, 0.3)", 
                      "0 0 5px rgba(0,0,0,0)"
                    ] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Contact Information
                </motion.h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Feel free to reach out to me through any of the following methods. I'm always open to 
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-8">
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-4 rounded-xl mr-5 text-white shadow-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">Email</h3>
                      <a
                        href="mailto:jeelanqwer@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        jeelanqwer@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-4 rounded-xl mr-5 text-white shadow-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">Phone</h3>
                      <a
                        href="tel: +91 81979 73038"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        +91 81979 73038
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-4 rounded-xl mr-5 text-white shadow-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Bangalore, India
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com/Jeelan80"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 shadow-md"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/jeelan-basha-508a19314/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 shadow-md"
                    >
                      <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                      href="https://x.com/JeelanBasha80"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 shadow-md"
                    >
                      <Twitter size={24} />
                    </motion.a>
                  </div>
                </div>
                
                {/* Floating elements that follow mouse */}
                <motion.div 
                  className="absolute -z-10 text-primary-500 opacity-20 dark:opacity-10"
                  style={{
                    x: mousePosition.x / 20,
                    y: mousePosition.y / 20,
                    top: '10%',
                    left: '10%',
                  }}
                >
                  <MessageSquare size={40} />
                </motion.div>
                <motion.div 
                  className="absolute -z-10 text-secondary-500 opacity-20 dark:opacity-10"
                  style={{
                    x: -mousePosition.x / 30,
                    y: -mousePosition.y / 30,
                    bottom: '15%',
                    right: '15%',
                  }}
                >
                  <Heart size={32} />
                </motion.div>
                <motion.div 
                  className="absolute -z-10 text-yellow-500 opacity-20 dark:opacity-10"
                  style={{
                    x: mousePosition.x / 25,
                    y: -mousePosition.y / 25,
                    top: '40%',
                    right: '10%',
                  }}
                >
                  <Star size={24} />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
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
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <motion.h2 
                  className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(0,0,0,0)", 
                      "0 0 10px rgba(79, 70, 229, 0.3)", 
                      "0 0 5px rgba(0,0,0,0)"
                    ] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Send Me a Message
                </motion.h2>

                <AnimatePresence>
                  {submitStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mb-6 p-4 rounded-xl shadow-md ${
                        submitStatus.success
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`mr-3 p-2 rounded-full ${submitStatus.success ? 'bg-green-200 dark:bg-green-800' : 'bg-red-200 dark:bg-red-800'}`}>
                          {submitStatus.success ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span>{submitStatus.message}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <motion.label 
                      htmlFor="name" 
                      className={`block text-sm font-medium mb-1 transition-all duration-200 ${activeField === 'name' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
                      animate={activeField === 'name' ? { scale: 1.05, x: 5 } : { scale: 1, x: 0 }}
                    >
                      Name
                    </motion.label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 ${errors.name ? 'border-red-500 dark:border-red-500' : activeField === 'name' ? 'border-primary-500 ring-primary-500/20 shadow-md' : 'border-gray-300'}`}
                        placeholder="Your name"
                      />
                      {activeField === 'name' && (
                        <motion.div 
                          className="absolute inset-0 border border-primary-500 rounded-xl pointer-events-none"
                          layoutId="input-highlight"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div className="relative">
                    <motion.label 
                      htmlFor="email" 
                      className={`block text-sm font-medium mb-1 transition-all duration-200 ${activeField === 'email' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
                      animate={activeField === 'email' ? { scale: 1.05, x: 5 } : { scale: 1, x: 0 }}
                    >
                      Email
                    </motion.label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 ${errors.email ? 'border-red-500 dark:border-red-500' : activeField === 'email' ? 'border-primary-500 ring-primary-500/20 shadow-md' : 'border-gray-300'}`}
                        placeholder="Your email address"
                      />
                      {activeField === 'email' && (
                        <motion.div 
                          className="absolute inset-0 border border-primary-500 rounded-xl pointer-events-none"
                          layoutId="input-highlight"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div className="relative">
                    <motion.label 
                      htmlFor="subject" 
                      className={`block text-sm font-medium mb-1 transition-all duration-200 ${activeField === 'subject' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
                      animate={activeField === 'subject' ? { scale: 1.05, x: 5 } : { scale: 1, x: 0 }}
                    >
                      Subject
                    </motion.label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 ${errors.subject ? 'border-red-500 dark:border-red-500' : activeField === 'subject' ? 'border-primary-500 ring-primary-500/20 shadow-md' : 'border-gray-300'}`}
                        placeholder="Subject of your message"
                      />
                      {activeField === 'subject' && (
                        <motion.div 
                          className="absolute inset-0 border border-primary-500 rounded-xl pointer-events-none"
                          layoutId="input-highlight"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                    {errors.subject && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>

                  <div className="relative">
                    <motion.label 
                      htmlFor="message" 
                      className={`block text-sm font-medium mb-1 transition-all duration-200 ${activeField === 'message' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
                      animate={activeField === 'message' ? { scale: 1.05, x: 5 } : { scale: 1, x: 0 }}
                    >
                      Message
                    </motion.label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 ${errors.message ? 'border-red-500 dark:border-red-500' : activeField === 'message' ? 'border-primary-500 ring-primary-500/20 shadow-md' : 'border-gray-300'}`}
                        placeholder="Your message"
                      ></textarea>
                      {activeField === 'message' && (
                        <motion.div 
                          className="absolute inset-0 border border-primary-500 rounded-xl pointer-events-none"
                          layoutId="input-highlight"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                    {errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
                
                {/* Floating elements that follow mouse */}
                <motion.div 
                  className="absolute -z-10 text-primary-500 opacity-20 dark:opacity-10"
                  style={{
                    x: mousePosition.x / 20,
                    y: mousePosition.y / 20,
                    top: '10%',
                    right: '10%',
                  }}
                >
                  <Mail size={32} />
                </motion.div>
                <motion.div 
                  className="absolute -z-10 text-secondary-500 opacity-20 dark:opacity-10"
                  style={{
                    x: -mousePosition.x / 30,
                    y: -mousePosition.y / 30,
                    bottom: '10%',
                    left: '10%',
                  }}
                >
                  <Send size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Add a CSS class for the shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .shake-animation {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </>
  );
};

export default Contact;
