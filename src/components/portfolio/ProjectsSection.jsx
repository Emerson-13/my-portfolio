import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

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
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardImages, setActiveCardImages] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalActiveImage, setModalActiveImage] = useState(null);

  const getImages = (project) => {
    if (project.images?.length) return project.images;
    if (project.image) return [project.image];
    return [];
  };

  const getActiveCardImage = (project) => {
    const imgs = getImages(project);
    return activeCardImages[project.id] || imgs[0] || null;
  };

  const cycleCardImage = (e, project, direction) => {
    e.stopPropagation();
    const imgs = getImages(project);
    if (imgs.length <= 1) return;
    const current = getActiveCardImage(project);
    const currIdx = imgs.indexOf(current);
    const nextIdx =
      direction === "next"
        ? (currIdx + 1) % imgs.length
        : (currIdx - 1 + imgs.length) % imgs.length;

    setActiveCardImages((prev) => ({
      ...prev,
      [project.id]: imgs[nextIdx],
    }));
  };

  const updateScrollButtons = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const card = sliderRef.current.firstElementChild;
    const cardWidth = card ? card.offsetWidth + 24 : 360;

    const newIdx = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(Math.max(0, newIdx), projects.length - 1));
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, [projects.length]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, [updateScrollButtons]);

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild;
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild;
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    sliderRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild;
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    sliderRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      const imgs = getImages(selectedProject);
      setModalActiveImage(imgs[0] || null);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-28 overflow-hidden"
    >
      {/* Header and Carousel Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-300 mb-4">
            Business Solutions &middot; Portfolio
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Systems Built for{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Real Operations
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Swipe or use the arrows to explore platforms built with clean workflows,
            dashboards, and role-based automation.
          </p>
        </motion.div>

        {/* Carousel Navigation Buttons & Counter */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 self-start md:self-end"
        >
          <div className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-mono font-medium text-gray-600 dark:text-gray-300">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(projects.length).padStart(2, "0")}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${
                canScrollLeft
                  ? "bg-white dark:bg-white/10 border-gray-300 dark:border-white/15 text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/20 hover:scale-105 active:scale-95 shadow-sm"
                  : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/5 text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-50"
              }`}
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${
                canScrollRight
                  ? "bg-white dark:bg-white/10 border-gray-300 dark:border-white/15 text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/20 hover:scale-105 active:scale-95 shadow-sm"
                  : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/5 text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-50"
              }`}
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel Track */}
      <div
        ref={sliderRef}
        onScroll={updateScrollButtons}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 px-1 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => {
          const imgs = getImages(project);
          const activeImg = getActiveCardImage(project);
          const category = getProjectCategory(project.title);
          const status = getProjectStatus(project.title);

          return (
            <div
              key={project.id}
              className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start select-none"
            >
              {/* Every card has the exact identical height: h-[560px] */}
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col h-[560px] rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0E131F] shadow-md hover:shadow-2xl hover:shadow-indigo-500/15 hover:border-indigo-400/40 dark:hover:border-indigo-500/30 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* 1. Uniform Image / Banner Header: h-48 (192px) */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
                  {activeImg ? (
                    <img
                      src={activeImg}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-inner mb-2 group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-mono text-indigo-300/80 uppercase tracking-widest">
                        System Architecture
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Badges on Top */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/15">
                      {category}
                    </span>

                    <span className="rounded-full bg-indigo-600/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
                      {status}
                    </span>
                  </div>

                  {/* Image Carousel Switcher if multiple images */}
                  {imgs.length > 1 && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                      <button
                        type="button"
                        onClick={(e) => cycleCardImage(e, project, "prev")}
                        className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center text-xs backdrop-blur-md transition-all shadow"
                        aria-label="Previous preview image"
                      >
                        ‹
                      </button>

                      <div className="flex gap-1.5 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                        {imgs.map((im, i) => (
                          <span
                            key={im}
                            className={`h-1.5 rounded-full transition-all ${
                              activeImg === im ? "w-4 bg-white" : "w-1.5 bg-white/40"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => cycleCardImage(e, project, "next")}
                        className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center text-xs backdrop-blur-md transition-all shadow"
                        aria-label="Next preview image"
                      >
                        ›
                      </button>
                    </div>
                  )}
                </div>

                {/* 2. Uniform Card Body: flex flex-col flex-1 p-6 justify-between */}
                <div className="flex flex-col flex-1 p-6 justify-between overflow-hidden">
                  <div>
                    {/* Fixed 1-line Title */}
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors"
                        title={project.title}
                      >
                        {project.title}
                      </h3>
                      <span className="text-[11px] font-mono text-gray-400 shrink-0">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Fixed 3-line Description (Exactly h-[4.25rem]) */}
                    <p className="mt-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3 h-[4.25rem] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Fixed Height Tags Area (Exactly h-12) */}
                    <div className="mt-4 flex flex-wrap gap-1.5 h-12 overflow-hidden content-start">
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
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Fixed Features Preview (Exactly h-14) */}
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/5 space-y-1.5 h-14 overflow-hidden">
                      {project.features?.slice(0, 2).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 truncate"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Card Footer Actions: pinned to bottom */}
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="w-full py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 text-xs font-semibold hover:bg-gray-200 dark:hover:bg-white/20 transition-all flex items-center justify-center gap-1.5 group/btn"
                      >
                        <span>Details</span>
                        <svg
                          className="w-3.5 h-3.5 text-gray-500 group-hover/btn:translate-x-0.5 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <a
                        href="https://www.messenger.com/t/5902160736571962"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold text-center hover:shadow-md hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
                      >
                        Request Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-8">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            type="button"
            onClick={() => scrollToIndex(idx)}
            className={`transition-all ${
              currentIndex === idx
                ? "w-8 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"
                : "w-2 h-2 rounded-full bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/40"
            }`}
            aria-label={`Jump to project ${idx + 1}`}
          />
        ))}
      </div>

      {/* Detailed Project Modal (Preserves exact card sizing in carousel) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
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
                {/* Image Gallery if available */}
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
                    About this project
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
                    Private Client / Company Repository
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