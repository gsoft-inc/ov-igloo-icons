/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <OneOnOne /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const OneOnOne = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.75 10.167v-3.5l-1.25.7M10.75 10.167v-3.5l-1.25.7\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"7.75\" cy=\"7.5\" r=\".5\" fill=\"#233043\"/><circle cx=\"7.75\" cy=\"9.5\" r=\".5\" fill=\"#233043\"/><rect x=\"2\" y=\"3.5\" width=\"12\" height=\"10\" rx=\".25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5.5 2v2.5M10.5 2v2.5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 2.25a.75.75 0 0 1 .75.75v1.25h6.5V3a.75.75 0 0 1 1.5 0v1.25h2.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h2.75V3A.75.75 0 0 1 8 2.25Zm7.25 3.5V6a.75.75 0 0 0 1.5 0v-.25h2.5v12.5H4.75V5.75h2.5V6a.75.75 0 0 0 1.5 0v-.25h6.5ZM9.447 10a.75.75 0 0 0-1.166-.624l-1.5 1a.75.75 0 1 0 .832 1.248l.334-.223V15a.75.75 0 0 0 1.5 0v-5Zm7.104-.661a.75.75 0 0 1 .396.661v5a.75.75 0 0 1-1.5 0v-3.599l-.334.223a.75.75 0 1 1-.832-1.248l1.5-1a.75.75 0 0 1 .77-.037Zm-4.104 1.411a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.666 3a1 1 0 0 1 1 1v1.667h8.667V4a1 1 0 1 1 2 0v1.667H26c.92 0 1.667.746 1.667 1.666v17.334c0 .92-.747 1.666-1.667 1.666H6c-.92 0-1.667-.746-1.667-1.666V7.333c0-.92.746-1.666 1.667-1.666h3.667V4a1 1 0 0 1 1-1Zm9.667 4.667V8a1 1 0 1 0 2 0v-.333h3.334v16.666H6.333V7.667h3.334V8a1 1 0 1 0 2 0v-.333h8.666Zm-7.737 5.666a1 1 0 0 0-1.555-.832l-2 1.334a1 1 0 1 0 1.11 1.664l.445-.297V20a1 1 0 1 0 2 0v-6.667Zm9.472-.881a1 1 0 0 1 .528.881V20a1 1 0 1 1-2 0v-4.798l-.445.297a1 1 0 0 1-1.11-1.664l2-1.334a1 1 0 0 1 1.027-.05Zm-5.472 1.881a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

OneOnOne.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default OneOnOne;
