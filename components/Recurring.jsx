/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Recurring /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Recurring = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.667 4.667h-6A2.667 2.667 0 0 0 4 7.333V8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m12 3.333 1.098 1.098c.13.13.13.341 0 .471L12 6M4 11.333h6a2.667 2.667 0 0 0 2.667-2.666V8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m4.667 12.667-1.098-1.098a.333.333 0 0 1 0-.471L4.667 10\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.47 5.53a.75.75 0 0 1 1.06-1.06l1.647 1.646a1.25 1.25 0 0 1 0 1.768L18.53 9.53a.75.75 0 1 1-1.06-1.06l.72-.72H10A3.25 3.25 0 0 0 6.75 11v1a.75.75 0 0 1-1.5 0v-1A4.75 4.75 0 0 1 10 6.25h8.19l-.72-.72ZM19.75 13A4.75 4.75 0 0 1 15 17.75H6.81l.72.72a.75.75 0 1 1-1.06 1.06l-1.647-1.646a1.25 1.25 0 0 1 0-1.768L6.47 14.47a.75.75 0 0 1 1.06 1.06l-.72.72H15A3.25 3.25 0 0 0 18.25 13v-1a.75.75 0 0 1 1.5 0v1Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.333 9.333h-12A5.333 5.333 0 0 0 8 14.667V16\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m24 6.667 2.195 2.195c.26.26.26.682 0 .943L24 12M8 22.667h12a5.333 5.333 0 0 0 5.333-5.334V16\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m9.333 25.333-2.195-2.195a.667.667 0 0 1 0-.943L9.333 20\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Recurring.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Recurring;
