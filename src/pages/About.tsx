
import FAQ from "../components/AboutCompo/FAQ";
import Herosection from "../components/AboutCompo/Herosection";
import LeadershipProfile from "../components/AboutCompo/LeadershipProfile";
import MindsBehind from "../components/AboutCompo/MindsBehind";
import MissionSection from "../components/AboutCompo/MissionSection";

import OurStory from "../components/AboutCompo/OurStory";
import TechnologyIndex from "../components/AboutCompo/TechnologyIndex";
import TransformationalServices from "../components/AboutCompo/TransformationalServices";
import WhyChooseUs from "../components/AboutCompo/WhyChooseUs";

export default function About() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-white">
     
      <Herosection />
      {/* <MissionSection /> */}
      <TransformationalServices />
      <TechnologyIndex />
      <WhyChooseUs />
      <OurStory />
      <MindsBehind />
      <LeadershipProfile />
      <FAQ />

    </main>
  );
}
