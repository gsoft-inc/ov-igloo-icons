/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <HelpSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const HelpSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0ZM8 5.5a.75.75 0 0 0-.75.75.75.75 0 0 1-1.5 0 2.25 2.25 0 1 1 3 2.122V9a.75.75 0 0 1-1.5 0v-.75c0-.726.578-1.146.996-1.29A.75.75 0 0 0 8 5.5Zm0 6.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-3.98a2.087 2.087 0 0 0-2.087 2.087.75.75 0 1 1-1.5 0 3.587 3.587 0 1 1 4.337 3.508v.748a.75.75 0 1 1-1.5 0v-.92c0-.716.568-1.184 1.117-1.281A2.088 2.088 0 0 0 12 8.02Zm0 10.312a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.667 16c0 5.891-4.776 10.667-10.667 10.667S5.333 21.89 5.333 16 10.11 5.333 16 5.333 26.667 10.11 26.667 16ZM16 10.693a2.783 2.783 0 0 0-2.783 2.783 1 1 0 1 1-2 0A4.783 4.783 0 1 1 17 18.154v.996a1 1 0 1 1-2 0v-1.391c0-.858.68-1.434 1.368-1.524A2.784 2.784 0 0 0 16 10.693Zm0 13.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

HelpSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

HelpSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default HelpSolid;
