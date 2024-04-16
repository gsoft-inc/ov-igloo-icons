/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Filter /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Filter = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 4.5h10M8 5.75v-2.5M10.667 9.333v-2.5M5.333 12.667v-2.5M3 8h10M3 11.5h10\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.25 9a.75.75 0 0 0 1.5 0V7.75H19a.75.75 0 0 0 0-1.5h-6.25V5a.75.75 0 0 0-1.5 0v1.25H5a.75.75 0 0 0 0 1.5h6.25V9ZM16 14.75a.75.75 0 0 1-.75-.75v-1.25H5a.75.75 0 0 1 0-1.5h10.25V10a.75.75 0 0 1 1.5 0v1.25H19a.75.75 0 0 1 0 1.5h-2.25V14a.75.75 0 0 1-.75.75ZM7.25 19a.75.75 0 0 0 1.5 0v-1.25H19a.75.75 0 0 0 0-1.5H8.75V15a.75.75 0 0 0-1.5 0v1.25H5a.75.75 0 0 0 0 1.5h2.25V19Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.667 9.333h18.666M16 12V6.667M21.333 18.667v-5.334M10.667 25.333V20M6.667 16h18.666M6.667 22.667h18.666\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Filter.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Filter;
