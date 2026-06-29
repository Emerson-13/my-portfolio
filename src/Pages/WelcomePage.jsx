import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

import skills from "../data/skills";
import experiences from "../data/experiences";
import projects from "../data/projects";

import HeroSection from "../components/portfolio/HeroSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import AboutSection from "../components/portfolio/AboutSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import Footer from "../components/portfolio/Footer";

const WelcomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <>
      {!isMobile && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            className="absolute w-64 h-64 md:w-96 md:h-96 bg-indigo-400/20 dark:bg-indigo-500/30 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x / 20,
              y: mousePosition.y / 20,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 50 }}
            style={{ top: "10%", left: "10%" }}
          />

          <motion.div
            className="absolute w-64 h-64 md:w-96 md:h-96 bg-purple-400/20 dark:bg-purple-500/30 rounded-full blur-3xl"
            animate={{
              x: -mousePosition.x / 30,
              y: -mousePosition.y / 30,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 50 }}
            style={{ bottom: "10%", right: "10%" }}
          />
        </div>
      )}

      <HeroSection
        isMobile={isMobile}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        opacity={opacity}
        scale={scale}
      />

      <SkillsSection skills={skills} isMobile={isMobile} />

      <AboutSection />

      <ProjectsSection
        projects={projects}
        isMobile={isMobile}
        expandedProject={expandedProject}
        setExpandedProject={setExpandedProject}
      />

      <ExperienceSection experiences={experiences} isMobile={isMobile} />

      <Footer />
    </>
  );
};

export default WelcomePage;