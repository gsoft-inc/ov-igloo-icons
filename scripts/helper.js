const camelCase = require('camelcase');

const filenamePattern = /(.+)\/([0-9]+)px\/(.+).svg$/;

const removeDuplicates = (data) => {
  return [...new Set(data)];
};

const formatComponentName = (filepath) => {
  if (!filepath) {
    return;
  }

  if (!filenamePattern.test(filepath)) {
    console.error(
      `${filepath}: Invalid structure. please look in the figma for the structure to match size/icon name and export to svg folder (e.g. svg/16px/ICON NAME.svg).`
    );
  }

  const [, , height, name] = filepath.match(filenamePattern);

  let iconName;

  if (name === '1-on-1') {
    iconName = camelCase('oneOnOne', { pascalCase: true });
  } else {
    iconName = camelCase(name, { pascalCase: true });
  }

  return { name: iconName, height };
};

exports.formatComponentName = formatComponentName;
exports.removeDuplicates = removeDuplicates;
