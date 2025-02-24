'use client';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiPaperClip } from 'react-icons/hi';
import { BsArrowClockwise, BsArrowRightCircle } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { Purple_Purse } from 'next/font/google';
import Image from 'next/image';

const purplePurse = Purple_Purse({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Function to format time as HH:MMam/pm
    const formatTime = () => {
      const now = new Date();
      return now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).toLowerCase();
    };

    // Set initial time
    setTime(formatTime());

    // Update time every minute
    const interval = setInterval(() => {
      setTime(formatTime());
    }, 60000); // Update every minute (60000ms)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen p-6 bg-primary flex flex-col">
      <div className="grid grid-cols-12 gap-6 flex-grow">
        {/* Left Column - 4 cols */}
        <div className="col-span-4 flex flex-col gap-6">
          {/* Intro Card */}
          <div className="bg-sage-dark rounded-3xl p-6 flex-grow">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <Image 
                  src="/images/profile-pic.jpg"
                  alt="Parker"
                  width={64}
                  height={64}
                  className="rounded-full"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                  }}
                />
                <div>
                  <h1 className="text-xl">Hey! I'm Parker,</h1>
                  <p>full-stack developer</p>
                </div>
              </div>
              
              <p className="mb-4">
                Senior at Arizona State University, 
                <span className="font-medium">(Graduating May 2025)</span> actively seeking 
                internship and full-time job opportunities.
              </p>

              <div className="flex justify-center mb-4">
                <button className="bg-pink rounded-full p-4 hover:scale-110 transition-transform flex items-center gap-2">
                  <span className="text-navy">Portfolio</span>
                  <BsArrowRightCircle className="text-2xl text-navy" />
                </button>
              </div>

              <div className="mt-auto flex justify-center items-center">
                <h2 className={`text-6xl font-light text-primary ${purplePurse.className}`}>{time}</h2>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="bg-pink rounded-3xl p-4 h-[80px] flex items-center justify-center">
            <div className="flex justify-center items-center gap-12 text-5xl">
              <a href="#" className="text-white hover:scale-110 transition-transform">
                <FaGithub />
              </a>
              <a href="#" className="text-white hover:scale-110 transition-transform">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-white hover:scale-110 transition-transform">
                <MdEmail />
              </a>
              <a href="#" className="text-white hover:scale-110 transition-transform">
                <HiPaperClip />
              </a>
            </div>
          </div>

          {/* Footer bento box */}
          <div className="bg-sage-light rounded-3xl p-3 text-center text-xs">
            © 2025 · Crafted with ❤️ using Bootstrap by Parker Johnson.
          </div>
        </div>

        {/* Middle Column - 5 cols */}
        <div className="col-span-5 flex flex-col gap-6">
          {/* Skills Card */}
          <div className="bg-sky rounded-3xl p-6 flex-grow-0">
            <h2 className="text-2xl mb-4">skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl mb-1">frontend</h3>
                <p className="text-sm">HTML, CSS, Bootstrap, Tailwind, Next.js, React, SEO Optimization, Javascript, Typescript</p>
              </div>
              <div>
                <h3 className="text-xl mb-1">backend</h3>
                <p className="text-sm">Next.js, SQL (Currently expanding my back-end knowledge)</p>
              </div>
              <div>
                <h3 className="text-xl mb-1">tools</h3>
                <p className="text-sm">VS Code, Cursor, Github, Figma, Adobe Cloud, Chatgpt, Jira, Vercel, Dev Tools</p>
              </div>
            </div>
          </div>

          {/* About Me Card */}
          <div className="bg-sage rounded-3xl p-6 flex-grow">
            <h2 className="text-2xl mb-4">about me! :)</h2>
            <div className="flex gap-6">
              <div className="flex-1">
                <p className="text-sm mb-4">
                  Hi again! I'm a Full-Stack Web Developer with a strong focus on front-end development, currently a senior at Arizona State University, graduating in May 2025. I'm passionate about problem-solving, debugging tricky code, and creating intuitive, user-friendly designs.
                </p>
                <p className="text-sm">
                  Beyond coding, I love working on passion projects, reading, and staying active at the gym. I also share my space with three cats—Noodle, Spooky, and Toast—who make sure I never work alone.
                </p>
              </div>
              <Image 
                src="/images/profile-pic.png"
                alt="Parker"
                width={160}
                height={160}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column - 3 cols */}
        <div className="col-span-3">
          {/* Work Experience Card */}
          <div className="bg-pink rounded-3xl p-6 h-full">
            <h2 className="text-2xl mb-4">work experience</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">December 2024 - Present</p>
                <h3 className="text-base font-medium mb-1">Front-End Developer at Domain Driven Solutions</h3>
                <p className="text-sm">As a Front-End Developer Intern at Domain Driven Solutions, I design and develop responsive websites for clients using ShaftX, React, Next.js, and Tailwind.</p>
              </div>

              <div>
                <p className="text-sm font-medium">January 2024 - December 2024</p>
                <h3 className="text-base font-medium mb-1">Full-Stack Intern at Global Tech</h3>
                <p className="text-sm">During my internship at Global Tech, I gained expertise in HTML5, CSS, and JavaScript, earning certifications in all three.</p>
              </div>

              <div>
                <p className="text-sm font-medium">July 2018 - Present</p>
                <h3 className="text-base font-medium mb-1">Manager at Starbucks</h3>
                <p className="text-sm">As a Shift Supervisor at Starbucks, I manage daily operations by leading the floor and optimizing drive-thru efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 