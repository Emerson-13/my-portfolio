import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORY_CHAPTERS = [
  {
    id: 1,
    chapter: "CHAPTER 01",
    title: "The Origin",
    mood: "👋 Greeting",
    tagline: "Building software that runs operations, not just landing pages.",
    speech:
      "Hello! I'm Emerson M. Gonzales. While many developers focus strictly on static UI design, my obsession is what happens behind the curtains: the approval flows, database integrity, and automated business engines that companies rely on every day to operate smoothly.",
    highlight: "Business Systems Engineer & Full-Stack Architect",
    stats: { label1: "Focus", val1: "Operations", label2: "Experience", val2: "3+ Years" },
    keyPoints: [
      "Designs end-to-end systems from database schemas to responsive UI",
      "Passionate about turning manual paperwork into clean automated dashboards",
      "Specializes in workflows where every click, role, and approval matters",
    ],
  },
  {
    id: 2,
    chapter: "CHAPTER 02",
    title: "The Arsenal",
    mood: "⚡ Tech Stack",
    tagline: "A battle-tested stack built for speed, stability, and scale.",
    speech:
      "To build systems that never crash under heavy operations, I combine Laravel on the backend with Vue, Inertia.js, and React on the frontend. Paired with Tailwind CSS for rapid styling and MySQL for rock-solid relational data, this stack allows me to ship full-featured platforms at record speed.",
    highlight: "Laravel • Vue.js • Inertia.js • React • Tailwind • MySQL",
    stats: { label1: "Architecture", val1: "Clean & Modular", label2: "Database", val2: "Relational (MySQL)" },
    keyPoints: [
      "Inertia.js Single-Page Applications without complex API overhead",
      "Scalable schema design with indexing, foreign keys, and audit logs",
      "RESTful APIs, webhook integrations, and third-party services",
    ],
  },
  {
    id: 3,
    chapter: "CHAPTER 03",
    title: "Missions & Systems",
    mood: "🛠️ What I Build",
    tagline: "HRIS, Lending, QR Payments, Invoicing, and Custom ERPs.",
    speech:
      "My mission is solving daily operational bottlenecks. I've engineered comprehensive HRIS & Payroll suites, microfinance lending platforms, our proprietary Bayad Mo QR payment system, n8n AI agent recruitment pipelines, and custom administrative management dashboards.",
    highlight: "Over 10+ Production Systems & 40+ Business Modules Built",
    stats: { label1: "Systems Built", val1: "10+ Platforms", label2: "Modules", val2: "40+ Created" },
    keyPoints: [
      "Multi-level approvals, hierarchical roles, and granular permissions",
      "Automated financial payroll, loan computations, and invoice generators",
      "QR code settlement flows with real-time payment reconciliation",
    ],
  },
  {
    id: 4,
    chapter: "CHAPTER 04",
    title: "Engineering Creed",
    mood: "🎯 Core Goal",
    tagline: "Software is only valuable if it makes human work faster and easier.",
    speech:
      "I believe code should directly impact the bottom line. I don't just take feature requests — I study how managers and staff perform their day-to-day duties, eliminate friction, and deliver intuitive software that employees love using.",
    highlight: "Ready for high-impact roles, contract systems, and client platforms.",
    stats: { label1: "Status", val1: "Available", label2: "Turnaround", val2: "Rapid Delivery" },
    keyPoints: [
      "Clean, readable code with practical business logic",
      "Zero fluff: every report, view, and shortcut serves a real business purpose",
      "Ready to partner with companies looking to digitize their operations",
    ],
  },
];

const RPG_STATS = [
  { name: "Backend Architecture (Laravel, PHP, MySQL)", val: 95 },
  { name: "Frontend Reactive UI (Vue, React, Inertia)", val: 92 },
  { name: "Business Logic & Automation (Workflows, HRIS)", val: 98 },
  { name: "Database Design & Optimization", val: 94 },
];

