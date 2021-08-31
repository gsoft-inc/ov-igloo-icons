/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Drag /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Drag = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"6\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"6\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"6\" cy=\"12\" r=\"1\" fill=\"#233043\"/><circle cx=\"10\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"10\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"10\" cy=\"12\" r=\"1\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8.501\" cy=\"6.831\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"15.5\" cy=\"6.83\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"8.5\" cy=\"12.33\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"8.5\" cy=\"17.83\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"15.5\" cy=\"12.33\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"15.5\" cy=\"17.83\" fill=\"#233043\" r=\"1.5\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"11.335\" cy=\"8.672\" r=\"2\" fill=\"#233043\"/><circle cx=\"20.667\" cy=\"8.671\" r=\"2\" fill=\"#233043\"/><circle cx=\"11.333\" cy=\"16.004\" fill=\"#233043\" r=\"2\"/><circle cx=\"11.333\" cy=\"23.337\" r=\"2\" fill=\"#233043\"/><circle cx=\"20.667\" cy=\"16.004\" fill=\"#233043\" r=\"2\"/><circle cx=\"20.667\" cy=\"23.337\" r=\"2\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Drag.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Drag.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Drag;
