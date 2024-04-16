/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Refresh /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Refresh = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.82 7.148a4.296 4.296 0 0 1 8.026-1.132\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12.251 3.963v2.02a.25.25 0 0 1-.25.25h-2.02M12.18 8.852a4.296 4.296 0 0 1-8.026 1.132\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M3.749 12.041v-2.024a.25.25 0 0 1 .25-.25h2.025\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.466 10.87A5.694 5.694 0 0 1 16.622 8.6h-1.65a.75.75 0 0 0 0 1.5h3.071c.599 0 1.084-.485 1.084-1.084V5.944a.75.75 0 0 0-1.5 0V7.45a7.194 7.194 0 0 0-12.631 3.127.75.75 0 1 0 1.47.293Zm5.486 6.833a5.694 5.694 0 0 0 5.582-4.572.75.75 0 0 1 1.47.293 7.194 7.194 0 0 1-12.63 3.127v1.511a.75.75 0 0 1-1.5 0v-3.078c0-.599.485-1.084 1.083-1.084h3.078a.75.75 0 0 1 0 1.5H7.38a5.683 5.683 0 0 0 4.573 2.303Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.641 14.297a8.592 8.592 0 0 1 16.051-2.264\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M24.502 7.925v4.208c0 .184-.15.333-.333.333h-4.207M24.359 17.703a8.592 8.592 0 0 1-16.051 2.264\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7.498 24.083v-4.216c0-.184.15-.333.333-.333h4.216\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Refresh.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Refresh;
