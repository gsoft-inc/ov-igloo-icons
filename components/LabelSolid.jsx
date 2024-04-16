/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <LabelSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const LabelSolid = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.336 3.266a.5.5 0 0 0-.404.144l-5.65 5.65a.5.5 0 0 0 0 .708l4.95 4.95a.5.5 0 0 0 .707 0l5.65-5.65a.5.5 0 0 0 .144-.404l-.45-4.5a.5.5 0 0 0-.447-.448l-4.5-.45ZM9.06 6.94a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.79 5.032a.5.5 0 0 0-.392.145l-7.97 7.97a.5.5 0 0 0 0 .707l6.718 6.717a.5.5 0 0 0 .707 0l7.97-7.969a.5.5 0 0 0 .145-.392l-.48-6.238a.5.5 0 0 0-.46-.46l-6.238-.48Zm2.29 4.889a1 1 0 1 0 1.414-1.415 1 1 0 0 0-1.414 1.415Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.567 6.698a.334.334 0 0 0-.261.097l-10.97 10.97a.333.333 0 0 0 0 .47l9.428 9.429c.13.13.341.13.472 0l10.97-10.97a.333.333 0 0 0 .096-.26l-.674-8.756a.333.333 0 0 0-.306-.306l-8.755-.674Zm3.206 6.53a1.333 1.333 0 1 0 1.886-1.886 1.333 1.333 0 0 0-1.886 1.885Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

LabelSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default LabelSolid;
