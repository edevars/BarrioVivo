// next.config.js
const withImages = require("next-images");
const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withCss, withImages]);
