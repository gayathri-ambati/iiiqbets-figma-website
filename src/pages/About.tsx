
import Herosection from "../components/AboutCompo/Herosection";
import MissionSection from "../components/AboutCompo/MissionSection";
import TechTrends from "../components/AboutCompo/TechTrends";
import TransformationalServices from "../components/AboutCompo/TransformationalServices";

export default function About() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-white">
     
      <Herosection />
      <MissionSection />
      <TransformationalServices />
      <TechTrends />

    </main>
  );
}
