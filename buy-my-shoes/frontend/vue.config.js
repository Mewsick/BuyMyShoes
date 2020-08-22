module.exports = {
    pwa: {
        manifestOptions: {
            background_color: '#b9d8c2'
        },
        name: "Buy My Shoes",
        themeColor: '#8aa1b1',
        workboxOptions: {
            runtimeCaching: [
                {
                    handler: 'NetworkFirst',
                    urlPattern: 'http://localhost:3000/posts',
                    urlPattern: 'http://localhost:3000/createpost'
                }
            ]
        }
    },

    // http://localhost:8080/api/posts
    // hamnar på
    // http://localhost:3000/posts
    // och vi slipper CORS-problem
    devServer: {
        proxy: {
            '/api': {
                pathRewrite: { '^/api': '' },
                target: 'http://localhost:3000'
            }
        }
    }
}