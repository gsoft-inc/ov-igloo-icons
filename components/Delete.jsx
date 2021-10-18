/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Delete /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Delete = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\" stroke=\"#233043\" stroke-width=\"1.5\"><path d=\"M3 4.5h10M9.25 4.5h-2.5A.75.75 0 0 1 6 3.75v-.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75Z\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4 5v8.25c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25V5\"/><path d=\"M6.5 7.5v3M9.5 7.5v3\" stroke-linecap=\"round\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h16v16H0z\"/></clipPath></defs></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\" stroke=\"#233043\" stroke-width=\"1.5\"><path d=\"M5 7.5h14M10 10.5v6M14 10.5v6M14.5 7.5h-5A.5.5 0 0 1 9 7V5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5Z\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 7.5V20a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7.5\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" transform=\"translate(0 .5)\" d=\"M0 0h24v24H0z\"/></clipPath></defs></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\" stroke=\"#233043\" stroke-width=\"2\"><path d=\"M6.667 9.333h18.666M13.333 13.333v8M18.667 13.333v8M19.333 9.333h-6.666A.667.667 0 0 1 12 8.667V6c0-.368.299-.667.667-.667h6.666c.369 0 .667.299.667.667v2.667a.667.667 0 0 1-.667.666Z\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M8 9.333V26c0 .368.298.667.667.667h14.666A.667.667 0 0 0 24 26V9.333\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v32H0z\"/></clipPath></defs></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Delete.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Delete.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Delete;
