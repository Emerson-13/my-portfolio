import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <section
      ref={aboutRef}
      className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 text-gray-900 dark:text-white"
      >
        About{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          Me
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 sm:p-10 rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-base sm:text-lg leading-relaxed">
                Hello! I'm{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Emerson M. Gonzales
                </span>
                , a business software engineer focused on building practical
                systems for companies that want to automate operations, reduce
                repetitive work, and manage data more efficiently.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                I specialize in Laravel, Vue, Inertia.js, React, Tailwind CSS,
                and MySQL. My work is focused on business systems such as HRIS,
                payroll, lending, invoicing, QR payment platforms, inventory,
                booking, and custom management systems.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Instead of simply building pages, I focus on flows: approvals,
                reports, roles, records, notifications, dashboards, and the
                tiny business rules that make software useful in real operations.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-5">
                What I Build
              </h3>

              <div className="space-y-3">
                {[
                  "HRIS & Payroll Systems",
                  "ERP & Inventory Tools",
                  "QR Payment Platforms",
                  "Invoice Management",
                  "Lending Systems",
                  "Booking Systems",
                  "Custom Dashboards",
                  "Business Reports",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
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
                  className="rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 text-sm text-gray-700 dark:text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;