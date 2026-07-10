import { useEffect, useState } from "react";

function Alerts() {
  const [alerts, setAlerts] = useState([
    {
      type: "High Crowd",
      location: "Main Gate",
      color: "border-red-500",
      icon: "🚨",
    },
    {
      type: "Security Deployed",
      location: "Gate B",
      color: "border-yellow-400",
      icon: "🛡️",
    },
    {
      type: "Medical Team Ready",
      location: "VIP Entry",
      color: "border-green-500",
      icon: "🚑",
    },
  ]);

  useEffect(() => {
    const locations = [
      "Gate A",
      "Gate B",
      "Main Gate",
      "VIP Entry",
      "North Exit",
      "South Exit",
    ];

    const types = [
      {
        type: "High Crowd",
        icon: "🚨",
        color: "border-red-500",
      },
      {
        type: "Security Deployed",
        icon: "🛡️",
        color: "border-yellow-400",
      },
      {
        type: "Medical Team Ready",
        icon: "🚑",
        color: "border-green-500",
      },
    ];

    const interval = setInterval(() => {
      const randomType =
        types[Math.floor(Math.random() * types.length)];

      const randomLocation =
        locations[Math.floor(Math.random() * locations.length)];

      setAlerts((prev) => [
        {
          ...randomType,
          location: randomLocation,
        },
        ...prev.slice(0, 2),
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="alerts"
      className="bg-slate-950 py-20 px-8 text-white"
    >
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-4">
        🚨 Live AI Alerts
      </h2>

      <p className="text-center text-gray-400 mb-12">
        AI continuously monitors the stadium and generates real-time alerts.
      </p>

      <div className="max-w-5xl mx-auto space-y-6">

        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`border-l-8 ${alert.color} bg-slate-900 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-all duration-300 animate-pulse`}
          >
            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-2xl font-bold">
                  {alert.icon} {alert.type}
                </h3>

                <p className="text-gray-300 mt-2">
                  📍 Location : {alert.location}
                </p>

              </div>

              <span className="text-green-400 font-semibold">
                ● LIVE
              </span>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Alerts;