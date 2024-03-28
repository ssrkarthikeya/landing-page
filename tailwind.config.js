/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1700px',
      },
      height: {
        '128': '32rem',
      }
    },
    fontFamily: {
      'mono': ['IBM Plex Mono', 'monospace'],
    }
  },
  plugins: [],
}

