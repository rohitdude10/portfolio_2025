"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light dark:bg-dark py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Rohit Kumar</h4>
            <p className="mb-4">
              A Senior Software Engineer passionate about creating efficient, scalable, and user-friendly web applications with expertise in Python, Django, and Next.js.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/rohitdude10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
                  <FaGithub size={20} />
                </div>
              </Link>
              <Link href="https://linkedin.com/in/engineerohit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
                  <FaLinkedinIn size={20} />
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
                  <FaTwitter size={20} />
                </div>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="hover:text-primary transition-colors">
                <Link href="/portfolio_2025/">Home</Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link href="/portfolio_2025/#about">About</Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link href="/portfolio_2025/#skills">Skills</Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link href="/portfolio_2025/#projects">Projects</Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link href="/portfolio_2025/#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="mb-2">Email: rohitkumardude10@gmail.com</p>
            <p className="mb-2">Phone: +91 8287546468</p>
            <p className="mb-2">Location: Gurugram, India</p>
            <p>Available for full-time positions and freelance projects</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Rohit Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 