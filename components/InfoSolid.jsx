/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <InfoSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const InfoSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0zM8 6.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 8 6.5zm0-.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-8-1.633a.75.75 0 0 1 .75.75v5.026a.75.75 0 0 1-1.5 0v-5.026a.75.75 0 0 1 .75-.75zm0-1.18a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.667 16c0 5.891-4.776 10.667-10.667 10.667S5.333 21.89 5.333 16C5.333 10.11 10.11 5.334 16 5.334S26.667 10.109 26.667 16zM16 13.822a1 1 0 0 1 1 1v6.702a1 1 0 1 1-2 0v-6.702a1 1 0 0 1 1-1zm0-1.571a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

InfoSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

InfoSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default InfoSolid;
