/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Lock /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Lock = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.75 6v-.25a2.75 2.75 0 0 0-5.5 0V6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M3.75 6.75h8.5v6.5h-8.5v-6.5Z\" stroke=\"#233043\" stroke-width=\"1.5\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.25 10.5c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25v-9Zm1.5.25v8.5h12.5v-8.5H5.75Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.25 8a4.75 4.75 0 0 1 9.5 0v1.955c0 .439-.356.795-.795.795h-7.91a.795.795 0 0 1-.795-.795V8ZM12 4.75A3.25 3.25 0 0 0 8.75 8v1.25h6.5V8A3.25 3.25 0 0 0 12 4.75Z\" fill=\"#233043\"/><path d=\"M13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\" fill=\"#233043\"/><path d=\"m12 14 1.482 2.223a.5.5 0 0 1-.416.777h-2.132a.5.5 0 0 1-.416-.777L12 14Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.667 14c0-.368.298-.666.666-.666h17.334c.368 0 .666.298.666.666v12a.667.667 0 0 1-.666.667H7.332A.667.667 0 0 1 6.666 26V14ZM10.666 10.667a5.333 5.333 0 0 1 10.667 0v2.606a.06.06 0 0 1-.06.06H10.727a.06.06 0 0 1-.06-.06v-2.606Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M17.333 18.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z\" fill=\"#233043\"/><path d=\"M15.445 19.499a.667.667 0 0 1 1.11 0l1.42 2.131a.667.667 0 0 1-.554 1.037h-2.842a.667.667 0 0 1-.555-1.037l1.421-2.131Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Lock.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Lock;
