/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Bookmark /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Bookmark = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3.25v9.299a.25.25 0 0 1-.383.212l-3.485-2.178a.25.25 0 0 0-.264 0L4.381 12.76A.25.25 0 0 1 4 12.549v-9.3A.25.25 0 0 1 4.25 3h7.5a.25.25 0 0 1 .25.25Z\" stroke=\"#233043\" stroke-width=\"1.5\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.75 18.599V4.75h10.5v13.849l-4.557-3.038a1.25 1.25 0 0 0-1.386 0L6.75 18.599Zm-1.5.467a1.25 1.25 0 0 0 1.943 1.04L12 16.9l4.807 3.205a1.25 1.25 0 0 0 1.943-1.04V4.5c0-.69-.56-1.25-1.25-1.25h-11c-.69 0-1.25.56-1.25 1.25v14.566Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 6.667v18.13a.667.667 0 0 1-1.02.566l-6.627-4.142a.667.667 0 0 0-.706 0L9.02 25.363A.667.667 0 0 1 8 24.797V6.667C8 6.299 8.298 6 8.667 6h14.666c.369 0 .667.299.667.667Z\" stroke=\"#233043\" stroke-width=\"2\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Bookmark.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Bookmark;
