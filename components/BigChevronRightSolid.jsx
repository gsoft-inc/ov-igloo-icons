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
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12ZM6.47 5.53a.75.75 0 0 1 1.06-1.06l2.765 2.764a1.083 1.083 0 0 1 0 1.532L7.53 11.53a.75.75 0 0 1-1.06-1.06L8.94 8 6.47 5.53Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM9.47 6.53a.75.75 0 0 1 1.06-1.06l5.647 5.646a1.25 1.25 0 0 1 0 1.768L10.53 18.53a.75.75 0 0 1-1.061-1.06L14.94 12 9.47 6.53Z\" fill=\"#233043\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16ZM12.626 8.707a1 1 0 0 1 1.415-1.414l7.528 7.529c.651.65.651 1.706 0 2.357l-7.528 7.528a1 1 0 0 1-1.415-1.414L19.92 16l-7.293-7.293Z\" fill=\"#233043\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v32H0z\"/></clipPath></defs></svg>"}
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
