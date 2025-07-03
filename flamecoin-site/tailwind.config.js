/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,mdx}'],
  theme: {
    extend: {
      colors: {
        flame: {
          500: 'var(--flame-500)',
        },
      },
    },
  },
  plugins: [],
};

