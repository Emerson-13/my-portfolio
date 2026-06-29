import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative border-t border-gray-200 dark:border-white/10 py-10 sm:py-14 mt-16 sm:mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 sm:p-10 text-center text-white shadow-2xl shadow-indigo-500/20">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Need a business system?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            Let’s build a system for your operations, from HRIS and payroll to
            QR payments, invoicing, inventory, lending, booking, and custom
            dashboards.
          </p>

          <a
            href="https://www.messenger.com/t/5902160736571962"
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-7 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-600 hover:scale-105 transition-transform"
          >
            Request Demo
          </a>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            © 2026 Emerson M. Gonzales. All rights reserved.
          </p>

          <p className="text-gray-400 dark:text-gray-500 text-[10px] sm:text-xs mt-2">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;