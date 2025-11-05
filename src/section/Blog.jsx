const blogs = [
  {
    id: 1,
    title: "How I built My Personal Portfolio using React & Tailwind",
    date: "28 Oct 2025",
    desc: "In this article, I share the development flow of my portfolio project including theme toggle, animations & reusable components.",
  },
  {
    id: 2,
    title: "Top 10 Tips for Writing Clean JavaScript Code",
    date: "15 Sep 2025",
    desc: "Writing clean code improves teamwork, debugging, and maintainability. Here are my best tips…",
  },
  {
    id: 3,
    title: "Why Dark Mode UI Improves User Experience",
    date: "09 Aug 2025",
    desc: "Dark mode reduces eye strain and modern UI trends are shifting towards visually appealing themes.",
  },
];

export default function Blog() {
  return (
    <section className="px-6 md:px-20 py-2">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-green-600">Blogs</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
            <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3">{blog.desc}</p>
            <button className="mt-5 inline-block text-green-600 hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
