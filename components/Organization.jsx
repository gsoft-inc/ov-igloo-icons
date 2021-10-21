/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Organization /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Organization = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2.5\" width=\"7\" height=\"11\" rx=\"1\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"M9 5.5h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9v-8Z\" stroke=\"#233043\" stroke-width=\"1.5\"/><rect x=\"10.75\" y=\"8.5\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"3.5\" y=\"5\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"6\" y=\"5\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"3.5\" y=\"8.5\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"6\" y=\"8.5\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2.75\" y=\"4.25\" width=\"11.5\" height=\"16\" rx=\"1\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"M14.25 8.302h6a1 1 0 0 1 1 1v9.948a1 1 0 0 1-1 1h-6V8.302Z\" stroke=\"#233043\" stroke-width=\"1.5\"/><rect x=\"6\" y=\"7\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"9.5\" y=\"7\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"6\" y=\"15\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"9.5\" y=\"15\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"17\" y=\"15\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"6\" y=\"11\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"9.5\" y=\"11\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/><rect x=\"17\" y=\"11\" width=\"1.5\" height=\"2.5\" rx=\".75\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"7\" width=\"14.297\" height=\"19.892\" rx=\"1\" stroke=\"#233043\" stroke-width=\"2\"/><path d=\"M18.297 12.037H26a1 1 0 0 1 1 1v12.855a1 1 0 0 1-1 1h-7.703V12.037Z\" stroke=\"#233043\" stroke-width=\"2\"/><rect x=\"7.5\" y=\"10\" width=\"2\" height=\"3.25\" rx=\"1\" fill=\"#233043\"/><rect x=\"12.5\" y=\"10\" width=\"2\" height=\"3.25\" rx=\"1\" fill=\"#233043\"/><rect x=\"7.5\" y=\"20.5\" width=\"2\" height=\"3.25\" rx=\"1\" fill=\"#233043\"/><rect x=\"12.5\" y=\"20.5\" width=\"2\" height=\"3.25\" rx=\"1\" fill=\"#233043\"/><rect x=\"21.5\" y=\"20.5\" width=\"2\" height=\"3.25\" rx=\"1\" fill=\"#233043\"/><rect x=\"7.5\" y=\"15.25\" width=\"2\" height=\"3.25\" rx=\"1\" fill=\"#233043\"/><rect x=\"12.5\" y=\"15.25\" width=\"2\" height=\"3.25\" rx=\"1\" fill=\"#233043\"/><rect x=\"21.5\" y=\"15.25\" width=\"2\" height=\"3.25\" rx=\"1\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Organization.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Organization.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Organization;
