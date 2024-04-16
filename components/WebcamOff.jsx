/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <WebcamOff /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const WebcamOff = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2.008\" y=\".947\" width=\"18.448\" height=\"1.5\" rx=\".75\" transform=\"rotate(45 2.008 .947)\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.475 3.5H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-.475l-1.5-1.5V11h-8V5h3.475l-1.5-1.5ZM10.5 7.403V5H8.097l-1.5-1.5H11a1 1 0 0 1 1 1v1.385l1.586-.916a1 1 0 0 1 1.5.866v4.33a1 1 0 0 1-.837.988L10.5 7.403ZM13.586 9.3 12 8.383v-.766l1.586-.916v2.598Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.001 3.25a.75.75 0 0 0-1.06 1.06l1.094 1.095H3.5a1 1 0 0 0-1 1v11.19a1 1 0 0 0 1 1h13.75c.27 0 .515-.107.694-.28l1.906 1.905a.75.75 0 1 0 1.06-1.06L5.002 3.25Zm11.724 13.845L6.535 6.905H4v10.19h12.725Zm.025-10.19v6.374l1.772 1.772L21 16.482a1 1 0 0 0 1.5-.866V8.384a1 1 0 0 0-1.5-.866l-2.75 1.588v-2.7a1 1 0 0 0-1-1H8.876l1.5 1.5h6.374Zm1.5 6.257L21 14.75v-5.5l-2.75 1.588v2.324Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" d=\"m6.1 4.686 21.214 21.213\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.728 7.207H4.333a1 1 0 0 0-1 1v15.586a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-1.98l-2-2v2.98h-17V9.207h6.395l-2-2Zm12.605 9.777V9.207h-7.777l-2-2h10.777a1 1 0 0 1 1 1v3.934L28 10.024c.889-.513 2 .128 2 1.155v9.642a1.333 1.333 0 0 1-2 1.155l-1.597-.922-4.07-4.07ZM28 19.666l-3.667-2.116v-3.1L28 12.334v7.332Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

WebcamOff.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default WebcamOff;
