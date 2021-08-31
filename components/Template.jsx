/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Template /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Template = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 6.286v7.38c0 .185.15.334.333.334h4.381M2 6.286V2.333C2 2.15 2.15 2 2.333 2h11.334c.184 0 .333.15.333.333v3.953m-12 0h4.714m7.286 0v7.38c0 .185-.15.334-.333.334H6.714M14 6.286H6.714m0 0V14\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 10v8.5a.5.5 0 0 0 .5.5h5M5 10V5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V10M5 10h5.5m8.5 0v8.5a.5.5 0 0 1-.5.5h-8m8.5-9h-8.5m0 0v9\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.667 13.337V24.67c0 .369.298.667.666.667H14m-7.333-12v-6c0-.368.298-.667.666-.667h17.334c.368 0 .666.299.666.667v6m-18.666 0H14m11.333 0V24.67a.667.667 0 0 1-.666.667H14m11.333-12H14m0 0v12\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Template.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Template.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Template;
