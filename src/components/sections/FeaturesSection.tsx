import { CircleDollarSign, Gem, Lock, Zap } from 'lucide-react';
import { FeatureCard } from "@/components/FeatureCard";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Zap className="h-10 w-10" />}
            title="AI-Powered Valuations"
            description="Get accurate, real-time valuations powered by advanced AI algorithms"
          />
          <FeatureCard
            icon={<Gem className="h-10 w-10" />}
            title="Exclusive, Vetted Listings"
            description="Access carefully curated opportunities that meet our strict standards"
          />
          <FeatureCard
            icon={<CircleDollarSign className="h-10 w-10" />}
            title="New Markets"
            description="Explore internal tooling & business slices for unique opportunities"
          />
          <FeatureCard
            icon={<Lock className="h-10 w-10" />}
            title="Secure Transactions"
            description="Trade with confidence using our secure smart transaction system"
          />
        </div>
      </div>
    </section>
  );
}