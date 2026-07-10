import { useState, useEffect } from "react";

function Heatmap() {
  const [gates, setGates] = useState([
    { name: "Gate A", crowd: 240, color: "bg-green-500" },
    { name: "Gate B", crowd: 610, color: "bg-yellow-400" },
    { name: "Gate C", crowd: 980, color: "bg-red-500" },
    { name: "VIP", crowd: 120, color: "bg-green-500" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGates((prev) =>
        prev.map((gate) => {
          const value = Math.max(
            50,
            gate.crowd + Math.floor(Math.random() * 120 - 60)
          );

          let color = "bg-green-500";

          if (value > 800) color = "bg-red-500";
          else if (value > 500) color = "bg-yellow-400";

          return {
            ...gate,
            crowd: value,
            color,
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="heatmap"
      className="bg-slate-950 py-20 px-8 text-white"
    >
      <h2 className="text-center text-5xl font-bold text-cyan-400 mb-3">
        🏟 Stadium Heatmap
      </h2>

      <p className="text-center text-gray-400 mb-12">
        AI Powered Live Crowd Density
      </p>

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-5 text-cyan-300 font-bold text-xl">
          NORTH
        </div>

        <div className="flex justify-between">

          <div className={`${gates[0].color} rounded-2xl p-5 w-48 text-center shadow-xl animate-pulse`}>
            <h3 className="text-2xl font-bold">{gates[0].name}</h3>
            <p>{gates[0].crowd} People</p>
          </div>

          <div className={`${gates[1].color} rounded-2xl p-5 w-48 text-center shadow-xl animate-pulse`}>
            <h3 className="text-2xl font-bold">{gates[1].name}</h3>
            <p>{gates[1].crowd} People</p>
          </div>

        </div>

        <div className="border-[12px] border-cyan-500 rounded-full h-[350px] mt-10 flex items-center justify-center shadow-2xl">

          <div className="text-center">

            <h2 className="text-5xl">⚽</h2>

            <h3 className="text-3xl font-bold mt-4">
              FIFA WORLD CUP
            </h3>

            <p className="text-gray-400">
              LIVE MATCH
            </p>

          </div>

        </div>

        <div className="flex justify-between mt-10">

          <div className={`${gates[2].color} rounded-2xl p-5 w-48 text-center shadow-xl animate-pulse`}>
            <h3 className="text-2xl font-bold">{gates[2].name}</h3>
            <p>{gates[2].crowd} People</p>
          </div>

          <div className={`${gates[3].color} rounded-2xl p-5 w-48 text-center shadow-xl animate-pulse`}>
            <h3 className="text-2xl font-bold">{gates[3].name}</h3>
            <p>{gates[3].crowd} People</p>
          </div>

        </div>

        <div className="text-center mt-5 text-cyan-300 font-bold text-xl">
          SOUTH
        </div>

      </div>
    </section>
  );
}

export default Heatmap;