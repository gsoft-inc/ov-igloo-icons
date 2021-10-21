/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <KeyResult /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const KeyResult = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 4h8L9.333 7 12 10H4V4Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" d=\"M3.75 2.75v10.5\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" d=\"M6.75 3.75v16.5\"/><path d=\"M6.75 5.75h10.5L13.75 10l3.5 4.25H6.75v-8.5Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" d=\"M9 4v24\"/><path d=\"M9 7h15l-5 6 5 6H9V7Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

KeyResult.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

KeyResult.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default KeyResult;
