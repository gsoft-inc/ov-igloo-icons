/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Grid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Grid = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"3\" width=\"4\" height=\"4\" rx=\".75\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"9\" y=\"3\" width=\"4\" height=\"4\" rx=\".75\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"3\" y=\"9\" width=\"4\" height=\"4\" rx=\".75\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"9\" y=\"9\" width=\"4\" height=\"4\" rx=\".75\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"5.5\" y=\"5.5\" width=\"5\" height=\"5\" rx=\".5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"13.5\" y=\"5.5\" width=\"5\" height=\"5\" rx=\".5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"5.5\" y=\"13.5\" width=\"5\" height=\"5\" rx=\".5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"13.5\" y=\"13.5\" width=\"5\" height=\"5\" rx=\".5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"7\" y=\"7\" width=\"7\" height=\"7\" rx=\"1\" stroke=\"#233043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"18\" y=\"7\" width=\"7\" height=\"7\" rx=\"1\" stroke=\"#233043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"7\" y=\"18\" width=\"7\" height=\"7\" rx=\"1\" stroke=\"#233043\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"18\" y=\"18\" width=\"7\" height=\"7\" rx=\"1\" stroke=\"#233043\" stroke-width=\"2\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Grid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Grid;
