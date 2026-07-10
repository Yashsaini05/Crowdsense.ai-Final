import { useEffect, useState } from "react";
import {
  FaVideo,
  FaUsers,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

function Topbar() {
  const [visitors, setVisitors] = useState(45320);
  const [alerts, setAlerts] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prev) => prev + Math.floor(Math.random() * 15));
      setAlerts((prev) => Math.max(1, prev + Math.floor(Math.random() * 3 - 1)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 border-b border-cyan-500/20 px-8 py-5 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-white">
          AI Crowd Monitoring Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          FIFA World Cup 2026 • Live Control Center
        </p>
      </div>

      <div className="flex items-center gap-8">

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-green-400 font-semibold">LIVE</span>
        </div>

        <div className="flex items-center gap-2">
          <FaVideo className="text-cyan-400" />
          <span>320 Cameras</span>
        </div>

        <div className="flex items-center gap-2">
          <FaUsers className="text-cyan-400" />
          <span>{visitors.toLocaleString()} Visitors</span>
        </div>

        <div className="flex items-center gap-2">
          <FaBell className="text-red-400" />
          <span>{alerts} Alerts</span>
        </div>

        <div className="flex items-center gap-2">
          <FaUserCircle className="text-3xl text-cyan-400" />
          <span className="font-semibold">Admin</span>
        </div>

      </div>

    </div>
  );
}

export default Topbar;