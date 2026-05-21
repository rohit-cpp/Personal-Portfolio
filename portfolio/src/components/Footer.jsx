import logo from "../assets/logo.png";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden "
        id="Footer"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center">
              <h2 className=" text-4xl text-primary"> Rohit Gawande</h2>
            </div>
            <p className="text-gray-400 mt-4">
              AI Software Engineer — building scalable infrastructure, distributed
              systems, and AI-powered applications. Based in Chandrapur, MH.
            </p>
          </div>
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-primary">Company</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li><a href="#Home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#bio" className="hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 ">
            <h3 className="text-lg font-bold mb-4 text-primary">
              Subscribe to our NewsLetter
            </h3>
            <p className="text-gray-400 mb-4 max-w-80">
              The Latest news, articles, and resources, sent to your inbox
              weekly{" "}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-2 rounded text-white border border-white-700 focus:outline-none w-full md:w-auto"
              />
              <button className="py-2 px-4 rounded bg-primary text-black font-semibold hover:bg-primary-hover transition-colors cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
          Copyright 2024 © Rohit Gawande. All Right Reserved
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
