/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Pause /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Pause = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4.4\" y=\"2\" width=\"1.5\" height=\"12\" rx=\".75\" fill=\"#233043\"/><rect x=\"10\" y=\"2\" width=\"1.5\" height=\"12\" rx=\".75\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><mask id=\"a\" fill=\"#fff\"><rect x=\"5.5\" y=\"4\" width=\"4.5\" height=\"16\" rx=\"1\"/></mask><rect x=\"5.5\" y=\"4\" width=\"4.5\" height=\"16\" rx=\"1\" stroke=\"#233043\" stroke-width=\"3\" mask=\"url(#a)\"/><mask id=\"b\" fill=\"#fff\"><rect x=\"14\" y=\"4\" width=\"4.5\" height=\"16\" rx=\"1\"/></mask><rect x=\"14\" y=\"4\" width=\"4.5\" height=\"16\" rx=\"1\" stroke=\"#233043\" stroke-width=\"3\" mask=\"url(#b)\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><mask id=\"a\" fill=\"#fff\"><rect x=\"6.194\" y=\"3.932\" width=\"6.788\" height=\"24.137\" rx=\"1\"/></mask><rect x=\"6.194\" y=\"3.932\" width=\"6.788\" height=\"24.137\" rx=\"1\" stroke=\"#233043\" stroke-width=\"4\" mask=\"url(#a)\"/><mask id=\"b\" fill=\"#fff\"><rect x=\"19.017\" y=\"3.932\" width=\"6.788\" height=\"24.137\" rx=\"1\"/></mask><rect x=\"19.017\" y=\"3.932\" width=\"6.788\" height=\"24.137\" rx=\"1\" stroke=\"#233043\" stroke-width=\"4\" mask=\"url(#b)\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Pause.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Pause;
