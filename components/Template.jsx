/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Template /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Template = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 6.286v7.38c0 .185.15.334.333.334h4.381M2 6.286V2.333C2 2.15 2.15 2 2.333 2h11.334c.184 0 .333.15.333.333v3.953m-12 0h4.714m7.286 0v7.38c0 .185-.15.334-.333.334H6.714M14 6.286H6.714m0 0V14\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.25 5.5c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25v-13Zm1.5.25v3.5h12.5v-3.5H5.75Zm12.5 5h-7v7.5h7v-7.5Zm-8.5 7.5v-7.5h-4v7.5h4Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.667 13.333v11.334c0 .368.298.666.666.666H14m-7.333-12v-6c0-.368.298-.666.666-.666h17.334c.368 0 .666.298.666.666v6m-18.666 0H14m11.333 0v11.334a.667.667 0 0 1-.666.666H14m11.333-12H14m0 0v12\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Template.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Template;
