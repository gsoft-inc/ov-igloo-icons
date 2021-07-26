const glob = require('glob');

const optimizeIcons = require('./scripts/optimize-icons');
const generateComponent = require('./scripts/generate-component');

const { ICONS_SOURCE_DIR } = require('./scripts/constants');

const icons = glob.sync(`${ICONS_SOURCE_DIR}/**/*.svg`);

console.log('\nBuild started...');

optimizeIcons(icons);

generateComponent(icons);

console.log('\n🚀 Build completed!\n');
