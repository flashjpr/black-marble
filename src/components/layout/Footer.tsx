import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-muted py-16 border-t">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Logo className="text-2xl mb-4" />
            <p className="text-muted-foreground max-w-md">
              The premier marketplace for high-value business opportunities in AI, green energy, and Web3.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Stay Updated</h4>
            <NewsletterForm buttonText="Subscribe" />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© 2024 BlackMarble. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}