import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'کلینیک زیبایی نیولایف',
  description: 'کلینیک زیبایی نیولایف در دیواندره از آبان سال 1402  در زمینه زیبایی ،شروع به فعالیت کرده است.که کارهای مختلف از جمله فیلر وبوتاکس و مزو و PRP ولیفت نخ ، لیزر و هایفوولاغری و مامایی فعالیت دارد.',
  openGraph: {
    title: 'کلینیک زیبایی نیولایف',
    description: 'کلینیک زیبایی نیولایف در دیواندره از آبان سال 1402  در زمینه زیبایی ،شروع به فعالیت کرده است.که کارهای مختلف از جمله فیلر وبوتاکس و مزو و PRP ولیفت نخ ، لیزر و هایفوولاغری و مامایی فعالیت دارد.',
    images: ['/images/logo_2_1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/logo_2_1.png'],
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

