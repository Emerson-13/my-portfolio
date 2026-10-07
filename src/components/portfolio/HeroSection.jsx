import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CODE_SNIPPET = `<?php

namespace App\\Engineering;

class SoftwareArchitect extends FullStackDeveloper
{
    public string $name = "Emerson M. Gonzales";
    public string $role = "Business Software Engineer";
    public int $experienceYears = 3;
    
    public array $arsenal = [
        'backend'  => ['Laravel', 'PHP', 'MySQL', 'Redis'],
        'frontend' => ['Vue.js', 'Inertia.js', 'React', 'Tailwind'],
        'specialty'=> ['HRIS', 'Lending', 'QR Payments', 'ERP']
    ];

    public function solveBusinessProblem(Operation $ops): Solution
    {
        return $this->automateWorkflows($ops)
            ->withRoleBasedSecurity()
            ->withRealtimeDashboards()
            ->deployToProduction();
    }
}`;

const TERMINAL_LOGS = [
  { time: "09:41:02", tag: "INFO", text: "Initializing kernel... OK" },
  { time: "09:41:03", tag: "GIT", text: "HEAD detached at origin/main" },
  { time: "09:41:04", tag: "STACK", text: "Laravel 11 + React 19 + Inertia ready" },
  { time: "09:41:05", tag: "STATUS", text: "10+ Enterprise systems online" },
  { time: "09:41:06", tag: "READY", text: "Available for high-impact missions." },
];

