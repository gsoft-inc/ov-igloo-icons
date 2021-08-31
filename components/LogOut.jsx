/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <LogOut /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const LogOut = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.667 8H14M12.667 6l1.764 1.764c.13.13.13.342 0 .472L12.667 10M11 5.143v-1.81A.333.333 0 0 0 10.667 3H4.333A.333.333 0 0 0 4 3.333v9.334c0 .184.15.333.333.333h6.334c.184 0 .333-.15.333-.333v-1.81\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 12.25h11M19 9.25l2.646 2.646a.5.5 0 0 1 0 .708L19 15.25M16 8.25v-2.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-2.5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.333 16.004H28M25.333 12.004l3.529 3.529c.26.26.26.682 0 .942l-3.529 3.529M21.333 10.67V7.337a.667.667 0 0 0-.666-.667H7.333a.667.667 0 0 0-.666.667V24.67c0 .369.298.667.666.667h13.334a.667.667 0 0 0 .666-.667v-3.333\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

LogOut.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default LogOut;
