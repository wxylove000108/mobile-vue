const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

const Components = require('unplugin-vue-components/webpack')
const {
    VarletUIResolver
} = require('unplugin-vue-components/resolvers')

module.exports = {
    configureWebpack() {
        return {
            resolve: {
                alias: {
                    '@': resolve('src'),
                },
            },
            plugins: [
                Components({
                    resolvers: [VarletUIResolver()]
                })
            ]
        }
    },
}