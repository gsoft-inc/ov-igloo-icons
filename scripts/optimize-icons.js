const fs = require('fs');
const path = require('path');
const camelCase = require('camelcase');

const { optimize } = require('svgo');

const { ICONS_DIST_DIR } = require('./constants');
const { config } = require('./config');

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

  const [, size, name, status] = splitedPath;
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

if (!fs.existsSync(ICONS_DIST_DIR)) {
  fs.mkdirSync(ICONS_DIST_DIR, {
    recursive: true,
  });
}

const optimizeIcons = (list) => {
  console.log('\n⚙️  Icons optimization...');

  list.map((filepath) => {
    const icon = fs.readFileSync(filepath, 'utf-8');
    const optimizedIcon = optimize(icon, { path: filepath, ...config });
    const iconName = formatIconName(filepath);

    fs.writeFileSync(`${ICONS_DIST_DIR}/${iconName}.svg`, optimizedIcon.data);
  });
};

module.exports = optimizeIcons;
