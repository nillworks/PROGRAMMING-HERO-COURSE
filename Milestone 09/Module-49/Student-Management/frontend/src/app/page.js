export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold text-slate-800 text-center">
        Welcome to <span className="text-sky-500">MyApp</span>
      </h1>

      <p className="mt-4 text-slate-600 text-center max-w-xl">
        Manage student information easily with a clean and simple interface.
        Built with Next.js and Tailwind CSS.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <a
          href="/students"
          className="bg-sky-500 text-white px-6 py-2 rounded-md hover:bg-sky-600 transition"
        >
          View Students
        </a>

        <a
          href="/about"
          className="border border-slate-400 px-6 py-2 rounded-md hover:bg-slate-200 transition"
        >
          Learn More
        </a>
      </div>

      {/* Extra Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Fast</h3>
          <p className="text-slate-600">
            Built with Next.js for high performance.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Simple</h3>
          <p className="text-slate-600">
            Easy to use and beginner-friendly UI.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Scalable</h3>
          <p className="text-slate-600">Ready for bigger projects and APIs.</p>
        </div>
      </div>
    </main>
  );
}
