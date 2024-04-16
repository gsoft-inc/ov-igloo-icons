/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Loader /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Loader = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"6\" stroke=\"#D5D9DE\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14 8a6 6 0 0 0-6-6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 4.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM3.25 12a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Z\" fill=\"#D5D9DE\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.25 4a.75.75 0 0 1 .75-.75A8.75 8.75 0 0 1 20.75 12a.75.75 0 0 1-1.5 0A7.25 7.25 0 0 0 12 4.75a.75.75 0 0 1-.75-.75Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 6.333c-5.339 0-9.667 4.328-9.667 9.667A9.667 9.667 0 0 0 16 25.667c5.339 0 9.667-4.328 9.667-9.667 0-5.339-4.328-9.667-9.667-9.667ZM4.333 16C4.333 9.557 9.557 4.333 16 4.333S27.667 9.557 27.667 16 22.443 27.667 16 27.667 4.333 22.443 4.333 16Z\" fill=\"#D5D9DE\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15 5.333a1 1 0 0 1 1-1c6.443 0 11.667 5.224 11.667 11.667a1 1 0 1 1-2 0c0-5.339-4.328-9.667-9.667-9.667a1 1 0 0 1-1-1Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Loader.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Loader;
