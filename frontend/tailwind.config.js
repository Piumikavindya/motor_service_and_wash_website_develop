module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
      './assets/js/main.js'
    ]
  },
  theme: {
    extend: {
      colors: {
        'customblue': '#06b6d4', // Example custom blue color
      },
      inset: {
        '100': '100%',
      }
    },
  },
  variants: {},
  plugins: [],
}
