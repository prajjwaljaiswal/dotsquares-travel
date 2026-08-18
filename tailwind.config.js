/** @type {import('tailwindcss').Config} */
// Placeholder premium-travel design tokens.
// These values are temporary and should be replaced with the final
// brand color palette, typography, and spacing once brand assets are delivered.
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    // Mobile-first breakpoints (min-width based, Tailwind default convention)
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        // Placeholder premium-travel brand palette
        brand: {
          primary: '#0B3D91',   // deep ocean blue - primary brand color
          secondary: '#C9A24B', // warm gold - premium accent
          tertiary: '#1F6F5C',  // deep teal - secondary accent
          light: '#F7F5F0',     // sand/off-white background
          dark: '#0A1F2B',      // near-black navy for text/backgrounds
        },
        neutral: {
          50: '#F9F9F7',
          100: '#F1F0EC',
          200: '#E3E1D9',
          300: '#C9C6BA',
          400: '#A6A296',
          500: '#837E70',
          600: '#645F52',
          700: '#4A4639',
          800: '#302D24',
          900: '#1A1812',
        },
        feedback: {
          success: '#2E7D32',
          warning: '#ED6C02',
          error: '#C62828',
          info: '#0288D1',
        },
      },
      fontFamily: {
        // Placeholder typography stack - to be replaced with final brand fonts
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        // Placeholder spacing scale extension beyond Tailwind defaults
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
      },
      borderRadius: {
        brand: '0.625rem',
      },
    },
  },
  plugins: [],
};
