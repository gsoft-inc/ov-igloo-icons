/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <StartOver /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const StartOver = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 6h7.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H9\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6 8 4.236 6.236a.333.333 0 0 1 0-.472L6 4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.362 17.25h5.25v-7.5H7.672l1.72 1.72a.75.75 0 1 1-1.06 1.06L5.567 9.766a1.083 1.083 0 0 1 0-1.532L8.332 5.47a.75.75 0 0 1 1.06 1.06l-1.72 1.72h11.19c.69 0 1.25.56 1.25 1.25v8c0 .69-.56 1.25-1.25 1.25h-5.5a.75.75 0 0 1 0-1.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 12h15.5a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H18\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m12 16-3.764-3.764a.333.333 0 0 1 0-.472L12 8\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

StartOver.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

StartOver.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default StartOver;
