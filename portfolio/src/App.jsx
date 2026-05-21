import "./App.css";
import "./index.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import ContactForm from "./components/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      <motion.div
        style={{ y: bgY }}
        className="fixed inset-0 z-[-40] bg-gradient"
      >
        <div className="absolute inset-0 bg-grid" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
      </div>
      <ToastContainer />
      <Navbar />
      <Projects />
      <Bio />
      <Skills />
      <WorkExperience />
      <Education />
      <Achievements />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
