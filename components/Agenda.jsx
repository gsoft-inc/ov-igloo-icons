/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Agenda /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Agenda = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><mask id=\"a\" fill=\"#fff\"><rect x=\"3\" y=\"2\" width=\"10\" height=\"12\" rx=\"1.333\"/></mask><rect x=\"3\" y=\"2\" width=\"10\" height=\"12\" rx=\"1.333\" stroke=\"#233043\" stroke-width=\"3\" mask=\"url(#a)\"/><path d=\"M2.5 5.333h2M7 6.5h2M2.5 8h2M2.5 10.667h2\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6.75\" y=\"4.75\" width=\"11.5\" height=\"14.5\" rx=\"1.25\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"M5 8h3M11 9.5h3M5 12h3M5 16h3\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"6.337\" width=\"15.333\" height=\"19.333\" rx=\"1.667\" stroke=\"#233043\" stroke-width=\"2\"/><path d=\"M6.667 10.67h4M14.667 12.67h4M6.667 16.004h4M6.667 21.337h4\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Agenda.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Agenda.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Agenda;
