const fs = require('fs');
const path = require('path');
const camelCase = require('camelcase');

const { optimize } = require('svgo');
const { config } = require('./scripts/config');

const { getAllFiles } = require('./scripts/helper');

const generateSvg = require('./scripts/generate-svg');
const generateComponent = require('./scripts/generate-component');
const generateList = require('./scripts/generate-list');

const {
  ICONS_SOURCE_DIR,
  ICONS_DIST_DIR,
  ICONS_SIZES,
} = require('./scripts/constants');

const getFiles = (dir) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dir)) {
      resolve(getAllFiles(dir));
    } else {
      reject(`no such directory ${dir}`);
    }
  });
};

const checkSize = (width, height, name) => {
  const sizes = ICONS_SIZES;

  if (sizes.includes(Number(width)) && sizes.includes(Number(height))) {
    return true;
  } else {
    console.error(
      `The size of ${name} is not correct. width: ${width} height: ${height}`
    );
    process.exit(1);
  }
};

const checkSameName = (data) => {
  const sizes = ICONS_SIZES;
  const dataGroupedBySize = sizes.map((s) => data.filter((d) => d.group === s));

  dataGroupedBySize.map((data) => {
    const unique = [...new Set(data.map((d) => d.name))];

    const lookup = data.reduce((a, e) => {
      a[e.name] = ++a[e.name] || 0;
      return a;
    }, {});

    if (data.length === unique.length) {
      return true;
    } else {
      console.error(
        `Array contains duplicates icon name: `,
        data.filter((e) => lookup[e.name])
      );
      process.exit(1);
    }
  });
};

const handleName = (file) => {
  const splitPath = file.split(path.sep);
  const fileName = splitPath[splitPath.length - 1].replace('.svg', '');
  const [, group] = splitPath;

  const options = { pascalCase: true };
  const formatedName =
    fileName === '1-on-1'
      ? camelCase('OneOnOne', options)
      : camelCase(fileName, options);

  const formatedGroup = Number(group.replace('px', ''));

  return { name: formatedName, group: formatedGroup };
};

const build = async (dir) => {
  console.log('\nBuild started...');

  const response = await getFiles(dir);
  const files = response.filter((word) => !word.includes('.DS_Store'));

  const result = files.map((file) => {
    const { name, group } = handleName(file);
    const svg = fs.readFileSync(file, 'utf-8');
    const svgo = optimize(svg, { path: file, ...config });

    const { info, data } = svgo;

    checkSize(info.width, info.height, name);

    return {
      name,
      group,
      size: { width: info.width, height: info.height },
      data,
    };
  });

  checkSameName(result);

  return result;
};

build(ICONS_SOURCE_DIR)
  .then((icons) => {
    // generate new svg files with svgo optimization
    generateSvg(icons, ICONS_DIST_DIR);

    // generate react components
    generateComponent(icons);

    // generate icons list for docs
    generateList(icons);
  })
  .catch((error) => console.error(error))
  .then(() => console.log('\n🚀 Build completed!\n'));
