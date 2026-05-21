import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const getLevel = (exp) => {
  if (exp.includes("2+")) return 90;
  if (exp.includes("1.5")) return 75;
  if (exp.includes("1+")) return 60;
  return 35;
};

const Skills = () => {
  return (
    <div className="container mx-auto pt-1 px-8" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold text-primary">
        My Skills
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-2 rounded-3xl px-4 py-8 lg:px-20 border border-stone-50/30"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => {
            const level = getLevel(skill.experience);
            return (
              <motion.div
                variants={itemVariants}
                key={index}
                className="rounded-xl border border-stone-50/20 bg-stone-900/50 p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0">{skill.icon}</div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm lg:text-base font-medium truncate">{skill.name}</h3>
                  </div>
                  <span className="text-xs text-stone-400 shrink-0">{skill.experience}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-stone-700">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-yellow-400"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
