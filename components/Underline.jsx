/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Underline /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Underline = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.333 3.492V8A2.667 2.667 0 0 0 8 10.667v0A2.667 2.667 0 0 0 10.667 8V3.492M3.333 12.667h9.334M4.333 3.333h2M9.667 3.333h2\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.25 12V5.75H6.5a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5h-.75V12a3.25 3.25 0 0 0 6.5 0V5.75h-.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5h-.75V12a4.75 4.75 0 1 1-9.5 0ZM5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5H5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.667 16V7.667h-1a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-1V16a4.333 4.333 0 1 0 8.666 0V7.667h-1a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-1V16a6.333 6.333 0 1 1-12.666 0Zm-3 8.333a1 1 0 1 0 0 2h18.666a1 1 0 1 0 0-2H6.667Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Underline.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Underline;
