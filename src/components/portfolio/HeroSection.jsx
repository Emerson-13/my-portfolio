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
      className={`relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 transition-all duration-500 ${
        isExpanded ? "lg:flex-row-reverse" : ""
      }`}
    >
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-300"
        >
          <span>ERP • HRIS • Payments • Business Systems</span>
        </motion.div>

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

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26, duration: 0.55 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0"
        >
          I design and develop business systems such as HRIS, lending platforms,
          QR payment solutions, invoicing systems, inventory tools, and custom
          web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0"
        >
          {[
            ["10+", "Systems Built"],
            ["3+", "Years Experience"],
            ["40+", "Modules Created"],
            ["100%", "Business Focused"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.55 }}
          className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2"
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-sm hover:bg-indigo-700 transition-colors duration-200"
          >
            View Solutions
          </a>

          <a
            href="https://www.messenger.com/t/5902160736571962"
            className="px-7 py-3 bg-transparent border border-indigo-300 dark:border-indigo-500/40 text-indigo-600 dark:text-indigo-300 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

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
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500/60 to-purple-500/60 blur-md" />

          <img
            src={`${import.meta.env.BASE_URL}picture.jpg`}
            alt="Emerson M. Gonzales"
            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-white/10 shadow-lg"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;