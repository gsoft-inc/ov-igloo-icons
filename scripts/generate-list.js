const fs = require('fs');
const { removeDuplicates } = require('./helper');

const generateList = (icons) => {
  console.log('\n📋 List of icons generation...');

  const listOfName = icons.map((icon) => icon.name);

  const iconList = removeDuplicates(listOfName);

  const iconImport = iconList
    .map((icon) => `export { default as ${icon} } from './dist/${icon}.js';`)
    .join('\n');

  fs.writeFileSync(
    `iconsList.js`,
    `${iconImport}\nexport const iconName = ${JSON.stringify(iconList)}`
  );

  console.log('✨ The List has been saved!');
};

module.exports = generateList;
