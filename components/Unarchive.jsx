/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Unarchive /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Unarchive = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2.25\" y=\"2.75\" width=\"11.5\" height=\"2.5\" rx=\".25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M3 5.5a.25.25 0 0 1 .25-.25h9.5a.25.25 0 0 1 .25.25V13a.25.25 0 0 1-.25.25h-9.5A.25.25 0 0 1 3 13V5.5zM9.667 8.917 8 7.25m0 0L6.333 8.917M8 7.25v4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"5\" width=\"16\" height=\"3\" rx=\".5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5 8h14v10.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V8zM14.5 13 12 10.5m0 0L9.5 13m2.5-2.5v6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"5.333\" y=\"6.67\" width=\"21.333\" height=\"4\" rx=\".667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6.667 10.67h18.666v14a.667.667 0 0 1-.666.667H7.333a.667.667 0 0 1-.666-.667v-14zM19.333 17.337 16 14.004m0 0-3.333 3.333M16 14.004v8\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Unarchive.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Unarchive.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Unarchive;
