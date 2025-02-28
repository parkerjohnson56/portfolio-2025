'use client';

import { BsArrowLeftCircle } from 'react-icons/bs';
import Link from 'next/link';
import { useDarkMode } from '@/hooks/useDarkMode';
import Image from 'next/image';

interface ProjectMoldProps {
  title: string;
  description: string;
  image: string;
  link: string;
  background: string;
  problem: string;
  process: string;
  results: string;
}

export default function ProjectMold({ 
  title, 
  description,
  image,
  link,
  background, 
  problem, 
  process, 
  results 
}: ProjectMoldProps) {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <main 
      className={`min-h-screen p-4 md:p-8 transition-all duration-300 bg-cover bg-center bg-no-repeat bg-fixed md:bg-auto`}
      style={{
        backgroundImage: `url(${isDark ? '/images/night.png' : '/images/day.png'})`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
          <Link 
            href="/projects"
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

        <div className={`${isDark ? 'bg-dark-card' : 'bg-sage-light'} bg-opacity-85 rounded-2xl p-6 md:p-8`}>
          <div className="relative aspect-[16/9] mb-6 rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className={`space-y-6 md:space-y-8 ${isDark ? 'text-white' : 'text-navy'}`}>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
              <p className="text-lg md:text-xl">{description}</p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Background</h2>
              <p className="text-base md:text-lg">{background}</p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Problem</h2>
              <p className="text-base md:text-lg">{problem}</p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Process</h2>
              <p className="text-base md:text-lg">{process}</p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Results</h2>
              <p className="text-base md:text-lg">{results}</p>
            </div>

            <div className="pt-4 flex justify-center">
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-6 py-3 rounded-full ${isDark ? 'bg-white text-navy' : 'bg-navy text-white'} font-semibold hover:scale-105 transition-transform`}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
  