const AboutSection = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [viewMode, setViewMode] = useState("story"); // "story" | "specs"

  const chapter = STORY_CHAPTERS[currentChapterIndex];

  // Auto-play story every 8 seconds if enabled
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentChapterIndex((prev) => (prev + 1) % STORY_CHAPTERS.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handleNext = () => {
    setCurrentChapterIndex((prev) => (prev + 1) % STORY_CHAPTERS.length);
  };

  const handlePrev = () => {
    setCurrentChapterIndex((prev) =>
      prev > 0 ? prev - 1 : STORY_CHAPTERS.length - 1
    );
  };

  return (
    <section id="about" className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-28 overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[140px] -z-10" />

      {/* Section Header with Mode Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto mb-12">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300 uppercase tracking-wider mb-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Interactive Storyteller Guide
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Emerson
            </span>
          </h2>
        </div>

        {/* Story vs Summary Mode Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium">
          <button
            type="button"
            onClick={() => setViewMode("story")}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              viewMode === "story"
                ? "bg-indigo-600 text-white shadow-md font-semibold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <span>Story Mode</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20">RPG</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode("specs")}
            className={`px-4 py-2 rounded-xl transition-all ${
              viewMode === "specs"
                ? "bg-indigo-600 text-white shadow-md font-semibold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Full Profile
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {viewMode === "story" ? (
          /* STORY MODE: Character Avatar on Left, Interactive Story Dialog on Right */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Character / Model Card (RPG Avatar) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative rounded-3xl bg-white dark:bg-[#0E1322] border-2 border-indigo-500/40 dark:border-indigo-500/30 p-6 sm:p-7 shadow-2xl shadow-indigo-500/10 overflow-hidden group">
                {/* Holographic glowing scanline effect */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-purple-500/5 opacity-80" />

                {/* Character Header Badges */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      AI Story Guide
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-400/20">
                    LVL 24 &middot; ARCHITECT
                  </span>
                </div>

                {/* Avatar Portrait with Cyber Frame */}
                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 mb-6">
                  {/* Rotating decorative halo rings */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-60 blur-md animate-pulse" />
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-2 border-white dark:border-gray-800">
                      <img
                        src={`${import.meta.env.BASE_URL}picture.jpg`}
                        alt="Emerson M. Gonzales Character"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Character Emotion Badge */}
                  <motion.div
                    key={chapter.id}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute -bottom-2 -right-1 px-3 py-1 rounded-full bg-gray-900/90 text-white text-xs font-medium border border-white/20 shadow-lg backdrop-blur-md flex items-center gap-1"
                  >
                    <span>{chapter.mood}</span>
                  </motion.div>
                </div>

                {/* Character Name & Role Details */}
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    Emerson M. Gonzales
                  </h3>
                  <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                    Full-Stack Software Engineer
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                    Leepe Outsourcing Corp &middot; Freelance Architect
                  </p>
                </div>

                {/* RPG Skill Stat Bars */}
                <div className="space-y-2.5 pt-4 border-t border-gray-100 dark:border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold block mb-1">
                    Character Skill Attributes
                  </span>
                  {RPG_STATS.map((stat) => (
                    <div key={stat.name} className="space-y-1">
                      <div className="flex justify-between text-[11px] font-medium text-gray-700 dark:text-gray-300">
                        <span className="truncate pr-2">{stat.name}</span>
                        <span className="font-mono text-indigo-600 dark:text-indigo-400">{stat.val}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.val}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Story Speech Box (Right Side) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="relative rounded-3xl bg-white dark:bg-[#0E1322] border border-gray-200 dark:border-white/10 p-6 sm:p-8 lg:p-9 shadow-xl overflow-hidden min-h-[460px] flex flex-col justify-between">
                {/* Speech Bubble Tail decoration for desktop */}
                <div className="hidden lg:block absolute -left-3 top-24 w-6 h-6 bg-white dark:bg-[#0E1322] border-l border-b border-gray-200 dark:border-white/10 transform rotate-45" />

                {/* Chapter Top Bar */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-white/10">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-mono font-bold tracking-wider">
                        {chapter.chapter}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {chapter.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setIsAutoPlay(!isAutoPlay)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                          isAutoPlay
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                            : "bg-gray-100 dark:bg-white/5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        }`}
                        title="Toggle Auto Play"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isAutoPlay ? "bg-emerald-500 animate-ping" : "bg-gray-400"}`} />
                        <span>{isAutoPlay ? "Auto: ON" : "Auto: OFF"}</span>
                      </button>

                      <span className="text-xs font-mono text-gray-400">
                        {currentChapterIndex + 1} / {STORY_CHAPTERS.length}
                      </span>
                    </div>
                  </div>

                  {/* Animated Chapter Dialogue Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={chapter.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="pt-6 space-y-5"
                    >
                      {/* Tagline / Speech Header */}
                      <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        "{chapter.tagline}"
                      </p>

                      {/* Main Character Monologue */}
                      <div className="relative pl-4 border-l-2 border-indigo-500/50">
                        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-normal">
                          {chapter.speech}
                        </p>
                      </div>

                      {/* Highlight Banner */}
                      <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-400/20 text-indigo-900 dark:text-indigo-200 text-xs sm:text-sm font-medium flex items-center gap-2.5">
                        <span className="text-base">💡</span>
                        <span>{chapter.highlight}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                          Key Takeaways:
                        </span>
                        {chapter.keyPoints.map((point) => (
                          <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Story Controls Footer */}
                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Chapter Select Quick Buttons */}
                  <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                    {STORY_CHAPTERS.map((ch, idx) => (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => setCurrentChapterIndex(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 ${
                          currentChapterIndex === idx
                            ? "bg-indigo-600 text-white shadow-sm font-bold scale-105"
                            : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
                        }`}
                      >
                        0{ch.id} {ch.title}
                      </button>
                    ))}
                  </div>

                  {/* Previous / Next Dialog Navigation */}
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 text-xs font-semibold transition-all flex items-center gap-1"
                    >
                      <span>‹ Prev</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
                    >
                      <span>Next Story</span>
                      <span>›</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* SUMMARY MODE: Classic Full Profile Grid */
          <div className="bg-white dark:bg-[#0E1322] border border-gray-200 dark:border-white/10 p-6 sm:p-10 rounded-3xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-5 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Hello! I'm{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    Emerson M. Gonzales
                  </span>
                  , a business software engineer focused on building practical
                  systems for companies that want to automate operations, reduce
                  repetitive work, and manage data more efficiently.
                </p>

                <p>
                  I specialize in Laravel, Vue, Inertia.js, React, Tailwind CSS,
                  and MySQL. My work is centered on business platforms such as HRIS,
                  payroll, lending, invoicing, QR payments (Bayad Mo), inventory,
                  booking, and custom management dashboards.
                </p>

                <p>
                  Instead of simply building static pages, I focus on flows: approvals,
                  reports, roles, records, notifications, dashboards, and the
                  vital business rules that make software valuable in real day-to-day operations.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  What I Build
                </h3>
                <div className="space-y-2.5">
                  {[
                    "HRIS & Payroll Systems",
                    "ERP & Inventory Tools",
                    "QR Payment Platforms (Bayad Mo)",
                    "Invoice Management",
                    "Lending Management Systems",
                    "Booking & Rental Systems",
                    "Custom Dashboards & Analytics",
                    "Business Audit & Reports",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  "Clean Architecture",
                  "Scalable Database Design",
                  "Responsive UI",
                  "Business Process Automation",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 text-sm font-medium text-gray-700 dark:text-gray-300 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;