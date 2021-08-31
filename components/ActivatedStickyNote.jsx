/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ActivatedStickyNote /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ActivatedStickyNote = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.429 13H3.75a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 3.75 3H8m1.429 10L13 9.429M9.429 13v-2.821a.75.75 0 0 1 .75-.75H13m0 0V7.82\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\" fill=\"#FCC205\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 19H5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5H12m2 14 5-5m-5 5v-4.5a.5.5 0 0 1 .5-.5H19m0 0v-2.25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\" fill=\"#FCC205\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.667 25.333H7.333a.667.667 0 0 1-.666-.666V7.333c0-.368.298-.666.666-.666H16m2.667 18.666 6.666-6.666m-6.666 6.666v-6c0-.368.298-.666.666-.666h6m0 0v-3\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M24 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\" fill=\"#FCC205\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ActivatedStickyNote.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

ActivatedStickyNote.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ActivatedStickyNote;
