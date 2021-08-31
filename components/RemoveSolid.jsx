/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <RemoveSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const RemoveSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.667 8.666a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3.22-2.78a.75.75 0 0 1 0 1.061l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06l-1.72-1.72-1.72 1.72a.75.75 0 0 1-1.06-1.06l1.719-1.72-1.72-1.72a.75.75 0 1 1 1.061-1.06l1.72 1.719 1.72-1.72a.75.75 0 0 1 1.06 0z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#233043\"/><path d=\"m9 15 6-6M15 15 9 9\" stroke=\"#fff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.667 16c0 5.891-4.776 10.667-10.667 10.667S5.333 21.89 5.333 16 10.11 5.333 16 5.333 26.667 10.11 26.667 16zm-5.96-4.707a1 1 0 0 1 0 1.414L17.414 16l3.293 3.293a1 1 0 0 1-1.414 1.414L16 17.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L14.586 16l-3.293-3.293a1 1 0 0 1 1.414-1.414L16 14.586l3.293-3.293a1 1 0 0 1 1.414 0z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

RemoveSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

RemoveSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default RemoveSolid;
