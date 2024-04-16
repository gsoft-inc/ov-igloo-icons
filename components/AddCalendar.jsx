/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <AddCalendar /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const AddCalendar = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 6.5v4M6 8.5h4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"2\" y=\"3.5\" width=\"12\" height=\"10\" rx=\".25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5.5 2v2.5M10.5 2v2.5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 2.25a.75.75 0 0 1 .75.75v1.25h6.5V3a.75.75 0 0 1 1.5 0v1.25h2.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h2.75V3A.75.75 0 0 1 8 2.25Zm7.25 3.5V6a.75.75 0 0 0 1.5 0v-.25h2.5v12.5H4.75V5.75h2.5V6a.75.75 0 0 0 1.5 0v-.25h6.5Zm-2.5 3.266a.75.75 0 0 0-1.5 0v2.234H9.016a.75.75 0 0 0 0 1.5h2.234v2.234a.75.75 0 0 0 1.5 0V12.75h2.234a.75.75 0 0 0 0-1.5H12.75V9.016Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.667 3a1 1 0 0 1 1 1v1.667h8.666V4a1 1 0 1 1 2 0v1.667H26c.92 0 1.667.746 1.667 1.666v17.334c0 .92-.746 1.666-1.667 1.666H6c-.92 0-1.667-.746-1.667-1.666V7.333c0-.92.747-1.666 1.667-1.666h3.667V4a1 1 0 0 1 1-1Zm9.666 4.667V8a1 1 0 1 0 2 0v-.333h3.334v16.666H6.333V7.667h3.334V8a1 1 0 0 0 2 0v-.333h8.666ZM17 12.022a1 1 0 0 0-2 0V15h-2.978a1 1 0 1 0 0 2H15v2.978a1 1 0 1 0 2 0V17h2.979a1 1 0 1 0 0-2h-2.98v-2.978Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

AddCalendar.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default AddCalendar;
