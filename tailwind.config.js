/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [],
  safelist: [
    {
      pattern: /text-quality-(0|1|2|3|4|5|6|7)/,
    },
    {
      pattern: /text-color-(\d+)/,
    }
  ]
}

