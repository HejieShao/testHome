/**
 *@Time : 2020/8/26 下午3:38
 *@Author : Hejie Shao
 */
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

const CodeENV = process.env.VUE_APP_CODE_ENV;
const cdnConfig = {
  js : [
    'https://lib.hapicdn.com/lib/vue.2.6.11.min.js',
    'https://lib.hapicdn.com/lib/vue-router.3.2.0.min.js'
  ],
  css: [],
  favicon: 'https://img.hapicdn.com/spe/hapi/favicon.ico'
};
let staticCND = "/";
if(CodeENV == "dev")
  staticCND = "https://dev-cdn.vvgamely.com/hepi-web-luck/dist/";
else if(CodeENV == "beta")
  staticCND = "https://beta-lcdn.vvgamely.com/hepi-web-luck/dist/";
else if(CodeENV == "production")
  staticCND = "https://lcdn.hapicdn.com/hepi-web-luck/"

module.exports = {
  publicPath: "/",
  productionSourceMap: CodeENV == "production" ? false : true,
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json', '.scss'],
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    config
      .externals({
        'vue':'Vue',
        'vue-router': 'vueRouter'
      })
    config
      .plugin('html')
        .tap(args => {
          args[0].cdnConfig = cdnConfig
          return args
        })
  }
}
