const Footer = () => {
  return (
    <footer className="w-full text-center py-5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} saurabh Raj • Made with ❤️ using React & TailwindCSS
      </p>
    </footer>
  );
};

export default Footer;
