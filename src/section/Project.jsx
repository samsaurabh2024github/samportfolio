import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/studentmImg.jpeg";
import project2 from "../assets/studentmImg.jpeg";
import project3 from "../assets/studentmImg.jpeg";
import project4 from "../assets/studentmImg.jpeg";

const Project = () => {
  const projectData = [
    {
      img: project1,
      title: "Property Buying/Selling Website",
      tech: "React | Tailwind | Node | MongoDB",
      desc: "A real estate platform where users can list, buy, and sell properties in Arizona.",
      live: "#",
      github: "https://github.com/samsaurabh2024github",
    },
    {
      img: project2,
      title: "ErichMatter LMS Website",
      tech: "React | MUI | Express | MongoDB",
      desc: "Users can explore courses and contact the admin to purchase services.",
      live: "https://erichmatter.com",
      github: "https://github.com/samsaurabh2024github",
    },
    {
      img: project3,
      title: "House Renting E-commerce",
      tech: "React | Tailwind | Email API",
      desc: "Website for renting houses with email API integration for booking inquiry.",
      live: "#",
      github: "https://github.com/samsaurabh2024github",
    },
    {
      img: project4,
      title: "Attendance Management System",
      tech: "React | Node | Express | MySQL",
      desc: "Teacher login system with secure validation using JWT authentication.",
      live: "#",
      github: "https://github.com/samsaurabh2024github",
    },
  ];

  return (
    <section className="min-h-screen  max-w-6xl mx-auto px-5 pb-12">
      <h2 className="text-4xl font-bold text-center mb-14">
        My <span className="text-green-600 dark:text-green-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-green-400/50 transition shadow-md overflow-hidden group"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-sm text-green-600 dark:text-green-400 font-semibold">{project.tech}</p>

              <p className="mt-3 text-gray-600 dark:text-gray-300">{project.desc}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-5">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Live <FaExternalLinkAlt />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 border border-green-600 hover:bg-green-600 hover:text-white text-green-600 dark:text-green-400 px-4 py-2 rounded-lg transition"
                >
                  Code <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
