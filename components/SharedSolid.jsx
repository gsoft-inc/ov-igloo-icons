/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <SharedSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const SharedSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.4 19.713h2.55c.69 0 1.25-.56 1.25-1.25V17.9a4.75 4.75 0 0 0-4.75-4.75h-.937a6.236 6.236 0 0 1 2.188 4.75v.564c0 .45-.109.875-.3 1.25zM13.285 11.96a3.915 3.915 0 1 0 0-7.516A5.397 5.397 0 0 1 14.8 8.2c0 1.46-.577 2.785-1.516 3.759z\" fill=\"#233043\"/><circle cx=\"9.386\" cy=\"8.201\" r=\"3.165\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4.322 17.899a4 4 0 0 1 4-4h2.129a4 4 0 0 1 4 4v.564a.5.5 0 0 1-.5.5H4.82a.5.5 0 0 1-.5-.5V17.9z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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
