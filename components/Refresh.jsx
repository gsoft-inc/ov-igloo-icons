/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Refresh /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Refresh = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.82 7.148a4.296 4.296 0 0 1 8.026-1.132\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12.251 3.963v2.02a.25.25 0 0 1-.25.25h-2.02M12.18 8.852a4.296 4.296 0 0 1-8.026 1.131\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M3.749 12.041v-2.024a.25.25 0 0 1 .25-.25h2.025\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.73 11.223a6.444 6.444 0 0 1 12.04-1.698\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M18.377 6.444v3.072c0 .184-.15.333-.334.333h-3.072M18.27 13.777a6.444 6.444 0 0 1-12.04 1.698\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5.624 18.562v-3.078c0-.184.149-.334.333-.334h3.078\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.641 14.3a8.592 8.592 0 0 1 16.051-2.263\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M24.502 7.93v4.207c0 .184-.15.333-.333.333h-4.207M24.359 17.707A8.592 8.592 0 0 1 8.308 19.97\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7.498 24.087V19.87c0-.184.15-.333.333-.333h4.216\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

Refresh.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Refresh;
