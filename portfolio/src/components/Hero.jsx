import React from "react";
import carlImg from "../assets/carl.jpeg";

import { HERO } from "../constants";

import { SOCIAL_MEDIA_LINKS } from "../constants";

//     <div className="mb-8 mt-20">
//       <div className="flex items-center justify-center">
//         <img src={logo} width={200} className="my-20" />
//       </div>
{
  /* <div className="flex items-center justify-center gap-8">
  {SOCIAL_MEDIA_LINKS.map((link, index) => (
    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
      {link.icon}
    </a>
  ))}
</div>; */
}
//       <p></p>
//     </div>
//   );
// };

const Hero = () => {
  return (
    <div id="Home">
      <section className="flex min-h-screen flex-wrap items-center p-5">
        <div className="w-full md:w-1/2 mt-6">
          <h2 className="my-2 p-2 text-6xl font-bold md:text-7xl lg:text-[6.5rem]">
            {HERO.name}
          </h2>
          <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
            {HERO.greet}
          </p>
          <p className="mb-8 p-2 text-xl">{HERO.description}</p>
        </div>
        <div className="w-full md:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={carlImg}
              className="border rounded-xl"
              alt="Rohit Gawande"
            />
          </div>
        </div>
      </section>
      <div className="flex gap-8 justify-evenly">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
