/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Kebab /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Kebab = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"8\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"8\" cy=\"12\" r=\"1\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"5.5\" r=\"1.75\" fill=\"#233043\"/><circle cx=\"12\" cy=\"12\" r=\"1.75\" fill=\"#233043\"/><circle cx=\"12\" cy=\"18.5\" r=\"1.75\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"7.333\" r=\"2.333\" fill=\"#233043\"/><circle cx=\"16\" cy=\"16\" r=\"2.333\" fill=\"#233043\"/><circle cx=\"16\" cy=\"24.667\" r=\"2.333\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Kebab.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Kebab.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Kebab;
