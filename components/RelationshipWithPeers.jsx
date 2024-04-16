/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <RelationshipWithPeers /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const RelationshipWithPeers = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.02 11.02A5.18 5.18 0 0 0 10.071.75 5.18 5.18 0 0 0 4.98 4.98a5.18 5.18 0 0 0 .949 10.27 5.18 5.18 0 0 0 5.091-4.23Zm-.949-9.027a3.937 3.937 0 0 0-3.8 2.911 5.177 5.177 0 0 1 4.108 2.518 1.834 1.834 0 0 0 1.396-1.107.621.621 0 1 1 1.15.47 3.076 3.076 0 0 1-2.035 1.796c.11.368.18.752.206 1.149a3.937 3.937 0 0 0-1.025-7.737ZM1.993 10.07a3.936 3.936 0 1 1 7.871 0 3.936 3.936 0 0 1-7.871 0ZM8 4.893A.621.621 0 1 0 8 3.65a.621.621 0 0 0 0 1.243ZM3.857 9.036a.621.621 0 1 0 0-1.243.621.621 0 0 0 0 1.243Zm4.143 0a.621.621 0 1 0 0-1.243.621.621 0 0 0 0 1.243Zm-4.585 1.082c.317-.13.68.022.81.34.271.662.93 1.133 1.704 1.133.773 0 1.432-.471 1.703-1.133a.622.622 0 0 1 1.15.47 3.08 3.08 0 0 1-2.853 1.905 3.08 3.08 0 0 1-2.854-1.905.621.621 0 0 1 .34-.81Zm9.35-5.847a.621.621 0 1 1-1.244 0 .621.621 0 0 1 1.243 0Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.5 2.25a6.25 6.25 0 0 0-6.21 5.54 7.746 7.746 0 0 1 5.658 3.41c.18.033.363.05.552.05a3.026 3.026 0 0 0 2.805-1.868.75.75 0 1 1 1.389.568 4.524 4.524 0 0 1-3.95 2.793c.237.621.396 1.28.465 1.966A6.25 6.25 0 0 0 15.5 2.25Zm7.75 6.25a7.75 7.75 0 0 1-7.034 7.716 7.75 7.75 0 1 1-8.433-8.434A7.75 7.75 0 0 1 23.25 8.5Zm-21 7a6.25 6.25 0 1 1 12.5-.001 6.25 6.25 0 0 1-12.5 0Zm10-8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6.475 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.247 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5.481 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7.013 1.972a.75.75 0 0 1 .978.41A3.025 3.025 0 0 0 8.5 18.249a3.025 3.025 0 0 0 2.806-1.867.75.75 0 1 1 1.388.568 4.525 4.525 0 0 1-4.194 2.799 4.525 4.525 0 0 1-4.194-2.8.75.75 0 0 1 .41-.977Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.667 3a8.334 8.334 0 0 0-8.28 7.386 10.329 10.329 0 0 1 7.544 4.547c.238.044.484.066.735.066a4.034 4.034 0 0 0 3.741-2.49 1 1 0 0 1 1.851.758 6.032 6.032 0 0 1-5.265 3.724c.315.828.527 1.707.62 2.621A8.334 8.334 0 0 0 20.666 3Zm10.332 8.333c0 5.384-4.118 9.807-9.377 10.289-.483 5.258-4.905 9.376-10.29 9.376C5.627 30.998 1 26.372 1 20.665c0-5.384 4.119-9.807 9.378-10.289C10.86 5.118 15.283 1 20.667 1c5.706 0 10.332 4.626 10.332 10.333ZM3 20.665a8.333 8.333 0 1 1 16.665 0 8.333 8.333 0 0 1-16.665 0ZM16.333 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Zm8.634 0a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Zm-16.638 8a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Zm7.308 1.333a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667Zm-9.35 2.63a1 1 0 0 1 1.304.546 4.034 4.034 0 0 0 3.741 2.49 4.034 4.034 0 0 0 3.74-2.49 1 1 0 1 1 1.852.758 6.034 6.034 0 0 1-5.592 3.732A6.034 6.034 0 0 1 5.74 22.6a1 1 0 0 1 .547-1.304Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

RelationshipWithPeers.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default RelationshipWithPeers;
