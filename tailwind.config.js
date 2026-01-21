module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#D32F2F', 
          foreground: '#ffffff'
        }
      },
      fontFamily: {
        sans: [
          'var(--font-roboto)',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        condensed: [
          'var(--font-roboto-condensed)',
          'sans-serif'
        ]
      },
    }
  },
  plugins: [],
};