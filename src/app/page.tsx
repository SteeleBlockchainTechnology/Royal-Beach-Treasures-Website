import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Smile, DollarSign } from 'lucide-react';

// Mock data for featured products
const featuredProducts = [
  { id: 1, name: 'Sparkly Ocean Pen', description: 'Writes smoothly with dazzling blue beads.', price: 5, imageUrl: 'https://picsum.photos/seed/pen1/400/300', hint: 'beaded pen blue' },
  { id: 2, name: 'Rainbow Dream Bracelet', description: 'A burst of color for your wrist!', price: 8, imageUrl: 'https://picsum.photos/seed/bracelet1/400/300', hint: 'beaded bracelet rainbow' },
  { id: 3, name: 'Sunshine Yellow Pen', description: 'Brighten your notes with sunny yellow beads.', price: 5, imageUrl: 'https://picsum.photos/seed/pen2/400/300', hint: 'beaded pen yellow' },
];

export default function Home() {
  const smilesSpread = 12;
  const smilesGoal = 20;
  const itemsSold = 8;
  const itemsGoal = 30;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[70vh] bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-center px-4">
         {/* Placeholder background image - replace with actual image */}
         <Image
            src="./beach.jpg"
            alt="Lemonade-style stand with crafts"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            data-ai-hint="beach craft stand lemonade"
         />
        <div className="relative z-10 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-bubblegum-sans tracking-wide text-primary-foreground drop-shadow-md">
            Handmade Beaded Pens & Bracelets That Spark Joy!
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-medium">
            Crafted with Love by Zoe to Make You Smile 😊
          </p>
          <div className="pt-4 space-x-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-background/80 text-foreground hover:bg-background shadow-lg transition-transform hover:scale-105">
              <Link href="/about">Learn My Story</Link>
            </Button>
          </div>
        </div>
      </section>

       {/* Introduction */}
       <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bubblegum-sans font-semibold mb-4 text-primary">Welcome!</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to Royal Beach Treasures! I’m Zoe, and I love creating colorful beaded pens and bracelets that brighten your day. Every piece is handmade with care to spread joy and creativity. Whether you’re writing a note or accessorizing your outfit, my creations are here to make you smile!
          </p>
        </div>
      </section>


      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bubblegum-sans font-semibold text-center mb-8 text-primary">Featured Treasures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                   <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    data-ai-hint={product.hint}
                   />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold mb-2 font-bubblegum-sans">{product.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{product.description}</CardDescription>
                  <p className="font-bold text-lg text-primary">${product.price}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full transition-transform hover:scale-105">
                    <Link href="/shop">View in Shop</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-8">
              <Button asChild variant="link" className="text-lg">
                <Link href="/shop">See All Products →</Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Event Highlight & Goal Tracker */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bubblegum-sans font-semibold text-primary">Come See Me!</h2>
             <div className="flex justify-center md:justify-start mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-yellow-400">
                <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 12.75 9-12.75-8.622-5.03ZM21.75 7.903l-9 12.75-9-12.75L12 3.25l9.75 4.653Z" />
               </svg>
             </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join me at the Corpus Christi Kids’ Market! I’ll be at my lemonade-style stand selling pens and bracelets, spreading smiles, and learning about business. Come say hi!
            </p>
            <Button asChild variant="secondary" className="transition-transform hover:scale-105">
              <Link href="/event">Event Details</Link>
            </Button>
          </div>
          <div className="space-y-6 bg-card p-6 rounded-lg shadow-md">
             <h3 className="text-2xl font-bubblegum-sans font-semibold text-center text-card-foreground">My Goals!</h3>
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Smile className="w-6 h-6 text-accent-foreground"/>
                    <span className="font-medium text-card-foreground flex-1">Smiles Spread</span>
                    <span className="text-sm font-semibold text-card-foreground">{smilesSpread}/{smilesGoal}</span>
                </div>
                 <Progress value={(smilesSpread / smilesGoal) * 100} aria-label={`${smilesSpread} out of ${smilesGoal} smiles spread`} className="h-3"/>
             </div>
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-accent-foreground"/>
                    <span className="font-medium text-card-foreground flex-1">Items Sold</span>
                    <span className="text-sm font-semibold text-card-foreground">{itemsSold}/{itemsGoal}</span>
                </div>
                 <Progress value={(itemsSold / itemsGoal) * 100} aria-label={`${itemsSold} out of ${itemsGoal} items sold`} className="h-3"/>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
