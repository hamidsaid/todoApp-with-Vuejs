const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//instead of http://localhost:5000/tasks/...
//we can just put /api/tasks
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}