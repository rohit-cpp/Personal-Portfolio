import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <section className="py-8 pt-20" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 text-center text-4xl font-semibold text-primary"
      >
        Education
      </motion.h2>

      <div className="mx-auto max-w-3xl px-4">
        {EDUCATION.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            key={index}
            className="rounded-2xl border border-stone-50/20 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <FaGraduationCap className="text-xl text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-lg text-stone-300">{edu.institution}</p>
                <p className="text-sm text-stone-500">{edu.duration}</p>
                <p className="mt-3 text-stone-400">{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
