/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ThumbsUp /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ThumbsUp = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m5.376 7.467 2.256-4.205c.311-.58 1.186-.406 1.251.25L9.14 6.1c.017.17.16.3.332.3h2.765a1.1 1.1 0 0 1 .83.367 1.062 1.062 0 0 1 .254.86l-.748 4.8c-.039.254-.17.486-.37.652-.198.167-.452.257-.714.254H5.376m0-5.866v5.866m0-5.866H3.751c-.288 0-.564.112-.767.312-.203.2-.317.471-.317.754v3.734c0 .283.114.554.317.754.203.2.48.312.767.312h1.625\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.787 4.538c.817-1.523 3.113-1.065 3.284.655l.363 3.657h3.918a2.398 2.398 0 0 1 1.811.803 2.342 2.342 0 0 1 .56 1.901l-1.122 7.2a2.346 2.346 0 0 1-.814 1.44c-.436.365-.989.561-1.557.556H5.626c-.626 0-1.23-.245-1.676-.684a2.337 2.337 0 0 1-.7-1.666v-5.6c0-.627.253-1.226.7-1.666a2.39 2.39 0 0 1 1.676-.684h1.99l3.171-5.912ZM7.314 11.95H5.626a.89.89 0 0 0-.624.253.837.837 0 0 0-.252.597v5.6c0 .221.09.436.252.597.164.16.388.253.624.253h1.688v-7.3Zm1.5 7.3h8.428a.892.892 0 0 0 .582-.206.844.844 0 0 0 .294-.518l1.122-7.2a.828.828 0 0 0-.201-.68.898.898 0 0 0-.675-.297l-.008.001h-4.148a1.25 1.25 0 0 1-1.244-1.127l-.386-3.882a.234.234 0 0 0-.062-.149.264.264 0 0 0-.138-.072.264.264 0 0 0-.155.014.235.235 0 0 0-.114.113l-3.295 6.141v7.862Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m10.753 14.933 4.511-8.41c.623-1.16 2.372-.811 2.502.5l.514 5.176c.034.341.32.6.664.6h5.53c.315-.003.626.061.913.188.286.126.542.313.748.546a2.1 2.1 0 0 1 .507 1.72l-1.495 9.6a2.125 2.125 0 0 1-.74 1.306 2.19 2.19 0 0 1-1.428.508H10.753m0-11.734v11.733m0-11.733H7.5c-.575 0-1.126.225-1.533.625-.406.4-.635.943-.635 1.509v7.466c0 .566.229 1.109.635 1.509.407.4.958.624 1.533.624h3.252\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

export default ThumbsUp;
