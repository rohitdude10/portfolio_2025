import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeScript } from './theme-script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Senior Software Engineer Portfolio',
  description: 'Portfolio website showcasing my skills and projects as a senior software engineer',
  keywords: 'senior software engineer, portfolio, web development, python, django, next.js, node.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} font-sans bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
} 