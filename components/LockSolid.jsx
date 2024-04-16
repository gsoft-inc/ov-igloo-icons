/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <LockSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const LockSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.25 5.25A2.75 2.75 0 0 1 8 2.5v0a2.75 2.75 0 0 1 2.75 2.75v1.22a.03.03 0 0 1-.03.03H5.28a.03.03 0 0 1-.03-.03V5.25Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"3\" y=\"5.5\" width=\"10\" height=\"8\" rx=\".75\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 3.25A4.75 4.75 0 0 0 7.25 8v1H4.717a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h14.566a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75H16.75V8A4.75 4.75 0 0 0 12 3.25ZM15.25 9V8a3.25 3.25 0 0 0-6.5 0v1h6.5Zm-2.695 5.832a1 1 0 1 0-1.11 0l-1.1 1.65a.333.333 0 0 0 .278.518h2.754a.333.333 0 0 0 .277-.518l-1.1-1.65Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.667 10.667A5.333 5.333 0 0 1 16 5.333v0a5.333 5.333 0 0 1 5.333 5.334v2.606a.06.06 0 0 1-.06.06H10.727a.06.06 0 0 1-.06-.06v-2.606Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.04 12a.75.75 0 0 0-.75.75v14.5c0 .414.335.75.75.75h19.92a.75.75 0 0 0 .75-.75v-14.5a.75.75 0 0 0-.75-.75H6.04Zm11.293 6.667c0 .463-.235.87-.593 1.11l1.581 2.372a.333.333 0 0 1-.277.518h-4.088a.333.333 0 0 1-.277-.518l1.581-2.373a1.332 1.332 0 0 1 .74-2.442c.736 0 1.333.596 1.333 1.333Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

LockSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default LockSolid;
