import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FBF7EE',
        ink: '#1E1A16',
        'ink-muted': 'rgba(30,26,22,0.6)',
        amber: {
          DEFAULT: '#D97742',
          light: '#E89868',
          deep: '#B05A28',
          subtle: 'rgba(217,119,66,0.08)',
        },
        sage: {
          DEFAULT: '#5E7C6E',
          light: '#EFF4F1',
        },
        dusk: '#2C2722',
        hairline: '#E8DFD2',
        'sky-cat': '#4A9BC7',
        'plum-cat': '#8B6BA8',
        'ochre-cat': '#C49A2E',
        'clay-cat': '#B85C47',
      },
      fontFamily: {
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '8px',
        lg: '12px',
        xl: '20px',
        full: '9999px',
      },
      boxShadow: {
        '1': '0 2px 8px rgba(30,26,22,0.08)',
        '2': '0 8px 32px rgba(30,26,22,0.12)',
        'amber': '0 8px 32px rgba(217,119,66,0.25)',
        'amber-lg': '0 16px 48px rgba(217,119,66,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
