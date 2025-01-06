import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";

export function HomePage() {
  return (
    <main className="pt-24">
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
    </main>
  );
}