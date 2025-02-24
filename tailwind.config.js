/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FAEDCD',    // main background
        sage: {
          light: '#E9EDC9',    // footer bento box
          DEFAULT: '#D8E2DC',  // about me section
          dark: '#CCD5AE',     // intro card
        },
        sky: '#BDE0FE',        // skills section
        pink: '#FDCCD9',       // social links, work experience
        navy: '#16404D',       // text color for headings
        
        // Dark mode colors
        dark: {
          primary: '#1C1C1C',
          card: '#2A2A2A',
          text: '#FFFFFF',
        }
      },
    },
  },
  plugins: [],
}; 