// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss")

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: 'gridsome-source-graphql',
    options: {
      url: 'https://sparkling-flower-3261.prblm.co/graphql',
      fieldName: 'wpGraphQl',
      typeName: 'wpGraphQl'
    }

  }],
    css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  }
}
