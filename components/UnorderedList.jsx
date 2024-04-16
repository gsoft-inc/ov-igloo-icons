/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <UnorderedList /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const UnorderedList = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.5 4h7M6.5 8h7M6.5 12h7\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"3.5\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"3.5\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"3.5\" cy=\"12\" r=\"1\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.25 6.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm3.75-2a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H9Zm0 6a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H9Zm-.75 6.75a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm-1.75-6a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-1.25 7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 9.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334ZM12 7a1 1 0 1 0 0 2h13.333a1 1 0 1 0 0-2H12Zm0 8a1 1 0 1 0 0 2h13.333a1 1 0 1 0 0-2H12Zm-1 9a1 1 0 0 1 1-1h13.333a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Zm-2.333-8a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0ZM7 25.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

UnorderedList.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default UnorderedList;
