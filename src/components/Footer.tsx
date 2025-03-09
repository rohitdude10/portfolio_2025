"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light dark:bg-dark py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="hover:text-primary transition-colors">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link href="#about">About</Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link href="#skills">Skills</Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="hover:text-primary transition-colors">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 