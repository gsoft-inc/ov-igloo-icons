/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ENps /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ENps = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.667 9.333A5.333 5.333 0 0 1 8 4v0a5.333 5.333 0 0 1 5.333 5.333v2.604a.063.063 0 0 1-.063.063H2.73a.063.063 0 0 1-.063-.063V9.333Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10 11.667a2 2 0 1 0-4 0M9.022 7.262l-.511 2.37\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"5.833\" r=\".5\" fill=\"#233043\"/><circle cx=\"5.167\" cy=\"7.167\" r=\".5\" fill=\"#233043\"/><circle cx=\"4.5\" cy=\"9.813\" r=\".5\" fill=\"#233043\"/><circle cx=\"11.5\" cy=\"9.813\" r=\".5\" fill=\"#233043\"/><circle cx=\"10.833\" cy=\"7.167\" r=\".5\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 4.75a8.75 8.75 0 0 0-8.75 8.75v3.874c0 .484.392.876.876.876h15.748a.876.876 0 0 0 .876-.876V13.5A8.75 8.75 0 0 0 12 4.75ZM4.75 13.5a7.25 7.25 0 0 1 14.5 0v3.25h-3.508a3.752 3.752 0 0 0-2.136-3.14l.66-3.058a.75.75 0 0 0-1.466-.317l-.651 3.018a3.75 3.75 0 0 0-3.89 3.497H4.75V13.5Zm9.486 3.25a2.25 2.25 0 0 0-4.472 0h4.472ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3.5 1.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-1.75 4.72a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM18 14.22a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.25 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 7C9.557 7 4.333 12.223 4.333 18.667v5.165c0 .645.524 1.168 1.169 1.168h20.996c.646 0 1.169-.523 1.169-1.168v-5.165C27.667 12.223 22.443 7 16 7ZM6.333 18.667C6.333 13.327 10.661 9 16 9a9.667 9.667 0 0 1 9.667 9.667V23h-4.678a5.002 5.002 0 0 0-2.847-4.186l.88-4.079a1 1 0 0 0-1.955-.421l-.868 4.023A5 5 0 0 0 11.012 23H6.332v-4.333ZM18.982 23a3 3 0 0 0-5.963 0h5.963ZM16 12.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4.667 1.666a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 20.626a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm15-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2.333-4.293a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ENps.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default ENps;
