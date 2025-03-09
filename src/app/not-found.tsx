"use client";

import Link from 'next/link';
import { createPath } from '@/utils/routes';
import ThemeToggle from '@/components/ThemeToggle';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href={createPath('/')}
          className="btn-primary"
        >
          Return Home
        </Link>
      </div>
      <ThemeToggle />
    </div>
  );
} 