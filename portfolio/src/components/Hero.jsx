import React from "react";
import carlImg from "../assets/carl.jpeg";

import { HERO } from "../constants";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <div className="w-full md:w-1/2 mt-10">
        <h2 className="my-8 p-2 text-7xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </div>
      <div className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center ">
          <img
            src={carlImg}
            className="border rounded-xl"
            alt="Rohit Gawande"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
