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
const Bold = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.333 3.333h3.334a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H5.333v-4Zm0 0H4M5.333 12.667h4A2.667 2.667 0 0 0 12 10v0a2.667 2.667 0 0 0-2.667-2.667h-4v5.334Zm0 0H4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6 4.25a.75.75 0 0 0 0 1.5h1.25v12.5H6a.75.75 0 0 0 0 1.5h8a4.75 4.75 0 0 0 1.727-9.176A3.75 3.75 0 0 0 13 4.25H6Zm7 6a2.25 2.25 0 0 0 0-4.5H8.75v4.5H13Zm-4.25 1.5v6.5H14a3.25 3.25 0 0 0 0-6.5H8.75Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 5.667a1 1 0 1 0 0 2h1.667v16.666H8a1 1 0 1 0 0 2h10.667a6.333 6.333 0 0 0 2.303-12.235 5 5 0 0 0-3.636-8.432H8Zm3.667 10H18.667a4.333 4.333 0 0 1 0 8.666h-7v-8.666Zm5.686-2a3 3 0 0 0-.02-6h-5.666v6h5.686Z\" fill=\"#233043\"/></svg>"}
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

export default Bold;
