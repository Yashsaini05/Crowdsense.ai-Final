import Heatmap from "../components/Heatmap/Heatmap";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Statistics from "../components/Statistics/Statistics";
import DashboardPreview from "../components/DashboardPreview/DashboardPreview";
import Alerts from "../components/Alerts/Alerts";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
        <Heatmap />
        <Alerts />
        <Statistics />
        <DashboardPreview />
      <Footer />
    </>
  );
}

export default Home;