const { getAllFiles } = require('./scripts/helper');

const optimizeIcons = require('./scripts/optimize-icons');
const generateComponent = require('./scripts/generate-component');
const generateList = require('./scripts/generate-list');

const { ICONS_SOURCE_DIR } = require('./scripts/constants');

const icons = getAllFiles(ICONS_SOURCE_DIR);

console.log('\nBuild started...');

// generate new svg files with svgo optimization
optimizeIcons(icons);

// generate react components
generateComponent(icons);

// generate icons list for docs
generateList(icons);

console.log('\n🚀 Build completed!\n');
