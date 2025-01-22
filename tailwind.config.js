/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      colors: {
        'bg-custom-one': '#474645',
        'bg-custom-two': '#4f4f4f',
        'color-l': '#FFA500',
        'color-a': '#FFFF00',
        'color-vl': '#32CD32',
      },
    },
  },
  plugins: [],
}

