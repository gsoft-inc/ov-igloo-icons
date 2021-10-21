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
const Alert = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.714 3.031a.33.33 0 0 1 .58 0l5.44 9.981a.33.33 0 0 1-.29.488H2.556a.33.33 0 0 1-.29-.488l5.448-9.98ZM8 7v2\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"11.25\" r=\".75\" fill=\"#233043\"/></svg>","24":"<svg width=\"25\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.528 3.89a1.125 1.125 0 0 1 1.956 0l8.779 15.46c.426.75-.116 1.681-.979 1.681H3.716a1.125 1.125 0 0 1-.978-1.68l8.79-15.461Zm.978 1.442L4.468 19.469h16.065L12.506 5.332Zm-.006 5.226c.431 0 .781.35.781.782v3.133a.781.781 0 0 1-1.562 0V11.34c0-.432.35-.782.781-.782Zm0 7.453c.575 0 1.042-.448 1.042-1s-.467-1-1.042-1-1.042.448-1.042 1 .467 1 1.042 1Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.718 5.531a.33.33 0 0 1 .58 0l11.436 20.981a.33.33 0 0 1-.29.488H4.556a.33.33 0 0 1-.29-.488l11.452-20.98ZM16 15.12v4.177\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"22.681\" fill=\"#233043\" r=\"1.333\"/></svg>"}
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

Alert.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Alert;
