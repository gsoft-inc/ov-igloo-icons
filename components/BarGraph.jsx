/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <BarGraph /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const BarGraph = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.333 3.333v9c0 .184.15.334.334.334h9M6 6.667V10M8.666 4v6M11.333 8.667V10\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 5a.75.75 0 0 0-1.5 0v13.5c0 .69.56 1.25 1.25 1.25H19a.75.75 0 0 0 0-1.5H5.75V5Zm4 5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0v-5ZM13 5.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75ZM17.75 13a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.667 6.667a1 1 0 0 0-2 0v18c0 .92.746 1.666 1.666 1.666h18a1 1 0 0 0 0-2H7.667V6.667ZM13 13.333a1 1 0 1 0-2 0V20a1 1 0 1 0 2 0v-6.667ZM17.333 7a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm6.334 10.333a1 1 0 1 0-2 0V20a1 1 0 1 0 2 0v-2.667Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

BarGraph.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default BarGraph;
