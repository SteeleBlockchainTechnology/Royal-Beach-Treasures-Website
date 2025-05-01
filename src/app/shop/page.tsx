import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { PenTool, Star } from 'lucide-react'; // Star can represent bracelets

// Mock data for products
const products = [
  // Pens
  { id: 1, category: 'pens', name: 'Rainbow Sparkle Pen', description: 'This pen is covered in glittery rainbow beads—perfect for making your notes pop!', price: 5, imageUrl: 'https://picsum.photos/seed/pen3/400/300', hint: 'beaded pen rainbow glitter' },
  { id: 2, category: 'pens', name: 'Ocean Breeze Pen', description: 'Cool blue and green beads bring the beach to your desk.', price: 5, imageUrl: 'https://picsum.photos/seed/pen4/400/300', hint: 'beaded pen blue green' },
  { id: 3, category: 'pens', name: 'Princess Pink Pen', description: 'Fit for royalty with shimmering pink and silver beads.', price: 5, imageUrl: 'https://picsum.photos/seed/pen5/400/300', hint: 'beaded pen pink silver' },
   { id: 6, category: 'pens', name: 'Midnight Sky Pen', description: 'Deep indigo and silver beads, like a starry night.', price: 5, imageUrl: 'https://picsum.photos/seed/pen6/400/300', hint: 'beaded pen dark blue silver' },
  // Bracelets
  { id: 4, category: 'bracelets', name: 'Mermaid Magic Bracelet', description: 'Shimmering teal and purple beads for underwater vibes.', price: 8, imageUrl: 'https://picsum.photos/seed/bracelet2/400/300', hint: 'beaded bracelet teal purple' },
  { id: 5, category: 'bracelets', name: 'Sunset Glow Bracelet', description: 'Warm orange, pink, and yellow beads capture the sunset.', price: 8, imageUrl: 'https://picsum.photos/seed/bracelet3/400/300', hint: 'beaded bracelet orange pink yellow' },

];

const pens = products.filter(p => p.category === 'pens');
const bracelets = products.filter(p => p.category === 'bracelets');

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold font-bubblegum-sans text-center mb-10 text-primary">Shop My Creations</h1>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
           <PenTool className="w-8 h-8 text-primary" />
           <h2 className="text-3xl font-bubblegum-sans font-semibold text-secondary-foreground">Beaded Pens</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8">Write in style with my sparkly, handmade pens! Perfect for school, journaling, or gifting.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pens.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0 relative">
                 <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  data-ai-hint={product.hint}
                 />
                 <Badge variant="secondary" className="absolute top-2 right-2">${product.price}</Badge>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-xl font-semibold mb-2 font-bubblegum-sans">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                {/* Add to Cart Button - Placeholder */}
                <Button className="w-full transition-transform hover:scale-105" disabled>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12 border-t-2 border-border" />

      <section className="mb-12">
         <div className="flex items-center gap-3 mb-6">
           <Star className="w-8 h-8 text-primary" /> {/* Using Star for bracelets */}
           <h2 className="text-3xl font-bubblegum-sans font-semibold text-secondary-foreground">Beaded Bracelets</h2>
         </div>
        <p className="text-lg text-muted-foreground mb-8">Add a pop of color to your wrist with my unique bracelets. Each one is made with love!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bracelets.map((product) => (
             <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0 relative">
                 <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  data-ai-hint={product.hint}
                 />
                 <Badge variant="secondary" className="absolute top-2 right-2">${product.price}</Badge>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-xl font-semibold mb-2 font-bubblegum-sans">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                 {/* Add to Cart Button - Placeholder */}
                 <Button className="w-full transition-transform hover:scale-105" disabled>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

       <Separator className="my-12 border-t-2 border-border" />

      <div className="text-center bg-accent/30 p-8 rounded-lg shadow-inner">
        <h3 className="text-2xl font-bubblegum-sans font-semibold mb-4 text-accent-foreground">Want Something Special?</h3>
        <p className="text-lg text-muted-foreground mb-4">
          Looking for a specific color or design? I love making custom orders!
        </p>
        <Button asChild variant="secondary" className="transition-transform hover:scale-105">
          <Link href="/contact">Contact Me for Custom Orders</Link>
        </Button>
         <p className="text-sm text-muted-foreground mt-6">
            Note: All items are handmade, so quantities are limited. Grab yours before they’re gone! E-commerce functionality coming soon.
        </p>
      </div>
    </div>
  );
}
