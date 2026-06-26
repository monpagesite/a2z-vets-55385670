/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5F4C',
        secondary: '#F4A261',
        accent: '#E76F51',
        background: '#FAF7F2',
        surface: '#FFFFFF',
        text: '#2C3E3B',
        muted: '#6B7F7A',
        border: '#E8E3D8',
      },
      fontFamily: {
        display: ['Nunito', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      lineHeight: {
        relaxed: '1.7',
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(45, 95, 76, 0.08)',
        'soft-lg': '0 20px 40px rgba(45, 95, 76, 0.12)',
      },
    },
  },
  plugins: [],
}
