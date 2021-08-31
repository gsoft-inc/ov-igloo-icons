/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Edit /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Edit = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m7 11 5.845-5.8a.25.25 0 0 0 .001-.354L10.84 2.84a.25.25 0 0 0-.349-.005L4.5 8.5M7 11 4.5 8.5M7 11l-3.173 1.16a.25.25 0 0 1-.325-.306L4.5 8.5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m9.899 17.672 9.283-9.283a.5.5 0 0 0 0-.707l-2.828-2.828a.5.5 0 0 0-.708 0l-9.283 9.283M9.9 17.672l-3.536-3.535M9.9 17.672l-4.016 1.094a.5.5 0 0 1-.613-.614l1.093-4.015\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.198 22.896 25.576 10.52a.667.667 0 0 0 0-.943l-3.771-3.771a.667.667 0 0 0-.943 0L8.484 18.182m4.714 4.714-4.714-4.714m4.714 4.714-5.353 1.459a.667.667 0 0 1-.819-.819l1.458-5.354\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Edit.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Edit.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Edit;
