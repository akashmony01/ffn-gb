module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.vue'],  
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#495B89',
        secondery: '#03999E',
        prmLight: '#0f2d44',
        link: '#af9cef',
      },
      fontFamily: {
        // roboto
        rbtThin: ['roboto thin'],
        rbtLight: ['roboto light'],
        rbtRegular: ['roboto regular'],
        rbtMedium: ['roboto medium'],
        rbtBold: ['roboto bold'],
        rbtBlack: ['roboto black'],
        
        // playfair diasplay
        pfdRegular: ['playfair display regular'],
        pfdMedium: ['playfair display medium'],
        pfdSemiBold: ['playfair display semi bold'],
        pfdBold: ['playfair display bold'],
        pfdExtraBold: ['playfair display extra bold'],
        pfdBlack: ['playfair display black'],
      },
    },
    // container customization
    container: (theme) => ({
      center: true,
      padding: "1rem",
    }),
    fontSize: {
      'xxs': '12px',
      'xs': '13px',
      'sm': '14px',
      'base': '16px',
      'middle': '17px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '38px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '70px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
