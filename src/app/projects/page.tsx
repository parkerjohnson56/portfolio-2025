'use client';

import { BsArrowLeftCircle } from 'react-icons/bs';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { useState } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';

interface Project {
  title: string;
  image: string;
  link: string;
  status: 'completed' | 'upcoming';
}

export default function Projects() {
  const [sortBy, setSortBy] = useState('all');
  const { isDark, toggleDark } = useDarkMode();

  const projects: Project[] = [
    {
      title: "chef blog",
      image: "/images/chef-website.png",
      link: "/projects/chef-website",
      status: "completed" as const
    },

    {
      title: "card matching game",
      image: "/images/card-game.png",
      link: "/projects/card-game",
      status: "completed" as const
    },
    {
      title: "air b&b search",
      image: "/images/air-bnb.png",
      link: "/projects/air-bnb",
      status: "completed" as const
    },
    {
      title: "vet clinic",
      image: "/images/velci-pet.png",
      link: "/projects/velci-pet",
      status: "completed" as const
    },
  
    {
      title: "event planner",
      image: "/images/dreamscape-events.png",
      link: "/projects/dreamscape-events",
      status: "completed" as const
    },
    {
      title: "paul hollis",
      image: "/images/placeholder.png",
      link: "#",
      status: "upcoming" as const
    },
    {
      title: "Coming Soon",
      image: "/images/placeholder.png",
      link: "#",
      status: "upcoming" as const
    },
    {
      title: "Coming Soon",
      image: "/images/placeholder.png",
      link: "#",
      status: "upcoming" as const
    }
  ];

  return (
    <main 
      className={`min-h-screen p-4 md:p-8 transition-all duration-300 bg-cover bg-center bg-no-repeat bg-fixed md:bg-auto`}
      style={{
        backgroundImage: `url(${isDark ? '/images/night.png' : '/images/day.png'})`,
      }}
    >
      <div className="relative">
        <div className="max-w-5xl mx-auto px-2 md:px-0">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-white hover:scale-105 transition-transform"
            >
              <BsArrowLeftCircle className="text-xl md:text-2xl" />
              <span className="text-sm md:text-base">Back</span>
            </Link>

            <button 
              onClick={toggleDark} 
              className="p-2 rounded-full hover:scale-110 transition-transform self-end md:self-auto"
            >
              {isDark ? (
                <div className="text-yellow-400 text-2xl md:text-3xl">🌞</div>
              ) : (
                <div className="text-gray-600 text-2xl md:text-3xl">🌙</div>
              )}
            </button>
          </div>

          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl text-white mb-4 md:mb-8">projects!</h1>

            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-auto bg-white rounded-full px-4 py-2 text-sm md:text-base text-navy"
            >
              <option value="all">All Projects</option>
              <option value="completed">Completed</option>
              <option value="upcoming">Coming Soon</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto pb-8 md:pb-12">
            {projects
              .filter(project => sortBy === 'all' || project.status === sortBy)
              .map((project, index) => (
                <ProjectCard key={index} {...project} isDark={isDark} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
} 