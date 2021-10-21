/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Bento /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Bento = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"4\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"4\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"4\" cy=\"12\" r=\"1\" fill=\"#233043\"/><circle cx=\"8\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"8\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"8\" cy=\"12\" r=\"1\" fill=\"#233043\"/><circle cx=\"12\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"12\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8.667\" cy=\"8.667\" r=\"2\" fill=\"#233043\"/><circle cx=\"16\" cy=\"8.667\" r=\"2\" fill=\"#233043\"/><circle cx=\"23.333\" cy=\"8.667\" r=\"2\" fill=\"#233043\"/><circle cx=\"8.667\" cy=\"16\" r=\"2\" fill=\"#233043\"/><circle cx=\"8.667\" cy=\"23.333\" r=\"2\" fill=\"#233043\"/><circle cx=\"16\" cy=\"16\" r=\"2\" fill=\"#233043\"/><circle cx=\"16\" cy=\"23.333\" r=\"2\" fill=\"#233043\"/><circle cx=\"23.333\" cy=\"16\" r=\"2\" fill=\"#233043\"/><circle cx=\"23.333\" cy=\"23.333\" r=\"2\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Bento.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Bento.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Bento;
