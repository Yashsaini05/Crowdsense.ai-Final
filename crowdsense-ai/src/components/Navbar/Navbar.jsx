import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-cyan-400 hover:scale-105 transition duration-300">
            CrowdSense AI
          </h1>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-10 text-lg font-medium text-white">

          <a
            href="#home"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#features"
            className="hover:text-cyan-400 transition duration-300"
          >
            Features
          </a>

          <Link
            to="/dashboard"
            className="hover:text-cyan-400 transition duration-300"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="hover:text-cyan-400 transition duration-300"
          >
            Login
          </Link>

        </div>

        <Link to="/login">
          <button className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-cyan-500/30">
            Login
          </button>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;