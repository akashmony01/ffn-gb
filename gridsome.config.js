// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss")

module.exports = {
    siteName: 'Tiny Rockets',
    plugins: [
        {
            use: 'gridsome-plugin-seo'
        },
        {
            use: 'gridsome-source-graphql',
            options: {
                url: 'https://tinyrocketswebsites.eu.pythonanywhere.com/api',
                fieldName: 'trGraphQl',
            }

        },
        {
            use: '@capsia/gridsome-plugin-local-image',
            options: {
                'typeName': 'siteInfo',
                'sourceField': 'siteImage',
                'targetPath': './src/assets/remoteImages'
            }
        },
    ],
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
