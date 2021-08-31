/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Bento /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Bento = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"4\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"4\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"4\" cy=\"12\" r=\"1\" fill=\"#233043\"/><circle cx=\"8\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"8\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"8\" cy=\"12\" r=\"1\" fill=\"#233043\"/><circle cx=\"12\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"12\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"6.5\" cy=\"6.5\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"12\" cy=\"6.5\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"17.5\" cy=\"6.5\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"6.5\" cy=\"12\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"6.5\" cy=\"17.5\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"12\" cy=\"17.5\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"17.5\" cy=\"12\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"1.5\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8.667\" cy=\"8.667\" r=\"2\" fill=\"#233043\"/><circle cx=\"16\" cy=\"8.667\" r=\"2\" fill=\"#233043\"/><circle cx=\"23.333\" cy=\"8.667\" r=\"2\" fill=\"#233043\"/><circle cx=\"8.667\" cy=\"16\" r=\"2\" fill=\"#233043\"/><circle cx=\"8.667\" cy=\"23.334\" r=\"2\" fill=\"#233043\"/><circle cx=\"16\" cy=\"16\" r=\"2\" fill=\"#233043\"/><circle cx=\"16\" cy=\"23.334\" r=\"2\" fill=\"#233043\"/><circle cx=\"23.333\" cy=\"16\" r=\"2\" fill=\"#233043\"/><circle cx=\"23.333\" cy=\"23.334\" r=\"2\" fill=\"#233043\"/></svg>"}
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
