import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-background py-6 px-4 md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-bubblegum-sans text-lg tracking-wide">Royal Beach Treasures</p>
          <p className="text-sm text-muted-foreground">Royal finds beachy designs</p>
        </div>
        <div className="flex gap-4">
           {/* Placeholder for future Social Media links */}
          {/* <Link href="#" className="text-xs text-muted-foreground hover:underline">Facebook</Link>
          <Link href="#" className="text-xs text-muted-foreground hover:underline">Instagram</Link> */}
          <Link href="/contact" className="text-xs text-muted-foreground hover:underline">Contact Us</Link>
        </div>
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Royal Beach Treasures. Made with love by Zoe and help from my family!</p>
      </div>
    </footer>
  );
}
