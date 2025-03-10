'use client';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiPaperClip } from 'react-icons/hi';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useState, useEffect, useCallback, useRef } from 'react';
import { Purple_Purse, Alegreya_Sans, Playfair_Display } from 'next/font/google';
import confetti from 'canvas-confetti';
import Image from 'next/image';
import Link from 'next/link';
import { useDarkMode } from '../hooks/useDarkMode';
import { HexColorPicker } from "react-colorful";

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
  const { isDark, toggleDark } = useDarkMode();
  const [audio] = useState(typeof window !== 'undefined' ? new Audio('/audio/pop.mp3') : null);
  const [bubbles, setBubbles] = useState(Array(36).fill(false));  // 9x4 grid
  const [bubbleSound] = useState(typeof window !== 'undefined' ? new Audio('/audio/bubble.mp3') : null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [borderColor, setBorderColor] = useState('#FFFFFF');
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      particleCount: 1000,
      spread: 250,
      origin: { y: 0.6 }
    });
  };

  const popBubble = useCallback((index: number) => {
    if (bubbleSound) {
      bubbleSound.currentTime = 0;
      bubbleSound.play();
    }
    setBubbles(prev => {
      const newBubbles = [...prev];
      newBubbles[index] = true;
      return newBubbles;
    });
  }, [bubbleSound]);

  // Function to convert hex to rgba with opacity
  const getBorderStyle = (color: string) => {
    // Remove the # if present
    const hex = color.replace('#', '');
    
    // Convert hex to rgb
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Return rgba with 85% opacity to match bg-opacity-85
    return `3px solid rgba(${r}, ${g}, ${b}, 0.85)`;
  };

  return (
    <main 
      className={`min-h-screen p-4 md:p-8 transition-all duration-300 bg-cover bg-center bg-no-repeat bg-fixed md:bg-auto`}
      style={{
        backgroundImage: `url(${isDark ? '/images/night.png' : '/images/day.png'})`,
      }}
    >
      {/* Make content relative to appear above overlay */}
      <div className="relative flex flex-col h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 flex-grow">
          {/* Left Column */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
            {/* Intro Card */}
            <div 
              className={`bg-sage-dark bg-opacity-85 rounded-3xl p-3 md:p-4 flex-grow`}
              style={{ border: getBorderStyle(borderColor) }}
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col items-center mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Image 
                      src="/images/profile-pic.png"
                      alt="Parker"
                      width={80}
                      height={80}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    />
                    <div className="text-white">
                      <h1 className={`text-lg md:text-xl mb-3 ${playfairDisplay.className}`}>
                        Hey! I'm <span className="font-semibold text-navy">Parker</span>,
                      </h1>
                      <p className={`text-base mb-4 ${playfairDisplay.className}`}>
                        <span className="font-semibold text-navy">full-stack</span> developer
                      </p>
                    </div>
                  </div>

                  <p className={`text-white text-sm md:text-base mb-4 text-center max-w-md ${playfairDisplay.className}`}>
                    Senior at <span className="font-semibold text-navy">Arizona State University</span>,{" "}
                    <span className="font-semibold text-navy">(Graduating May 2025)</span> actively seeking 
                    internships and full-time job opportunities. <span className="font-semibold text-navy">Always open to learning new skills!</span>
                  </p>
                </div>

                <div className="flex justify-center mb-2">
                  <Link href="/projects" className="bg-pink rounded-full p-3 md:p-4 hover:scale-110 transition-transform flex items-center gap-2 w-40 md:w-48 justify-center">
                    <span className="text-sm md:text-base text-navy">Portfolio</span>
                    <BsArrowRightCircle className="text-xl md:text-2xl text-navy" />
                  </Link>
                </div>

                <div className="flex flex-col items-center gap-1 my-2">
                  {/* Bubble Wrap */}
                  <div className="grid grid-cols-9 gap-1.5 md:gap-1 p-2 md:p-1 bg-sage-dark bg-opacity-85 rounded-xl">
                    {bubbles.map((popped, index) => (
                      <button
                        key={index}
                        onClick={() => popBubble(index)}
                        className={`
                          w-8 h-8 md:w-6 md:h-6 rounded-full transition-all duration-200
                          ${popped 
                            ? 'bg-gray-400 scale-90' 
                            : 'bg-sky hover:bg-sky-200 hover:scale-105 active:scale-90'
                          }
                        `}
                        disabled={popped}
                      />
                    ))}
                  </div>

                  {/* Reset Button */}
                  <button
                    onClick={() => setBubbles(Array(36).fill(false))}
                    className="text-sm md:text-xs bg-pink rounded-full px-4 py-1.5 md:px-3 md:py-1 hover:scale-105 transition-transform"
                  >
                    Reset Bubble Wrap
                  </button>
                </div>

                <div className="mt-2 flex justify-center items-center gap-4">
                  <h2 className={`text-4xl md:text-6xl font-light ${purplePurse.className}`}
                    style={{ color: borderColor }}
                  >
                    {time}
                  </h2>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setShowColorPicker(true)}
                      className="p-2 rounded-full hover:scale-110 transition-transform"
                    >
                      <div className="text-2xl md:text-3xl">🌈</div>
                    </button>
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
            <div 
              className={`bg-pink bg-opacity-85 rounded-3xl p-3 h-[60px] md:h-[70px] flex items-center justify-center`}
              style={{ border: getBorderStyle(borderColor) }}
            >
              <div className="flex justify-center items-center gap-8 md:gap-12 text-4xl md:text-5xl">
                <a 
                  href="https://github.com/parkerjohnson56" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:scale-110 transition-transform" 
                  style={{ color: borderColor }}
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/parkerjohnson53/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:scale-110 transition-transform" 
                  style={{ color: borderColor }}
                >
                  <FaLinkedinIn />
                </a>
                <a 
                  href="mailto:parkerjdev@gmail.com" 
                  className="hover:scale-110 transition-transform" 
                  style={{ color: borderColor }}
                >
                  <MdEmail />
                </a>
                <a 
                  href="/files/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:scale-110 transition-transform" 
                  style={{ color: borderColor }}
                >
                  <HiPaperClip />
                </a>
              </div>
            </div>

            {/* Footer bento box */}
            <div 
              className="hidden md:block bg-sage-dark bg-opacity-85 rounded-3xl p-3 text-center text-[10px] md:text-xs"
              style={{ border: getBorderStyle(borderColor) }}
            >
              © 2025 · Crafted with ❤️ using React by Parker Johnson.
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-5 flex flex-col gap-8 md:gap-6">
            {/* Skills Card */}
            <div 
              className={`bg-sky bg-opacity-85 rounded-2xl p-3`}
              style={{ border: getBorderStyle(borderColor) }}
            >
              <h2 className={`text-base md:text-lg mb-3 text-center font-bold text-navy ${alegreyaSans.className}`}>skills</h2>
              <div className="space-y-3">
                <div>
                  <h3 className={`text-base md:text-lg mb-1 text-left font-bold text-navy ${playfairDisplay.className}`}>frontend</h3>
                  <p className={`text-xs md:text-sm text-left ${playfairDisplay.className}`}>
                    HTML, CSS, Bootstrap, Tailwind, Next.js, React, SEO Optimization, Javascript, Typescript
                  </p>
                </div>
                <div>
                  <h3 className={`text-base md:text-lg mb-1 text-left font-bold text-navy ${playfairDisplay.className}`}>backend</h3>
                  <p className={`text-xs md:text-sm text-left ${playfairDisplay.className}`}>
                    Next.js, SQL (Currently expanding my back-end knowledge)
                  </p>
                </div>
                <div>
                  <h3 className={`text-base md:text-lg mb-1 text-left font-bold text-navy ${playfairDisplay.className}`}>tools</h3>
                  <p className={`text-xs md:text-sm text-left ${playfairDisplay.className}`}>
                    VS Code, Cursor, Github, Figma, Adobe Cloud, Chatgpt, Jira, Vercel, Dev Tools
                  </p>
                </div>
              </div>
            </div>

            {/* About Me Card */}
            <div 
              className="bg-sage bg-opacity-85 rounded-2xl p-3 flex-grow"
              style={{ border: getBorderStyle(borderColor) }}
            >
              <h2 className={`text-base md:text-lg mb-3 text-center font-bold text-navy ${alegreyaSans.className}`}>
                about me! :)
              </h2>
              <div className="relative">
                <div className="float-right ml-4 mb-2">
                  <Image 
                    src="/images/about-me.png"
                    alt="Parker"
                    width={192}
                    height={192}
                    className="w-28 h-28 md:w-48 md:h-48 rounded-2xl object-cover"
                  />
                </div>
                <div className="w-[85%] space-y-3">
                  <p className={`text-xs md:text-sm text-navy ${playfairDisplay.className}`}>
                    Hi again! I'm a Full-Stack Web Developer with a strong focus on front-end development, currently a senior at Arizona State University, graduating in May 2025.
                  </p>

                  <p className={`text-xs md:text-sm text-navy ${playfairDisplay.className}`}>
                    I'm passionate about problem-solving, debugging tricky code, and creating intuitive, user-friendly designs. Bringing ideas to life through clean, functional, and visually appealing web experiences is what excites me most.
                  </p>

                  <p className={`text-xs md:text-sm text-navy ${playfairDisplay.className}`}>
                    I thrive on learning new technologies, optimizing user experiences, and collaborating with others to build innovative solutions.
                  </p>

                  <p className={`text-xs md:text-sm text-navy ${playfairDisplay.className}`}>
                    Beyond coding, I love working on passion projects, reading, and staying active at the gym. I also share my space with three cats—Noodle, Spooky, and Toast—who make sure I never work alone.
                  </p>

                  <p className={`text-xs md:text-sm text-navy ${playfairDisplay.className}`}>
                    If you're interested in connecting, collaborating, or just chatting about web development, feel free to reach out!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3">
            {/* Work Experience Card */}
            <div 
              className="bg-pink bg-opacity-85 rounded-2xl p-3 h-full"
              style={{ border: getBorderStyle(borderColor) }}
            >
              <h2 className={`text-base md:text-lg mb-3 text-center font-bold text-navy ${alegreyaSans.className}`}>
                work experience
              </h2>
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
        <div 
          className="md:hidden bg-sage-dark bg-opacity-85 rounded-3xl p-3 text-center text-[10px] mt-8"
          style={{ border: getBorderStyle(borderColor) }}
        >
          © 2025 · Crafted with ❤️ using React by Parker Johnson.
        </div>

        {/* Add the color picker modal */}
        {showColorPicker && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowColorPicker(false)}
            />
            <div className="relative bg-white rounded-2xl p-4 flex flex-col items-center gap-4">
              <h3 className="text-navy font-medium">Choose a Color</h3>
              <HexColorPicker 
                color={borderColor} 
                onChange={setBorderColor}
              />
              <button
                onClick={() => setShowColorPicker(false)}
                className="mt-2 px-4 py-2 bg-navy text-white rounded-full hover:opacity-90"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 