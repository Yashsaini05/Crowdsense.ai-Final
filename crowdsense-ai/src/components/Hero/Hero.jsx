import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="relative overflow-hidden bg-slate-950 text-white min-h-screen flex items-center justify-center px-8 pt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <FaRobot className="text-cyan-400 text-7xl mb-6 animate-bounce" />

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              AI Powered
            </span>

            <br />

            Crowd Intelligence

          </h1>

          <p className="mt-6 text-xl text-gray-300 leading-8 max-w-xl">
            Smart Crowd Management for FIFA World Cup 2026 using Artificial
            Intelligence, Real-Time Monitoring and Predictive Analytics.
          </p>

          <div className="mt-10 flex gap-5">

            <Link to="/login">

              <button className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition duration-300 px-7 py-4 rounded-xl font-semibold shadow-xl shadow-cyan-500/30">

                Get Started

              </button>

            </Link>

            <Link to="/dashboard">

              <button className="border border-cyan-500 hover:bg-cyan-500 hover:scale-105 transition duration-300 px-7 py-4 rounded-xl font-semibold">

                Live Demo

              </button>

            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 border border-cyan-500 shadow-2xl shadow-cyan-500/20">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold">
              Live Crowd Status
            </h2>

            <div className="flex items-center gap-2">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <span className="text-green-400 font-semibold">
                LIVE
              </span>

            </div>

          </div>

          <div className="space-y-6">

            <div className="flex justify-between">
              <span>🟢 Gate A</span>
              <span className="text-green-400">Normal</span>
            </div>

            <div className="flex justify-between">
              <span>🟡 Gate B</span>
              <span className="text-yellow-400">Medium</span>
            </div>

            <div className="flex justify-between">
              <span>🔴 Gate C</span>
              <span className="text-red-400">High</span>
            </div>

            <div className="flex justify-between">
              <span>🔵 VIP Entry</span>
              <span className="text-cyan-400">Low</span>
            </div>

          </div>

          <div className="mt-8 bg-cyan-500/10 border border-cyan-500 rounded-xl p-5">

            <h3 className="text-cyan-400 font-bold text-xl mb-2">
              AI Recommendation
            </h3>

            <p className="text-gray-300">
              Redirect visitors from
              <span className="text-red-400 font-semibold"> Gate C </span>
              to
              <span className="text-green-400 font-semibold"> Gate A </span>
              to reduce congestion.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;