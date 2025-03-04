import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Machine Coding Practice Platform</h1>
      </header>
      <main className="p-4 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-blue-700">
            Welcome to Your Coding Practice Arena!
          </h2>
          <p className="mt-2 text-md">
            Sharpen your skills with real-world coding problems and prepare for
            your technical interviews!
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg text-blue-800 font-semibold">
              Auto Input Fetching
            </h3>
            <p className="mt-1">
              Experience how our platform simulates real interview environments
              with automatic input fetching.
            </p>
            <Link
              to="/auto-search"
              className="text-blue-700 hover:text-blue-900 transition-colors mt-4 block"
            >
              Try the Demo
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg text-blue-800 font-semibold">
              Pagination Controls
            </h3>
            <p className="mt-1">
              Navigate through problems easily with our advanced pagination
              system.
            </p>
            <Link
              to="/pagination"
              className="text-blue-700 hover:text-blue-900 transition-colors mt-4 block"
            >
              Try the Demo
            </Link>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-700">Explore More</h3>
          <a
            href="https://example.com/live-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-colors"
          >
            Live Demo
          </a>
          <br />
          <a
            href="https://github.com/yourgithubrepo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-colors"
          >
            GitHub Repository
          </a>
        </section>
      </main>
      <footer className="bg-gray-200 text-center p-4">
        <p>© 2025 Machine Coding Practice. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
