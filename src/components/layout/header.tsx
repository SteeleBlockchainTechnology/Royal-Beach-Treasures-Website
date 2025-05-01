import Link from 'next/link';
import { Package2, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6 shadow-sm">
      {/* Logo Section - Ensure items-center for vertical alignment */}
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold" // Ensure items-center for vertical centering
      >
        {/* SVG Icon */}
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary flex-shrink-0"> {/* Added flex-shrink-0 */}
           <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.18 14.123a.75.75 0 0 1-.986-.83l.87-5.384a.75.75 0 0 1 .986-.66l5.384.87a.75.75 0 0 1-.66.986l-5.384-.87-.209 1.291a.75.75 0 0 1-.405.52l-2.94 1.546a.75.75 0 0 1-.986-.83l.87-5.384a.75.75 0 0 1 .986-.66l5.384.87a.75.75 0 0 1-.66.986l-5.384-.87-.209 1.291-.03.183Z" clipRule="evenodd" />
        </svg>
        {/* Text - adjusted size and visibility */}
        <span className="font-bubblegum-sans text-xl sm:text-2xl tracking-wide whitespace-nowrap">Royal Beach Treasures</span> {/* Added whitespace-nowrap */}
      </Link>

      {/* Desktop Navigation - Centered */}
      {/* Use flex-1 to allow justify-center to work correctly */}
      <nav className="hidden flex-1 md:flex md:justify-center md:items-center md:gap-5 lg:gap-6"> {/* Added flex-1 and justify-center */}
        <Link
          href="/"
          className="text-foreground transition-colors hover:text-foreground/80"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-muted-foreground transition-colors hover:text-foreground/80"
        >
          About
        </Link>
        <Link
          href="/shop"
          className="text-muted-foreground transition-colors hover:text-foreground/80"
        >
          Shop
        </Link>
        <Link
          href="/event"
          className="text-muted-foreground transition-colors hover:text-foreground/80"
        >
          Event
        </Link>
        <Link
          href="/contact"
          className="text-muted-foreground transition-colors hover:text-foreground/80"
        >
          Contact
        </Link>
      </nav>

      {/* Right Side Elements (Placeholder for Cart) & Mobile Menu Trigger */}
      {/* Use ml-auto on mobile trigger container if needed, or ensure flex layout handles spacing */}
      <div className="flex items-center gap-4 ml-auto md:ml-0"> {/* Added ml-auto for mobile, md:ml-0 for desktop */}
         {/* Placeholder for future Cart functionality */}
        {/* <Button variant="ghost" size="icon" className="rounded-full hidden md:inline-flex">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </Button> */}

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold mb-4"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.18 14.123a.75.75 0 0 1-.986-.83l.87-5.384a.75.75 0 0 1 .986-.66l5.384.87a.75.75 0 0 1-.66.986l-5.384-.87-.209 1.291a.75.75 0 0 1-.405.52l-2.94 1.546a.75.75 0 0 1-.986-.83l.87-5.384a.75.75 0 0 1 .986-.66l5.384.87a.75.75 0 0 1-.66.986l-5.384-.87-.209 1.291-.03.183Z" clipRule="evenodd" />
                 </svg>
                <span className="font-bubblegum-sans text-xl tracking-wide">Royal Beach Treasures</span>
              </Link>
              <Link href="/" className="hover:text-foreground/80">
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground/80"
              >
                About
              </Link>
              <Link
                href="/shop"
                className="text-muted-foreground hover:text-foreground/80"
              >
                Shop
              </Link>
              <Link
                href="/event"
                className="text-muted-foreground hover:text-foreground/80"
              >
                Event
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground/80"
              >
                Contact
              </Link>
               {/* Placeholder for Cart in Mobile Menu */}
               {/* <Button variant="ghost" size="icon" className="rounded-full mt-4">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
               </Button> */}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
