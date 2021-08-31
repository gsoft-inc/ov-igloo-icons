/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Label /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Label = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.988 3.355c.071-.071.17-.106.27-.096l4.713.471c.158.016.283.14.299.299l.471 4.714c.01.099-.025.198-.096.268l-5.824 5.824a.333.333 0 0 1-.47 0L1.164 9.65a.333.333 0 0 1 0-.472l5.823-5.823z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"9.591\" cy=\"6.409\" r=\".75\" transform=\"rotate(45 9.591 6.409)\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.45 4.92a.348.348 0 0 1 .267-.094l6.447.476c.167.012.3.14.313.3l.496 6.19a.32.32 0 0 1-.098.256l-8.135 7.81a.35.35 0 0 1-.48 0L3.315 13.19a.317.317 0 0 1 0-.462l8.134-7.808z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle r=\".98\" transform=\"scale(1.0202 .97939) rotate(45 -3.655 22.011)\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.306 6.799a.333.333 0 0 1 .261-.097l8.755.674a.333.333 0 0 1 .306.306l.674 8.755a.334.334 0 0 1-.097.261l-10.97 10.97a.333.333 0 0 1-.47 0L4.335 18.24a.333.333 0 0 1 0-.472l10.97-10.97z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle r=\"1.333\" transform=\"rotate(45 -4.976 29.943)\" fill=\"#233043\"/></svg>"}
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
