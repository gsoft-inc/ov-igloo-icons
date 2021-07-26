const fs = require('fs');
const path = require('path');
const glob = require('glob');
const camelCase = require('camelcase');
const svgr = require('@svgr/core').default;

const { COMPONENTS_DIR, ICONS_SOURCE_DIR } = require('./constants');

const iconComponentTemplate = (
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) => {
  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}
    ${exports}
  `;
};

const formatComponentName = (filepath) => {
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

  let iconName;

  if (splitedPath.length <= 3) {
    // The term SVG is removed from the name with.slicc(0, -3);
    iconName = `${name.slice(0, -3)}`;
  } else {
    iconName = `${name}${status}`;
  }

  return camelCase(iconName, { pascalCase: true });
};

if (!fs.existsSync(COMPONENTS_DIR)) {
  fs.mkdirSync(COMPONENTS_DIR, {
    recursive: true,
  });
}

const generateComponent = (list) => {
  console.log('\n📦 Components generation...');
  list.map((filepath) => {
    const icon = fs.readFileSync(filepath, 'utf-8');
    const componentName = formatComponentName(filepath);

    svgr(
      icon,
      {
        template: iconComponentTemplate,
        plugins: [
          '@svgr/plugin-svgo',
          '@svgr/plugin-jsx',
          '@svgr/plugin-prettier',
        ],
        svgoConfig: {
          plugins: [{ convertColors: { currentColor: true } }],
        },
      },
      { componentName }
    ).then((componentCode) => {
      fs.writeFileSync(`${COMPONENTS_DIR}/${componentName}.jsx`, componentCode);
    });
  });
};

module.exports = generateComponent;
