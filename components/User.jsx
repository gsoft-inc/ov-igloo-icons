/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <User /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const User = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"5.25\" r=\"2.25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4 12.611A3.111 3.111 0 0 1 7.111 9.5H8.89A3.111 3.111 0 0 1 12 12.611v0a.389.389 0 0 1-.389.389H4.39A.389.389 0 0 1 4 12.611v0Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.469 8.063a2.531 2.531 0 1 1 5.062 0 2.531 2.531 0 0 1-5.062 0ZM12 4.03a4.031 4.031 0 1 0 0 8.063 4.031 4.031 0 0 0 0-8.063ZM9.746 13.22a4.25 4.25 0 0 0-4.25 4.25v1.312c0 .656.531 1.188 1.187 1.188h10.634c.655 0 1.187-.532 1.187-1.188V17.47a4.25 4.25 0 0 0-4.25-4.25H9.746Zm-2.75 4.25a2.75 2.75 0 0 1 2.75-2.75h4.508a2.75 2.75 0 0 1 2.75 2.75v1H6.996v-1Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"10.75\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" r=\"4.375\"/><path d=\"M8.328 22.125a3.5 3.5 0 0 1 3.5-3.5h8.344a3.5 3.5 0 0 1 3.5 3.5v3.063a.438.438 0 0 1-.437.437H8.765a.438.438 0 0 1-.437-.438v-3.062Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

User.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default User;
