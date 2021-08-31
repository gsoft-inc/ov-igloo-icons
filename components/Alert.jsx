/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Alert /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Alert = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.714 3.031a.33.33 0 0 1 .58 0l5.44 9.981a.33.33 0 0 1-.29.488H2.556a.33.33 0 0 1-.29-.488l5.448-9.98zM8 7v2\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"11.25\" r=\".75\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.719 4.605a.33.33 0 0 1 .574 0l8.427 14.842a.33.33 0 0 1-.287.493H3.567a.33.33 0 0 1-.287-.493L11.72 4.605zM12 11.386v3.008\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><ellipse cx=\"12\" cy=\"16.831\" rx=\"1\" ry=\".96\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.718 5.535a.33.33 0 0 1 .58 0l11.436 20.98a.33.33 0 0 1-.29.489H4.556a.33.33 0 0 1-.29-.488L15.718 5.535zM16 15.123v4.178\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"22.685\" fill=\"#233043\" r=\"1.333\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Alert.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Alert.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Alert;
