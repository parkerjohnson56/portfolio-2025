import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
  status: 'completed' | 'upcoming';
  isDark?: boolean;
}

export default function ProjectCard({ title, image, link, status, isDark }: ProjectCardProps) {
  return (
    <div className={`${isDark ? 'bg-dark-card' : 'bg-sage-light'} bg-opacity-85 rounded-xl md:rounded-2xl p-4 md:p-5`}>
      <div className="relative aspect-[16/10] mb-4 md:mb-5 rounded-lg md:rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className={`${isDark ? 'text-white' : 'text-navy'} text-lg md:text-xl`}>{title}</h3>
        <Link 
          href={link}
          className={`${isDark ? 'bg-black text-white' : 'bg-white text-navy'} rounded-full px-4 md:px-5 py-1.5 md:py-2 text-sm md:text-base hover:scale-105 transition-transform`}
        >
          see project
        </Link>
      </div>
    </div>
  );
} 