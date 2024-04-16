/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <AlignmentSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const AlignmentSolid = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0ZM9.452 9.746a.375.375 0 0 0 .294-.294l.69-3.446a.375.375 0 0 0-.442-.441l-3.446.689a.375.375 0 0 0-.294.294l-.69 3.446a.375.375 0 0 0 .442.441l3.446-.689ZM8 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-7.447 2.904a.5.5 0 0 0 .35-.351l1.816-6.659a.5.5 0 0 0-.614-.614L9.447 9.096a.5.5 0 0 0-.35.351L7.28 16.106a.5.5 0 0 0 .614.614l6.658-1.816ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

AlignmentSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default AlignmentSolid;
