/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <RemoveUser /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const RemoveUser = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"7.955\" cy=\"7.21\" r=\"2.233\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.69 9.816a3.466 3.466 0 0 0-1.56-.373c-1.752 0-3.233 1.325-3.724 3.147M11.086 11.086l2.828 2.828M11.086 13.914l2.828-2.828\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14 8a6 6 0 1 0-6 6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 12a8 8 0 1 0-8 8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"11\" r=\"3\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14.33 14.5a4.656 4.656 0 0 0-2.095-.5c-2.353 0-4.343 1.78-5.003 4.228M15.879 15.879l4.242 4.242M15.879 20.121l4.242-4.242\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M26.667 16c0-5.89-4.776-10.666-10.667-10.666S5.333 10.109 5.333 16 10.11 26.667 16 26.667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"14.667\" r=\"4\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M19.107 19.333a6.208 6.208 0 0 0-2.794-.666c-3.137 0-5.79 2.372-6.67 5.637M21.172 21.172l5.657 5.656M21.172 26.828l5.657-5.656\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

RemoveUser.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

RemoveUser.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default RemoveUser;
