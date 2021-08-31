/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Folder /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Folder = ({size, ariaLabel, className, ...other}) => {
const svgData = {"32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.5 24h13a2.5 2.5 0 0 0 2.5-2.5v-8a2.5 2.5 0 0 0-2.5-2.5h-5.83a.5.5 0 0 1-.344-.136L13.44 8.136A.5.5 0 0 0 13.095 8H9.5A2.5 2.5 0 0 0 7 10.5v11A2.5 2.5 0 0 0 9.5 24z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Folder.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Folder.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Folder;
