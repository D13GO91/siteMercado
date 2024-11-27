import { AiChat } from '@/components/AiChat';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SuperMart - Seu Supermercado Online',
  description: 'Encontre os melhores produtos com os melhores preços',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex">
              <Sidebar />
              <main className="flex-1 p-5">{children}</main>
            </div>
          </div>
          <AiChat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}