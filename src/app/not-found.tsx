import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-bubblegum-sans text-center mb-4 text-primary">
        Page Not Found
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Oops! We couldn't find the beach treasure you're looking for.
      </p>
      <Button asChild>
        <Link href="/">
          Return to Shore (Home)
        </Link>
      </Button>
    </div>
  );
}