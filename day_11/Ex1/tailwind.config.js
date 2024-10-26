/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140',
    },
    fontFamily: {
      dancing: 'var(--dancing)',
      lato: 'var(--lato)',
      poppins: 'var(--poppins)',
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      height: {
        0.75: '3px',
      }
    },
  },
  plugins: [],
}

