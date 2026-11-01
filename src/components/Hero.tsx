
import HeroBanner from "./Hero/HeroBanner";
import ComparisonSection from "./Hero/ComparisonSection";
import WhyGrowZealSection from "./Hero/WhyGrowZealSection";
import JourneySection from "./Hero/JourneySection";
import ProjectTracksSection from "./Hero/ProjectTracksSection";
import FinalCTASection from "./Hero/FinalCTASection";

export default function Hero() {
  return (
    <>
      <HeroBanner />
      <ProjectTracksSection />
      <JourneySection />
      <WhyGrowZealSection />
      <ComparisonSection />
      <FinalCTASection />
    </>
  );
}
