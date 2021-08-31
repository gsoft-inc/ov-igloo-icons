/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Segment /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Segment = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.606 9.506s0 1.046 1.394 1.046c.09 0 1.394 0 1.394-1.395C9.394 7.763 8 7.763 8 7.763s-1.157 0-1.157-1.158c0-1.157 1.082-1.157 1.157-1.157.643 0 .929.268 1.056.507\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M2.5 14h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.908 14.259s0 1.569 2.092 1.569c.136 0 2.092 0 2.092-2.092S12 11.644 12 11.644s-1.736 0-1.736-1.736c0-1.735 1.623-1.735 1.736-1.735.965 0 1.393.402 1.584.76\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5 19.5h14a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.211 19.016s0 2.091 2.789 2.091c.18 0 2.789 0 2.789-2.788 0-2.79-2.79-2.79-2.79-2.79s-2.314 0-2.314-2.314S15.85 10.901 16 10.901c1.287 0 1.858.536 2.112 1.013\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6.5 26.004h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Segment.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Segment.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Segment;
