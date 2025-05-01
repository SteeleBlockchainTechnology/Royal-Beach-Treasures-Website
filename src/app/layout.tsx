import type {Metadata} from 'next';
import { Lato } from 'next/font/google';
import localFont from 'next/font/local'
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700']
});

// Path relative to the current directory (src/app), assuming fonts are in src/app/fonts
const bubblegumSans = localFont({
  src: './fonts/BubblegumSans-Regular.otf', // Adjusted path
  variable: '--font-bubblegum-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Royal Beach Treasures',
  description: 'Royal finds beachy designs - Handmade beaded pens & bracelets by Zoe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${bubblegumSans.variable} font-lato antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
