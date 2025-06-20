import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Krishna Kamal Baishnab',
  description: 'Personal website of Krishna Kamal - Software Engineer',
  keywords: ['Krishna Kamal', 'Software Engineer', 'Portfolio', 'Blog', 'Entrepreneur'],
  authors: [{ name: 'Alex Johnson' }],
  creator: 'Krishna Kamal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://krishnakamalbaishnab.dev',
    title: 'Krishna Kamal Baishnab',
    description: 'Personal website of Krishna Kamal - Software Engineer',
    siteName: 'Krishna Kamal Baishnab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Kamal Baishnab',
    description: 'Personal website of Krishna Kamal - Software Engineer',
    creator: '@krishnakamalbaishnab',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}