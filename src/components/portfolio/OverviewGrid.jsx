// components/portfolio/OverviewGrid.jsx
import { motion } from "framer-motion";

export default function OverviewGrid({ skills, experiences, projects, onViewFull }) {
  const featuredProject = projects[0];
  const secondProject = projects[1];
  const topSkills = skills.slice(0, 4);
  const coreSkills = skills.slice(0, 3);

  return (
    <div className="w-full">
       <div className="h-16 sm:h-16" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-white dark:bg-[#0B0D12] border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden lg:h-[calc(100vh-8rem)] lg:min-h-[640px]"
        >
          {/* ambient glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-400/10 dark:bg-indigo-500/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/15 rounded-full blur-[100px]" />
          </div>

          <div
            className="relative h-full grid gap-5 p-6 sm:p-8 lg:p-9 lg:overflow-hidden overflow-y-auto"
            style={{
              gridTemplateColumns: "1fr 1.4fr 1fr",
              gridTemplateRows: "auto 1fr auto",
              gridTemplateAreas: `
                "brand   hero    intro"
                "bullets hero    intro"
                "bullets services cards"
              `,
            }}
          >
            {/* BRAND — top-left */}
            <div style={{ gridArea: "brand" }} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-indigo-400/40 dark:border-indigo-400/40 font-serif text-sm text-indigo-600 dark:text-indigo-300">
                  E
                </span>
                <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 dark:text-white/40">
                  Overview
                </span>
              </div>
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                Emerson
              </h1>
              <p className="text-xs text-gray-500 dark:text-white/50">
                Full-Stack Engineer &middot; Business Systems
              </p>
            </div>

            {/* BULLETS — mid-left */}
            <div style={{ gridArea: "bullets" }} className="flex flex-col justify-end gap-2.5 pb-1">
              {[
                "Laravel + Vue / Inertia / React",
                "HRIS, payroll & operations systems",
                `${projects.length}+ systems shipped`,
              ].map((line) => (
                <div key={line} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
                  <span className="text-xs text-gray-600 dark:text-white/60 leading-5">{line}</span>
                </div>
              ))}
            </div>

            {/* HERO — center */}
            <div style={{ gridArea: "hero" }} className="flex flex-col justify-center py-2">
              <p className="text-[11px] tracking-[0.3em] uppercase text-indigo-600/70 dark:text-indigo-300/70 mb-3">
                Systems that run the business
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-gray-900 dark:text-white">
                Engineering Software That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300">
                  Actually Runs
                </span>{" "}
                Operations
              </h2>
              <p className="text-sm text-gray-600 dark:text-white/55 leading-6 mt-4 max-w-md">
                Approvals, records, roles, dashboards and reports — built to
                automate the repetitive parts of real business operations.
              </p>

              <div className="flex items-center gap-6 mt-6">
                {[
                  { label: "Skills", value: skills.length },
                  { label: "Experience", value: experiences.length },
                  { label: "Projects", value: projects.length },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-[10px] tracking-wider uppercase text-gray-400 dark:text-white/40">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* INTRO CARD — top-right */}
            <div
              style={{ gridArea: "intro" }}
              className="rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 p-5 flex flex-col"
            >
              <span className="text-[10px] tracking-[0.25em] uppercase text-indigo-600/70 dark:text-indigo-300/70">
                Capabilities
              </span>
              <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mt-1.5">
                Stack Built for Results
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {topSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onViewFull?.("skills")}
                className="mt-auto pt-4 text-xs font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200 transition-colors inline-flex items-center gap-1 self-start"
              >
                View full <span>→</span>
              </button>
            </div>

            {/* SERVICES/SKILLS — bottom-center */}
            <div style={{ gridArea: "services" }} className="flex flex-col justify-end">
              <p className="text-[11px] tracking-[0.25em] uppercase text-gray-400 dark:text-white/40 mb-3">
                Core Skills
              </p>
              <div className="grid grid-cols-3 gap-3">
                {coreSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 px-3 py-3 hover:border-indigo-300 dark:hover:border-indigo-400/30 transition-colors"
                  >
                    <span className="text-base">{skill.icon}</span>
                    <p className="text-xs text-gray-600 dark:text-white/70 mt-1.5 truncate">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onViewFull?.("experience")}
                className="mt-3 text-xs font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200 transition-colors inline-flex items-center gap-1 self-start"
              >
                View experience <span>→</span>
              </button>
            </div>

            {/* PROJECT CARDS — bottom-right */}
            <div style={{ gridArea: "cards" }} className="grid grid-cols-2 gap-3 items-end">
              {[featuredProject, secondProject].filter(Boolean).map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 p-3 h-24 flex flex-col justify-end hover:border-indigo-300 dark:hover:border-indigo-400/30 transition-colors"
                >
                  <p className="text-xs font-medium text-gray-900 dark:text-white truncate">
                    {project.title}
                  </p>
                  <p className="text-[10px] text-gray-400 dark:text-white/40 truncate">
                    {project.tags?.slice(0, 2).join(" · ")}
                  </p>
                </div>
              ))}

              <button
                type="button"
                onClick={() => onViewFull?.("projects")}
                className="col-span-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-300 dark:border-indigo-400/20 px-3 py-3 text-left hover:from-indigo-500/20 hover:to-purple-500/20 dark:hover:from-indigo-500/30 dark:hover:to-purple-500/30 transition-colors"
              >
                <p className="text-xs font-medium text-gray-900 dark:text-white">
                  See all {projects.length} projects
                </p>
                <p className="text-[10px] text-gray-500 dark:text-white/50 mt-0.5">
                  View full site →
                </p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}