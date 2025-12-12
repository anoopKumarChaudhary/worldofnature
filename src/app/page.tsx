import HeroSection from "./components/home/HeroSection";
import PhilosophySection from "./components/home/PhilosophySection";
import CollectionsSection from "./components/home/CollectionsSection";
import RitualsSection from "./components/home/RitualsSection";
import PhenologySection from "./components/home/PhenologySection";
import ImpactSection from "./components/home/ImpactSection";
// import ShopSection from "./components/home/ShopSection";
import ContactSection from "./components/home/ContactSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#F2F3EE] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white overflow-x-hidden antialiased">
      <HeroSection />
      <PhilosophySection />
      <CollectionsSection />
      <RitualsSection />
      <PhenologySection />
      {/* <ShopSection /> */}
      <ImpactSection />
      <ContactSection />
    </main>
  );
}