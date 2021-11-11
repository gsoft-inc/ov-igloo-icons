const fs = require('fs');
const { checkFolderExist } = require('./helper');

const generateSvg = (data, dir) => {
  checkFolderExist(dir);
  console.log('\n⚙️  Svg generation...');

  data.map(async (svg) => {
    const { name, group, data } = svg;
    const formatedName = `${name}-${group}.svg`;

    fs.writeFile(`${dir}/${formatedName}`, data, (err) => {
      if (err) throw err;
    });
  });

  console.log('✨ The icons has been saved!');
};

module.exports = generateSvg;
