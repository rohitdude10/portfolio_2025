"use client";

import Link from 'next/link';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import ThemeToggle from '@/components/ThemeToggle';

export default function Resume() {
  return (
    <main className="min-h-screen bg-light dark:bg-dark py-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline">
            <FaArrowLeft /> Back to Portfolio
          </Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 btn-primary">
            <FaDownload /> Download Resume
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Rohit Kumar</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Senior Software Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300 text-sm">
              <span>rohitkumardude10@gmail.com</span>
              <span>•</span>
              <span>+91 8287546468</span>
              <span>•</span>
              <span>Noida, India</span>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Profile</h2>
            <p className="mb-4">
              I am a Software Engineer with over 5 years of expertise in the field. My skill set encompasses the development of robust data collection
              code from diverse platforms, optimizing SEO characteristics, and building data pipelines using APIs and connectors. Proficient in Python,
              Django REST framework, and Next.js, I specialize in creating scalable web services and RESTful APIs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Languages & Frameworks</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Python, Django, Django REST framework, Fast API</li>
                  <li>JavaScript, React.js, Next.js, Bootstrap</li>
                  <li>Data Structure and Algorithms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Tools & Technologies</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Docker, Kubernetes, Git</li>
                  <li>MySQL, MongoDB, Celery</li>
                  <li>AWS, JIRA, Kafka, API Gateway</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Work Experience</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Senior Engineer</h3>
                  <p className="text-gray-600 dark:text-gray-300">Wood Mackenzie</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Sep 2024 - Present</p>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Enhanced data collection and processing by streamlining code to improve performance and reliability.</li>
                <li>Leveraged AWS Sage Maker for robust machine learning model development and deployment.</li>
                <li>Managed Apache Airflow workflows to automate and monitor data pipeline processes.</li>
                <li>Ensured secure, organized data storage and retrieval using AWS S3, optimizing data handling and cost efficiency.</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                  <p className="text-gray-600 dark:text-gray-300">Mindfire Solutions</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Mar 2022 - Sep 2024</p>
              </div>
              <p className="mb-2 text-gray-700 dark:text-gray-300 italic">
                Utilized Python and Django to orchestrate robust data collection systems. Collaborated with SEO specialists, extracting and transforming data for optimal performance.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Architected and sustained robust data collection systems using Python and Django, integrating with platforms like Google Analytics, Google Search Console, and Adobe.</li>
                <li>Collaborated closely with SEO specialists and stakeholders to identify and achieve client-specific objectives, optimizing data extraction and transformation processes.</li>
                <li>Developed data collection pipelines utilizing APIs and data connectors to efficiently gather information from diverse sources.</li>
                <li>Engineered and maintained production-ready code to streamline SEO data collection processes, ensuring optimal performance and reliability.</li>
                <li>Fostered collaborative relationships with clients, understanding their specific needs to drive the development of new software features and enhancements.</li>
              </ul>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                <strong>Skills:</strong> Python, Django, Celery, Kubernetes, Docker, Git, Hadoop, MySQL, Shell Scripting, ClickHouse, AWS, GCP, RabbitMQ, Impala, PostgreSQL, API Integration, ETL, Data Analysis, SEO Optimization, Scalable System Design.
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Software Developer (Full-Stack)</h3>
                  <p className="text-gray-600 dark:text-gray-300">DJT Corporation & Investments</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Aug 2021 - Mar 2022</p>
              </div>
              <p className="mb-2 text-gray-700 dark:text-gray-300 italic">
                Development of an E-commerce platform for grocery delivery with real-time order tracking and rider location features.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Collaborated with a medium-sized team using Agile/Scrum principles to develop E-commerce applications and platform features.</li>
                <li>Collaborated closely with the team to design and architect the Kafka integration, considering the specific requirements and business needs of the organization.</li>
                <li>Utilized Python and Django REST framework to architect and implement robust and scalable web services and RESTful APIs for seamless data communication.</li>
                <li>Implemented API Gateway like Nginx Ingress Controller for traffic management.</li>
                <li>Experience in deploying projects using Heroku and leveraging web services such as Amazon Web Services (AWS) EC2 and AWS S3 for seamless and scalable project deployment and storage.</li>
              </ul>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                <strong>Skills:</strong> Python, Django, Celery, Docker, Git, MySQL, Shell Scripting, AWS, Kafka, Agile, MongoDB.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Software Developer (Full-Stack)</h3>
                  <p className="text-gray-600 dark:text-gray-300">Moxtain</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Aug 2019 - Aug 2021</p>
              </div>
              <p className="mb-2 text-gray-700 dark:text-gray-300 italic">
                Development of a trek organizing platform, empowering customers to select and customize their ideal trekking packages.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Implemented multi-tenant architecture with the team to offer personalized trekking experiences to B2B clients on our platform.</li>
                <li>Developed Django web application using MVC architecture.</li>
                <li>Built admin control console using Python, Django, and React.js for B2B customers, and developed scalable RESTful APIs using Django and Django REST Framework (DRF).</li>
                <li>Developed Next.js websites with Bootstrap, integrating Google and Facebook authentication using Next Auth.</li>
              </ul>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                <strong>Skills:</strong> Python, Django, JavaScript, ReactJS, NextJs, bootstrap, MYSQL, Git, AWS, Docker, Celery.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Education</h2>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                <p className="text-gray-600 dark:text-gray-300">Galgotias University</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">CGPA: 8.59</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Projects</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Portfolio Website</strong> - Using Next.js
                <a href="https://rohit_portfolio" target="_blank" rel="noopener noreferrer" className="text-primary ml-2">View Project</a>
              </li>
              <li>
                <strong>Desktop Wallpaper Management Application</strong> - Using Python and ReactJS, allowing users to search for images and seamlessly set them as their desktop background.
              </li>
              <li>
                <strong>Resume Parsing Application</strong> - Capable of processing PDF and Word format files. The system uses algorithms to extract specific details, including name, experience, email, and contact number from the uploaded resumes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Activities and Interests</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Coding on Hackerrank and Leetcode</li>
              <li>Passionate automobile enthusiast and avid solo traveller</li>
            </ul>
          </section>
        </div>
      </div>
      <ThemeToggle />
    </main>
  );
} 