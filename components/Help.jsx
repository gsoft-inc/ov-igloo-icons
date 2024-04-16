/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Help /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Help = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"11\" r=\".75\" fill=\"#233043\"/><path d=\"M6.5 6.25a1.5 1.5 0 1 1 1.99 1.418c-.26.09-.49.306-.49.582V9\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 4.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM3.25 12a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0ZM12 8.25c-.996 0-1.75.767-1.75 1.65a.75.75 0 0 1-1.5 0c0-1.768 1.484-3.15 3.25-3.15s3.25 1.382 3.25 3.15c0 1.51-1.086 2.741-2.5 3.066v.534a.75.75 0 0 1-1.5 0v-.7c0-.718.569-1.18 1.104-1.284.818-.158 1.396-.84 1.396-1.616 0-.883-.754-1.65-1.75-1.65ZM12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 6.333c-5.339 0-9.667 4.328-9.667 9.667 0 5.339 4.328 9.667 9.667 9.667A9.667 9.667 0 0 0 25.667 16c0-5.339-4.328-9.667-9.667-9.667ZM4.333 16C4.333 9.557 9.557 4.333 16 4.333S27.667 9.557 27.667 16 22.443 27.667 16 27.667 4.333 22.443 4.333 16ZM16 11c-1.328 0-2.333 1.023-2.333 2.2a1 1 0 1 1-2 0c0-2.358 1.979-4.2 4.333-4.2s4.333 1.842 4.333 4.2c0 2.013-1.448 3.655-3.333 4.088V18a1 1 0 1 1-2 0v-.933c0-.958.758-1.574 1.473-1.712 1.09-.211 1.86-1.121 1.86-2.155 0-1.177-1.005-2.2-2.333-2.2Zm0 11.667A1.333 1.333 0 1 0 16 20a1.333 1.333 0 0 0 0 2.667Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Help.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Help;
