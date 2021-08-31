/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <NewSuggestion /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const NewSuggestion = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.667 8c0 .982-.53 1.84-1.32 2.302M8 5.334a2.667 2.667 0 0 0-1.347 4.968M6.667 10.39v.943h2.666v-.943M6.667 13.334h2.666M8 3.333v-1M2.333 8h1M12.667 8h1M4.374 4.707 3.667 4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M11.667 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\" fill=\"#FF5971\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 12a3.998 3.998 0 0 1-1.98 3.453M12 8a4 4 0 0 0-2.02 7.453M10 15.585V17h4v-1.415M10 20h4M12 5V3.5M3.5 12H5M19 12h1.5M6.56 7.06 5.5 6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M17.5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\" fill=\"#FF5971\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.334 16.004a5.33 5.33 0 0 1-2.64 4.604M16 10.67a5.333 5.333 0 0 0-2.694 9.938M13.333 20.783v1.887h5.334v-1.887M13.334 26.67h5.333M16 6.67v-2M4.667 16.004h2M25.334 16.004h2M8.748 9.418 7.334 8.004\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M23.334 12.004a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\" fill=\"#FF5971\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

NewSuggestion.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

NewSuggestion.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default NewSuggestion;
