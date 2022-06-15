/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ShortArrowLeft /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ShortArrowLeft = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.53 2.53a.75.75 0 0 0-1.06-1.06L1.588 7.352a.928.928 0 0 0-.06.065.749.749 0 0 0 0 1.166.928.928 0 0 0 .06.065L7.47 14.53a.75.75 0 0 0 1.06-1.06L3.81 8.75H14a.75.75 0 0 0 0-1.5H3.81l4.72-4.72Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.558 11.394a.749.749 0 0 0 0 1.212c.027.035.056.069.088.101l8.824 8.823a.75.75 0 0 0 1.06-1.06l-7.72-7.72H21a.75.75 0 0 0 0-1.5H4.81l7.72-7.72a.75.75 0 0 0-1.06-1.06l-8.824 8.823a1.012 1.012 0 0 0-.088.101Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.41 15.192a.999.999 0 0 0 0 1.616c.036.047.076.092.119.135l11.764 11.764a1 1 0 0 0 1.414-1.414L6.414 17H28a1 1 0 1 0 0-2H6.414L16.707 4.707a1 1 0 1 0-1.414-1.414L3.529 15.057a1.347 1.347 0 0 0-.118.135Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ShortArrowLeft.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

ShortArrowLeft.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ShortArrowLeft;
