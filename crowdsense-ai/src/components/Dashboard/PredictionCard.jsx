import { useEffect, useState } from "react";
import { FaRobot, FaArrowTrendUp, FaTriangleExclamation } from "react-icons/fa6";

function PredictionCard() {
  const [occupancy, setOccupancy] = useState(72);
  const [accuracy, setAccuracy] = useState(98);
  const [risk, setRisk] = useState("HIGH");

  useEffect(() => {
    const interval = setInterval(() => {
      setOccupancy((prev) => {
        let value = prev + Math.floor(Math.random() * 5 - 2);
        return Math.max(55, Math.min(95, value));
      });

      setAccuracy((prev) => {
        let value = prev + (Math.random() * 0.6 - 0.3);
        return Math.max(96, Math.min(99.9, Number(value.toFixed(1))));
      });

      const risks = ["LOW", "MEDIUM", "HIGH"];
      setRisk(risks[Math.floor(Math.random() * risks.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 grid lg:grid-cols-2 gap-6">

      {/* AI Prediction */}

      <div className="bg-slate-900 rounded-2xl border border-cyan-500/20 p-8 shadow-xl">

        <div className="flex items-center gap-3 mb-6">
          <FaRobot className="text-cyan-400 text-3xl" />

          <h2 className="text-2xl font-bold text-cyan-400">
            AI Prediction Engine
          </h2>
        </div>

        <div className="space-y-5">

          <div className="flex justify-between">
            <span>Overall Risk</span>

            <span
              className={`font-bold ${
                risk === "HIGH"
                  ? "text-red-400"
                  : risk === "MEDIUM"
                  ? "text-yellow-400"
                  : "text-green-400"
              }`}
            >
              {risk}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Predicted Congestion</span>

            <span className="text-cyan-400">
              8 Minutes
            </span>
          </div>

          <div className="flex justify-between">
            <span>Confidence</span>

            <span className="text-green-400">
              {accuracy}%
            </span>
          </div>

        </div>

        <div className="mt-8 rounded-xl bg-red-500/10 border border-red-500 p-5">

          <div className="flex items-center gap-2 mb-3">
            <FaTriangleExclamation className="text-red-400" />

            <h3 className="font-bold text-red-400">
              AI Recommendation
            </h3>
          </div>

          <ul className="space-y-2 text-gray-300">
            <li>✅ Redirect visitors to Gate A</li>
            <li>✅ Deploy 8 Security Officers</li>
            <li>✅ Increase CCTV Monitoring</li>
            <li>✅ Broadcast Safety Announcement</li>
          </ul>

        </div>

      </div>

      {/* Analytics */}

      <div className="bg-slate-900 rounded-2xl border border-cyan-500/20 p-8 shadow-xl">

        <div className="flex items-center gap-3 mb-6">
          <FaArrowTrendUp className="text-green-400 text-3xl" />

          <h2 className="text-2xl font-bold">
            Live Analytics
          </h2>
        </div>

        <div className="space-y-8">

          <div>

            <div className="flex justify-between mb-2">
              <span>Stadium Occupancy</span>
              <span className="text-cyan-400">{occupancy}%</span>
            </div>

            <div className="w-full h-3 bg-slate-700 rounded-full">

              <div
                className="bg-cyan-400 h-3 rounded-full transition-all duration-700"
                style={{ width: `${occupancy}%` }}
              ></div>

            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>AI Accuracy</span>
              <span className="text-green-400">{accuracy}%</span>
            </div>

            <div className="w-full h-3 bg-slate-700 rounded-full">

              <div
                className="bg-green-400 h-3 rounded-full transition-all duration-700"
                style={{ width: `${accuracy}%` }}
              ></div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PredictionCard;