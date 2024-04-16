/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <TreeSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const TreeSolid = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 1.75a2 2 0 0 0-.75 3.855V7.25H5A2.75 2.75 0 0 0 2.25 10v.395a2 2 0 1 0 1.5 0V10c0-.69.56-1.25 1.25-1.25h2.25v1.645a2 2 0 1 0 1.5 0V8.75H11c.69 0 1.25.56 1.25 1.25v.395a2 2 0 1 0 1.5 0V10A2.75 2.75 0 0 0 11 7.25H8.75V5.605A2 2 0 0 0 8 1.75Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2a2.75 2.75 0 0 0-.75 5.396v3.854h-4.5A2.75 2.75 0 0 0 4 14v2.604a2.751 2.751 0 1 0 1.5 0V14c0-.69.56-1.25 1.25-1.25h4.5v3.854a2.751 2.751 0 1 0 1.5 0V12.75h4.5c.69 0 1.25.56 1.25 1.25v2.604a2.751 2.751 0 1 0 1.5 0V14a2.75 2.75 0 0 0-2.75-2.75h-4.5V7.396A2.751 2.751 0 0 0 12 2Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

TreeSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default TreeSolid;
