/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <PieGraph /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const PieGraph = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.693 8.75h.004A5.251 5.251 0 1 1 6.75 2.803V7.752c0 .555.448.998.998.998H12.693z\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"M9.25 1.803a5.254 5.254 0 0 1 4.447 4.447H9.25V1.803z\" stroke=\"#233043\" stroke-width=\"1.5\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.003 13.5c.276 0 .499.225.48.5A7 7 0 1 1 10 6.518c.275-.02.5.206.5.482v6.002c0 .276.22.498.497.498h6.006z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M20.482 10c.02.275-.206.5-.483.5h-6a.5.5 0 0 1-.499-.502V4c0-.276.225-.503.5-.483A7.001 7.001 0 0 1 20.482 10z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.67 18c.368 0 .666.3.64.667a9.333 9.333 0 1 1-9.977-9.977.632.632 0 0 1 .667.643v8.002c0 .369.295.665.663.665h8.007z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M27.31 13.333a.633.633 0 0 1-.644.667h-8.002a.667.667 0 0 1-.664-.67V5.336c0-.369.3-.67.667-.645a9.335 9.335 0 0 1 8.643 8.643z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

PieGraph.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

PieGraph.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default PieGraph;
