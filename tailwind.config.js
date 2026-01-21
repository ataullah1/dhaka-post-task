module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        accent: '#F9B200', 
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'Helvetica', 'Arial', 'sans-serif'],
        condensed: ['var(--font-roboto-condensed)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};