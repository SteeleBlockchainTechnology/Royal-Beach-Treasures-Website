import type {Metadata} from 'next';
import { Lato, Baloo_2 } from 'next/font/google';
// import localFont from 'next/font/local' // Removed local font import
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700']
});

// Use Google Font 'Baloo 2' instead of local font
const baloo_2 = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo-2',
  display: 'swap',
})

// Path relative to the current file (src/app/layout.tsx), assuming fonts are in src/fonts
// const bubblegumSans = localFont({
//   src: '../fonts/BubblegumSans-Regular.otf', // This path was causing issues as the file likely doesn't exist
//   variable: '--font-bubblegum-sans',
//   display: 'swap',
// })

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
      <body className={`${lato.variable} ${baloo_2.variable} font-lato antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
