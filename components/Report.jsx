/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Report /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Report = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m5 11 1.667-1.667 1.606 1.334L10.5 8.5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.429 3H3.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V6.571M9.429 3 13 6.571M9.429 3v2.821c0 .415.335.75.75.75H13\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 10v8.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5H14m5 5-5-5m5 5h-4.5a.5.5 0 0 1-.5-.5V5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7.5 16.5 10 14l2.409 2 3.341-3.25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.667 24.333h16.666v-10h-5c-.92 0-1.666-.746-1.666-1.666v-5h-10v16.666Zm12-15.252 3.252 3.252h-3.252V9.081Zm6.666 15.586c0 .92-.746 1.666-1.666 1.666H7.333c-.92 0-1.666-.746-1.666-1.666V7.333c0-.92.746-1.666 1.666-1.666h11.334a1 1 0 0 1 .707.292l6.667 6.667a1 1 0 0 1 .292.707v11.334Zm-4.636-6.95a1 1 0 1 0-1.394-1.434l-3.81 3.707-2.521-2.093a1 1 0 0 0-1.346.063l-3.333 3.333a1 1 0 0 0 1.414 1.414l2.689-2.689 2.51 2.085a1 1 0 0 0 1.336-.053l4.455-4.333Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Report.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Report;
