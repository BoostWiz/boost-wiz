import localFont from 'next/font/local';

import '@/styles/globals.css';
import QueryProvider from '@/app/provider/QueryProvider';
import MswProvider from '@/app/provider/MSWProvider';
import Footer from '@/shared/components/Footer';

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
      <MswProvider>
        <QueryProvider>
          <body className={`${mainFont.variable} font-mainfont`}>
            {children}
            <Footer />
          </body>
        </QueryProvider>
      </MswProvider>
    </html>
  );
}
