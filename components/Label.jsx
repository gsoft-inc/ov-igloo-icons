/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Label /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Label = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.988 3.355c.071-.07.17-.106.27-.096l4.713.471c.158.016.283.14.299.299l.471 4.714c.01.1-.025.198-.096.269l-5.824 5.823a.333.333 0 0 1-.47 0L1.164 9.65a.333.333 0 0 1 0-.471l5.823-5.824Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"9.591\" cy=\"6.409\" r=\".75\" transform=\"rotate(45 9.59 6.409)\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"m11.853 5.805 5.89.453.452 5.89-7.695 7.695L4.157 13.5l7.696-7.695Zm7.387-.028a1.105 1.105 0 0 0-1.017-1.017l-6.448-.496a1.105 1.105 0 0 0-.866.32L2.775 12.72a1.105 1.105 0 0 0 0 1.563l6.943 6.943a1.105 1.105 0 0 0 1.563 0l8.135-8.134c.228-.228.345-.544.32-.866l-.496-6.448Zm-5.16 4.144a1 1 0 1 0 1.414-1.415 1 1 0 0 0-1.415 1.415Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.306 6.795a.333.333 0 0 1 .261-.097l8.755.674a.333.333 0 0 1 .306.306l.674 8.755a.333.333 0 0 1-.097.261l-10.97 10.97a.333.333 0 0 1-.47 0l-9.429-9.428a.333.333 0 0 1 0-.471l10.97-10.97Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle r=\"1.333\" transform=\"rotate(45 -4.97 29.94)\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Label.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Label.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Label;
