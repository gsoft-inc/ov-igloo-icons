/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Copy /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Copy = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6\" y=\"6\" width=\"7\" height=\"7\" rx=\".25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5.8 10H3.25A.25.25 0 0 1 3 9.75v-6.5A.25.25 0 0 1 3.25 3h6.5a.25.25 0 0 1 .25.25V5.8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.5 4.25c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h2.75v2.75c0 .69.56 1.25 1.25 1.25h9c.69 0 1.25-.56 1.25-1.25v-9c0-.69-.56-1.25-1.25-1.25h-2.75V5.5c0-.69-.56-1.25-1.25-1.25h-9Zm8.75 4v-2.5h-8.5v8.5h2.5V9.5c0-.69.56-1.25 1.25-1.25h4.75ZM9.75 15v3.25h8.5v-8.5h-8.5V15Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.333 5.667c-.92 0-1.666.746-1.666 1.666v12c0 .92.746 1.667 1.666 1.667H11v3.667c0 .92.746 1.666 1.666 1.666h12c.92 0 1.667-.746 1.667-1.666v-12c0-.92-.746-1.667-1.667-1.667H21V7.333c0-.92-.746-1.666-1.667-1.666h-12ZM19 11V7.667H7.667V19H11v-6.333c0-.92.746-1.667 1.666-1.667H19Zm-6 9.02V13h11.333v11.333H13V20.02Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Copy.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Copy;
