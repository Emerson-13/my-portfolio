import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const WelcomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-50px" });
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-50px" });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const skills = [
    { name: 'React', level: 'Advanced', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'JavaScript', level: 'Advanced', icon: '💻', color: 'from-yellow-400 to-orange-400' },
    { name: 'CSS/Tailwind', level: 'Advanced', icon: '🎨', color: 'from-pink-400 to-purple-400' },
    { name: 'Node.js', level: 'Advanced', icon: '🟢', color: 'from-green-400 to-emerald-400' },
    { name: 'Laravel', level: 'Advanced', icon: '🧱', color: 'from-red-400 to-orange-400' },
    { name: 'PHP', level: 'Intermediate', icon: '🐘', color: 'from-cyan-400 to-blue-400' },
    { name: 'FlutterFlow', level: 'Intermediate', icon: '📱', color: 'from-pink-400 to-purple-400' }, 
    { name: 'Mysql', level: 'Advance', icon: '🐬', color: 'from-cyan-400 to-blue-400' },
    { name: 'Arduino', level: 'Intermediate', icon: '🔌', color: 'from-yellow-400 to-orange-400' },
    { name: 'Inertia.js', level: 'Intermediate', icon: '⚙️', color: 'from-purple-400 to-indigo-400' }, 
    { name: 'Supabase', level: 'Intermediate', icon: '🪶', color: 'from-blue-500 to-purple-500' },
    { name: 'MongoDB', level: 'Intermediate', icon: '🍃', color: 'from-green-400 to-emerald-400' }, 
    { name: 'Java', level: 'Intermediate', icon: '☕', color: 'from-yellow-400 to-orange-400' },
    { name: 'C++', level: 'Intermediate', icon: '💾', color: 'from-blue-500 to-purple-500' },   
    { name: 'Vue.js', level: 'Intermediate', icon: '🖼️', color: 'from-teal-400 to-green-400' },    
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Company',
      duration: '2025',
      description: 'Building responsive web applications and designing scalable component libraries using modern state management.',
      tags: ['Laravel', 'React', 'Node.js', 'Mysql', 'Inertia.js', 'Tailwind CSS', 'PHP']
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      duration: '2023 - 2025',
      description: 'Developed user interfaces and features for an e-commerce platform, focusing on performance optimization.',
      tags: ['React', 'Javascript', 'Node.js', 'MySQL']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Background Effects */}
      {!isMobile && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            className="absolute w-64 h-64 md:w-96 md:h-96 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x / 20,
              y: mousePosition.y / 20,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 50 }}
            style={{ top: '10%', left: '10%' }}
          />
          <motion.div
            className="absolute w-64 h-64 md:w-96 md:h-96 bg-purple-400/20 dark:bg-purple-500/30 rounded-full blur-3xl"
            animate={{
              x: -mousePosition.x / 30,
              y: -mousePosition.y / 30,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 50 }}
            style={{ bottom: '10%', right: '10%' }}
          />
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        style={!isMobile ? { opacity, scale } : {}}
        className={`relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 transition-all duration-500 ${
          isExpanded ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <motion.div
          className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left z-10 w-full"
          initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
          animate={{
            opacity: isExpanded ? 0.7 : 1,
            x: 0,
            scale: isExpanded ? 0.85 : 1,
          }}
          transition={{ duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: isMobile ? 0.5 : 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Emerson M. Gonzales
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: isMobile ? 0.5 : 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent"
          >
            Full Stack Developer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: isMobile ? 0.5 : 0.8 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
          >
            Passionate about creating beautiful, functional, and user-friendly
            applications. Specialized in modern web technologies and always eager
            to learn new things.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: isMobile ? 0.5 : 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4 px-2 sm:px-0"
          >
            <a
              href="https://github.com/Emerson-13"
              className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center gap-2">
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a
              href="https://www.messenger.com/t/5902160736571962"
              className="px-6 sm:px-8 py-3 bg-white/80 dark:bg-white/5 backdrop-blur-sm border-2 border-indigo-400 text-indigo-600 dark:text-indigo-300 rounded-xl font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg text-sm sm:text-base"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end cursor-pointer z-20 relative w-full"
          onClick={() => setIsExpanded(!isExpanded)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: isExpanded ? (isMobile ? 1.5 : 1.1) : 1,
            x: isExpanded && !isMobile ? 50 : 0,
          }}
          transition={{ duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }}
          whileHover={!isMobile ? { scale: isExpanded ? 1.1 : 1.05 } : {}}
        >
          <div
            className={`relative ${
              isExpanded 
                ? "w-[85vw] h-[85vw] sm:w-[70vw] sm:h-[70vw] md:w-[50vw] md:h-[50vw]" 
                : "w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
            } transition-all duration-500 ease-in-out`}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-75"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <img
              src={`${import.meta.env.BASE_URL}picture.jpg`} 
              alt="Emerson M. Gonzales"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section ref={skillsRef} className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 text-gray-900 dark:text-white"
        >
          My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Skills</span>
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isSkillsInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={!isMobile ? { y: -10, scale: 1.05 } : {}}
              whileTap={isMobile ? { scale: 0.95 } : {}}
              className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <motion.div
                whileHover={!isMobile ? { rotate: [0, -10, 10, -10, 0], scale: 1.2 } : {}}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 sm:h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isSkillsInView ? { width: skill.level === 'Advanced' ? '90%' : '70%' } : {}}
                    transition={{ delay: index * 0.05, duration: 0.8 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
                <span className="text-[10px] sm:text-xs text-indigo-500 dark:text-indigo-300 font-medium whitespace-nowrap">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 text-gray-900 dark:text-white"
        >
          My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Experience</span>
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isExperienceInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={!isMobile ? { y: -8, scale: 1.02 } : {}}
              whileTap={isMobile ? { scale: 0.98 } : {}}
              className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2 sm:gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">{exp.company}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-300 font-semibold bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-indigo-400/30 whitespace-nowrap self-start">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-300 rounded-full border border-indigo-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-center border-t border-gray-200 dark:border-white/10 py-8 sm:py-12 mt-16 sm:mt-20"
      >
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm px-4">
          © 2025 Emerson M. Gonzales. All rights reserved.
        </p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 dark:text-gray-500 text-[10px] sm:text-xs mt-2"
        >
          Built with React & Tailwind CSS
        </motion.p>
      </motion.footer>
    </>
  );
};

export default WelcomePage;