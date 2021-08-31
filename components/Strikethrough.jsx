/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Strikethrough /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Strikethrough = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.333 8h9.334M8.078 8C6.562 8 5.333 6.955 5.333 5.667c0-1.29 1.23-2.334 2.745-2.334 1.195 0 2.212.65 2.589 1.556V3.333M7.922 8c1.516 0 2.745 1.045 2.745 2.333 0 1.289-1.23 2.333-2.745 2.333-1.195 0-2.212-.649-2.589-1.555v1.555\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 12h14M12.117 12C9.843 12 8 10.433 8 8.5S9.843 5 12.117 5c1.793 0 3.318.974 3.883 2.333V5M11.883 12C14.157 12 16 13.567 16 15.5S14.157 19 11.883 19C10.09 19 8.565 18.026 8 16.667V19\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.667 16h18.666M16.156 16c-3.032 0-5.49-2.09-5.49-4.667s2.458-4.666 5.49-4.666c2.39 0 4.424 1.298 5.177 3.11v-3.11M15.844 16c3.032 0 5.49 2.09 5.49 4.667s-2.458 4.666-5.49 4.666c-2.39 0-4.424-1.298-5.177-3.11v3.11\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Strikethrough.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Strikethrough.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Strikethrough;
