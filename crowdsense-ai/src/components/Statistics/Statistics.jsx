function Statistics() {
  const stats = [
    { number: "45K+", title: "Visitors" },
    { number: "320", title: "AI Cameras" },
    { number: "98.7%", title: "Prediction Accuracy" },
    { number: "12", title: "Emergency Alerts" },
  ];

  return (
    <section 
    data-aos="fade-left"
    className="bg-slate-950 text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Live Statistics
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-5xl font-bold text-cyan-400">
              {item.number}
            </h3>

            <p className="mt-4 text-gray-300">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;