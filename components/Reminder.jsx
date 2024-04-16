/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Reminder /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Reminder = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 5v2.667c0 .184.15.333.333.333H11\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M8 13a5 5 0 1 0-5-5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4.25 8 3.152 9.098a.333.333 0 0 1-.471 0L1.583 8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13 5.25a6.25 6.25 0 0 0-6.25 6.25v.19l.72-.72a.75.75 0 0 1 1.06 1.06l-1.646 1.647a1.25 1.25 0 0 1-1.768 0L3.47 12.03a.75.75 0 1 1 1.06-1.06l.72.72v-.19A7.75 7.75 0 1 1 13 19.25a.75.75 0 0 1 0-1.5 6.25 6.25 0 1 0 0-12.5Zm-.5 1.5a.75.75 0 0 1 .75.75v3.25h3.25a.75.75 0 0 1 0 1.5H13c-.69 0-1.25-.56-1.25-1.25V7.5a.75.75 0 0 1 .75-.75Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.333 25.333A9.333 9.333 0 1 0 8 16v1.333\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M16.667 10.667v4.666c0 .368.298.667.666.667H22M10.667 16l-2.195 2.195a.667.667 0 0 1-.943 0L5.333 16\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Reminder.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Reminder;
