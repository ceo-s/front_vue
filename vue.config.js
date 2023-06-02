const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: 8080, // CHANGE YOUR PORT HERE!
  //   https: true,
  //   // hotOnly: false,
  // },
  css: {
    loaderOptions: {
      sass: {
        additionalData:
          '@import "@/components/shared/styles/variables.scss"; @import "@/components/shared/styles/mixins.scss";',
      },
    },
  },
});