const HeroSection = ({
  isMobile,
  isExpanded,
  setIsExpanded,
  opacity,
  scale,
}) => {
  const [activeTab, setActiveTab] = useState("profile"); // 'profile' | 'code' | 'terminal'

  return (
    <motion.section
      style={!isMobile ? { opacity, scale } : {}}
      className={`relative container mx-auto px-4 sm:px-6 ${
        isMobile ? "pt-28 pb-16" : "py-16 sm:py-24 md:py-32"
      } flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 transition-all duration-500 ${
        isExpanded ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[140px]" />
      </div>

      {/* LEFT COLUMN: Developer Pitch & Command Actions */}
      <motion.div
        className="flex-1 space-y-7 text-center lg:text-left z-10 w-full"
        initial={{ opacity: 0, x: isMobile ? 0 : -35 }}
        animate={{
          opacity: isExpanded ? 0.85 : 1,
          x: 0,
          scale: isExpanded ? 0.95 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Terminal prompt pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
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

        {/* Clean, Strong Title (No overlapping text, no broken underline) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white"
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
            { val: "10+", label: "Systems Built", tag: "Production" },
            { val: "3+", label: "Years Experience", tag: "Enterprise" },
            { val: "40+", label: "Modules Created", tag: "Automated" },
            { val: "100%", label: "Business Focused", tag: "Architecture" },
          ].map((item) => (
            <div
              key={item.label}
              className="group rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 hover:border-indigo-400/40 dark:hover:border-indigo-500/30 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1 uppercase tracking-wider">
                <span>{item.tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
                {item.val}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                {item.label}
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
            className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            View Solutions
          </a>

          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download="Emerson_Gonzales_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-white/10 border border-indigo-200 dark:border-white/15 text-indigo-600 dark:text-indigo-300 rounded-xl font-medium hover:bg-indigo-50 dark:hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm group"
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
            className="px-6 py-3.5 bg-transparent border border-gray-300 dark:border-white/15 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT COLUMN: Interactive Programmer IDE with Expandable Image */}
      <motion.div
        className="flex-1 w-full max-w-xl lg:max-w-none flex justify-center lg:justify-end z-20"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={`w-full ${
            isExpanded ? "max-w-xl" : "max-w-lg"
          } rounded-3xl bg-[#0B0F19] text-gray-100 border border-gray-800 shadow-2xl shadow-indigo-900/30 overflow-hidden relative transition-all duration-500`}
        >
          {/* Top IDE macOS Title Bar & Tabs */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#131929] border-b border-gray-800/80">
            {/* macOS Window Control Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>

            {/* Interactive IDE Tabs */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("profile")}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === "profile"
                    ? "bg-[#1E2638] text-indigo-300 border border-indigo-500/30 shadow-sm"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <span>👨‍💻</span>
                <span>Profile.dev</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === "code"
                    ? "bg-[#1E2638] text-indigo-300 border border-indigo-500/30 shadow-sm"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <span>📄</span>
                <span>Engineer.php</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("terminal")}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === "terminal"
                    ? "bg-[#1E2638] text-indigo-300 border border-indigo-500/30 shadow-sm"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <span>⌨️</span>
                <span>Terminal</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Profile Mode with Floating Badges AND Click-to-Expand Image */}
          {activeTab === "profile" && (
            <div
              className={`p-6 sm:p-8 flex flex-col items-center justify-center relative transition-all duration-500 ${
                isExpanded ? "min-h-[480px]" : "min-h-[420px]"
              }`}
            >
              {/* Floating Git Commit Badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-5 left-4 sm:left-6 z-20 px-3 py-1.5 rounded-xl bg-gray-900/90 border border-indigo-500/30 text-[11px] font-mono text-indigo-300 shadow-xl backdrop-blur-md flex items-center gap-2 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>git commit &bull; &quot;Production&quot;</span>
              </motion.div>

              {/* Floating Status 200 OK Badge */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute top-5 right-4 sm:right-6 z-20 px-3 py-1.5 rounded-xl bg-gray-900/90 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 shadow-xl backdrop-blur-md flex items-center gap-1.5 pointer-events-none"
              >
                <span>HTTP 200 OK</span>
                <span className="text-gray-400">&bull;</span>
                <span>Online</span>
              </motion.div>

              {/* Developer Portrait with Glowing Hologram Ring & Click-To-Enlarge */}
              <div
                onClick={() => setIsExpanded(!isExpanded)}
                className={`relative cursor-pointer group my-6 transition-all duration-500 ease-in-out ${
                  isExpanded
                    ? "w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 scale-105"
                    : "w-48 h-48 sm:w-56 sm:h-56"
                }`}
                title={isExpanded ? "Click to minimize image" : "Click to enlarge image"}
              >
                {/* Glowing Aura Halo */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-600 opacity-70 blur-lg animate-pulse" />

                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-indigo-400 to-purple-500 overflow-hidden shadow-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}picture.jpg`}
                    alt="Emerson M. Gonzales"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Subtle Expand / Minimize Pill Indicator */}
                <div className="absolute -bottom-2 inset-x-0 flex justify-center z-30">
                  <span className="px-3 py-0.5 rounded-full bg-black/80 text-white text-[10px] font-mono border border-white/20 shadow-md backdrop-blur-sm group-hover:bg-indigo-600 transition-colors">
                    {isExpanded ? "Click to minimize ✕" : "Click to enlarge 🔍"}
                  </span>
                </div>
              </div>

              {/* Floating Stack Badge at Bottom */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                className="px-4 py-2 rounded-2xl bg-gray-900/90 border border-white/10 text-xs font-mono text-gray-300 shadow-xl backdrop-blur-md flex flex-wrap items-center justify-center gap-2 pointer-events-none mt-2"
              >
                <span className="text-indigo-400 font-bold">&gt; Stack:</span>
                <span>Laravel</span>
                <span className="text-gray-600">&bull;</span>
                <span>Vue</span>
                <span className="text-gray-600">&bull;</span>
                <span>React</span>
                <span className="text-gray-600">&bull;</span>
                <span>MySQL</span>
              </motion.div>
            </div>
          )}

          {/* TAB 2: Live Code IDE (Engineer.php) */}
          {activeTab === "code" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[420px] bg-[#0A0D14]"
            >
              <pre className="text-gray-300">
                <code>
                  {CODE_SNIPPET.split("\n").map((line, idx) => (
                    <div key={idx} className="flex gap-4 hover:bg-white/[0.03] px-2 py-0.5 rounded">
                      <span className="text-gray-600 select-none w-6 text-right shrink-0">
                        {idx + 1}
                      </span>
                      <span className="whitespace-pre">
                        {line.includes("class") ? (
                          <span className="text-purple-400">{line}</span>
                        ) : line.includes("public") || line.includes("namespace") ? (
                          <span className="text-indigo-300">{line}</span>
                        ) : line.includes("return") ? (
                          <span className="text-emerald-400">{line}</span>
                        ) : line.includes("$") ? (
                          <span className="text-cyan-300">{line}</span>
                        ) : line.includes("//") || line.includes("/*") ? (
                          <span className="text-gray-500">{line}</span>
                        ) : (
                          line
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </motion.div>
          )}

          {/* TAB 3: Interactive Terminal Stream */}
          {activeTab === "terminal" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-5 font-mono text-xs sm:text-[13px] space-y-2.5 min-h-[420px] bg-[#0A0D14]"
            >
              <div className="flex items-center gap-2 text-gray-500 pb-2 border-b border-gray-800">
                <span className="text-emerald-400">emerson@workspace</span>
                <span>:</span>
                <span className="text-indigo-400">~/production</span>
                <span>$ php artisan system:status</span>
              </div>

              {TERMINAL_LOGS.map((log, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gray-600 text-[11px]">{log.time}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                      log.tag === "INFO"
                        ? "bg-blue-500/20 text-blue-300"
                        : log.tag === "GIT"
                        ? "bg-purple-500/20 text-purple-300"
                        : log.tag === "STACK"
                        ? "bg-indigo-500/20 text-indigo-300"
                        : log.tag === "STATUS"
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-emerald-500/20 text-emerald-300"
                    }`}
                  >
                    {log.tag}
                  </span>
                  <span className="text-gray-300">{log.text}</span>
                </div>
              ))}

              <div className="pt-4 flex items-center gap-2 text-emerald-400">
                <span>&gt; Ready for new architectural challenges</span>
                <span className="w-2 h-4 bg-emerald-400 animate-pulse" />
              </div>
            </motion.div>
          )}

          {/* Bottom IDE Status Bar */}
          <div className="px-4 py-2 bg-[#0E1322] border-t border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>main*</span>
              </span>
              <span>UTF-8</span>
              <span>PHP 8.3 &middot; TS</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <span>Ln 18, Col 32</span>
              <span>100% Validated</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;