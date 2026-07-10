import { useEffect, useState } from "react";

function CrowdCard() {
  const [stats, setStats] = useState([
    {
      title: "👥 Visitors",
      value: 45320,
      suffix: "",
      color: "text-cyan-400",
    },
    {
      title: "📷 AI Cameras",
      value: 320,
      suffix: "",
      color: "text-green-400",
    },
    {
      title: "🚨 Alerts",
      value: 12,
      suffix: "",
      color: "text-red-400",
    },
    {
      title: "🎯 Accuracy",
      value: 98.7,
      suffix: "%",
      color: "text-yellow-400",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((item) => {
          let change = 0;

          if (item.title.includes("Visitors"))
            change = Math.floor(Math.random() * 40);

          if (item.title.includes("AI Cameras"))
            change = Math.random() > 0.8 ? 1 : 0;

          if (item.title.includes("Alerts"))
            change = Math.random() > 0.6 ? 1 : 0;

          if (item.title.includes("Accuracy"))
            change = Math.random() * 0.2 - 0.1;

          return {
            ...item,
            value: Number((item.value + change).toFixed(1)),
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 shadow-xl hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-gray-400 text-lg">{item.title}</h3>

          <h2 className={`text-4xl font-bold mt-4 ${item.color}`}>
            {item.value}
            {item.suffix}
          </h2>

          <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="bg-cyan-400 h-full animate-pulse"
              style={{
                width: `${Math.min(
                  100,
                  typeof item.value === "number" ? item.value % 100 : 100
                )}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CrowdCard;