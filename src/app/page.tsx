'use client';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiPaperClip } from 'react-icons/hi';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { Purple_Purse, Alegreya_Sans, Playfair_Display } from 'next/font/google';
import confetti from 'canvas-confetti';

const purplePurse = Purple_Purse({
  weight: '400',
  subsets: ['latin'],
});

const alegreyaSans = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
});

export default function Home() {
  const [time, setTime] = useState<string>('');
  const [isDark, setIsDark] = useState(false);
  const [audio] = useState(typeof window !== 'undefined' ? new Audio('/audio/pop.mp3') : null);

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

  const triggerConfetti = () => {
    // Play sound
    if (audio) {
      audio.currentTime = 0; // Reset audio to start
      audio.play();
    }
    
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <main 
      className={`min-h-screen p-4 md:p-8 transition-all duration-300`}
      style={{
        backgroundImage: `url(${isDark ? '/images/night.png' : '/images/day.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',  // This helps with scrolling
        '@media (max-width: 768px)': {
          backgroundSize: 'auto 100%',  // Height 100%, width auto on mobile
          backgroundPosition: 'center top'
        }
      }}
    >
      {/* Add a semi-transparent overlay for better readability */}
      <div className={`absolute inset-0 ${isDark ? 'bg-black/25' : 'bg-white/25'} transition-colors duration-300`} />
      {/* Make content relative to appear above overlay */}
      <div className="relative flex flex-col h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 flex-grow">
          {/* Left Column */}
          <div className="md:col-span-4 flex flex-col gap-8 md:gap-6">
            {/* Intro Card */}
            <div className="bg-sage-dark bg-opacity-85 rounded-3xl p-4 md:p-5 flex-grow">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src="/images/profile-pic.png"
                    alt="Parker"
                    className="w-10 md:w-12 h-10 md:h-12 rounded-full"
                  />
                  <div>
                    <h1 className="text-sm md:text-base">Hey! I'm Parker,</h1>
                    <p className="text-xs">full-stack developer</p>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm mb-3">
                  Senior at Arizona State University, 
                  <span className="font-medium">(Graduating May 2025)</span> actively seeking 
                  internship and full-time job opportunities.
                </p>

                <div className="flex justify-center mb-4">
                  <button className="bg-pink rounded-full p-3 md:p-4 hover:scale-110 transition-transform flex items-center gap-2">
                    <span className="text-sm md:text-base text-navy">Portfolio</span>
                    <BsArrowRightCircle className="text-xl md:text-2xl text-navy" />
                  </button>
                </div>

                <div className="mt-auto flex justify-center items-center gap-4">
                  <h2 className={`text-4xl md:text-6xl font-light ${isDark ? 'text-dark-text' : 'text-primary'} ${purplePurse.className}`}>
                    {time}
                  </h2>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setIsDark(!isDark)} 
                      className="p-2 rounded-full hover:scale-110 transition-transform"
                    >
                      {isDark ? (
                        <div className="text-yellow-400 text-2xl md:text-3xl">🌞</div>
                      ) : (
                        <div className="text-gray-600 text-2xl md:text-3xl">🌙</div>
                      )}
                    </button>
                    <button 
                      onClick={triggerConfetti}
                      className="p-2 rounded-full hover:scale-110 transition-transform"
                    >
                      <div className="text-2xl md:text-3xl">🎉</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-pink bg-opacity-85 rounded-3xl p-3 h-[60px] md:h-[70px] flex items-center justify-center">
              <div className="flex justify-center items-center gap-8 md:gap-12 text-4xl md:text-5xl">
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
            <div className="hidden md:block bg-sage-dark bg-opacity-85 rounded-3xl p-3 text-center text-[10px] md:text-xs">
              © 2025 · Crafted with ❤️ using React by Parker Johnson.
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-5 flex flex-col gap-8 md:gap-6">
            {/* Skills Card */}
            <div className="bg-sky bg-opacity-85 rounded-2xl p-3">
              <h2 className={`text-base md:text-lg mb-3 text-center font-bold text-navy ${alegreyaSans.className}`}>skills</h2>
              <div className="space-y-3">
                <div>
                  <h3 className={`text-lg md:text-xl mb-1 text-left font-bold text-navy ${alegreyaSans.className}`}>frontend</h3>
                  <p className={`text-xs md:text-sm text-left ${playfairDisplay.className}`}>
                    HTML, CSS, Bootstrap, Tailwind, Next.js, React, SEO Optimization, Javascript, Typescript
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg md:text-xl mb-1 text-left font-bold text-navy ${alegreyaSans.className}`}>backend</h3>
                  <p className={`text-xs md:text-sm text-left ${playfairDisplay.className}`}>
                    Next.js, SQL (Currently expanding my back-end knowledge)
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg md:text-xl mb-1 text-left font-bold text-navy ${alegreyaSans.className}`}>tools</h3>
                  <p className={`text-xs md:text-sm text-left ${playfairDisplay.className}`}>
                    VS Code, Cursor, Github, Figma, Adobe Cloud, Chatgpt, Jira, Vercel, Dev Tools
                  </p>
                </div>
              </div>
            </div>

            {/* About Me Card */}
            <div className="bg-sage bg-opacity-85 rounded-2xl p-3 flex-grow">
              <h2 className={`text-base md:text-lg mb-2 text-center font-bold text-navy ${alegreyaSans.className}`}>about me! :)</h2>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1">
                  <p className={`text-xs md:text-sm mb-2 text-navy ${playfairDisplay.className}`}>
                    Hi again! I'm a Full-Stack Web Developer with a strong focus on front-end development, currently a senior at Arizona State University, graduating in May 2025. I'm passionate about problem-solving, debugging tricky code, and creating intuitive, user-friendly designs. Bringing ideas to life through clean, functional, and visually appealing web experiences is what excites me most. I thrive on learning new technologies, optimizing user experiences, and collaborating with others to build innovative solutions.
                  </p>
                  <p className={`text-xs md:text-sm text-navy ${playfairDisplay.className}`}>
                    Beyond coding, I love working on passion projects, reading, and staying active at the gym. I also share my space with three cats—Noodle, Spooky, and Toast—who make sure I never work alone. If you're interested in connecting, collaborating, or just chatting about web development, feel free to reach out!
                  </p>
                </div>
                <img 
                  src="/images/about-me.png"
                  alt="Parker"
                  className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3">
            {/* Work Experience Card */}
            <div className="bg-pink bg-opacity-85 rounded-2xl p-3 h-full">
              <h2 className={`text-base md:text-lg mb-3 text-center font-bold text-navy ${alegreyaSans.className}`}>work experience</h2>
              <div className="space-y-3">
                {/* First Experience - more transparent at 75% */}
                <div className="bg-sage-dark bg-opacity-75 rounded-xl p-3">
                  <p className={`text-navy text-xs mb-1 ${playfairDisplay.className}`}>
                    December 2024 - Present
                  </p>
                  <h3 className={`text-sm font-bold text-navy mb-1 ${playfairDisplay.className}`}>
                    Front-End Developer at Domain Driven Solutions
                  </h3>
                  <p className="text-xs text-navy leading-snug">
                    As a Front-End Developer Intern at Domain Driven Solutions, I design and develop responsive websites for clients using ShadCN, React, Next.js, and Tailwind, collaborating with my team and managing tasks in Jira. Additionally, I create brand design stories, crafting pages that showcase typography, brand meaning, color palettes, and the rationale behind design choices.
                  </p>
                </div>

                {/* Second Experience - more transparent at 75% */}
                <div className="bg-sky bg-opacity-75 rounded-xl p-3">
                  <p className={`text-navy text-xs mb-1 ${playfairDisplay.className}`}>
                    January 2024 - December 2024
                  </p>
                  <h3 className={`text-sm font-bold text-navy mb-1 ${playfairDisplay.className}`}>
                    Full-Stack Intern at Global Tech
                  </h3>
                  <p className="text-xs text-navy leading-snug">
                    During my internship at Global Tech, I gained expertise in HTML5, CSS, and JavaScript, earning certifications in all three, along with Bootstrap and global communications. This experience strengthened my front-end development skills and my ability to communicate effectively in a professional, global environment.
                  </p>
                </div>

                {/* Third Experience - more transparent at 75% */}
                <div className="bg-sage-dark bg-opacity-75 rounded-xl p-3">
                  <p className={`text-navy text-xs mb-1 ${playfairDisplay.className}`}>
                    July 2018 - Present
                  </p>
                  <h3 className={`text-sm font-bold text-navy mb-1 ${playfairDisplay.className}`}>
                    Manager at Starbucks
                  </h3>
                  <p className="text-xs text-navy leading-snug">
                    As a Shift Supervisor at Starbucks, I manage daily operations by leading the floor, optimizing drive-thru efficiency, upselling products, and ensuring customer satisfaction. My responsibilities also include inventory management, cash handling, and coordinating team performance to maintain a smooth and high-energy work environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden bg-sage-dark bg-opacity-85 rounded-3xl p-3 text-center text-[10px] mt-8">
          © 2025 · Crafted with ❤️ using React by Parker Johnson.
        </div>
      </div>
    </main>
  );
} 