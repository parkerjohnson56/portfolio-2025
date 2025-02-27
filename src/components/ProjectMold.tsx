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
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-white hover:scale-105 transition-transform"
          >
            <BsArrowLeftCircle className="text-xl md:text-2xl" />
            <span>Back</span>
          </Link>

          <button 
            onClick={toggleDark} 
            className="p-2 rounded-full hover:scale-110 transition-transform"
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

          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-navy">{title}</h1>
          <p className="text-sm md:text-base mb-8 text-navy">{description}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-3 text-navy">Background</h2>
              <div className="bg-white bg-opacity-50 rounded-lg p-4">
                <p className="text-sm md:text-base text-navy">{background}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-navy">Problem</h2>
              <div className="bg-white bg-opacity-50 rounded-lg p-4">
                <p className="text-sm md:text-base text-navy">{problem}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-navy">Process</h2>
              <div className="bg-white bg-opacity-50 rounded-lg p-4">
                <p className="text-sm md:text-base text-navy">{process}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-navy">Results</h2>
              <div className="bg-white bg-opacity-50 rounded-lg p-4">
                <p className="text-sm md:text-base text-navy">{results}</p>
              </div>
            </section>
          </div>

          <div className="mt-8 flex justify-center">
            <Link 
              href={link}
              className={`${isDark ? 'bg-black text-white' : 'bg-white text-navy'} rounded-full px-6 py-2 text-sm md:text-base hover:scale-105 transition-transform`}
            >
              see project
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
  