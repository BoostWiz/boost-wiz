import localFont from 'next/font/local';

import '@/styles/globals.css';
import QueryProvider from '@/app/provider/QueryProvider';

const mainFont = localFont({
  src: '../styles/fonts/Y-Spotlight.otf',
  variable: '--font-spotlight',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={`${mainFont.variable} font-mainfont`}>{children}</body>
      </QueryProvider>
    </html>
  );
}
