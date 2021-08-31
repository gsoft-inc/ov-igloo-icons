/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ArrowDown /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ArrowDown = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 4v6.667M11 9l-2.764 2.764a.333.333 0 0 1-.472 0L5 9\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 28V4M8 20l7.764 7.764c.13.13.341.13.472 0L24 20\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ArrowDown.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

ArrowDown.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ArrowDown;
