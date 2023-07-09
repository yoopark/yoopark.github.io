/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/features/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      keyframes: {
        left: {
          from: {
            opacity: 0,
            transform: 'translateX(-10px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          }
        },
        top: {
          from: {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          }
        }
      },
      animation: {
        left: 'left 0.3s ease-out',
        top: 'top 0.3s ease-out',
      }
    },
  },
  plugins: [],
};
