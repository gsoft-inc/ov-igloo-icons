/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Gift /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Gift = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 5.5h12V8H2V5.5zM8 8H3v6h5m0-6h5v6H8m0-6v6M6.375 2.643c.654.354 1.774 2.32 1.774 2.32s-2.31.107-2.964-.248c-.655-.355-.919-1.107-.59-1.679.329-.572 1.126-.748 1.78-.393z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.625 2.643c-.654.354-1.774 2.32-1.774 2.32s2.31.107 2.964-.248c.655-.355.918-1.107.59-1.679-.329-.572-1.126-.748-1.78-.393z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 11h8V8h-8m0 3H4V8h8m0 3V8M12 11H5v9h7m0-9h7v9h-7m0-9v9M9.918 4.812c.803.449 2.179 2.935 2.179 2.935s-2.838.133-3.642-.315c-.803-.449-1.128-1.399-.724-2.122.404-.724 1.383-.946 2.187-.498z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M13.91 4.812c-.803.449-2.179 2.935-2.179 2.935s2.838.133 3.642-.315c.804-.449 1.128-1.399.724-2.122-.404-.724-1.383-.946-2.187-.498z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 14.67h10.667v-4H16m0 4H5.334v-4H16m0 4v-4M16 14.67H6.667v12H16m0-12h9.333v12H16m0-12v12M13.223 6.42c1.072.599 2.906 3.913 2.906 3.913s-3.784.178-4.855-.42c-1.072-.598-1.504-1.865-.966-2.83.539-.964 1.844-1.26 2.915-.662z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M18.547 6.42c-1.071.599-2.905 3.913-2.905 3.913s3.784.178 4.855-.42c1.072-.598 1.504-1.865.966-2.83-.539-.964-1.844-1.26-2.916-.662z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Gift.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Gift.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Gift;
