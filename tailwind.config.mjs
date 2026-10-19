/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Luxury organic palette
        sand: {
          DEFAULT: '#D9D28B', // warm_sand_gold
          light: '#FAF9F5',
          50: '#FAF9F5',
          100: '#F6F4EB',
          200: '#EDE9D1',
          300: '#D9D28B',
          400: '#C8BE72',
          500: '#B5A958',
        },
        sage: {
          DEFAULT: '#B2BD7E', // soft_sage_green
          50: '#F7F8F4',
          100: '#EFF2E5',
          200: '#DFE5CB',
          300: '#CAD3A5',
          400: '#B2BD7E',
          500: '#9BA764',
          600: '#84904F',
        },
        olive: {
          DEFAULT: '#8E9162', // muted_olive
          50: '#F8F9F5',
          100: '#EDEEE5',
          200: '#DADDCB',
          300: '#C2C6A9',
          400: '#A8AC83',
          500: '#8E9162',
          600: '#73764E',
          700: '#585A3B',
        },
        moss: {
          DEFAULT: '#6A795D', // deep_forest_moss
          50: '#F5F7F4',
          100: '#EAECE7',
          200: '#D4D8CF',
          300: '#B4BCAC',
          400: '#8F9B85',
          500: '#6A795D',
          600: '#54614A',
          700: '#404A37',
          800: '#2C3426',
        },
        dark: {
          bg: '#111310', // dark_background
          surface: '#1A1E18', // dark_surface
          card: '#1F241D',
          border: '#2C342A',
          hover: '#262D24',
        },
        light: {
          bg: '#FAF9F5', // light_background
          surface: '#FFFFFF',
          card: '#FFFFFF',
          border: '#E7E5D8',
          borderSubtle: '#EDEAE0',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'luxury-light': '0 4px 20px -2px rgba(106, 121, 93, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'luxury-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(217, 210, 139, 0.1)',
        'glow-sand': '0 0 25px -4px rgba(217, 210, 139, 0.25)',
        'glow-sage': '0 0 25px -4px rgba(178, 189, 126, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
