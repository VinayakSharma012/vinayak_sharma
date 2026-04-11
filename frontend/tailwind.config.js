/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Surface Hierarchy - "The Neon Archive" Design System
        'surface': '#080c25',
        'surface-container-low': '#0c112d',
        'surface-container-lowest': '#050810',
        'surface-container': '#10153d',
        'surface-container-highest': '#1d2347',
        'surface-variant': '#2a2f4a',
        'on-surface': '#e2e3ff',
        'outline-variant': '#49517e',

        // Primary & Secondary Accents (Electric Moments)
        'primary': '#79e3ff',
        'on-primary': '#001e2f',
        'secondary': '#c57eff',
        'on-secondary': '#2a0c47',
        'tertiary': '#ffe792',
        'on-tertiary': '#332600',

        // Legacy Support (will phase out)
        'dark-brown': '#0f0c0a',
        'very-dark-brown': '#1a1410',
        'primary-brown': '#2d201a',
        'medium-brown': '#3d2817',
        'cream': '#f5e6d3',
        'tan': '#d4a574',
        'copper': '#c68642',
        'off-white': '#f8f6f3',
        'card-dark': '#3d2817',
        'card-medium': '#4a3428',
        'card-light': '#5a4535',
      },
      fontFamily: {
        'headline': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'code': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title-lg': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'label-sm': ['0.75rem', { letterSpacing: '0.1em' }],
        'label-md': ['0.875rem', { letterSpacing: '0.1em' }],
      },
      boxShadow: {
        'primary-glow': '0 0 24px rgba(121, 227, 255, 0.3)',
        'primary-glow-lg': '0 0 48px rgba(121, 227, 255, 0.4)',
        'secondary-glow': '0 0 24px rgba(197, 126, 255, 0.3)',
        'neon-hum': '0 0 20px rgba(121, 227, 255, 0.5), inset 0 0 20px rgba(121, 227, 255, 0.1)',
        'dark-glow': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'dark-glow-lg': '0 12px 32px rgba(0, 0, 0, 0.6)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-light': '10px',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { 'box-shadow': '0 0 24px rgba(121, 227, 255, 0.3)' },
          '50%': { 'box-shadow': '0 0 48px rgba(121, 227, 255, 0.5)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
