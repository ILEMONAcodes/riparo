import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer';
import SplashPreloader from '@/components/branding/SplashPreloader';

export const metadata: Metadata = {
  title: 'Riparo Real Estate & Construction',
  description: 'Premium Real Estate & Construction Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-white text-[#1F0B05]">
        {/* Global Splash Preloader */}
        <SplashPreloader />

        {/* Main page content container */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Riparo Footer */}
        <Footer />
      </body>
    </html>
  );
}