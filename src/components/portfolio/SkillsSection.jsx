import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const getCategory = (name) => {
  if (["Laravel", "MySQL", "Node.js", "Supabase", "Laravel Reverb", "Redis"].includes(name)) {
    return "Backend & DB";
  }
  if (["Vue.js", "Inertia.js", "React", "Tailwind CSS"].includes(name)) {
    return "Frontend & UI";
  }
  return "Automation & Mobile";
};

const getProficiency = (skill) => {
  if (skill.level === "Advanced") return 95;
  if (skill.name === "n8n Automation" || skill.name === "Supabase") return 88;
  return 82;
};

const CATEGORIES = [
  { id: "all", label: "All Arsenal" },
  { id: "Backend & DB", label: "Backend & DB" },
  { id: "Frontend & UI", label: "Frontend & UI" },
  { id: "Automation & Mobile", label: "Automation & Mobile" },
];

export default function SkillsSection({ skills = [], isMobile }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-80px",
  });

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") return true;
    return getCategory(skill.name) === activeCategory;
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-28 overflow-hidden select-none"
    >
      {/* Laser Scanline Beam that sweeps down on scroll into view */}
      <motion.div
        key={String(isInView)}
        initial={{ top: "-5%", opacity: 0 }}
        animate={isInView ? { top: "105%", opacity: [0, 0.8, 0.8, 0] } : {}}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.1 }}
        className="pointer-events-none absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[2px] z-10"
      />

      {/* Ambient background aura */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-[140px] -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        {/* Futuristic Status Ticker */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          <span>Core Tech Matrix &middot; 15 Modules Loaded</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Engineering{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Technology Stack
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-3"
        >
          High-performance backend systems, reactive frontend architecture, database optimization,
          and workflow automations built for modern operations.
        </motion.p>

        {/* Interactive Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-8"
        >
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === "all"
                ? skills.length
                : skills.filter((s) => getCategory(s.name) === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 scale-105"
                    : "bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-black/5 dark:bg-white/10 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Grid with 3D Hologram Materialize Animation */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 max-w-7xl mx-auto"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => {
            const proficiency = getProficiency(skill);
            const category = getCategory(skill.name);

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.8,
                  rotateX: 20,
                  filter: "blur(6px)",
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        filter: "blur(0px)",
                      }
                    : {
                        opacity: 0,
                        y: 45,
                        scale: 0.8,
                        rotateX: 20,
                        filter: "blur(6px)",
                      }
                }
                exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  !isMobile
                    ? {
                        y: -8,
                        scale: 1.03,
                        transition: { duration: 0.25 },
                      }
                    : {}
                }
                className="group relative rounded-2xl bg-white/90 dark:bg-[#0E1322] border border-gray-200 dark:border-white/10 p-5 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Ambient glow matching skill color on hover */}
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 w-28 h-28 rounded-full bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                {/* Top Row: Icon with Glow + Category Code */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${skill.color} p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <div className="w-full h-full rounded-[10px] bg-white/90 dark:bg-[#0E1322]/90 flex items-center justify-center text-xl">
                        {skill.icon}
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 group-hover:text-indigo-500 transition-colors">
                      {category.split(" ")[0]}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>{skill.level}</span>
                    <span className="font-mono text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                      {proficiency}%
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Animated Power-Up Meter */}
                <div className="mt-5 pt-3 border-t border-gray-100 dark:border-white/5">
                  <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
                      transition={{
                        duration: 1.1,
                        delay: 0.2 + index * 0.04,
                        ease: "easeOut",
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                    >
                      {/* Sweeping shimmer beam inside the meter */}
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.2,
                          ease: "easeInOut",
                          delay: index * 0.1,
                        }}
                        className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}