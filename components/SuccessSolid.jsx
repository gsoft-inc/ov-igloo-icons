/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <SuccessSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const SuccessSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm3.555-7.37a.75.75 0 1 0-1.11-1.01l-3.22 3.544L5.53 7.47a.75.75 0 1 0-1.06 1.06l2.002 2.004c.438.437 1.152.42 1.568-.038l3.515-3.866Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#233043\"/><path d=\"m8 12 2.63 2.63a.5.5 0 0 0 .723-.018L16 9.5\" stroke=\"#fff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 26.667c5.891 0 10.667-4.776 10.667-10.667S21.89 5.333 16 5.333 5.333 10.11 5.333 16 10.11 26.667 16 26.667Zm6.073-13.328a1 1 0 0 0-1.48-1.345l-5.96 6.557-3.26-3.258a1 1 0 0 0-1.413 1.414l3.505 3.506a1.667 1.667 0 0 0 2.412-.058l6.196-6.816Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

SuccessSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

SuccessSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default SuccessSolid;
