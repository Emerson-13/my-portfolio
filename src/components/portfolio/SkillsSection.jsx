import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        },
    },
};

export default function SkillsSection({ skills, isMobile }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    return (
        <section
            ref={ref}
            className="container mx-auto px-6 py-24"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="text-4xl sm:text-5xl font-bold text-center mb-5"
            >
                Technology Stack
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: .15 }}
                className="text-center text-gray-500 max-w-2xl mx-auto mb-14"
            >
                I build scalable enterprise applications using modern backend,
                frontend, cloud and database technologies.
            </motion.p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={!isMobile ? { y: -4 } : {}}
                        className="rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 hover:shadow-md transition-shadow duration-200"
                    >
                        <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl mb-5`}
                        >
                            {skill.icon}
                        </div>

                        <h3 className="font-semibold text-lg">
                            {skill.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            {skill.level}
                        </p>

                        <div className="mt-5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{
                                    width:
                                        skill.level === "Advanced"
                                            ? "95%"
                                            : "75%",
                                }}
                                transition={{
                                    duration: 0.8,
                                }}
                                className={`h-full bg-gradient-to-r ${skill.color}`}
                            />

                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}