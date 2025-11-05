import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss, SiSpringboot, SiJavascript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPostman, SiFigma, SiGit } from "react-icons/si";


const About = () => {
  return (
    <section className=" max-w-6xl mx-auto px-5 pb-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        About <span className="text-green-600 dark:text-green-400">Me</span>
      </h2>

      {/* Intro Card */}
      <div data-aos="fade-up" data-aos-duration="900">

      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Hi! I'm <span className="font-bold text-green-600 dark:text-green-400">saurabh Raj</span>, a Full Stack Developer
          with <span className="font-semibold">1 year of experience</span> in building real-world applications.
          I love creating modern, scalable, and user-friendly digital products.
        </p>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          I completed my <strong>BCA in 2023</strong> and currently pursuing <strong>MCA</strong> from LPU.
        </p>
      </div>

      </div>

      {/* Experience Cards */}
      <h3 className="text-2xl font-bold mt-12 mb-6 text-green-600 dark:text-green-400">Experience</h3>
      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-green-400/40 transition">
          <h4 className="text-xl font-bold">Full Stack Developer Intern</h4>
          <p className="text-gray-600 dark:text-gray-300 mt-1">@ FourBrick Technology</p>
          <p className="mt-3 text-gray-700 dark:text-gray-400">
            Built full-stack projects including websites, dashboards & API integrations.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-green-400/40 transition">
          <h4 className="text-xl font-bold">Sales Executive</h4>
          <p className="text-gray-600 dark:text-gray-300 mt-1">@ ITC Smart Bazar</p>
          <p className="mt-3 text-gray-700 dark:text-gray-400">
            Managed customer interactions & built communication and leadership skills.
          </p>
        </div>

      </div>

      {/* Skills Section */}
<h3 className="text-2xl font-bold mt-12 mb-6 text-green-600 dark:text-green-400">
  Skills & Technologies
</h3>

<div className="grid md:grid-cols-2 gap-10">
  
  {/* Frontend */}
  <div>
    <h4 className="text-xl font-semibold mb-4">Frontend</h4>
    <div className="flex flex-wrap gap-6">
      {[
        { icon: <FaHtml5 />, label: "HTML" },
        { icon: <FaCss3Alt />, label: "CSS" },
        { icon: <SiJavascript />, label: "JavaScript" },
        { icon: <FaReact />, label: "React.js" },
        { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      ].map((skill, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div className="text-4xl text-green-600 dark:text-green-400">
            {skill.icon}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{skill.label}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Backend */}
  <div>
    <h4 className="text-xl font-semibold mb-4">Backend</h4>
    <div className="flex flex-wrap gap-6">
      {[
        { icon: <FaNodeJs />, label: "Node.js" },
        { icon: <SiSpringboot />, label: "Spring Boot" },
        { icon: <FaJava />, label: "Java" },
      ].map((skill, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div className="text-4xl text-green-600 dark:text-green-400">
            {skill.icon}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{skill.label}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Database */}
  <div>
    <h4 className="text-xl font-semibold mb-4">Database</h4>
    <div className="flex flex-wrap gap-6">
      {[
        { icon: <SiMongodb />, label: "MongoDB" },
        { icon: <SiMysql />, label: "MySQL" },
        { icon: <FaDatabase />, label: "SQL" },
      ].map((skill, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div className="text-4xl text-green-600 dark:text-green-400">
            {skill.icon}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{skill.label}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Tools */}
  {/* Tools */}
<div>
  <h4 className="text-xl font-semibold mb-4">Tools & Others</h4>
  <div className="flex flex-wrap gap-6">
    {[
      { icon: <SiGit />, label: "Git" },
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <SiPostman />, label: "Postman" },
      { icon: <FaReact />, label: "VS Code" },
      { icon: <SiFigma />, label: "Figma" },
    ].map((tool, i) => (
      <div key={i} className="flex flex-col items-center gap-1">
        <div className="text-3xl text-green-600 dark:text-green-400">
          {tool.icon}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{tool.label}</p>
      </div>
    ))}
  </div>
</div>


</div>


      {/* Fun Tags */}
      <h3 className="text-2xl font-bold mt-12 mb-6 text-green-600 dark:text-green-400">More About Me 😄</h3>
      <div className="flex flex-wrap gap-4 text-sm">
        {[
          "Fast Learner",
          "Problem Solver",
          "Team Player",
          "Coffee Lover",
          "Tech Enthusiast",
          "New Ideas 💡",
        ].map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
