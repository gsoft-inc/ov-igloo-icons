/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Email /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Email = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"3.5\" width=\"12\" height=\"9\" rx=\".25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m3.333 4.667 4.45 3.814a.333.333 0 0 0 .434 0l4.45-3.814\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.5 4.75c-.69 0-1.25.56-1.25 1.25v11c0 .69.56 1.25 1.25 1.25h15c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-15Zm.25 2.524v9.476h14.5V7.274l-6.437 5.516a1.25 1.25 0 0 1-1.627 0L4.75 7.274ZM18.14 6.25H5.86L12 11.512l6.14-5.262Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6 7c-.92 0-1.667.746-1.667 1.667v14.666C4.333 24.253 5.08 25 6 25h20c.92 0 1.667-.746 1.667-1.667V8.667C27.667 7.747 26.92 7 26 7H6Zm.333 3.365V23h19.334V10.364l-8.582 7.357a1.667 1.667 0 0 1-2.17 0l-8.582-7.356ZM24.185 9H7.816L16 16.016 24.186 9Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Email.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Email.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Email;
