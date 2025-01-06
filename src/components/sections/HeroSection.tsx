import { NewsletterForm } from "@/components/NewsletterForm";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Discover, Buy, and Sell Businesses Like Never Before
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Join a trusted network and access vetted opportunities designed for growth
          </p>
          <NewsletterForm 
            className="max-w-md mx-auto"
            buttonText="Get Early Access"
            buttonSize="lg"
          />
        </div>
      </div>
    </section>
  );
}