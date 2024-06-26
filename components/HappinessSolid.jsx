/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <HappinessSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const HappinessSolid = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12ZM5.75 6.875a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm5.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.12 8.487a.5.5 0 1 0-.986.166 3.92 3.92 0 0 0 7.732 0 .5.5 0 0 0-.986-.166 2.921 2.921 0 0 1-5.76 0Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm4-12a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1.882 3.826a.75.75 0 0 0-1.48.248 6.452 6.452 0 0 0 12.722 0 .75.75 0 0 0-1.479-.248 4.951 4.951 0 0 1-9.763 0Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

HappinessSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default HappinessSolid;
