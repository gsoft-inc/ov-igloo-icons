/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Lock /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Lock = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.75 6v-.25A2.75 2.75 0 0 0 8 3v0a2.75 2.75 0 0 0-2.75 2.75V6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><mask id=\"a\" fill=\"#fff\"><rect x=\"3\" y=\"6\" width=\"10\" height=\"8\" rx=\".75\"/></mask><rect x=\"3\" y=\"6\" width=\"10\" height=\"8\" rx=\".75\" stroke=\"#233043\" stroke-width=\"3\" mask=\"url(#a)\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\".5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M8 8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v1.955c0 .025-.02.045-.045.045h-7.91A.045.045 0 0 1 8 9.955V8z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"14\" r=\"1\" fill=\"#233043\"/><path d=\"m12 14 1.482 2.223a.5.5 0 0 1-.416.777h-2.132a.5.5 0 0 1-.416-.777L12 14z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6.667\" y=\"13.337\" width=\"18.667\" height=\"13.333\" rx=\".667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10.666 10.67A5.333 5.333 0 0 1 16 5.338v0a5.333 5.333 0 0 1 5.333 5.334v2.606a.06.06 0 0 1-.06.06H10.727a.06.06 0 0 1-.06-.06v-2.606z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"18.671\" r=\"1.333\" fill=\"#233043\"/><path d=\"m16 18.67 1.976 2.964a.667.667 0 0 1-.555 1.036h-2.842a.667.667 0 0 1-.555-1.036L16 18.67z\" fill=\"#233043\"/></svg>"}
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
