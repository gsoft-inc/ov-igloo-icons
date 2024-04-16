/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Webcam /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Webcam = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.5 11V5h8v6h-8ZM1 4.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1.385l1.586-.916a1 1 0 0 1 1.5.866v4.33a1 1 0 0 1-1.5.866L12 10.115V11.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-7Zm11 3.883 1.586.916V6.701L12 7.617v.766Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 17.095V6.905h12.75v10.19H4ZM2.5 6.405a1 1 0 0 1 1-1h13.75a1 1 0 0 1 1 1v2.7L21 7.519a1 1 0 0 1 1.5.866v7.232a1 1 0 0 1-1.5.866l-2.75-1.588v2.7a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V6.406Zm15.75 6.757L21 14.75v-5.5l-2.75 1.588v2.324Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.333 22.793V9.207h17v13.586h-17Zm-2-14.586a1 1 0 0 1 1-1h19a1 1 0 0 1 1 1v3.934L28 10.024c.889-.513 2 .128 2 1.155v9.642a1.333 1.333 0 0 1-2 1.155l-3.667-2.117v3.934a1 1 0 0 1-1 1h-19a1 1 0 0 1-1-1V8.207Zm21 9.343L28 19.666v-7.332l-3.667 2.116v3.1Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Webcam.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Webcam;
