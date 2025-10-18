import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const WelcomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-50px" });
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-50px" });
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-50px" });
  
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
    { name: 'Inertia.js', level: 'Intermediate', icon: '⚙️', color: 'from-purple-400 to-indigo-400' },
    { name: 'Vue.js', level: 'Intermediate', icon: '🖼️', color: 'from-teal-400 to-green-400' },
    { name: 'FlutterFlow', level: 'Intermediate', icon: '📱', color: 'from-blue-400 to-indigo-400' },
    { name: 'C++', level: 'Intermediate', icon: '💾', color: 'from-blue-500 to-purple-500' },
    { name: 'Arduino', level: 'Intermediate', icon: '🔌', color: 'from-cyan-400 to-blue-400' },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Company',
      duration: '2025',
      description: 'Building responsive web applications and designing scalable component libraries using modern state management.',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      duration: '2023 - 2025',
      description: 'Developed user interfaces and features for an e-commerce platform, focusing on performance optimization.',
      tags: ['Laravel', 'Vue.js', 'MySQL']
    },
  ];

  // =======================================================
  // FIX: Define the 'projects' array here
  // =======================================================
    const projects = [
        {
        id: 1,
        title: 'POS Inventory System',
        image: `${import.meta.env.BASE_URL}POS.jpg`,
        description: 'A Point of Sale and Inventory Management System for tracking products, sales, and stock levels in real time.',
        fullDescription:
        'This system allows store owners to efficiently manage products, sales transactions, and stock updates. It includes barcode scanning, sales analytics, and automated low-stock alerts. Built with React, Node.js, and MySQL for smooth performance and scalability.',
        tags: ['React', 'Laravel', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
        github: 'https://github.com/Emerson-13/Heros',
        demo: ''
    },
    {
        id: 2,
        title: 'Barangay Concern Management System',
        image: `${import.meta.env.BASE_URL}BaranggaySystem.jpg`,
        description: 'A web-based system for logging, tracking, and resolving barangay complaints and requests with geo-tagging features.',
        fullDescription:
        'This system helps barangay officials manage resident concerns digitally. It includes resident registration, complaint tracking, map-based location tagging, and report generation. Built using Laravel, React, and MySQL with Inertia.js integration.',
        tags: ['Laravel', 'React', 'Inertia.js', 'MySQL', 'GeoTagging', 'Tailwind CSS'],
        github: 'https://github.com/Emerson-13/Barangay-System',
        demo: ''
    },
    {
        id: 3,
        title: 'Water Quality Monitoring System',
        image: `${import.meta.env.BASE_URL}WaterQuality.jpg`,
        description: 'An IoT-based system to monitor water parameters like pH, temperature, and turbidity in real-time.',
        fullDescription:
        'This project integrates sensors with ESP32 to collect and send data to a web dashboard for visualization. It helps in maintaining safe water conditions for aquaculture and environmental monitoring. Built with Arduino (ESP32), Node.js, and Flutter for the mobile interface.',
        tags: ['Arduino', 'ESP32', 'Node.js', 'IoT'],
        github: 'https://github.com/Emerson-13/Pondgen24',
        demo: ''
    },
    {
        id: 4,
        title: 'Enrollment Management System',
        image: `${import.meta.env.BASE_URL}Enrollment.jpg`,
        description: 'A full-stack web system for managing student applications, grades, and attendance.',
        fullDescription:
        'This system automates enrollment workflows — from student registration to admin approval and grading. It features role-based access for students and admins, attendance tracking, and report generation. Developed using React, Node.js, and MySQL.',
        tags: ['React', 'Laravel', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
        github: 'https://github.com/Emerson-13/Enrollment',
        demo: ''
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

      {/* About Me Section */}
      <section ref={aboutRef} className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 text-gray-900 dark:text-white"
        >
          About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-6 sm:p-10 rounded-2xl shadow-xl">
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg leading-relaxed"
              >
                Hello! I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Emerson M. Gonzales</span>, a passionate Full Stack Developer with a keen eye for creating elegant solutions to complex problems. My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a career dedicated to building impactful digital experiences.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg leading-relaxed"
              >
                I specialize in modern web technologies including <span className="font-semibold text-purple-600 dark:text-purple-400">React, Laravel, Node.js</span>, and various database systems. I love turning ideas into reality through clean, efficient code and creating user interfaces that are both beautiful and functional.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="text-base sm:text-lg leading-relaxed"
              >
                When I'm not coding, you'll find me exploring new technologies, working on IoT projects with Arduino, or contributing to open-source communities. I believe in continuous learning and staying updated with the latest industry trends to deliver the best solutions to my clients.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="pt-4 border-t border-gray-200 dark:border-white/10"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Bring:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    '🎯 Clean & Maintainable Code',
                    '⚡ Performance Optimization',
                    '🎨 Responsive Design',
                    '🔧 Problem-Solving Skills',
                    '📱 Cross-Platform Development',
                    '🤝 Team Collaboration'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + (i * 0.1) }}
                      className="flex items-center gap-2 text-sm sm:text-base"
                    >
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 text-gray-900 dark:text-white"
        >
          My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isProjectsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layoutId={`project-${project.id}`}
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              className={`group relative cursor-pointer transition-all duration-500 ${
                expandedProject === project.id 
                  ? 'md:col-span-2 z-50' 
                  : ''
              }`}
            >
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {expandedProject === project.id ? project.fullDescription : project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-300 rounded-full border border-indigo-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedProject === project.id ? 'auto' : 0,
                      opacity: expandedProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-200 dark:border-white/10 space-y-4">
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 px-4 py-2 bg-gray-900 dark:bg-white/10 text-white dark:text-gray-200 rounded-lg text-center text-sm font-medium hover:bg-gray-800 dark:hover:bg-white/20 transition-colors"
                        >
                          View Code
                        </a>
                        <a
                        href={project.demo || '#'}
                        onClick={(e) => {
                            if (!project.demo) e.preventDefault(); // block click if no link
                            e.stopPropagation();
                        }}
                        className={`flex-1 px-4 py-2 rounded-lg text-center text-sm font-medium transition-all ${
                            project.demo
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
                            : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        }`}
                        >
                        Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Click Indicator */}
                  <div className="mt-4 text-center">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {expandedProject === project.id ? 'Click to collapse ▲' : 'Click to expand ▼'}
                    </span>
                  </div>
                </div>
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