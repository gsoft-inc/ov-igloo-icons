module.exports = {
  pretty: true,
  multipass: true,
  esModule: false,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeXMLNS: true,
          removeViewBox: false,
          convertStyleToAttrs: true,
          sortAttrs: true,
          removeStyleElement: true,
          removeScriptElement: true,
          collpaseGroups: true,
          convertColors: {
            active: true,
            params: {
              currentColor: true,
            },
          },
        },
      },
    },
  ],
};
