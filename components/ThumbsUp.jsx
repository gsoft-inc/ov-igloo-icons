/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <ThumbsUp /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ThumbsUp = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m5.376 7.467 2.256-4.205c.311-.58 1.186-.406 1.251.249l.257 2.588c.017.171.16.3.332.3h2.765a1.099 1.099 0 0 1 .83.368 1.062 1.062 0 0 1 .254.86l-.748 4.8c-.039.254-.17.486-.37.652-.199.167-.452.257-.714.254H5.376m0-5.866v5.866m0-5.866H3.751c-.288 0-.564.112-.767.312-.203.2-.317.471-.317.754v3.734c0 .282.114.554.317.754.203.2.48.312.767.312h1.625\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m8.064 11.2 3.384-6.307c.467-.87 1.779-.61 1.876.374l.386 3.882a.5.5 0 0 0 .498.451h4.148a1.648 1.648 0 0 1 1.245.55 1.591 1.591 0 0 1 .38 1.29l-1.121 7.2c-.059.381-.256.73-.555.98-.298.249-.679.384-1.071.38h-9.17m0-8.8V20m0-8.8H5.626c-.431 0-.845.168-1.15.469-.305.3-.476.707-.476 1.13v5.6c0 .425.171.832.476 1.132.305.3.719.469 1.15.469h2.438\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m10.753 14.937 4.511-8.41c.623-1.16 2.372-.811 2.502.499l.514 5.177c.034.34.32.6.664.6h5.53c.315-.003.626.061.913.188.286.126.542.313.748.546a2.102 2.102 0 0 1 .507 1.72l-1.495 9.6c-.079.509-.341.972-.74 1.306a2.189 2.189 0 0 1-1.428.507H10.753m0-11.733V26.67m0-11.733H7.5c-.575 0-1.126.225-1.533.625-.406.4-.635.943-.635 1.508v7.467c0 .566.229 1.108.635 1.508.407.4.958.625 1.533.625h3.252\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ThumbsUp.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

ThumbsUp.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ThumbsUp;
