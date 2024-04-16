/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Happiness /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Happiness = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM5.375 6.687a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Zm6.125-.875a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0ZM4.805 8.541a.75.75 0 1 0-1.48.248 4.741 4.741 0 0 0 9.35 0 .75.75 0 1 0-1.48-.248 3.241 3.241 0 0 1-6.39 0Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9.882 3.826a.75.75 0 0 0-1.48.248 6.452 6.452 0 0 0 12.722 0 .75.75 0 0 0-1.479-.248 4.951 4.951 0 0 1-9.763 0Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.333 16c0 6.26-5.074 11.333-11.333 11.333C9.74 27.333 4.667 22.26 4.667 16 4.667 9.74 9.74 4.667 16 4.667c6.26 0 11.333 5.074 11.333 11.333Zm2 0c0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.333-5.97-13.333-13.333C2.667 8.636 8.637 2.667 16 2.667c7.364 0 13.333 5.97 13.333 13.333Zm-18.666-2.667a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Zm12-1.333A1.333 1.333 0 1 1 20 12a1.333 1.333 0 0 1 2.667 0ZM9.49 17.101a1 1 0 0 0-1.973.331 8.602 8.602 0 0 0 16.963 0 1 1 0 1 0-1.973-.33 6.602 6.602 0 0 1-13.017 0Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Happiness.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Happiness;
