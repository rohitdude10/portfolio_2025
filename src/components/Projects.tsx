"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

const ProjectCard = ({ project, index }: { project: ProjectProps; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card overflow-hidden"
    >
      <div className="p-6">
        <h3 className="mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
            <button className="flex items-center gap-2 btn-outline">
              <FaGithub /> Code
            </button>
          </Link>
          <Link href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
            <button className="flex items-center gap-2 btn-primary">
              <FaExternalLinkAlt /> Demo
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my skills and projects.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
      github: 'https://github.com/rohitdude10/portfolio',
      demo: 'https://rohitdude10.github.io/rohit_portfolio/',
    },
    {
      title: 'Wallpaper Management App',
      description: 'A desktop wallpaper management application using Python and ReactJS, allowing users to search for images and set them as desktop background.',
      tags: ['Python', 'ReactJS', 'Desktop App', 'API Integration'],
      github: 'https://github.com/rohitdude10',
      demo: 'https://github.com/rohitdude10',
    },
    {
      title: 'Resume Parser',
      description: 'A resume parsing application capable of processing PDF and Word format files, extracting specific details like name, experience, email, and contact number.',
      tags: ['Python', 'NLP', 'Document Processing', 'Data Extraction'],
      github: 'https://github.com/rohitdude10',
      demo: 'https://github.com/rohitdude10',
    },
    {
      title: 'Amazon Product Price Tracker',
      description: 'Amazon Product Price Tracker built using Python, Django, Nextjs and Django REST Framework. This application allows you to track prices of Amazon products over time',
      tags: ['Python', 'Django', 'Nextjs', 'Web Scraping'],
      github: 'https://github.com/rohitdude10/price_tracker',
      demo: 'https://github.com/rohitdude10/price_tracker',
    },
    {
      title: 'Birthday Buddy - Birthday Reminder Application',
      description: 'A modern Flask web application to keep track of birthdays with user authentication and a clean, responsive UI',
      tags: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/rohitdude10/birthday_buddy',
      demo: 'https://birthday-buddy-rh5o.onrender.com/',
    }
   ];

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://github.com/rohitdude10" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary">View More Projects</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 