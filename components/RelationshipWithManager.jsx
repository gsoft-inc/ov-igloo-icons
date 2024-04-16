/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <RelationshipWithManager /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const RelationshipWithManager = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.921 2.104a1.414 1.414 0 1 0 0 2.829 1.414 1.414 0 0 0 0-2.83ZM5.403 3.518a2.518 2.518 0 1 1 5.036 0 2.518 2.518 0 0 1-5.036 0ZM3.727 10.173a3.465 3.465 0 0 1 3.465-3.465h1.631a3.465 3.465 0 0 1 3.466 3.465h-1.223a2.242 2.242 0 0 0-2.243-2.242h-1.63a2.242 2.242 0 0 0-2.243 2.242H3.727ZM2.3 12.62a1.63 1.63 0 1 1 3.262 0 1.63 1.63 0 0 1-3.262 0Zm1.63-.409a.408.408 0 1 0 0 .816.408.408 0 0 0 0-.816ZM6.377 12.62a1.63 1.63 0 1 1 3.261 0 1.63 1.63 0 0 1-3.261 0Zm1.63-.409a.408.408 0 1 0 0 .816.408.408 0 0 0 0-.816ZM10.454 12.62a1.63 1.63 0 1 1 3.261 0 1.63 1.63 0 0 1-3.261 0Zm1.63-.409a.408.408 0 1 0 0 .816.408.408 0 0 0 0-.816Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.75 20a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm.75-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM17.75 20a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm.75-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM11.313 20a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm.75-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12 3.25a2.531 2.531 0 1 0 0 5.062 2.531 2.531 0 0 0 0-5.062ZM7.969 5.781a4.031 4.031 0 1 1 8.062 0 4.031 4.031 0 0 1-8.062 0Zm-2.473 9.407a4.25 4.25 0 0 1 4.25-4.25h4.508a4.25 4.25 0 0 1 4.25 4.25v1.03h-1.5v-1.03a2.75 2.75 0 0 0-2.75-2.75H9.746a2.75 2.75 0 0 0-2.75 2.75v1.03h-1.5v-1.03Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.333 26.667a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM23.667 26.667a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.083 26.667a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM16 4.333a3.375 3.375 0 1 0 0 6.75 3.375 3.375 0 0 0 0-6.75Zm-5.375 3.375a5.375 5.375 0 1 1 10.75 0 5.375 5.375 0 0 1-10.75 0ZM7.328 20.25a5.667 5.667 0 0 1 5.666-5.667h6.012a5.667 5.667 0 0 1 5.666 5.667v1.375h-2V20.25a3.667 3.667 0 0 0-3.666-3.667h-6.012a3.667 3.667 0 0 0-3.666 3.667v1.375h-2V20.25Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

RelationshipWithManager.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default RelationshipWithManager;
