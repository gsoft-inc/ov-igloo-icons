const fs = require('fs');
const camelCase = require('camelcase');
const merge = require('lodash.merge');

const { COMPONENTS_DIR } = require('./constants');
const { checkFolderExist } = require('./helper');

const GENERATED_HEADER = '/* THIS FILE IS GENERATED. DO NOT EDIT IT. */';

const iconComponentTemplate = (name, code) => {
  return `${GENERATED_HEADER}
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <${name} /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ${name} = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = ${JSON.stringify(code)}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

${name}.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default ${name};
`;
};

const generateComponent = (icons) => {
  checkFolderExist(COMPONENTS_DIR);

  console.log('\n📦 Components generation...');

  const iconByName = icons.reduce((acc, icon) => {
    return merge(acc, {
      [icon.name]: {
        name: icon.name,
        heights: { [icon.group]: icon.data.trim() },
      },
    });
  }, {});

  Object.entries(iconByName).map(([key, icon]) => {
    const name = `${camelCase(key, { pascalCase: true })}`;
    const code = iconComponentTemplate(name, icon.heights);

    fs.writeFileSync(`${COMPONENTS_DIR}/${name}.jsx`, code);
  });

  console.log('✨ Components has been saved!');
};

module.exports = generateComponent;
