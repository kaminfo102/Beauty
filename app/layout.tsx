import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'کلینیک زیبایی رز',
  description: 'کلینیک زیبایی رز با بیش از ۱۵ سال تجربه - خدمات لیزر موهای زائد، مشاور تغذیه، دستگاه لاغری و تزریقات زیبایی',
  openGraph: {
    title: 'کلینیک زیبایی رز',
    description: 'کلینیک زیبایی رز با بیش از ۱۵ سال تجربه',
    images: ['https://bolt.new/static/og_default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://bolt.new/static/og_default.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="overflow-x-hidden">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

