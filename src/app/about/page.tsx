import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Palette, PiggyBank, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold font-bubblegum-sans text-center mb-10 text-primary">About Me - Zoe!</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
           <Image
            src="https://picsum.photos/seed/zoecrafting/600/600" // Replace with actual photo
            alt="Zoe crafting beaded items"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 hover:scale-110"
            data-ai-hint="girl crafting beads smiling"
           />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bubblegum-sans font-semibold text-secondary-foreground">My Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I’m Zoe, a 10-year-old from Corpus Christi, Texas! I started Royal Beach Treasures because I love crafting and making people happy. My beaded pens and bracelets are all about spreading joy, one colorful bead at a time.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I got the idea when I saw how much my friends and family loved my creations. Now, I want to share them with everyone!
          </p>
          <h2 className="text-3xl font-bubblegum-sans font-semibold text-secondary-foreground mt-6">My Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My goal is to make you smile with every pen you write with and every bracelet you wear. I also want to learn about business and help others feel special.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
         <Card className="bg-accent/50 shadow-md hover:shadow-lg transition-shadow">
             <CardHeader>
                <Palette className="w-10 h-10 mx-auto text-primary mb-2"/>
                <CardTitle className="font-bubblegum-sans text-2xl">Fun Fact #1</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Favorite bead colors? Indigo and light pink!</p>
             </CardContent>
         </Card>
         <Card className="bg-accent/50 shadow-md hover:shadow-lg transition-shadow">
             <CardHeader>
                <Sparkles className="w-10 h-10 mx-auto text-primary mb-2"/>
                <CardTitle className="font-bubblegum-sans text-2xl">Fun Fact #2</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Favorite thing to do? Make someone’s day brighter!</p>
             </CardContent>
         </Card>
         <Card className="bg-accent/50 shadow-md hover:shadow-lg transition-shadow">
             <CardHeader>
                <Star className="w-10 h-10 mx-auto text-primary mb-2"/>
                <CardTitle className="font-bubblegum-sans text-2xl">Inspiration</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Seeing friends & family love my creations inspired me!</p>
             </CardContent>
         </Card>
      </div>

      <div className="bg-secondary/30 p-8 md:p-12 rounded-lg shadow-inner text-center">
        <h2 className="text-3xl font-bubblegum-sans font-semibold mb-6 text-secondary-foreground">Corpus Christi Kids' Market & My Big Plans!</h2>
        <div className="flex justify-center mb-4">
          <PiggyBank className="w-12 h-12 text-primary"/>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
          I’m so excited to bring my lemonade-style stand to the Corpus Christi Kids’ Market! It’s a place where kids like me learn about money, business, and even investing. I'm learning how to run a business and understand money.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
           I’m saving my profits to explore cool things like cryptocurrency (like digital money!) and maybe start new business ideas in the future. Follow my journey to see what I do next!
        </p>
      </div>
    </div>
  );
}
