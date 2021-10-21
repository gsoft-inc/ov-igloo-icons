/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Drag /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Drag = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"6\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"6\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"6\" cy=\"12\" r=\"1\" fill=\"#233043\"/><circle cx=\"10\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"10\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"10\" cy=\"12\" r=\"1\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7 .001a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"11.334\" cy=\"8.668\" r=\"2\" fill=\"#233043\"/><circle cx=\"20.667\" cy=\"8.667\" r=\"2\" fill=\"#233043\"/><circle cx=\"11.333\" cy=\"16\" fill=\"#233043\" r=\"2\"/><circle cx=\"11.333\" cy=\"23.333\" r=\"2\" fill=\"#233043\"/><circle cx=\"20.667\" cy=\"16\" fill=\"#233043\" r=\"2\"/><circle cx=\"20.667\" cy=\"23.333\" r=\"2\" fill=\"#233043\"/></svg>"}
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
