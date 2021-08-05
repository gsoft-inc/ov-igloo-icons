const fs = require('fs');
const camelCase = require('camelcase');
const { formatComponentName, removeDuplicates } = require('./helper');

const generateList = (list) => {
  const listOfIcons = list.map((filepath) => {
    const { name } = formatComponentName(filepath);

    const formatedName = camelCase(name, {
      pascalCase: true,
    });
    return formatedName;
  });

  const cleanIconList = removeDuplicates(listOfIcons);

  const iconImport = cleanIconList
    .map((icon) => `export { default as ${icon} } from './dist/${icon}.jsx';`)
    .join('\n');

  fs.writeFileSync(
    `iconsList.js`,
    `${iconImport}\nexport const iconName = ${JSON.stringify(cleanIconList)}`
  );
};

module.exports = generateList;
