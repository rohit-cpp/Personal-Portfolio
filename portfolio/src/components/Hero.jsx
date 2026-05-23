import { useState, useEffect } from "react";
import rohitImg from "../assets/rohit.jpg";
import { HERO } from "../constants";
import { motion } from "framer-motion";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Typewriter = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[idx]);
        setIdx(idx + 1);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [idx, text]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <div id="Home">
      <section className="flex min-h-screen flex-wrap items-center p-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/2 mt-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="my-2 p-2 text-6xl text-primary font-bold md:text-7xl lg:text-[6.5rem]"
          >
            {HERO.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-2 text-3xl tracking-tighter lg:text-4xl"
          >
            <Typewriter text={HERO.greet} />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mb-8 p-2 text-xl text-stone-300"
          >
            {HERO.description}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-full md:w-1/2 lg:p-8"
        >
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/40 to-yellow-500/40 blur-lg" />
              <img
                src={rohitImg}
                className="relative border rounded-xl w-90 h-90 object-cover"
                alt="Rohit Gawande"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex gap-8 justify-center mt-8"
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.15 }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-primary transition-colors"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
