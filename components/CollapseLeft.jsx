/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <CollapseLeft /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const CollapseLeft = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.003 2.753a.75.75 0 1 1 1.5 0V13.25a.75.75 0 0 1-1.5 0V2.753ZM8.47 12.78a.75.75 0 0 0 1.06-1.06L6.56 8.75h7.693a.75.75 0 0 0 0-1.5H6.561l3.22-3.22A.75.75 0 1 0 8.72 2.97l-4.5 4.5a.75.75 0 0 0 0 1.06l4.25 4.25Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.504 5.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0V5.75Zm6.979.707a.75.75 0 1 1 1.034 1.086L8.625 11.25h11.623a.75.75 0 0 1 0 1.5H8.625l3.892 3.707a.75.75 0 1 1-1.034 1.086l-5.25-5a.75.75 0 0 1 0-1.086l5.25-5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 6a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM28 16.003a1 1 0 0 0-1-1H10a1 1 0 1 0 0 2h17a1 1 0 0 0 1-1Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.707 8.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.293 15.293a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414l-7-7a1 1 0 0 0-1.414 0Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

CollapseLeft.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default CollapseLeft;
