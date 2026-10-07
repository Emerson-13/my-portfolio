import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATING_TEXTS = [
  "work smarter",
  "automate payroll & HR",
  "scale QR payments",
  "eliminate manual work",
  "streamline operations",
];

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

const HeroSection = ({ isMobile, opacity, scale }) => {
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("profile"); // 'profile' | 'code' | 'terminal'

  // Cycle rotating specialty tagline
  useEffect(() => {
    const timer = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      style={!isMobile ? { opacity, scale } : {}}
      className={`relative container mx-auto px-4 sm:px-6 ${
        isMobile ? "pt-28 pb-16" : "py-16 sm:py-24 md:py-32"
      } flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 transition-all duration-500`}
    >
      {/* Background programmer ambient glow & grid effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[140px]" />
      </div>

      {/* LEFT COLUMN: Developer Pitch & Command Actions */}
      <motion.div
        className="flex-1 space-y-6 text-center lg:text-left z-10 w-full"
        initial={{ opacity: 0, x: isMobile ? 0 : -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Code prompt pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs sm:text-sm font-mono font-medium text-indigo-600 dark:text-indigo-300"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-gray-400 dark:text-gray-500">&gt;</span>
          <span>const developer = &quot;Emerson M. Gonzales&quot;;</span>
        </motion.div>

        {/* Main Title with Dynamic Typewriter Rotating Text */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white"
        >
          Building software that helps businesses{" "}
          <span className="inline-block relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 bg-clip-text text-transparent underline decoration-indigo-400/30 decoration-wavy underline-offset-8"
              >
                {ROTATING_TEXTS[rotatingIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Developer Philosophy Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26, duration: 0.55 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
        >
          Full-Stack Software Engineer specialized in architecting complete operational engines:
          from automated <span className="text-indigo-600 dark:text-indigo-400 font-semibold">HRIS &amp; Payroll</span> to{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Bayad Mo QR payments</span>,
          lending engines, and customized business tools.
        </motion.p>

        {/* Developer Metrics HUD Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 pt-1"
        >
          {[
            { val: "10+", label: "Systems Deployed", tag: "Production" },
            { val: "3+", label: "Years in Field", tag: "Enterprise" },
            { val: "40+", label: "Modules Shipped", tag: "Automated" },
            { val: "100%", label: "Code Dedication", tag: "Architecture" },
          ].map((item) => (
            <div
              key={item.label}
              className="group relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#0E1322]/80 backdrop-blur-md p-4 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                <span>{item.tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white font-mono">
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
          className="flex flex-wrap gap-3 justify-center lg:justify-start pt-3"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>Explore Solutions</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download="Emerson_Gonzales_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-white/10 border border-indigo-200 dark:border-white/15 text-indigo-600 dark:text-indigo-300 rounded-xl font-semibold hover:bg-indigo-50 dark:hover:bg-white/15 transition-all shadow-sm group hover:scale-[1.02] active:scale-[0.98]"
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
            className="px-6 py-3.5 bg-transparent border border-gray-300 dark:border-white/15 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT COLUMN: Interactive Programmer IDE & Developer Showcase */}
      <motion.div
        className="flex-1 w-full max-w-xl lg:max-w-none flex justify-center lg:justify-end z-20"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full max-w-lg rounded-3xl bg-[#0B0F19] text-gray-100 border border-gray-800 shadow-2xl shadow-indigo-900/30 overflow-hidden relative group">
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

          {/* TAB 1: Profile Mode with Floating Dev Badges */}
          {activeTab === "profile" && (
            <div className="p-6 sm:p-8 flex flex-col items-center justify-center relative min-h-[420px]">
              {/* Floating Git Commit Badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-6 left-4 sm:left-6 z-20 px-3 py-1.5 rounded-xl bg-gray-900/90 border border-indigo-500/30 text-[11px] font-mono text-indigo-300 shadow-xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>git commit -m &quot;Shipped HRIS&quot;</span>
              </motion.div>

              {/* Floating Status 200 OK Badge */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute top-6 right-4 sm:right-6 z-20 px-3 py-1.5 rounded-xl bg-gray-900/90 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 shadow-xl backdrop-blur-md flex items-center gap-1.5"
              >
                <span>HTTP 200 OK</span>
                <span className="text-gray-400">&middot;</span>
                <span>Online</span>
              </motion.div>

              {/* Developer Portrait with Glowing Hologram Ring */}
              <div className="relative my-6 w-52 h-52 sm:w-60 sm:h-60">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-600 opacity-70 blur-lg animate-pulse" />
                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-indigo-400 to-purple-500 overflow-hidden shadow-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}picture.jpg`}
                    alt="Emerson M. Gonzales"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Stack Badge at Bottom */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                className="px-4 py-2 rounded-2xl bg-gray-900/90 border border-white/10 text-xs font-mono text-gray-300 shadow-xl backdrop-blur-md flex flex-wrap items-center justify-center gap-2"
              >
                <span className="text-indigo-400 font-bold">&gt; Arsenal:</span>
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