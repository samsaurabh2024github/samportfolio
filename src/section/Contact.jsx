import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className=" max-w-5xl mx-auto px-5 pb-16 text-center">
      <h2 className="text-4xl font-bold mb-10">
        Contact <span className="text-green-600 dark:text-green-400">Me</span>
      </h2>

      <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-10">
        Have a project idea or want to hire me? Let's connect! Fill out the form
        below and I’ll get back ASAP 🚀
      </p>

      {/* Contact Form */}
      <form
        className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl shadow-xl p-8 rounded-2xl max-w-xl mx-auto border border-gray-300/20 dark:border-gray-700/20"
      >
        <div className="mb-4 text-left">
          <label className="text-gray-700 dark:text-gray-300 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none border border-transparent focus:border-green-600"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="text-gray-700 dark:text-gray-300 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none border border-transparent focus:border-green-600"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="text-gray-700 dark:text-gray-300 font-medium">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full mt-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none border border-transparent focus:border-green-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl transition duration-200 font-medium"
        >
          Send Message ✉️
        </button>
      </form>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 text-3xl mt-10 text-gray-700 dark:text-gray-300">
        <a href="mailto:yourmail@gmail.com" className="hover:text-green-500"><FaEnvelope /></a>
        <a href="https://github.com/" target="_blank" className="hover:text-green-500"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" className="hover:text-green-500"><FaLinkedin /></a>
        <a href="https://instagram.com/" target="_blank" className="hover:text-green-500"><FaInstagram /></a>
      </div>
    </section>
  );
};

export default Contact;
