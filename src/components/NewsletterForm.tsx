import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from '@/lib/utils';
import { validateEmail } from '@/lib/services/validation';
import { showToast } from '@/lib/services/toast';

interface NewsletterFormProps {
  className?: string;
  buttonText?: string;
  buttonSize?: 'default' | 'sm' | 'lg';
}

export function NewsletterForm({ 
  className,
  buttonText = "Subscribe",
  buttonSize = 'default'
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      showToast.error('Please enter a valid email address');
      return;
    }

    showToast.success('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn("flex flex-col sm:flex-row gap-4", className)}
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12"
        required
      />
      <Button type="submit" size={buttonSize} className="px-8">
        {buttonText}
      </Button>
    </form>
  );
}