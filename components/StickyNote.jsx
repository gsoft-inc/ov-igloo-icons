/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <StickyNote /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const StickyNote = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.429 13H3.75a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 3.75 3h8.5a.75.75 0 0 1 .75.75v5.679M9.429 13 13 9.429M9.429 13v-2.821a.75.75 0 0 1 .75-.75H13\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 19H5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V14m-5 5 5-5m-5 5v-4.5a.5.5 0 0 1 .5-.5H19\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.667 25.333H7.333a.667.667 0 0 1-.666-.666V7.333c0-.368.298-.666.666-.666h17.334c.368 0 .666.298.666.666v11.334m-6.666 6.666 6.666-6.666m-6.666 6.666v-6c0-.368.298-.666.666-.666h6\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

StickyNote.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

StickyNote.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default StickyNote;
