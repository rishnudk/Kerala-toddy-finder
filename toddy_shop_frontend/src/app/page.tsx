import { HeroSection } from "@/features/home/components/HeroSection";
import { DistrictExplorer } from "@/features/home/components/DistrictExplorer";
import { FeaturedBest } from "@/features/home/components/FeaturedBest";
import { InteractiveMapSection } from "@/features/home/components/InteractiveMapSection";
import Navbar from "@/features/home/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <DistrictExplorer />
      <FeaturedBest />
      <InteractiveMapSection />
    </>
  );
}
