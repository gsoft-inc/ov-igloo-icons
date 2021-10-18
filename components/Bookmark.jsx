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
const Bookmark = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path d=\"M12 3.25v9.299a.25.25 0 0 1-.383.212l-3.485-2.178a.25.25 0 0 0-.264 0L4.381 12.76A.25.25 0 0 1 4 12.549V3.25A.25.25 0 0 1 4.25 3h7.5a.25.25 0 0 1 .25.25Z\" stroke=\"#233043\" stroke-width=\"1.5\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h16v16H0z\"/></clipPath></defs></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path d=\"M18 4.5v14.566a.5.5 0 0 1-.777.416l-4.946-3.297a.5.5 0 0 0-.554 0l-4.946 3.297A.5.5 0 0 1 6 19.066V4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5Z\" stroke=\"#233043\" stroke-width=\"1.5\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path d=\"M24 6.667v18.13a.667.667 0 0 1-1.02.566l-6.627-4.142a.667.667 0 0 0-.706 0L9.02 25.363A.667.667 0 0 1 8 24.797V6.667C8 6.298 8.298 6 8.667 6h14.666c.369 0 .667.298.667.667Z\" stroke=\"#233043\" stroke-width=\"2\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v32H0z\"/></clipPath></defs></svg>"}
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

Bookmark.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Bookmark;
