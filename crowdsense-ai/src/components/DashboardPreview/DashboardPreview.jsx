import { Link } from "react-router-dom";
import {
  FaRobot,
  FaChartLine,
  FaMapMarkedAlt,
  FaBell,
  FaArrowRight,
} from "react-icons/fa";

function DashboardPreview() {
  return (
    <section
      data-aos="fade-up"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-slate-800 to-slate-900 border border-cyan-500/20 rounded-3xl p-12 shadow-2xl">

        <div className="text-center">

          <span className="text-cyan-400 font-semibold uppercase tracking-widest">
            AI Powered Platform
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Ready to Experience
            <span className="text-cyan-400"> AI Crowd Monitoring?</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Monitor crowd density, receive intelligent alerts, predict congestion,
            and make data-driven decisions with CrowdSense AI.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          <div className="bg-slate-800 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
            <FaRobot className="text-5xl text-cyan-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl">AI Prediction</h3>
            <p className="text-gray-400 mt-2">
              Predict crowd congestion before it happens.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
            <FaChartLine className="text-5xl text-green-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl">Analytics</h3>
            <p className="text-gray-400 mt-2">
              Live charts and crowd insights.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
            <FaMapMarkedAlt className="text-5xl text-yellow-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl">Heatmap</h3>
            <p className="text-gray-400 mt-2">
              View live crowd distribution across the stadium.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
            <FaBell className="text-5xl text-red-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl">Live Alerts</h3>
            <p className="text-gray-400 mt-2">
              Receive instant emergency notifications.
            </p>
          </div>

        </div>

        <div className="text-center mt-14">

          <Link to="/dashboard">

            <button className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 hover:scale-105 px-10 py-4 rounded-xl text-lg font-bold inline-flex items-center gap-3">

              Launch AI Dashboard

              <FaArrowRight />

            </button>

          </Link>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;