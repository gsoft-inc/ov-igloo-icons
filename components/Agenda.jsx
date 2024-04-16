/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Agenda /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Agenda = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><mask id=\"a\" fill=\"#fff\"><rect x=\"3\" y=\"2\" width=\"10\" height=\"12\" rx=\"1.333\"/></mask><rect x=\"3\" y=\"2\" width=\"10\" height=\"12\" rx=\"1.333\" stroke=\"#233043\" stroke-width=\"3\" mask=\"url(#a)\"/><path d=\"M2.5 5.333h2M7 6.5h2M2.5 8h2M2.5 10.667h2\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 5H8a.5.5 0 0 0-.5.5v1.25H8a.75.75 0 0 1 0 1.5h-.5v2.5H8a.75.75 0 0 1 0 1.5h-.5v2.5H8a.75.75 0 0 1 0 1.5h-.5v1.25a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12A.5.5 0 0 0 17 5ZM6 16.25v1.25a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1.25H5a.75.75 0 0 0 0 1.5h1v2.5H5a.75.75 0 0 0 0 1.5h1v2.5H5a.75.75 0 0 0 0 1.5h1Zm5-8a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"6.333\" width=\"15.333\" height=\"19.333\" rx=\"1.667\" stroke=\"#233043\" stroke-width=\"2\"/><path d=\"M6.667 10.667h4M14.667 12.667h4M6.667 16h4M6.667 21.333h4\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

export default Agenda;
