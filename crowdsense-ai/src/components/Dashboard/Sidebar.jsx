import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaMapMarkedAlt,
  FaBell,
  FaCog,
} from "react-icons/fa";

function Sidebar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-72 min-h-screen bg-slate-900 border-r border-cyan-500/20 p-6">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        CrowdSense AI
      </h1>

      <div className="flex flex-col gap-4">

        <Link
          to="/"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          <FaHome />
          Home
        </Link>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-3 p-3 rounded-xl bg-cyan-500 text-black font-semibold text-left"
        >
          <FaChartBar />
          Dashboard
        </button>

        <button
          onClick={() => scrollToSection("heatmap")}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition text-left"
        >
          <FaMapMarkedAlt />
          Heatmap
        </button>

        <button
          onClick={() => scrollToSection("alerts")}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition text-left"
        >
          <FaBell />
          Alerts
        </button>

        <button
          onClick={() => scrollToSection("settings")}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition text-left"
        >
          <FaCog />
          Settings
        </button>

      </div>

    </div>
  );
}

export default Sidebar;