import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Target, Lightbulb, Building2, Rocket } from "lucide-react";

export function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Redefining Business Exchange
            </h1>
            <p className="text-lg text-muted-foreground">
              BlackMarble is where innovation meets legacy in the world of business transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block p-3 bg-primary/10 rounded-lg">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                We're on a mission to revolutionize how businesses are bought, sold, and valued. Through 
                cutting-edge technology and careful curation, we're creating the most trusted marketplace 
                for high-value business opportunities.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="font-semibold mb-4">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">$2B+</div>
                  <div className="text-sm text-muted-foreground">Transaction Volume</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Vetted Listings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <div className="mb-6 inline-block p-3 bg-background rounded-lg">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines technological innovation with industry expertise to provide 
              a comprehensive suite of services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Curated Listings",
                description: "Access exclusive, thoroughly vetted business opportunities across various sectors."
              },
              {
                title: "New Markets",
                description: "Explore unique opportunities in business slices and internal tooling licensing."
              },
              {
                title: "Smart Technology",
                description: "Benefit from AI-powered valuations and secure, streamlined transactions."
              }
            ].map((item, i) => (
              <div key={i} className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block p-3 bg-primary/10 rounded-lg">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-8">
              We envision BlackMarble as the global leader in premium business exchanges, 
              creating a trusted ecosystem where innovation and opportunity meet. Our platform 
              will continue to evolve, introducing new ways to discover, value, and transact 
              business opportunities.
            </p>
            <NewsletterForm 
              className="max-w-md mx-auto"
              buttonText="Join Our Journey"
              buttonSize="lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}