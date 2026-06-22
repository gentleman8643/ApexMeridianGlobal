import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Apex Meridian Global',
  description: 'The Central Gateway to Sovereign Networks & Historic Orders.',
  openGraph: {
    title: 'Apex Meridian Global',
    description: 'The Central Gateway to Sovereign Networks & Historic Orders.',
    images: [
      {
        url: 'https://apexmeridianglobal.vercel.app/icon.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Meridian Global',
    description: 'The Central Gateway to Sovereign Networks & Historic Orders.',
    images: [
      {
        url: 'https://apexmeridianglobal.vercel.app/icon.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
