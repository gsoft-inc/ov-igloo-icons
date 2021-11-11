/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <FeedbackSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const FeedbackSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 8.25a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4v2.408c0 .97 1.257 1.457 1.992.77l3.402-3.178H16a4 4 0 0 0 4-4v-4Zm-5.5 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-6 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.55-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 7.75a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h1v2.935c0 .947 1.077 1.421 1.707.752l3.47-3.687H18a4 4 0 0 0 4-4v-6Zm-15 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

FeedbackSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

FeedbackSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default FeedbackSolid;
