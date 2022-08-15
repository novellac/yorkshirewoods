/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `app.{js,ts,vue}`,
    `components/**/*.{vue,js}`,
    'content/**/*.md',
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
  ],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      serif: ['Cardo', 'serif'],
    },
  },
}
