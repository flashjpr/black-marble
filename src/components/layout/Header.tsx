import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Link } from "@/components/ui/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="hover:opacity-90">
          <Logo className="text-2xl" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/about">About</Link>
          <Button>Get Started</Button>
        </nav>
        <Button className="md:hidden">Menu</Button>
      </div>
    </header>
  );
}