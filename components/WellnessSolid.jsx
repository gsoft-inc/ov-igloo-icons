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
const WellnessSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.463 18.942a.8.8 0 0 0 1.075.002l.622-.562.032-.029C17.294 14.625 20 12.166 20 9.15c0-2.464-1.936-4.4-4.4-4.4A4.79 4.79 0 0 0 12 6.422 4.79 4.79 0 0 0 8.4 4.75 4.357 4.357 0 0 0 4 9.15c0 3.021 2.716 5.484 6.83 9.215l.01.009.623.568ZM11.25 12.5h-1.5a.75.75 0 1 1 0-1.5h1.5V9.5a.75.75 0 1 1 1.5 0V11h1.5a.75.75 0 1 1 0 1.5h-1.5V14a.75.75 0 1 1-1.5 0v-1.5Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.33 21.24a1 1 0 0 0 1.343.002l.777-.702.04-.036C18.616 15.844 22 12.77 22 9c0-3.08-2.42-5.5-5.5-5.5-1.74 0-3.41.81-4.5 2.09C10.91 4.31 9.24 3.5 7.5 3.5 4.42 3.5 2 5.92 2 9c0 3.777 3.394 6.855 8.537 11.518l.013.012.78.71ZM11.25 13h-2a.75.75 0 1 1 0-1.5h2v-2a.75.75 0 1 1 1.5 0v2h2a.75.75 0 1 1 0 1.5h-2v2a.75.75 0 1 1-1.5 0v-2Z\" fill=\"#233043\"/></svg>"}
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

WellnessSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default WellnessSolid;
