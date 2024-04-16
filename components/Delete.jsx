/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Delete /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Delete = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 4.5h10M9.25 4.5h-2.5A.75.75 0 0 1 6 3.75v-.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4 5v8.25c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25V5\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"M6.5 7.5v3M9.5 7.5v3\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.75 4.25v1.5h4.5v-1.5h-4.5ZM8.25 4v1.75H5a.75.75 0 0 0 0 1.5h.25V19c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25V7.25H19a.75.75 0 0 0 0-1.5h-3.25V4c0-.69-.56-1.25-1.25-1.25h-5c-.69 0-1.25.56-1.25 1.25Zm9 3.25H6.75v11.5h10.5V7.25ZM10 8.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm4.75.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13 6.333v2h6v-2h-6ZM11 6c0-.92.746-1.667 1.667-1.667h6.666C20.253 4.333 21 5.08 21 6v2.333h4.333a1 1 0 1 1 0 2H25V26c0 .92-.746 1.667-1.667 1.667H8.667C7.747 27.667 7 26.92 7 26V10.333h-.333a1 1 0 1 1 0-2H11V6Zm-2 4.333v15.334h14V10.333H9Zm4.333 2a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 1-1Zm6.334 1a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0v-8Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Delete.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Delete;
