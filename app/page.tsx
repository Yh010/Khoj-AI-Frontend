import BackedBy from "@/components/backedbySection/backedBySectionComponent";
import FeaturesSectionComponent from "@/components/FeaturesSection/FeacturesSectionComponent";
import HeaderSectionComponent from "@/components/HeaderSection/HeaderSectionComponent";
import JumpToContextSection from "@/components/JumpToContextSection/JumpToContextSection";
import RunSectionComponent from "@/components/RunPrivatelySection/RunSectionComponent";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div>
        <HeaderSectionComponent />
        <JumpToContextSection />
        <FeaturesSectionComponent />
        <RunSectionComponent />
        <BackedBy />
      </div>
    </div>
  );
}
