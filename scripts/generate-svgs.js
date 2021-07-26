const fs = require('fs');
const path = require('path');
const glob = require('glob');
const camelCase = require('camelcase');
const { optimize, extendDefaultPlugins } = require('svgo');

const { ICONS_DIST_DIR, ICONS_SOURCE_DIR } = require('./constants');

const config = {
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

const formatIconName = (filepath) => {
  if (!filepath) {
    return;
  }

  const splitedPath = filepath.split(path.sep);

  if (splitedPath.length > 4) {
    console.warn(
      `${splitedPath.name} n'as pas un niveau de hiérarchie conforme `
    );
  }

  // eslint-disable-next-line no-unused-vars
  const [dir, size, name, status] = splitedPath;
  const formatedName = camelCase(name);
  const formatedSize = size.slice(0, -2);

  let iconName;

  if (splitedPath.length <= 3) {
    // The term SVG is removed from the name with.slicc(0, -3);
    iconName = `${formatedName.slice(0, -3)}-${formatedSize}`;
  } else {
    iconName = `${formatedName}-${formatedSize}-${status}`;
  }

  return iconName;
};

const icons = glob.sync(`${ICONS_SOURCE_DIR}/**/*.svg`);

if (!fs.existsSync(ICONS_DIST_DIR)) {
  fs.mkdirSync(ICONS_DIST_DIR, {
    recursive: true,
  });
}

const buildSvgs = () => {
  console.log('\n⚙️  Icon optimization...');

  return icons.map((filepath) => {
    const icon = fs.readFileSync(filepath, 'utf-8');
    const optimizedIcon = optimize(icon, { path: filepath, ...config });
    const iconName = formatIconName(filepath);

    fs.writeFileSync(`${ICONS_DIST_DIR}/${iconName}.svg`, optimizedIcon.data);

    return;
  });
};

module.exports = buildSvgs;
