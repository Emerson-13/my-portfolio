import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const getProjectStatus = (title) => {
  if (title.includes("HRIS")) return "Active Product";
  if (title.includes("Bayad Mo")) return "Active Product";
  if (title.includes("Lending")) return "In Development";
  return "Project Showcase";
};

const getProjectCategory = (title) => {
  if (title.includes("HRIS")) return "HR Tech";
  if (title.includes("Bayad Mo")) return "FinTech";
  if (title.includes("Lending")) return "Finance";
  if (title.includes("Vyblinx")) return "Social Platform";
  if (title.includes("Work4U")) return "Education";
  if (title.includes("Payroll")) return "Payroll";
  if (title.includes("Rental")) return "Booking";
  if (title.includes("POS") || title.includes("Inventory")) return "Retail";
  if (title.includes("Barangay")) return "Government";
  if (title.includes("Water")) return "IoT";
  if (title.includes("Enrollment")) return "Education";
  return "Business System";
};

const ProjectsSection = ({ projects = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalActiveImage, setModalActiveImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const touchStartX = useRef(null);

  // Resize listener for responsive offsets
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = projects.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  // Keyboard navigation: Left/Right Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) {
        if (e.key === "Escape") setSelectedProject(null);
        return;
      }
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, handlePrev, handleNext]);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) {
      handlePrev();
    } else if (deltaX < -40) {
      handleNext();
    }
    touchStartX.current = null;
  };

  const getImages = (project) => {
    if (project.images?.length) return project.images;
    if (project.image) return [project.image];
    return [];
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const imgs = getImages(selectedProject);
      setModalActiveImage(imgs[0] || null);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Spacing calculation based on screen width
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const cardSpacing = isMobile ? 240 : isTablet ? 340 : 420;

  return (
    <section
      id="projects"
      className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-28 overflow-hidden select-none"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[140px]" />
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-300 mb-4 tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          System Deck Selection
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Select a{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Business System
          </span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Pick a system card to inspect architecture, workflows, and automated modules.
        </p>
      </div>

      {/* Game Card Selection Stage */}
      <div
        className="relative w-full h-[620px] sm:h-[660px] flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous card"
          className="absolute left-2 sm:left-6 lg:left-12 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-[#121624]/90 backdrop-blur-md border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next card"
          className="absolute right-2 sm:right-6 lg:right-12 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-[#121624]/90 backdrop-blur-md border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        >
          <svg
            className="w-6 h-6 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Spotlight Aura behind the Center Card */}
        <div className="pointer-events-none absolute w-[360px] sm:w-[460px] h-[580px] rounded-[36px] bg-gradient-to-tr from-indigo-500/25 to-purple-500/25 blur-2xl z-10" />

        {/* The Card Deck */}
        <div className="relative w-full h-full flex items-center justify-center">
          {projects.map((project, index) => {
            // Calculate cyclic offset relative to activeIndex
            let diff = index - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isVisible = Math.abs(diff) <= 2;

            if (!isVisible) return null;

            const imgs = getImages(project);
            const previewImg = imgs[0] || null;
            const category = getProjectCategory(project.title);
            const status = getProjectStatus(project.title);

            // Compute 3D translation & visual properties based on distance from center
            const xOffset = diff * cardSpacing;
            const scale = isCenter ? 1 : Math.abs(diff) === 1 ? 0.85 : 0.72;
            const zIndex = isCenter ? 30 : Math.abs(diff) === 1 ? 20 : 10;
            const opacity = isCenter ? 1 : Math.abs(diff) === 1 ? 0.45 : 0.15;
            const blurAmount = isCenter ? "blur(0px)" : Math.abs(diff) === 1 ? "blur(5px)" : "blur(10px)";

            return (
              <motion.div
                key={project.id}
                onClick={() => {
                  if (isCenter) {
                    setSelectedProject(project);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                animate={{
                  x: xOffset,
                  scale: scale,
                  opacity: opacity,
                  filter: blurAmount,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  zIndex: zIndex,
                }}
                className={`absolute w-[310px] sm:w-[410px] lg:w-[440px] h-[550px] sm:h-[570px] cursor-pointer transition-shadow ${
                  isCenter ? "cursor-default" : "cursor-pointer hover:opacity-70"
                }`}
              >
                {/* Outer Glow Ring for Selected Center Card */}
                {isCenter && (
                  <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-70 blur-md pointer-events-none animate-pulse" />
                )}

                {/* Main Card Frame (Strictly identical size and structure for EVERY card) */}
                <div
                  className={`relative flex flex-col h-full rounded-[30px] overflow-hidden border transition-all duration-300 shadow-2xl ${
                    isCenter
                      ? "bg-white dark:bg-[#0E1322] border-indigo-500/70 dark:border-indigo-400/80 shadow-indigo-500/25 ring-2 ring-indigo-500/50"
                      : "bg-white/90 dark:bg-[#0E1322]/90 border-gray-300 dark:border-white/10"
                  }`}
                >
                  {/* Top Game Badge on Center Card */}
                  {isCenter && (
                    <div className="absolute top-2.5 inset-x-0 z-30 flex justify-center pointer-events-none">
                      <span className="px-3 py-0.5 rounded-full bg-indigo-600 text-white font-mono text-[10px] uppercase font-bold tracking-widest shadow-md">
                        ★ Selected System
                      </span>
                    </div>
                  )}

                  {/* 1. Card Header Image / Graphic (Exact height: h-48 sm:h-52) */}
                  <div className="relative h-48 sm:h-52 w-full shrink-0 overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
                    {previewImg ? (
                      <img
                        src={previewImg}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-inner mb-2">
                          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-mono text-indigo-300/80 uppercase tracking-widest">
                          Production System
                        </span>
                      </div>
                    )}

                    {/* Gradient shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                    {/* Corner Badges */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/20">
                        {category}
                      </span>

                      <span className="rounded-full bg-indigo-600/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
                        {status}
                      </span>
                    </div>
                  </div>

                  {/* 2. Card Body (Exact same paddings, heights, and typography across all cards) */}
                  <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between overflow-hidden">
                    <div>
                      {/* Code and Title */}
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate"
                          title={project.title}
                        >
                          {project.title}
                        </h3>
                        <span className="text-[11px] font-mono text-indigo-500 dark:text-indigo-400 font-semibold shrink-0">
                          CARD #{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Description: Fixed height h-[4.25rem] */}
                      <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3 h-[4.25rem] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Tags: Fixed height h-12 */}
                      <div className="mt-3.5 flex flex-wrap gap-1.5 h-12 overflow-hidden content-start">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-400/20 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-[11px] px-2 py-1 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Features Preview: Fixed height h-14 */}
                      <div className="mt-2.5 pt-2.5 border-t border-gray-100 dark:border-white/5 space-y-1 h-14 overflow-hidden">
                        {project.features?.slice(0, 2).map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 truncate"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. Card Footer Actions: Pinned to bottom */}
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/10">
                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="w-full py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 text-xs font-semibold hover:bg-gray-200 dark:hover:bg-white/20 transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Inspect Specs</span>
                          <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        <a
                          href="https://www.messenger.com/t/5902160736571962"
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold text-center hover:shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center"
                        >
                          Request Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Game HUD: Deck Navigator & Dots Bar */}
      <div className="mt-8 flex flex-col items-center gap-3">
        {/* Active Title Indicator */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-gray-400 uppercase tracking-wider">Current Card:</span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400">
            {projects[activeIndex]?.title}
          </span>
          <span className="text-gray-400">
            ({String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")})
          </span>
        </div>

        {/* Pill dots */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`transition-all rounded-full ${
                activeIndex === idx
                  ? "w-7 h-2 bg-indigo-600 dark:bg-indigo-400 shadow-sm"
                  : "w-2 h-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/40"
              }`}
              aria-label={`Select card ${idx + 1}`}
            />
          ))}
        </div>

        <p className="text-[11px] text-gray-400 tracking-wide mt-1">
          Tip: Click side cards or use <kbd className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono">→</kbd> keys to cycle through the deck
        </p>
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#0F1422] border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 sm:p-7 border-b border-gray-200 dark:border-white/10 shrink-0">
                <div className="pr-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-400/20">
                      {getProjectCategory(selectedProject.title)}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                      {getProjectStatus(selectedProject.title)}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-600 dark:text-white flex items-center justify-center transition-all shrink-0"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 sm:p-7 overflow-y-auto space-y-6 flex-1">
                {/* Image Gallery */}
                {getImages(selectedProject).length > 0 && (
                  <div className="space-y-3">
                    <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-black/40 border border-gray-200 dark:border-white/10">
                      <img
                        src={modalActiveImage || getImages(selectedProject)[0]}
                        alt={selectedProject.title}
                        className="w-full h-full object-contain bg-black/20"
                      />
                    </div>

                    {getImages(selectedProject).length > 1 && (
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {getImages(selectedProject).map((img, i) => (
                          <button
                            key={img}
                            type="button"
                            onClick={() => setModalActiveImage(img)}
                            className={`h-16 w-24 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                              (modalActiveImage || getImages(selectedProject)[0]) === img
                                ? "border-indigo-600 scale-105"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${selectedProject.title} preview ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                <div>
                  <h4 className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2">
                    About this system
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                {selectedProject.features?.length > 0 && (
                  <div>
                    <h4 className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-3">
                      Key Capabilities & Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs sm:text-sm text-gray-800 dark:text-gray-200"
                        >
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-400/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row gap-3 bg-gray-50/50 dark:bg-white/[0.02] shrink-0">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gray-900 dark:bg-white/10 text-white text-sm font-semibold text-center hover:bg-gray-800 dark:hover:bg-white/20 transition-all"
                  >
                    View Code (GitHub)
                  </a>
                ) : (
                  <span className="flex-1 py-3 px-4 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-400 text-sm font-medium text-center border border-gray-200 dark:border-white/10 cursor-default">
                    Private Repository
                  </span>
                )}

                <a
                  href="https://www.messenger.com/t/5902160736571962"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold text-center hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                >
                  Request Demo / Inquire
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;