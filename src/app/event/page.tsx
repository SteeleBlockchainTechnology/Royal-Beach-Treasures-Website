import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, CalendarDays, Smile, DollarSign, Gift, Lightbulb, PiggyBank } from 'lucide-react';
import Image from 'next/image';

export default function EventPage() {
  const eventDate = "Saturday, October 26th, 2024"; // Example date - Replace with actual date
  const eventTime = "10:00 AM - 2:00 PM"; // Example time
  const eventLocation = "Water's Edge Park, Corpus Christi, TX"; // Example location

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold font-bubblegum-sans text-center mb-10 text-primary">Join Me at the Market!</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
         <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder for map or event image */}
             <Image
                src="./city.jpg"
                alt="Map or image of Corpus Christi Kids Market location"
                layout="fill"
                objectFit="cover"
                data-ai-hint="Corpus Christi park map event"
             />
             {/* Or add a map embed here if needed */}
         </div>
         <div className="space-y-6 bg-card p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bubblegum-sans font-semibold text-card-foreground mb-4">Event Details</h2>
            <div className="flex items-start gap-4">
                <CalendarDays className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-lg text-card-foreground">Date & Time:</p>
                    <p className="text-muted-foreground">{eventDate} <br /> {eventTime}</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-lg text-card-foreground">Location:</p>
                    <p className="text-muted-foreground">{eventLocation}</p>
                     <p className="text-sm text-muted-foreground mt-1">Look for my colorful lemonade-style stand!</p>
                </div>
            </div>
             <p className="text-lg text-muted-foreground leading-relaxed pt-4">
                Come visit my stand at the Corpus Christi Kids’ Market! I’ll have tons of beaded pens and bracelets, plus lots of smiles to share. This event is all about kids learning to run businesses and understand money. I’m so excited to meet new customers and try out my sales skills!
            </p>
         </div>
      </div>


      <h2 className="text-3xl font-bubblegum-sans font-semibold text-center mb-8 text-primary">My Market Goals!</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center">
         <Card className="bg-accent/50 shadow-md hover:shadow-lg transition-shadow">
             <CardHeader>
                <Smile className="w-10 h-10 mx-auto text-primary mb-2"/>
                <CardTitle className="font-bubblegum-sans text-xl">Make Smiles</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Make 20 people smile with my creations 😊</p>
             </CardContent>
         </Card>
         <Card className="bg-accent/50 shadow-md hover:shadow-lg transition-shadow">
             <CardHeader>
                <DollarSign className="w-10 h-10 mx-auto text-primary mb-2"/>
                <CardTitle className="font-bubblegum-sans text-xl">Sell Lots</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Sell 30 pens and bracelets to share my art 💰</p>
             </CardContent>
         </Card>
          <Card className="bg-accent/50 shadow-md hover:shadow-lg transition-shadow">
             <CardHeader>
                <Gift className="w-10 h-10 mx-auto text-primary mb-2"/>
                <CardTitle className="font-bubblegum-sans text-xl">Spread Kindness</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Give a freebie or kind note to someone who needs a lift 💌</p>
             </CardContent>
         </Card>
         <Card className="bg-accent/50 shadow-md hover:shadow-lg transition-shadow">
             <CardHeader>
                <Lightbulb className="w-10 h-10 mx-auto text-primary mb-2"/>
                <CardTitle className="font-bubblegum-sans text-xl">Learn Something New</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Learn about business, like talking to customers 🌟</p>
             </CardContent>
         </Card>
      </div>

       <div className="bg-secondary/30 p-8 md:p-12 rounded-lg shadow-inner text-center">
        <h2 className="text-3xl font-bubblegum-sans font-semibold mb-6 text-secondary-foreground">What’s Next? My Investment Plans!</h2>
        <div className="flex justify-center mb-4">
           <Image src="/piggy-bank-crypto.svg" alt="Piggy bank with digital coins" width={60} height={60} data-ai-hint="piggy bank digital coin illustration" />
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
          I’m saving my profits to learn about investing! Cryptocurrency is like digital money, and I’m excited to explore it with my family’s help.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
          Maybe I’ll even start a new business one day! Follow my journey to see what I do next!
        </p>
      </div>

    </div>
  );
}
