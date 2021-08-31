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
const Share = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"11\" cy=\"4.5\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"5\" cy=\"8\" r=\"1.5\" fill=\"#233043\"/><circle cx=\"11\" cy=\"11.5\" r=\"1.5\" fill=\"#233043\"/><path d=\"m10.833 11.333-5.005-2.98a.333.333 0 0 1-.006-.57l5.011-3.116\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"7\" r=\"2\" fill=\"#233043\"/><circle cx=\"7\" cy=\"12\" r=\"2\" fill=\"#233043\"/><circle cx=\"16\" cy=\"17\" r=\"2\" fill=\"#233043\"/><path d=\"m16 17-8.213-4.563a.5.5 0 0 1 0-.874L16 7\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"21.333\" cy=\"9.333\" r=\"2.667\" fill=\"#233043\"/><circle cx=\"9.333\" cy=\"16\" r=\"2.667\" fill=\"#233043\"/><circle cx=\"21.333\" cy=\"22.667\" r=\"2.667\" fill=\"#233043\"/><path d=\"m21.333 22.667-10.95-6.084a.667.667 0 0 1 0-1.166l10.95-6.084\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

Share.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Share;
