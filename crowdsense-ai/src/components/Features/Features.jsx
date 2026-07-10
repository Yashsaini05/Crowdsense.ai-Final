import {
  FaRobot,
  FaMapMarkerAlt,
  FaBell,
  FaLanguage,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot className="text-5xl text-cyan-400 mb-5" />,
      title: "AI Crowd Prediction",
      desc: "Predict overcrowding before it happens using real-time AI analytics.",
    },
    {
      icon: <FaMapMarkerAlt className="text-5xl text-cyan-400 mb-5" />,
      title: "Smart Navigation",
      desc: "Guide visitors through the safest and least crowded routes.",
    },
    {
      icon: <FaBell className="text-5xl text-cyan-400 mb-5" />,
      title: "Emergency Alerts",
      desc: "Instant AI-powered notifications during emergencies.",
    },
    {
      icon: <FaLanguage className="text-5xl text-cyan-400 mb-5" />,
      title: "Multi-language AI",
      desc: "Assist international visitors in multiple languages.",
    },
  ];

  return (
    <section
      id="features"
      data-aos="fade-up"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-4">
          Smart AI Features
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          CrowdSense AI combines Artificial Intelligence, Real-Time Monitoring,
          Predictive Analytics, and Smart Navigation to ensure safe crowd
          management during large-scale events like the FIFA World Cup 2026.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 border border-cyan-500/20 shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;