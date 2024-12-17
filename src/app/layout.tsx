import localFont from 'next/font/local';

import '@/styles/globals.css';
import QueryProvider from '@/app/provider/QueryProvider';
import MswProvider from '@/app/provider/MSWProvider';
import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';

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
            <main className="h-full overflow-y-scroll">
              <Header />
              {children}
              <Footer />
            </main>
          </body>
        </QueryProvider>
      </MswProvider>
    </html>
  );
}
