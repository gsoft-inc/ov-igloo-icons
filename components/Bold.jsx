/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Bold /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Bold = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.333 3.333h3.334a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H5.333v-4Zm0 0H4M5.333 12.667h4A2.667 2.667 0 0 0 12 10v0a2.667 2.667 0 0 0-2.667-2.667h-4v5.334Zm0 0H4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 5h5a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H8V5Zm0 0H6M8 19h6a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4H8v8Zm0 0H6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.667 6.667h6.666a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-6.666v-8Zm0 0H8\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10.667 25.333h8A5.333 5.333 0 0 0 24 20v0a5.333 5.333 0 0 0-5.333-5.334h-8v10.667Zm0 0H8\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Bold.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Bold.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Bold;
