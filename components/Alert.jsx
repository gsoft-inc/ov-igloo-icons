/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Alert /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Alert = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.714 3.031a.33.33 0 0 1 .58 0l5.44 9.981a.33.33 0 0 1-.29.488H2.556a.33.33 0 0 1-.29-.488l5.448-9.98ZM8 7v2\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"11.25\" r=\".75\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.067 3.89a1.06 1.06 0 0 1 1.878 0l8.427 15.46c.41.75-.11 1.681-.939 1.681H3.567c-.828 0-1.348-.93-.939-1.68L11.067 3.89Zm.938 1.442L4.29 19.469h15.423L12.005 5.332ZM12 10.558c.414 0 .75.35.75.782v3.133c0 .431-.336.78-.75.78s-.75-.349-.75-.78V11.34c0-.432.336-.782.75-.782Zm0 7.453a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.718 5.531a.33.33 0 0 1 .58 0l11.436 20.981a.33.33 0 0 1-.29.488H4.556a.33.33 0 0 1-.29-.488l11.452-20.98ZM16 15.12v4.177\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"22.681\" fill=\"#233043\" r=\"1.333\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Alert.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Alert;
