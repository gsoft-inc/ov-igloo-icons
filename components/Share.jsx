/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Share /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Share = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"11\" cy=\"4.5\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"5\" cy=\"8\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"11\" cy=\"11.5\" r=\"1.5\" fill=\"#233043\"/><path d=\"m10.833 11.333-5.005-2.98a.333.333 0 0 1-.006-.57l5.011-3.116\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 9a2 2 0 1 0-1.985-1.755l-5.758 3.199a2 2 0 1 0 0 3.112l5.758 3.2a2 2 0 1 0 .729-1.311l-5.759-3.2a2.02 2.02 0 0 0 0-.49l5.758-3.199c.344.278.781.444 1.257.444Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.333 12a2.667 2.667 0 1 0-2.646-2.34l-7.678 4.265a2.667 2.667 0 1 0 0 4.15l7.677 4.265a2.667 2.667 0 1 0 .971-1.748l-7.677-4.266a2.686 2.686 0 0 0 0-.652l7.678-4.266c.458.37 1.04.592 1.675.592Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Share.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Share;
