/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <LogOut /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const LogOut = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.667 8H14M12.667 6l1.764 1.764c.13.13.13.342 0 .472L12.667 10M11 5.143v-1.81A.333.333 0 0 0 10.667 3H4.333A.333.333 0 0 0 4 3.333v9.333c0 .185.15.334.333.334h6.334c.184 0 .333-.15.333-.334v-1.809\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.5 4.5c-.69 0-1.25.56-1.25 1.25v13c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-2.5a.75.75 0 0 0-1.5 0v2.25h-9.5V6h9.5v2.25a.75.75 0 0 0 1.5 0v-2.5c0-.69-.56-1.25-1.25-1.25h-10Zm12.97 4.22a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h10.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l2.647-2.646a1.25 1.25 0 0 0 0-1.768L19.53 8.72a.75.75 0 0 0-1.06 0Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.333 16H28M25.333 12l3.529 3.529c.26.26.26.682 0 .942l-3.529 3.53M21.333 10.667V7.333a.667.667 0 0 0-.666-.666H7.333a.667.667 0 0 0-.666.666v17.334c0 .368.298.666.666.666h13.334a.667.667 0 0 0 .666-.666v-3.334\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

LogOut.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default LogOut;
