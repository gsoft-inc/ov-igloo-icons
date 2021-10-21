/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Calendar /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Calendar = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"3.5\" width=\"12\" height=\"10\" rx=\".25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5.5 2v2.5M10.5 2v2.5M2.5 7h11\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.75 3a.75.75 0 0 0-1.5 0v1.25H4.5c-.69 0-1.25.56-1.25 1.25v13c0 .69.56 1.25 1.25 1.25h15c.69 0 1.25-.56 1.25-1.25v-13c0-.69-.56-1.25-1.25-1.25h-2.75V3a.75.75 0 0 0-1.5 0v1.25h-6.5V3Zm10.5 5.25v-2.5h-2.5V6a.75.75 0 0 1-1.5 0v-.25h-6.5V6a.75.75 0 0 1-1.5 0v-.25h-2.5v2.5h14.5Zm-14.5 1.5h14.5v8.5H4.75v-8.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.666 4a1 1 0 1 0-2 0v1.667H6c-.92 0-1.667.746-1.667 1.666v17.334c0 .92.746 1.666 1.667 1.666h20c.92 0 1.667-.746 1.667-1.666V7.333c0-.92-.747-1.666-1.667-1.666h-3.667V4a1 1 0 1 0-2 0v1.667h-8.666V4Zm14 7V7.667h-3.333V8a1 1 0 1 1-2 0v-.333h-8.666V8a1 1 0 1 1-2 0v-.333H6.333V11h19.334ZM6.334 13h19.334v11.333H6.333V13Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Calendar.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Calendar.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Calendar;
