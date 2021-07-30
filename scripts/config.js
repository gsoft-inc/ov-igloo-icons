const { extendDefaultPlugins } = require('svgo');

module.exports = {
  pretty: true,
  multipass: true,
  esModule: false,
  plugins: extendDefaultPlugins([
    { name: 'removeXMLNS', active: true },
    { name: 'convertStyleToAttrs', active: true },
    {
      name: 'convertColors',
      active: true,
      params: {
        currentColor: true,
      },
    },
    { name: 'collapseGroups', active: false },
    { name: 'sortAttrs', active: true },
    { name: 'removeStyleElement', active: true },
    { name: 'removeScriptElement', active: true },
  ]),
};
