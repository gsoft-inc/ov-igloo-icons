/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <LineGraph /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const LineGraph = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.333 3.333v9c0 .184.15.334.334.334h9\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m5.667 9.333 1.785-1.785a.333.333 0 0 1 .449-.02l1.14.947a.333.333 0 0 0 .447-.018L12 6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 5a.75.75 0 0 0-1.5 0v13.5c0 .69.56 1.25 1.25 1.25H19a.75.75 0 0 0 0-1.5H5.75V5Zm12.774 4.536a.75.75 0 0 0-1.048-1.072l-3.608 3.527-1.538-1.277a1.25 1.25 0 0 0-1.683.078L7.97 13.47a.75.75 0 1 0 1.06 1.06l2.517-2.516 1.536 1.275a1.25 1.25 0 0 0 1.673-.068l3.768-3.685Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.667 6.667a1 1 0 0 0-2 0v18c0 .92.746 1.666 1.666 1.666h18a1 1 0 1 0 0-2H7.667V6.667Zm17.032 6.048a1 1 0 1 0-1.398-1.43l-4.81 4.703-2.052-1.703a1.667 1.667 0 0 0-2.243.104l-3.57 3.57a1 1 0 1 0 1.414 1.415l3.356-3.356 2.048 1.7c.657.546 1.62.507 2.23-.09l5.025-4.913Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

LineGraph.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default LineGraph;
