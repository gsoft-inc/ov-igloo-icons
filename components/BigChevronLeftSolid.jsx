/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <BigChevronLeftSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const BigChevronLeftSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm1.53-8.47a.75.75 0 0 0-1.06-1.06L5.705 7.234a1.083 1.083 0 0 0 0 1.532L8.47 11.53a.75.75 0 0 0 1.06-1.06L7.06 8l2.47-2.47z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm2.53-17.47a.75.75 0 1 0-1.06-1.06l-5.647 5.646a1.25 1.25 0 0 0 0 1.768l5.646 5.646a.75.75 0 0 0 1.061-1.06L9.06 12l5.47-5.47z\" fill=\"#233043\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" transform=\"matrix(-1 0 0 1 24 0)\" d=\"M0 0h24v24H0z\"/></clipPath></defs></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.374-23.293a1 1 0 0 0-1.415-1.414l-7.528 7.529c-.651.65-.651 1.706 0 2.357l7.528 7.528a1 1 0 0 0 1.415-1.414L12.08 16l7.293-7.293z\" fill=\"#233043\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" transform=\"matrix(-1 0 0 1 32 0)\" d=\"M0 0h32v32H0z\"/></clipPath></defs></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

BigChevronLeftSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

BigChevronLeftSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default BigChevronLeftSolid;
