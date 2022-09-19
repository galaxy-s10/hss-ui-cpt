const postcssPresetEnv = require('postcss-preset-env');
const { chalkINFO, emoji } = require('./build-tools/utils/chalkTip');

console.log(chalkINFO('读取postcss.config.js'), emoji.get('hourglass'));
module.exports = {
  plugins: [
    // 'autoprefixer',  // postcss-preset-env包含了autoprefixer的功能
    // 'postcss-preset-env',  //简写，具体看各个插件的官网提供几种写法
    postcssPresetEnv,
  ],
};
