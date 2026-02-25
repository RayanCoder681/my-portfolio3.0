/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        neural: {
          50:  '#e8ffff',
          100: '#c0fdff',
          200: '#80f9ff',
          300: '#00EFFF',
          400: '#00D4E8',
          500: '#00B5C5',
          600: '#009099',
          700: '#006E75',
          800: '#004D52',
          900: '#002D30',
        },
        plasma: {
          300: '#FF9F6B',
          400: '#FF7A3D',
          500: '#FF5A0A',
          600: '#E04500',
        },
        void: {
          50:  '#E8EDF2',
          100: '#C8D2DC',
          200: '#8A9BB0',
          300: '#546478',
          400: '#2A3545',
          500: '#151E2B',
          600: '#0D1520',
          700: '#080E17',
          800: '#04080E',
          900: '#020407',
        }
      },
      backgroundImage: {
        'neural-grid': `
          linear-gradient(rgba(0, 239, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 239, 255, 0.03) 1px, transparent 1px)
        `,
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #00EFFF 0deg, #FF5A0A 120deg, #00EFFF 360deg)',
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
        'grid-lg': '80px 80px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'neural-flow': 'neuralFlow 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 239, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 239, 255, 0.8), 0 0 40px rgba(0, 239, 255, 0.3)' },
        },
        neuralFlow: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      boxShadow: {
        'neural': '0 0 20px rgba(0, 239, 255, 0.3)',
        'neural-lg': '0 0 40px rgba(0, 239, 255, 0.4), 0 0 80px rgba(0, 239, 255, 0.1)',
        'plasma': '0 0 20px rgba(255, 90, 10, 0.4)',
        'inner-neural': 'inset 0 0 30px rgba(0, 239, 255, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        neuraldark: {
          "primary": "#00EFFF",
          "primary-content": "#020407",
          "secondary": "#FF5A0A",
          "secondary-content": "#ffffff",
          "accent": "#7C3AED",
          "accent-content": "#ffffff",
          "neutral": "#151E2B",
          "neutral-content": "#E8EDF2",
          "base-100": "#080E17",
          "base-200": "#0D1520",
          "base-300": "#151E2B",
          "base-content": "#C8D2DC",
          "info": "#00B5C5",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
      },
    ],
    darkTheme: "neuraldark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}
