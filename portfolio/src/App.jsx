import "./App.css";
import "./index.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      {/* Background Image Layer */}
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
      </div>
      <Navbar />
      <Projects />
      <Bio />
      <Skills />
    </div>
  );
};

export default App;
