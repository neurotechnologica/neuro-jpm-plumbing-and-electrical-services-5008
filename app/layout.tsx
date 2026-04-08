import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { loadContent } from '@/lib/content';
import { BookingProvider } from '@/components/booking/BookingContext';
import BookingModal from '@/components/booking/BookingModal';
import ChatWidget from '@/components/chat/ChatWidget';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Trade Business',
  description: 'Trade business website',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const content = await loadContent();
  const primaryColor = content.branding.primaryColor || '#1E3A8A';
  const accentColor = content.branding.accentColor || '#3B82F6';

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <style>{`:root { --color-primary: ${primaryColor}; --color-accent: ${accentColor}; }`}</style>
      </head>
      <body>
        <BookingProvider>
          <Header content={content} />
          <div className="pt-[104px] md:pt-[64px]">{children}</div>
          <Footer content={content} />
          <BookingModal booking={content.booking} />
          <ChatWidget />
        </BookingProvider>
      </body>
    </html>
  );
}
