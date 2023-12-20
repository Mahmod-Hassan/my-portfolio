/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        left: {
          '0%': {
            transform: 'translateX(-100px)',
          },
          '100%': {
            transform: 'translateX(0)',
          }
        },
        top : {
          '0%': {
            transform: 'translateY(-100px)',
          },
          '100%': {
            transform: 'translateY(0)',
          }
        },
        pulse: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }, // Add this line for the new keyframe rule
        }
      },
      animation: {
        left: 'left 2s 1',
        top: 'top 2s 1',
        pulse: 'pulse 5s 1',
      },
    },
  },
  plugins: [],
}

