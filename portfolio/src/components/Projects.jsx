import { useRef } from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const TiltCard = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out"
    >
      {children}
    </div>
  );
};

const Projects = () => {
  return (
    <section className="pt-20 p-8" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 text-center text-4xl font-semibold lg:text-4xl text-primary"
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: project.id * 0.1 }}
            key={project.id}
          >
            <TiltCard>
              <div className="group relative overflow-hidden rounded-2xl border border-stone-50/20 bg-white/5">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <p className="mt-1 text-sm text-stone-400 line-clamp-2">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-hover transition-colors"
                      >
                        Live Demo <MdArrowOutward />
                      </a>
                    )}
                    {project.frontendRepo && (
                      <a
                        href={project.frontendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-white transition-colors"
                      >
                        Frontend <MdArrowOutward />
                      </a>
                    )}
                    {project.backendRepo && (
                      <a
                        href={project.backendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-white transition-colors"
                      >
                        Backend <MdArrowOutward />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-white transition-colors"
                      >
                        GitHub <MdArrowOutward />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
