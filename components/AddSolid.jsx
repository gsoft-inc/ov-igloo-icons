/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <AddSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const AddSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.667 8.666a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-6-3.931a.75.75 0 0 1 .75.75v2.432h2.432a.75.75 0 0 1 0 1.5H9.417v2.432a.75.75 0 0 1-1.5 0V9.417H5.485a.75.75 0 1 1 0-1.5h2.432V5.485a.75.75 0 0 1 .75-.75z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#233043\"/><path d=\"M12 16.243V7.757M16.243 12H7.757\" stroke=\"#fff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.667 16c0 5.891-4.776 10.667-10.667 10.667S5.333 21.89 5.333 16 10.11 5.333 16 5.333 26.667 10.11 26.667 16zM16 9.343a1 1 0 0 1 1 1V15h4.657a1 1 0 0 1 0 2H17v4.657a1 1 0 0 1-2 0V17h-4.657a1 1 0 1 1 0-2H15v-4.657a1 1 0 0 1 1-1z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

AddSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

AddSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default AddSolid;
