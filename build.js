const glob = require('glob');

const optimizeIcons = require('./scripts/optimize-icons');
const generateComponent = require('./scripts/generate-component');
const generateList = require('./scripts/generate-list');

const { ICONS_SOURCE_DIR } = require('./scripts/constants');

const icons = glob.sync(`${ICONS_SOURCE_DIR}/**/*.svg`);

console.log('\nBuild started...');

// generate new svg files with svgo optimization
optimizeIcons(icons);

// generate react components
generateComponent(icons);

// generate icons list for docs
generateList(icons);

console.log('\n🚀 Build completed!\n');
