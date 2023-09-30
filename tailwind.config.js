/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Lato',
      body: 'DM Sans',
    },
    container: {
      // padding: {
      //   DEFAULT: '1rem',
      //   lg: '3rem',
      // },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/a.jpg')",
        'footer-texture': "url('/src/assets/ball.gif')",
      },
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: '#E3202A',
        secondary: '#AEC3B0',
        tertiary: '#AEC3B0',
        accent: {
          DEFAULT: '#AEC3B0',
          hover: '#AEC3B0',
        },
        paragraph: '#AEC3B0',
      },
    },
  },
  plugins: [],
}

