import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImage from "../assets/react.svg"; // Update image filename if needed
import About from "./About";

const Home = () => {
  return (

    <div>

    
    <section id="home" className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      {/* Left Text Section */}
      <div className="text-center md:text-left">
        
        <h2 className="text-xl md:text-2xl text-green-600 dark:text-green-400 font-bold mb-2">
          Hey, I'm saurabh 👋
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Full Stack Web Developer
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
          I build responsive, user-friendly, and scalable web applications using 
          <span className="font-semibold"> React, Node.js, Java, Spring Boot & MySQL</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
         <a
  href="https://drive.google.com/file/d/1cAMD8-i8M-ir3Z3hVXmqArKFI3qAuNF_/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
>
  View Resume
</a>


          <Link
            to="/projects"
            className="px-6 py-3 border border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white rounded-lg transition"
          >
            View Projects
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center md:justify-start mt-6 text-2xl">
          <a href="https://github.com/samsaurabh2024github/" target="_blank" className="hover:text-green-500"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/saurabh6205/" target="_blank" className="hover:text-green-500"><FaLinkedin /></a>
          <a href="https://instagram.com/" target="_blank" className="hover:text-green-500"><FaInstagram /></a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-green-600 shadow-xl hover:scale-105 transition">
          <img src={heroImage} alt="saurabh Profile" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 rounded-full border-4 border-green-600 blur-xl opacity-30"></div>
      </div>
    </section>

<div className="-mt-10">
    <About></About>
</div>

    </div>
  );
};

export default Home;
