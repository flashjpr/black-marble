import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("text-5xl font-bold tracking-tight", className)}>
      BlackMarble
    </div>
  );
}