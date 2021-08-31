/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <LockedSurvey /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const LockedSurvey = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"11.5\" width=\"4\" height=\"2.5\" rx=\".333\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10.75 10.75c0-.69.56-1.25 1.25-1.25v0c.69 0 1.25.56 1.25 1.25v.735a.015.015 0 0 1-.015.015h-2.47a.015.015 0 0 1-.015-.015v-.735zM9.429 3H3.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75H8M9.429 3 13 6.571M9.429 3v2.821c0 .415.335.75.75.75H13m0 0V8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 5H5.334A.333.333 0 0 0 5 5.333v13.334c0 .184.15.333.334.333h6.38M15 5l4 4m-4-4v3.667c0 .184.15.333.334.333H19m0 0v1.72M9 9h2M9 12h6M9 15h3\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"15\" y=\"16.261\" width=\"6.442\" height=\"4.602\" rx=\".333\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M16.38 15.34a1.84 1.84 0 0 1 1.841-1.84v0a1.84 1.84 0 0 1 1.841 1.84v.9a.02.02 0 0 1-.02.021h-3.64a.02.02 0 0 1-.021-.02v-.9z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 6.67H7a.333.333 0 0 0-.333.334v18c0 .184.15.333.333.333h8.618M20 6.67l5.334 5.334M20 6.67v5c0 .184.15.334.334.334h5m0 0v2.293M12 12.004h2.667M12 16.004h8M12 20.004h4\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"20\" y=\"21.686\" width=\"8.59\" height=\"6.136\" rx=\".333\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M21.84 20.458a2.454 2.454 0 0 1 2.455-2.454v0a2.454 2.454 0 0 1 2.454 2.454v1.2a.028.028 0 0 1-.027.027h-4.854a.028.028 0 0 1-.027-.027v-1.2z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

LockedSurvey.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

LockedSurvey.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default LockedSurvey;
