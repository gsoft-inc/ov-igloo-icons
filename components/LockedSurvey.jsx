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
const LockedSurvey = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"11.5\" width=\"4\" height=\"2.5\" rx=\".333\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10.75 10.75c0-.69.56-1.25 1.25-1.25v0c.69 0 1.25.56 1.25 1.25v.735a.015.015 0 0 1-.015.015h-2.47a.015.015 0 0 1-.015-.015v-.735ZM9.429 3H3.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75H8M9.429 3 13 6.571M9.429 3v2.821c0 .415.335.75.75.75H13m0 0V8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 18.25V5.75h8.5v2.917c0 .598.485 1.083 1.084 1.083h2.916v.97a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.22-.53l-4-4a.75.75 0 0 0-.53-.22H5.334c-.599 0-1.084.485-1.084 1.083v13.334c0 .598.485 1.083 1.084 1.083h6.38a.75.75 0 0 0 0-1.5H5.75Zm11.44-10-1.44-1.44v1.44h1.44ZM9 8.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H9ZM8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 14.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H9Zm5.25 2.345c0-.599.485-1.084 1.083-1.084h.298v-.17a2.59 2.59 0 1 1 5.181 0v.17h.297c.598 0 1.083.485 1.083 1.084v3.935c0 .598-.485 1.083-1.083 1.083h-5.776a1.083 1.083 0 0 1-1.083-1.083v-3.935Zm1.5.416v3.102h4.942v-3.102H15.75Zm1.38-1.67a1.09 1.09 0 0 1 2.182 0v.17h-2.181v-.17Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 6.667H7A.333.333 0 0 0 6.667 7v18c0 .184.15.333.333.333h8.618M20 6.667 25.334 12M20 6.667v5c0 .184.15.333.334.333h5m0 0v2.293M12 12h2.667M12 16h8M12 20h4\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"20\" y=\"21.682\" width=\"8.59\" height=\"6.136\" rx=\".333\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M21.84 20.454A2.454 2.454 0 0 1 24.296 18v0a2.454 2.454 0 0 1 2.454 2.454v1.2a.028.028 0 0 1-.027.027h-4.854a.028.028 0 0 1-.027-.027v-1.2Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

export default LockedSurvey;
