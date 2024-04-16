/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Unarchive /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Unarchive = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2.25\" y=\"2.75\" width=\"11.5\" height=\"2.5\" rx=\".25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M3 5.5a.25.25 0 0 1 .25-.25h9.5a.25.25 0 0 1 .25.25V13a.25.25 0 0 1-.25.25h-9.5A.25.25 0 0 1 3 13V5.5ZM9.667 8.917 8 7.25m0 0L6.333 8.917M8 7.25v4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.25 5.5c0-.69.56-1.25 1.25-1.25h15c.69 0 1.25.56 1.25 1.25v2c0 .605-.43 1.11-1 1.225V18.5c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25V8.725c-.57-.116-1-.62-1-1.225v-2Zm2.5 3.25h12.5v9.5H5.75v-9.5Zm13.5-1.5H4.75v-1.5h14.5v1.5Zm-5.28 6.28a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22v4.19a.75.75 0 0 0 1.5 0v-4.19l1.22 1.22Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"5.333\" y=\"6.667\" width=\"21.333\" height=\"4\" rx=\".667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6.667 10.667h18.666v14a.667.667 0 0 1-.666.666H7.333a.667.667 0 0 1-.666-.666v-14ZM19.333 17.333 16 14m0 0-3.333 3.333M16 14v8\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

export default Unarchive;
