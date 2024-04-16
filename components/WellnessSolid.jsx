/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <WellnessSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const WellnessSolid = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.598 13.394a.6.6 0 0 0 .806.001l.466-.421.024-.021C11.97 10.157 14 8.313 14 6.05c0-1.848-1.452-3.3-3.3-3.3A3.593 3.593 0 0 0 8 4.004 3.593 3.593 0 0 0 5.3 2.75 3.268 3.268 0 0 0 2 6.05c0 2.266 2.037 4.113 5.122 6.911l.008.007.468.426Zm-.16-4.832H6.313a.563.563 0 1 1 0-1.124h1.125V6.313a.563.563 0 1 1 1.125 0v1.125h1.124a.562.562 0 1 1 0 1.125H8.563v1.124a.562.562 0 1 1-1.126 0V8.563Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.33 21.24a1 1 0 0 0 1.343.002l.777-.702.04-.036C18.616 15.844 22 12.77 22 9c0-3.08-2.42-5.5-5.5-5.5-1.74 0-3.41.81-4.5 2.09C10.91 4.31 9.24 3.5 7.5 3.5 4.42 3.5 2 5.92 2 9c0 3.777 3.394 6.855 8.537 11.518l.013.012.78.71ZM11.25 13h-2a.75.75 0 1 1 0-1.5h2v-2a.75.75 0 1 1 1.5 0v2h2a.75.75 0 1 1 0 1.5h-2v2a.75.75 0 1 1-1.5 0v-2Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

WellnessSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default WellnessSolid;
