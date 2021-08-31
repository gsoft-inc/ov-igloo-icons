const fs = require('fs');
const path = require('path');
const camelCase = require('camelcase');
const merge = require('lodash.merge');
const { optimize } = require('svgo');

const { COMPONENTS_DIR } = require('./constants');
const { config } = require('./config');
const { formatComponentName } = require('./helper');

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
const ${name} = ({size, ariaLabel, className, ...other}) => {
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

${name}.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ${name};
`;
};

if (!fs.existsSync(COMPONENTS_DIR)) {
  fs.mkdirSync(COMPONENTS_DIR, {
    recursive: true,
  }),
    (err) => {
      throw err;
    };
}

const formatIconDatas = (list) => {
  return list.map((filepath) => {
    const icon = fs.readFileSync(filepath, 'utf-8');
    const optimizedIcon = optimize(icon, { path: filepath, ...config });
    const iconName = formatComponentName(filepath);
    const iconPath = optimizedIcon.data.trim();
    const { name, height } = iconName;

    return {
      name,
      height,
      path: iconPath,
    };
  });
};

const generateComponent = (list) => {
  console.log('\n📦 Components generation...');

  const iconsData = formatIconDatas(list);

  const iconByName = iconsData.reduce((acc, icon) => {
    return merge(acc, {
      [icon.name]: {
        name: icon.name,
        heights: { [icon.height]: icon.path },
      },
    });
  }, {});

  Object.entries(iconByName).map(([key, icon]) => {
    const name = `${camelCase(key, { pascalCase: true })}`;
    const code = iconComponentTemplate(name, icon.heights);

    fs.writeFileSync(`${COMPONENTS_DIR}/${name}.jsx`, code);
  });
};

module.exports = generateComponent;
