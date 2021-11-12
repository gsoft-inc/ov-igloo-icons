/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <BigChevronRightSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const BigChevronRightSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM6.313 4.354a.5.5 0 1 1 .707-.708l3.764 3.765a.833.833 0 0 1 0 1.178L7.02 12.354a.5.5 0 0 1-.707-.708L9.96 8 6.313 4.354Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.47 5.47a.75.75 0 0 0 0 1.06L14.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06l5.647-5.646a1.25 1.25 0 0 0 0-1.768L10.53 5.47a.75.75 0 0 0-1.06 0Z\" fill=\"#fff\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16ZM12.626 8.707a1 1 0 0 1 1.415-1.414l7.528 7.529c.651.65.651 1.706 0 2.357l-7.528 7.528a1 1 0 0 1-1.415-1.414L19.92 16l-7.293-7.293Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

BigChevronRightSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

BigChevronRightSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default BigChevronRightSolid;
