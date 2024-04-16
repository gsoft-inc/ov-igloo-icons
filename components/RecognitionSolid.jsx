/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <RecognitionSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const RecognitionSolid = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 2a.75.75 0 0 0-.75.75v.75h-.5A1.75 1.75 0 0 0 2 5.25v.667C2 7.449 3.253 8.619 4.746 8.74a3.753 3.753 0 0 0 2.691 1.843v1.167h-.75c-.931 0-1.687.755-1.687 1.688 0 .31.252.562.563.562h4.875c.31 0 .562-.252.562-.563 0-.931-.755-1.687-1.688-1.687h-.75v-1.167a3.753 3.753 0 0 0 2.692-1.843C12.747 8.62 14 7.449 14 5.917V5.25a1.75 1.75 0 0 0-1.75-1.75h-.5v-.75A.75.75 0 0 0 11 2H5Zm6.75 3v1.875c0 .067-.002.134-.005.2.466-.238.755-.69.755-1.158V5.25a.25.25 0 0 0-.25-.25h-.5Zm-8 0h.5v1.875c0 .067.002.134.005.2-.466-.238-.755-.69-.755-1.158V5.25A.25.25 0 0 1 3.75 5Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 3.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6v-7Z\" fill=\"#233043\"/><path d=\"M18 10.567a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.25 19.875v-4.5h1.5v4.5h-1.5ZM4.25 6.5a.25.25 0 0 0-.25.25v1.444C4 9.481 5.02 10.5 6.25 10.5H7.5a.75.75 0 0 1 0 1.5H6.25C4.166 12 2.5 10.283 2.5 8.194V6.75C2.5 5.784 3.282 5 4.25 5H7.5a.75.75 0 0 1 0 1.5H4.25ZM19.75 6.524a.25.25 0 0 1 .25.25v1.444c0 1.287-1.02 2.306-2.25 2.306H16.5a.75.75 0 0 0 0 1.5h1.25c2.084 0 3.75-1.717 3.75-3.806V6.774a1.75 1.75 0 0 0-1.75-1.75H16.5a.75.75 0 0 0 0 1.5h3.25Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.25 18.5A2.25 2.25 0 0 0 8 20.75c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-3.5Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

RecognitionSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default RecognitionSolid;
