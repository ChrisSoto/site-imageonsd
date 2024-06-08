/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,md,js}"],
  theme: {
    extend: {
      'mobile-bg': "url('/_assets/mobile_temp_2.webp')",
      'desktop-bg': "url('/_assets/basic-background.webp')",
    },
  },
  plugins: [],
}

