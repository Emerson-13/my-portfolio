// pages/WelcomePage.jsx
import { useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useTheme } from "../Context/ThemeContext";

import skills from "../data/skills";
import experiences from "../data/experiences";
import projects from "../data/projects";

import HeroSection from "../components/portfolio/HeroSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import AboutSection from "../components/portfolio/AboutSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import OverviewGrid from "../components/portfolio/OverviewGrid";
import Footer from "../components/portfolio/Footer";

// Re-using the SVG icons from the theme toggle
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

// Nav sections used to build the header links
const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

const WelcomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [isOverview, setIsOverview] = useState(false);
  const [pendingScrollId, setPendingScrollId] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");

  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // After leaving Overview, scroll to the requested section once the
  // full site has painted.
  useEffect(() => {
    if (isOverview || !pendingScrollId) return;

    const el = document.getElementById(pendingScrollId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setPendingScrollId(null);
  }, [isOverview, pendingScrollId]);

  // Track which section is in view so the nav can highlight it — makes the
  // header feel connected to the page instead of a floating overlay.
  useEffect(() => {
    if (isOverview) return;

    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isOverview]);

  const handleViewFull = useCallback((sectionId) => {
    setPendingScrollId(sectionId);
    setIsOverview(false);
  }, []);

  // Nav click handler: leaves Overview mode if needed, then scrolls to the section
  const handleNavClick = useCallback(
    (sectionId) => {
      if (isOverview) {
        setPendingScrollId(sectionId);
        setIsOverview(false);
        return;
      }

      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [isOverview]
  );

  // Logo click: same "go home" behavior as clicking the Home nav link
  const handleLogoClick = useCallback(() => {
    handleNavClick("hero");
  }, [handleNavClick]);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute w-[28rem] h-[28rem] bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"
          style={{ top: "5%", left: "-5%" }}
        />
        <div
          className="absolute w-[28rem] h-[28rem] bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
          style={{ bottom: "5%", right: "-5%" }}
        />
      </div>

      {/* Full-width header, seamlessly blended into the page instead of a floating chip */}
      <header className="fixed top-0 inset-x-0 z-[100] bg-white/60 dark:bg-gray-950/50 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        {/* max-width container keeps content off the raw screen edges on
            large viewports, while px- gives breathing room on small ones */}
        <div className="relative flex items-center justify-between h-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">

          {/* Logo — anchored left, acts as a "back to top" link */}
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex items-center gap-2 shrink-0 group"
            aria-label="Go to top"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-600 text-white text-sm font-bold shadow-md group-hover:bg-indigo-700 transition-colors">
              E
            </span>
            <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
              Emerson
            </span>
          </button>

          {/* Centered section nav — absolutely centered so it stays true-center
              regardless of the width of the logo/buttons on either side */}
          <nav className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = !isOverview && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Toggle buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2.5 rounded-full bg-indigo-200/50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-500/30 transition-all duration-300"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              type="button"
              onClick={() => setIsOverview((prev) => !prev)}
              className="rounded-full px-4 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              {isOverview ? "Back to Site" : "Overview"}
            </button>
          </div>
        </div>

        {/* Compact scrollable nav for small screens, sits right under the main
            row instead of competing for space with the logo/toggle buttons */}
        <nav className="sm:hidden flex items-center gap-1 overflow-x-auto px-6 pb-2 -mt-1">
          {NAV_LINKS.map((link) => {
            const isActive = !isOverview && activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Spacer so fixed header doesn't overlap the hero section */}
      <div className="h-16 sm:h-16" />

      {isOverview ? (
        <div className="pt-8">
          <OverviewGrid
            skills={skills}
            experiences={experiences}
            projects={projects}
            onViewFull={handleViewFull}
          />
        </div>
      ) : (
        <>
          <div id="hero">
            <HeroSection
              isMobile={isMobile}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              opacity={opacity}
              scale={scale}
            />
          </div>

          <div id="skills">
            <SkillsSection skills={skills} isMobile={isMobile} />
          </div>

          <div id="about">
            <AboutSection />
          </div>

          <div id="projects">
            <ProjectsSection
              projects={projects}
              isMobile={isMobile}
              expandedProject={expandedProject}
              setExpandedProject={setExpandedProject}
            />
          </div>

          <div id="experience">
            <ExperienceSection experiences={experiences} isMobile={isMobile} />
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default WelcomePage;