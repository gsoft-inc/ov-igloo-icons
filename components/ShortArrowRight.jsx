/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ShortArrowRight /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ShortArrowRight = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.47 13.47a.75.75 0 1 0 1.06 1.06l5.883-5.882a.94.94 0 0 0 .059-.065.749.749 0 0 0 0-1.166.94.94 0 0 0-.06-.065L8.53 1.47a.75.75 0 0 0-1.06 1.06l4.72 4.72H2a.75.75 0 0 0 0 1.5h10.19l-4.72 4.72Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.442 12.606a.749.749 0 0 0 0-1.212 1.012 1.012 0 0 0-.088-.101L12.53 2.47a.75.75 0 0 0-1.06 1.06l7.72 7.72H3a.75.75 0 0 0 0 1.5h16.19l-7.72 7.72a.75.75 0 0 0 1.06 1.06l8.824-8.823c.032-.032.061-.066.088-.101Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28.59 16.808a.999.999 0 0 0 0-1.616 1.357 1.357 0 0 0-.119-.135L16.707 3.293a1 1 0 1 0-1.414 1.414L25.586 15H4a1 1 0 1 0 0 2h21.586L15.293 27.293a1 1 0 1 0 1.414 1.414l11.764-11.764c.043-.043.083-.088.119-.135Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ShortArrowRight.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

ShortArrowRight.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ShortArrowRight;
