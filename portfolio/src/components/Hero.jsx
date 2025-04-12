import React from "react";
import carlImg from "../assets/carl.jpeg";
import { HERO } from "../constants";
import { motion } from "framer-motion";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Hero = () => {
  return (
    <div id="Home">
      <section className="flex min-h-screen flex-wrap items-center p-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mt-6"
        >
          <h2 className="my-2 p-2 text-6xl text-[#ffaa00] font-bold md:text-7xl lg:text-[6.5rem]">
            {HERO.name}
          </h2>
          <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
            {HERO.greet}
          </p>
          <p className="mb-8 p-2 text-xl">{HERO.description}</p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 lg:p-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src={carlImg}
              className="border rounded-xl"
              alt="Rohit Gawande"
            />
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex gap-8 justify-evenly mt-8"
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.3 }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
