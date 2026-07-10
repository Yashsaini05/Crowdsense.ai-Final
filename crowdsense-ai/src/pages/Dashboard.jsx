import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import CrowdCard from "../components/Dashboard/CrowdCard";
import PredictionCard from "../components/Dashboard/PredictionCard";
import AnalyticsChart from "../components/Dashboard/AnalyticsChart";
import AIAssistant from "../components/Dashboard/AIAssistant";
import Heatmap from "../components/Heatmap/Heatmap";
import Alerts from "../components/Alerts/Alerts";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto">

        <Topbar />

        <div className="p-8 space-y-8">

          <CrowdCard />

          <PredictionCard />

          <AnalyticsChart />

          <AIAssistant />

          {/* Heatmap Section */}
          <Heatmap />

          {/* Alerts Section */}
          <Alerts />

          {/* Settings */}
          <section
            id="settings"
            className="bg-slate-900 rounded-2xl border border-cyan-500/20 p-8"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              ⚙ Settings
            </h2>

            <p className="text-gray-400">
              CrowdSense AI system configuration panel.
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">
                <span>AI Monitoring</span>
                <span className="text-green-400">Enabled</span>
              </div>

              <div className="flex justify-between">
                <span>Notifications</span>
                <span className="text-green-400">Enabled</span>
              </div>

              <div className="flex justify-between">
                <span>Camera Refresh Rate</span>
                <span className="text-cyan-400">3 Seconds</span>
              </div>

            </div>

          </section>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;