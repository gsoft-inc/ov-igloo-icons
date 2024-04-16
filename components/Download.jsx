/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Download /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Download = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 3v7.143M10.143 8.715l-1.907 1.907a.333.333 0 0 1-.472 0L5.857 8.715\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M13 10.5v2.167c0 .184-.149.333-.333.333H3.333A.333.333 0 0 1 3 12.667V10.5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 3.75a.75.75 0 0 1 .75.75v9.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.646 2.647a1.25 1.25 0 0 1-1.768 0L8.47 13.03a.75.75 0 1 1 1.06-1.06l1.72 1.72V4.5a.75.75 0 0 1 .75-.75ZM5.75 14.5v3.25h12.5V14.5a.75.75 0 0 1 1.5 0V18c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25v-3.5a.75.75 0 0 1 1.5 0Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 5.667a1 1 0 0 1 1 1v12.252l2.293-2.293a1 1 0 0 1 1.414 1.414l-3.529 3.529c-.65.65-1.706.65-2.357 0l-3.528-3.529a1 1 0 0 1 1.414-1.414L15 18.92V6.667a1 1 0 0 1 1-1ZM7.667 20v4.333h16.666V20a1 1 0 1 1 2 0v4.667c0 .92-.746 1.666-1.666 1.666H7.333c-.92 0-1.666-.746-1.666-1.666V20a1 1 0 1 1 2 0Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Download.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Download;
