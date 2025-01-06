export function SocialProofSection() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center opacity-50">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-12 w-32 bg-foreground/10 rounded" />
          ))}
        </div>
      </div>
    </section>
  );
}