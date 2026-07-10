import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function AnalyticsChart() {
  const [data, setData] = useState([
    { time: "10 AM", crowd: 120 },
    { time: "11 AM", crowd: 250 },
    { time: "12 PM", crowd: 390 },
    { time: "1 PM", crowd: 520 },
    { time: "2 PM", crowd: 460 },
    { time: "3 PM", crowd: 650 },
    { time: "4 PM", crowd: 580 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          crowd: Math.max(
            100,
            item.crowd + Math.floor(Math.random() * 100 - 50)
          ),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 rounded-2xl p-8 border border-cyan-500/20 mt-8 shadow-xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-cyan-400">
          📈 Live Crowd Analytics
        </h2>

        <span className="text-green-400 font-semibold animate-pulse">
          ● LIVE
        </span>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis dataKey="time" stroke="#94A3B8" />

            <YAxis stroke="#94A3B8" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0F172A",
                border: "1px solid #06B6D4",
                color: "white",
              }}
            />

            <Line
              type="monotone"
              dataKey="crowd"
              stroke="#06B6D4"
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
              animationDuration={1200}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsChart;