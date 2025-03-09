"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen flex items-center py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <p className="text-primary uppercase tracking-widest">
              Let&apos;s Build Something Together
            </p>
            <h1 className="py-4">
              Hi, I&apos;m <span className="text-primary">Rohit Kumar</span>
            </h1>
            <h1 className="py-2">A Senior Software Engineer</h1>
            <p className="py-4 max-w-lg">
              With over 5 years of expertise in software engineering, I specialize in developing robust data collection systems, 
              optimizing SEO characteristics, and building scalable web services and RESTful APIs using Python, Django, and Next.js.
            </p>
            <div className="flex items-center justify-start gap-4 py-4">
              <Link href="/#contact">
                <button className="btn-primary">Contact Me</button>
              </Link>
              <Link href="/#projects">
                <button className="btn-outline">View Projects</button>
              </Link>
            </div>
            <div className="flex items-center justify-start gap-6 py-4">
              <Link href="https://github.com/rohitdude10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-3 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
                  <FaGithub size={20} />
                </div>
              </Link>
              <Link href="https://linkedin.com/in/engineerohit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-3 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
                  <FaLinkedinIn size={20} />
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-3 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
                  <FaTwitter size={20} />
                </div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <Image 
                src="/profile_pic.jpg" 
                alt="Rohit Kumar - Senior Software Engineer" 
                fill
                sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 