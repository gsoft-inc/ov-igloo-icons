/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Lock /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Lock = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.75 6v-.25A2.75 2.75 0 0 0 8 3v0a2.75 2.75 0 0 0-2.75 2.75V6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><mask id=\"a\" fill=\"#fff\"><rect x=\"3\" y=\"6\" width=\"10\" height=\"8\" rx=\".75\"/></mask><rect x=\"3\" y=\"6\" width=\"10\" height=\"8\" rx=\".75\" stroke=\"#233043\" stroke-width=\"3\" mask=\"url(#a)\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 3.25A4.75 4.75 0 0 0 7.25 8v1.25H5.5c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h13c.69 0 1.25-.56 1.25-1.25v-9c0-.69-.56-1.25-1.25-1.25h-1.75V8A4.75 4.75 0 0 0 12 3.25Zm3.25 6V8a3.25 3.25 0 0 0-6.5 0v1.25h6.5Zm-7.205 1.5H5.75v8.5h12.5v-8.5H8.045Zm4.51 4.082A.999.999 0 0 0 12 13a1 1 0 0 0-.555 1.832l-.927 1.39a.5.5 0 0 0 .416.778h2.132a.5.5 0 0 0 .416-.777l-.927-1.39Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6.667\" y=\"13.333\" width=\"18.667\" height=\"13.333\" rx=\".667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10.666 10.667A5.333 5.333 0 0 1 16 5.333v0a5.333 5.333 0 0 1 5.333 5.334v2.606a.06.06 0 0 1-.06.06H10.727a.06.06 0 0 1-.06-.06v-2.606Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"18.667\" r=\"1.333\" fill=\"#233043\"/><path d=\"m16 18.667 1.976 2.963a.667.667 0 0 1-.555 1.037h-2.842a.667.667 0 0 1-.555-1.037L16 18.667Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Lock.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Lock.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Lock;
