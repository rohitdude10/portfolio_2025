"use client";

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaPython, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiAmazon, SiDjango, SiKubernetes, SiCelery, SiFastapi } from 'react-icons/si';

interface SkillProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const SkillItem = ({ name, icon, color }: SkillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="card p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform"
    >
      <div className={`text-5xl ${color}`}>{icon}</div>
      <h4 className="font-medium">{name}</h4>
    </motion.div>
  );
};

const Skills = () => {
  const skills: SkillProps[] = [
    { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
    { name: 'Django', icon: <SiDjango />, color: 'text-green-700' },
    { name: 'FastAPI', icon: <SiFastapi />, color: 'text-teal-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500' },
    { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black dark:text-white' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'Docker', icon: <FaDocker />, color: 'text-blue-600' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-500' },
    { name: 'AWS', icon: <SiAmazon />, color: 'text-yellow-600' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
    { name: 'MySQL', icon: <FaDatabase />, color: 'text-orange-500' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
    { name: 'Celery', icon: <SiCelery />, color: 'text-green-500' },
    { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
  ];

  return (
    <section id="skills" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto">
            Here are the technologies and tools I work with on a daily basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 