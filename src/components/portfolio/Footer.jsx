import { useState } from "react";
import { motion } from "framer-motion";

const cvPath = `${import.meta.env.BASE_URL}cv.pdf`;
const EMAIL = "gonzalesemerson079@gmail.com";
const MESSENGER_URL = "https://www.messenger.com/t/5902160736571962";
const GITHUB_URL = "https://github.com/Emerson-13";
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Project%20Inquiry%20via%20Portfolio`;

const GmailIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path
      d="M1.5 6.25V17.75C1.5 18.9926 2.50736 20 3.75 20H6V10.75L1.5 7.375V6.25Z"
      fill="#4285F4"
    />
    <path
      d="M22.5 6.25V17.75C22.5 18.9926 21.4926 20 20.25 20H18V10.75L22.5 7.375V6.25Z"
      fill="#34A853"
    />
    <path
      d="M18 4H20.25C21.4926 4 22.5 5.00736 22.5 6.25V7.375L18 10.75V4Z"
      fill="#FBBC04"
    />
    <path
      d="M1.5 7.375V6.25C1.5 5.00736 2.50736 4 3.75 4H6V10.75L1.5 7.375Z"
      fill="#C5221F"
    />
    <path
      d="M6 4L12 9.25L18 4H6Z"
      fill="#EA4335"
    />
    <path
      d="M6 10.75L12 15.25L18 10.75V20H6V10.75Z"
      fill="#EA4335"
    />
  </svg>
);

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(EMAIL).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleDownloadClick = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <footer id="contact" className="relative border-t border-gray-200 dark:border-white/10 pt-16 pb-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main CTA & Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-purple-950 text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-indigo-500/20"
        >
          {/* Ambient decorative glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

          {/* Top Badge: Availability */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for freelance & full-time roles
            </div>

            <div className="text-xs text-white/60">
              Quick response via Messenger or Gmail
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-stretch">
            {/* Left side: Pitch & Direct Contact */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Let’s build software that{" "}
                  <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    powers your business
                  </span>
                </h2>

                <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
                  Looking for custom ERP, HRIS, payroll, QR payments, or automated
                  dashboards? Send a message or grab my CV to review my background and skills.
                </p>
              </div>

              {/* Direct Action Chips */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                {/* Messenger CTA */}
                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white text-indigo-900 font-semibold text-sm hover:bg-indigo-50 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                >
                  <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.914 1.454 5.517 3.731 7.185v3.557l3.419-1.876c.905.25 1.866.388 2.85.388 5.523 0 10-4.145 10-9.254C22 6.145 17.523 2 12 2zm1.054 12.443l-2.613-2.787-5.099 2.787 5.608-5.952 2.678 2.787 5.034-2.787-5.608 5.952z" />
                  </svg>
                  <span>Chat on Messenger</span>
                </a>

                {/* Direct to Gmail Button */}
                <a
                  href={GMAIL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all hover:scale-105 active:scale-95 shadow-sm group relative flex items-center justify-center"
                  aria-label="Direct to Gmail"
                  title={`Direct to Gmail (${EMAIL})`}
                >
                  <GmailIcon />
                </a>

                {/* Copy Email Button */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all hover:scale-105 active:scale-95 shadow-sm group flex items-center justify-center"
                    aria-label="Copy email address"
                    title={`Copy email address (${EMAIL})`}
                  >
                    {copied ? (
                      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white/80 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>

                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-semibold tracking-wide whitespace-nowrap shadow pointer-events-none">
                      Copied!
                    </span>
                  )}
                </div>

                {/* GitHub Link */}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side: User-friendly CV Download Card */}
            <div className="lg:col-span-5 flex">
              <div className="w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-7 flex flex-col justify-between shadow-xl relative group hover:border-indigo-300/40 transition-colors">
                {/* Header of CV Card */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-300">
                          Curriculum Vitae
                        </span>
                        <h3 className="text-lg font-bold text-white leading-tight">
                          Emerson M. Gonzales
                        </h3>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-md bg-white/15 text-[11px] font-mono font-medium text-white/90">
                      PDF
                    </span>
                  </div>

                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    Comprehensive overview of my tech stack, business systems built, project results, and work history.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-white/70 mb-6 bg-black/20 p-3 rounded-xl border border-white/10">
                    <div>
                      <span className="block text-[10px] uppercase text-white/50">Role</span>
                      <span className="font-medium text-white/90">Full-Stack Dev</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-white/50">Experience</span>
                      <span className="font-medium text-white/90">3+ Years</span>
                    </div>
                  </div>
                </div>

                {/* CV Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  {/* Primary Download Button */}
                  <a
                    href={cvPath}
                    download="Emerson_Gonzales_CV.pdf"
                    onClick={handleDownloadClick}
                    className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download CV (PDF)</span>
                  </a>

                  {/* Secondary Preview Button */}
                  <a
                    href={cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 font-medium text-xs sm:text-sm border border-white/15 transition-all"
                  >
                    <svg className="w-4 h-4 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Preview in New Tab</span>
                  </a>

                  {/* Download notification feedback */}
                  {downloadSuccess && (
                    <p className="text-center text-xs text-emerald-300 animate-fade-in pt-1">
                      ✓ Download started! Check your downloads folder.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Emerson M. Gonzales. All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-[11px] sm:text-xs mt-1">
              Business Systems Developer &middot; Laravel &middot; React &middot; Vue &middot; MySQL
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <a
              href={cvPath}
              download="Emerson_Gonzales_CV.pdf"
              className="hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
            >
              Download CV
            </a>
            <span>&middot;</span>
            <a
              href="#hero"
              className="hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;