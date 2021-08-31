/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Goal /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Goal = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"8\" r=\"3\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"8\" r=\".25\" fill=\"#233043\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m8 8 6-6\" stroke=\"#233043\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M13.077 2.688V1.656a.5.5 0 0 1 .147-.353l.684-.684a.25.25 0 0 1 .413.098l.205.614a.25.25 0 0 0 .158.158l.614.204a.25.25 0 0 1 .098.414l-.684.684a.5.5 0 0 1-.354.147h-1.03a.25.25 0 0 1-.25-.25z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"12\" r=\"4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"12\" r=\".5\" fill=\"#233043\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m12 12 7-7\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M18.116 5.406V3.881a.5.5 0 0 1 .147-.353l1.241-1.242a.25.25 0 0 1 .414.098l.351 1.053a.5.5 0 0 0 .317.316l1.053.351a.25.25 0 0 1 .098.414L20.494 5.76a.5.5 0 0 1-.354.146h-1.525a.5.5 0 0 1-.5-.5z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16\" r=\"10.667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"16\" r=\"5.333\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"16\" r=\".667\" fill=\"#233043\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m16 16 9.333-9.333\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M24.155 7.209V5.175c0-.177.07-.346.195-.471l1.656-1.656a.333.333 0 0 1 .552.13l.468 1.405c.066.199.222.355.422.421l1.404.469a.333.333 0 0 1 .13.551L27.327 7.68a.666.666 0 0 1-.472.195h-2.033a.667.667 0 0 1-.667-.666z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Goal.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Goal.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Goal;
