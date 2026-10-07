import { motion } from "framer-motion";

const HeroSection = ({
  isMobile,
  isExpanded,
  setIsExpanded,
  opacity,
  scale,
}) => {
  return (
    <motion.section
      style={!isMobile ? { opacity, scale } : {}}
      className={`relative container mx-auto px-4 sm:px-6 ${
        isMobile ? "pt-28 pb-16" : "py-16 sm:py-24 md:py-32"
      } flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 transition-all duration-500 ${
        isExpanded ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[140px]" />
      </div>

      {/* LEFT COLUMN: Developer Pitch & Actions */}
      <motion.div
        className="flex-1 space-y-7 text-center lg:text-left z-10 w-full"
        initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
        animate={{
          opacity: isExpanded ? 0.85 : 1,
          x: 0,
          scale: isExpanded ? 0.95 : 1,
        }}
        transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
      >
        {/* Programmer Terminal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-xs sm:text-sm font-mono font-medium text-indigo-600 dark:text-indigo-300"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-gray-400 dark:text-gray-500">&gt;</span>
          <span>const dev = &quot;Emerson M. Gonzales&quot;; &bull; Full-Stack Architect</span>
        </motion.div>

        {/* Clean, Strong Title (No overlapping text or wavy glitch) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white"
        >
          Building software that helps businesses{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            work smarter
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26, duration: 0.55 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
        >
          I design and develop business engines such as HRIS, lending platforms,
          QR payment solutions, invoicing systems, inventory tools, and custom
          web applications.
        </motion.p>

        {/* Developer Metrics HUD Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0"
        >
          {[
            ["10+", "Systems Built", "Production"],
            ["3+", "Years Experience", "Enterprise"],
            ["40+", "Modules Created", "Automated"],
            ["100%", "Business Focused", "Architecture"],
          ].map(([value, label, tag]) => (
            <div
              key={label}
              className="group rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 hover:border-indigo-400/40 dark:hover:border-indigo-500/30 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1 uppercase tracking-wider">
                <span>{tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
                {value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons with CV Download */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.55 }}
          className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2"
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-indigo-600 text-white rounded-xl font-medium shadow-sm hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            View Solutions
          </a>

          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download="Emerson_Gonzales_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/10 border border-indigo-200 dark:border-white/15 text-indigo-600 dark:text-indigo-300 rounded-xl font-medium hover:bg-indigo-50 dark:hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm group"
          >
            <svg
              className="w-4 h-4 text-indigo-500 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download CV</span>
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-gray-300 dark:border-white/15 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT COLUMN: Interactive Expandable Picture with Developer Badges */}
      <motion.div
        className="flex-1 flex justify-center lg:justify-end cursor-pointer z-20 relative w-full"
        onClick={() => setIsExpanded(!isExpanded)}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{
          opacity: 1,
          scale: isExpanded ? (isMobile ? 1.2 : 1.05) : 1,
          x: isExpanded && !isMobile ? 30 : 0,
        }}
        transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
      >
        <div
          className={`relative ${
            isExpanded
              ? "w-[78vw] h-[78vw] sm:w-[58vw] sm:h-[58vw] md:w-[42vw] md:h-[42vw]"
              : "w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96"
          } transition-all duration-500 ease-in-out`}
        >
          {/* Glowing Aura Ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500/60 to-purple-500/60 blur-md" />

          {/* Developer Photo */}
          <img
            src={`${import.meta.env.BASE_URL}picture.jpg`}
            alt="Emerson M. Gonzales"
            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-white/10 shadow-2xl"
          />

          {/* Floating Programmer Badge 1: Git Push (Top-Left) */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className={`absolute ${
              isExpanded ? "top-2 left-2" : "-top-2 -left-2"
            } z-30 px-3 py-1.5 rounded-xl bg-gray-900/90 text-indigo-300 border border-indigo-500/30 text-[10px] sm:text-xs font-mono shadow-xl backdrop-blur-md flex items-center gap-1.5 pointer-events-none transition-all`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>git commit &bull; &quot;Production Ready&quot;</span>
          </motion.div>

          {/* Floating Programmer Badge 2: Status 200 OK (Bottom-Right) */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className={`absolute ${
              isExpanded ? "bottom-2 right-2" : "-bottom-2 -right-2"
            } z-30 px-3 py-1.5 rounded-xl bg-gray-900/90 text-emerald-300 border border-emerald-500/30 text-[10px] sm:text-xs font-mono shadow-xl backdrop-blur-md flex items-center gap-1.5 pointer-events-none transition-all`}
          >
            <span>HTTP 200 OK</span>
            <span className="text-gray-400">&bull;</span>
            <span>Online</span>
          </motion.div>

          {/* Floating Programmer Badge 3: Tech Stack (Bottom-Left) */}
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
            className={`absolute ${
              isExpanded ? "bottom-2 left-2" : "bottom-0 -left-4"
            } z-30 px-3 py-1.5 rounded-xl bg-gray-900/90 text-gray-200 border border-white/15 text-[10px] sm:text-xs font-mono shadow-xl backdrop-blur-md flex items-center gap-1.5 pointer-events-none transition-all hidden sm:flex`}
          >
            <span className="text-indigo-400">&lt;stack /&gt;</span>
            <span>Laravel &bull; Vue &bull; React &bull; MySQL</span>
          </motion.div>

          {/* Interactive Click to Expand/Collapse Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity z-30 pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-black/75 text-white text-xs font-mono backdrop-blur-md shadow-lg border border-white/20 whitespace-nowrap">
              {isExpanded ? "Click to minimize ✕" : "Click to expand 🔍"}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;