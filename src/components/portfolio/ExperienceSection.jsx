import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection({ experiences }) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    return (
        <section ref={ref} className="container mx-auto px-6 py-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="text-4xl sm:text-5xl font-bold text-center mb-5"
            >
                Professional Experience
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: .15 }}
                className="text-center text-gray-500 max-w-3xl mx-auto mb-16"
            >
                More than three years of experience building enterprise systems,
                business automation platforms and custom software solutions.
            </motion.p>

            <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-indigo-500/20 hidden md:block"/>

                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * .12 }}
                        className="relative pl-0 md:pl-16 mb-14"
                    >
                        <div className="hidden md:flex absolute left-0 w-10 h-10 rounded-full bg-indigo-600 items-center justify-center text-white font-bold">
                            {index + 1}
                        </div>

                        <div className="rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 hover:shadow-md transition-shadow duration-200">
                            <div className="flex flex-col lg:flex-row justify-between gap-3">
                                <div>
                                    <h3 className="text-2xl font-bold">{experience.title}</h3>
                                    <p className="text-indigo-500 mt-1">{experience.company}</p>
                                </div>

                                <div className="rounded-full px-5 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-sm h-fit">
                                    {experience.duration}
                                </div>
                            </div>

                            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                                {experience.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-8">
                                {experience.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-sm border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))} 
                            </div>
                        </div> 
                    </motion.div> 
                ))} 
            </div>
        </section> 
    );
} 