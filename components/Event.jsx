/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Event /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Event = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.75 2h-9.5a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25ZM12 9H3.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25H8m2-1.32 1.867 1.868L15.228 10\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.5 4h-13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM18 14H5.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1H12\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.78 16.47a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.035.025l-2.5-2.274a.75.75 0 1 1 1.01-1.11l1.97 1.793 3.245-3.244a.75.75 0 0 1 1.06 0Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24.5 5h-17A1.5 1.5 0 0 0 6 6.5v5A1.5 1.5 0 0 0 7.5 13h17a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 24.5 5ZM24 18H7.5A1.5 1.5 0 0 0 6 19.5v5A1.5 1.5 0 0 0 7.5 26H16m4-2.032L23.333 27l5-5\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Event.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Event;
