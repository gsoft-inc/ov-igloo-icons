/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <SharedSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const SharedSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.4 19.713h2.55c.69 0 1.25-.56 1.25-1.25V17.9a4.75 4.75 0 0 0-4.75-4.75h-.937a6.236 6.236 0 0 1 2.188 4.75v.564c0 .45-.109.875-.3 1.25ZM13.285 11.96A3.92 3.92 0 0 0 18.3 8.202a3.915 3.915 0 0 0-5.016-3.759A5.397 5.397 0 0 1 14.8 8.202c0 1.46-.577 2.784-1.516 3.758Z\" fill=\"#233043\"/><circle cx=\"9.386\" cy=\"8.202\" r=\"3.165\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4.322 17.899a4 4 0 0 1 4-4h2.129a4 4 0 0 1 4 4v.564a.5.5 0 0 1-.5.5H4.82a.5.5 0 0 1-.5-.5V17.9Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.4 19.713h2.55c.69 0 1.25-.56 1.25-1.25V17.9a4.75 4.75 0 0 0-4.75-4.75h-.937a6.236 6.236 0 0 1 2.188 4.75v.564c0 .45-.109.875-.3 1.25ZM13.285 11.96A3.92 3.92 0 0 0 18.3 8.202a3.915 3.915 0 0 0-5.016-3.759A5.397 5.397 0 0 1 14.8 8.202c0 1.46-.577 2.784-1.516 3.758Z\" fill=\"#233043\"/><circle cx=\"9.386\" cy=\"8.202\" r=\"3.165\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4.322 17.899a4 4 0 0 1 4-4h2.129a4 4 0 0 1 4 4v.564a.5.5 0 0 1-.5.5H4.82a.5.5 0 0 1-.5-.5V17.9Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.867 26.285h3.4c.92 0 1.667-.747 1.667-1.667v-.753a6.333 6.333 0 0 0-6.333-6.333h-1.25a8.315 8.315 0 0 1 2.916 6.333v.753c0 .6-.144 1.167-.4 1.667ZM17.713 15.946a5.22 5.22 0 1 0 0-10.022 7.196 7.196 0 0 1 2.022 5.011c0 1.947-.77 3.713-2.022 5.011Z\" fill=\"#233043\"/><circle cx=\"12.515\" cy=\"10.935\" r=\"4.22\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5.762 23.865a5.333 5.333 0 0 1 5.334-5.333h2.838a5.333 5.333 0 0 1 5.333 5.333v.753a.667.667 0 0 1-.666.667H6.429a.667.667 0 0 1-.667-.667v-.753Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

SharedSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

SharedSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default SharedSolid;
