const autoprefixer = require('autoprefixer');
const cssnameo = require('cssnano');

module.exports = function() {
  const plugins = [
    autoprefixer,
    cssnameo
  ];

  return {
    plugins: plugins
  }
};
