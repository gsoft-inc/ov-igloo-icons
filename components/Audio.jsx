/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Audio /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Audio = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.25 8a.75.75 0 0 0-1.5 0c0 2.46 2.018 4.377 4.502 4.701a.761.761 0 0 0-.002.049v1.5a.75.75 0 0 0 1.5 0v-1.5c0-.016 0-.033-.002-.049 2.484-.324 4.502-2.24 4.502-4.701a.75.75 0 0 0-1.5 0c0 1.714-1.593 3.25-3.75 3.25S4.25 9.714 4.25 8Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 7.5V4a1.5 1.5 0 1 0-3 0v3.5a1.5 1.5 0 1 0 3 0ZM8 1a3 3 0 0 0-3 3v3.5a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.25 5.25a3.75 3.75 0 1 1 7.5 0v6a3.75 3.75 0 1 1-7.5 0v-6ZM12 3a2.25 2.25 0 0 0-2.25 2.25v6a2.25 2.25 0 0 0 4.5 0v-6A2.25 2.25 0 0 0 12 3Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6 10.5a.75.75 0 0 1 .75.75c0 2.9 2.35 5.25 5.25 5.25 2.909 0 5.25-2.245 5.25-5.25a.75.75 0 0 1 1.5 0c0 3.59-2.632 6.35-6 6.71v2.29h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5v-2.291a6.751 6.751 0 0 1-6-6.709.75.75 0 0 1 .75-.75Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12.228\" y=\"3.594\" width=\"7.544\" height=\"15.089\" rx=\"3.772\" stroke=\"#233043\" stroke-width=\"2\"/><path d=\"M24.17 14.805c0 4.67-3.658 8.171-8.17 8.171a8.17 8.17 0 0 1-8.17-8.17\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path stroke=\"#233043\" stroke-width=\"2\" d=\"M15.931 22.851v4.274\"/><path stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" d=\"M12.191 28.078h7.617\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Audio.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Audio.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Audio;
