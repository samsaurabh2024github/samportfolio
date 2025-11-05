// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import Project from "./section/Project";
import About from "./section/About";
import Contact from "./section/Contact";
import Footer from "./components/Footer";
import Blog from "./section/Blog";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Navbar />
 <div className="pt-20 px-5"> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
       </div>
       <Footer></Footer>
    </div>
  );
}

export default App;
