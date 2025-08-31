"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto">
            Get to know more about me, my background, and what motivates me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/portfolio_2025/profile_pic.jpg" 
                alt="Rohit Kumar - Senior Software Engineer" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4">Senior Software Engineer with 6+ years of experience</h3>
            <p className="mb-4">
              I am a Software Engineer based in Gurugram, India, with over 6 years of experience in developing robust data collection systems and building scalable web services using Python, Django, and Next.js.
            </p>
            <p className="mb-4">
              Currently at Wood Mackenzie, I enhance data workflows and leverage AWS services like SageMaker, Lambda, and S3 to optimize data processing and accuracy.
            </p>
            <p className="mb-4">
              I am passionate about data engineering best practices, ensuring compliance and security while collaborating with cross-functional teams to deliver high-quality solutions.
            </p>
            <p className="mb-6">
              I continuously seek to expand my knowledge in emerging technologies, currently exploring machine learning integration into our data pipelines for predictive analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact">
                <button className="btn-primary">Contact Me</button>
              </Link>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn-outline">Download my Resume</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 