import { BIO } from "../constants";
import { motion } from "framer-motion";
const Bio = () => {
  return (
    <div>
      <section
        className="flex flex-col justify-around gap-12 m-8 mx-10 sm:mx-20 pt-20"
        id="bio"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center text-4xl font-semibold lg:text-4xl text-primary"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {BIO.map((bio, index) => (
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              key={index}
              className=" mb-4 text-lg lg:text-xl"
            >
              {bio}
            </motion.p>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Bio;
