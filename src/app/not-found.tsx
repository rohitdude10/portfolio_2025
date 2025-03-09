"use client";

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <button className="btn-primary">Back to Home</button>
        </Link>
      </div>
      <ThemeToggle />
    </div>
  );
} 