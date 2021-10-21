/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Portrait /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Portrait = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"5.5\" r=\"1.75\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5 11.667A2.667 2.667 0 0 1 7.667 9h.666A2.667 2.667 0 0 1 11 11.667v0c0 .184-.15.333-.333.333H5.333A.333.333 0 0 1 5 11.667v0ZM14 5V2.333A.333.333 0 0 0 13.667 2H11M5 2H2.333A.333.333 0 0 0 2 2.333V5m0 6v2.666c0 .185.15.334.333.334H5m6 0h2.667c.184 0 .333-.15.333-.334V11\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.5 3.25c-.69 0-1.25.56-1.25 1.25V8a.75.75 0 0 0 1.5 0V4.75H8a.75.75 0 0 0 0-1.5H4.5Zm11.5 0a.75.75 0 0 0 0 1.5h3.25V8a.75.75 0 0 0 1.5 0V4.5c0-.69-.56-1.25-1.25-1.25H16ZM4.75 16a.75.75 0 0 0-1.5 0v3.5c0 .69.56 1.25 1.25 1.25H8a.75.75 0 0 0 0-1.5H4.75V16Zm16 0a.75.75 0 0 0-1.5 0v3.25H16a.75.75 0 0 0 0 1.5h3.5c.69 0 1.25-.56 1.25-1.25V16ZM12 7.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM8.75 9a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-1.5 8.056a4.306 4.306 0 0 1 4.306-4.306h.888a4.306 4.306 0 0 1 4.306 4.306c0 .66-.535 1.194-1.194 1.194H8.444c-.66 0-1.194-.535-1.194-1.194Zm7.984-.306a2.806 2.806 0 0 0-2.79-2.5h-.888a2.806 2.806 0 0 0-2.79 2.5h6.468Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"12\" r=\"3.333\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10.667 22.74a4.74 4.74 0 0 1 4.74-4.74h1.186a4.74 4.74 0 0 1 4.74 4.74v0a.593.593 0 0 1-.592.593h-9.482a.593.593 0 0 1-.592-.592v0ZM26.667 10.667V6A.667.667 0 0 0 26 5.333h-4.667m-10.666 0H6A.667.667 0 0 0 5.333 6v4.667m0 10.666V26c0 .368.299.667.667.667h4.667m10.666 0H26a.667.667 0 0 0 .667-.667v-4.667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Portrait.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Portrait.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Portrait;
