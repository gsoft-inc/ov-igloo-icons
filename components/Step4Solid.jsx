/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Step4Solid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Step4Solid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm-.576-8.518a.75.75 0 1 0-1.38-.588L5.043 7.242c-.305.715.22 1.508.997 1.508h2.453v2.063a.75.75 0 0 0 1.5 0V5.188a.75.75 0 1 0-1.5 0V7.25H6.67l.754-1.768z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.998-11.456a.75.75 0 0 0-1.38-.588l-1.4 3.286c-.305.714.22 1.508.996 1.508h3.69v3a.75.75 0 1 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0v3h-3.06l1.154-2.706z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16.004\" fill=\"#233043\" r=\"10.667\"/><path d=\"M18.21 11.004v5m0 5v-5m0 0h-6.087c-.24 0-.4-.244-.307-.464l1.933-4.536\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Step4Solid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Step4Solid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Step4Solid;
