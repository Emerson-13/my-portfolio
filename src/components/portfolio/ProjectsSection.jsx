import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

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

const ProjectsSection = ({
  projects,
  expandedProject,
  setExpandedProject,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeImages, setActiveImages] = useState({});
  const [lightbox, setLightbox] = useState(null);

  const getImages = (project) => {
    if (project.images?.length) return project.images;
    if (project.image) return [project.image];
    return [];
  };

  const getActiveImage = (project) => {
    const images = getImages(project);
    return activeImages[project.id] || images[0];
  };

  const changeImage = (project, direction) => {
    const images = getImages(project);
    const currentImage = getActiveImage(project);
    const currentIndex = images.indexOf(currentImage);

    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;

    setActiveImages((prev) => ({
      ...prev,
      [project.id]: images[nextIndex],
    }));
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300 mb-5">
          Business Solutions
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Systems Built for{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Real Operations
          </span>
        </h2>

        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
          A collection of business systems, product platforms, and custom
          applications built with practical workflows, role-based access,
          dashboards, reports, and scalable architecture.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const images = getImages(project);
          const activeImage = getActiveImage(project);
          const isExpanded = expandedProject === project.id;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              onClick={() => setExpandedProject(isExpanded ? null : project.id)}
              className={`group relative cursor-pointer ${
                isExpanded ? "xl:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white/85 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div
                    className={`relative overflow-hidden bg-gray-100 dark:bg-white/5 ${
                      isExpanded
                        ? "lg:col-span-3 h-80 lg:h-full min-h-[360px]"
                        : "lg:col-span-2 h-72"
                    }`}
                  >
                    {activeImage ? (
                      <motion.img
                        key={activeImage}
                        src={activeImage}
                        alt={project.title}
                        initial={{ opacity: 0.4, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightbox({ project, image: activeImage });
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-400">
                        No preview image
                      </div>
                    )}

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
                        {getProjectCategory(project.title)}
                      </span>

                      <span className="rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-semibold text-white">
                        {getProjectStatus(project.title)}
                      </span>
                    </div>

                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            changeImage(project, "prev");
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-gray-900 shadow-lg hover:scale-110 transition-transform"
                        >
                          ‹
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            changeImage(project, "next");
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-gray-900 shadow-lg hover:scale-110 transition-transform"
                        >
                          ›
                        </button>

                        <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-1">
                          {images.map((image, imgIndex) => (
                            <button
                              key={image}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImages((prev) => ({
                                  ...prev,
                                  [project.id]: image,
                                }));
                              }}
                              className={`h-14 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                                activeImage === image
                                  ? "border-white scale-105"
                                  : "border-white/40 opacity-70 hover:opacity-100"
                              }`}
                            >
                              <img
                                src={image}
                                alt={`${project.title} preview ${imgIndex + 1}`}
                                className="h-full w-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div
                    className={`p-6 sm:p-8 ${
                      isExpanded ? "lg:col-span-2" : "lg:col-span-3"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-400">
                          {isExpanded
                            ? project.fullDescription
                            : project.description}
                        </p>
                      </div>

                      <span className="shrink-0 text-xs rounded-full border border-gray-200 dark:border-white/10 px-3 py-1 text-gray-500 dark:text-gray-400">
                        {isExpanded ? "Hide" : "View"}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-7 pt-6 border-t border-gray-200 dark:border-white/10">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                          Key Features
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.features?.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3"
                            >
                              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 rounded-xl bg-gray-900 dark:bg-white/10 px-4 py-3 text-center text-sm font-medium text-white dark:text-gray-100 hover:bg-gray-800 dark:hover:bg-white/20 transition-all"
                        >
                          View Code
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 rounded-xl bg-gray-100 dark:bg-white/5 px-4 py-3 text-center text-sm font-medium text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 cursor-default"
                        >
                          Private Repository
                        </button>
                      )}

                      <a
                        href="https://www.messenger.com/t/5902160736571962"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center text-sm font-medium text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                      >
                        Request Demo
                      </a>
                    </div>

                    <div className="mt-5 text-center">
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {isExpanded
                          ? "Click card to collapse ▲"
                          : "Click card to view features ▼"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/90 p-4 sm:p-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 h-11 w-11 rounded-full bg-white text-gray-900 font-bold"
            >
              ×
            </button>

            <motion.img
              src={lightbox.image}
              alt={lightbox.project.title}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="max-h-[85vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;