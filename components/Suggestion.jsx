/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Suggestion /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Suggestion = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m6.544 10.234.41-.628-.41.628Zm2.912 0 .41.628-.41-.628ZM9.916 8c0 .672-.344 1.263-.87 1.606l.82 1.256A3.414 3.414 0 0 0 11.416 8h-1.5ZM8 6.083c1.059 0 1.917.858 1.917 1.917h1.5A3.417 3.417 0 0 0 8 4.583v1.5ZM6.083 8c0-1.059.858-1.917 1.917-1.917v-1.5A3.417 3.417 0 0 0 4.583 8h1.5Zm.87 1.606A1.914 1.914 0 0 1 6.084 8h-1.5c0 1.2.619 2.254 1.55 2.862l.82-1.256Zm.464 1.477v-.629h-1.5v.63h1.5Zm1.666-.5H6.917v1.5h2.166v-1.5Zm-.5-.129v.63h1.5v-.63h-1.5Zm-2.666.63a1 1 0 0 0 1 1v-1.5a.5.5 0 0 1 .5.5h-1.5Zm.217-.222a.485.485 0 0 1-.217-.408h1.5c0-.364-.195-.673-.463-.848l-.82 1.256Zm2.95 1.221a1 1 0 0 0 1-1h-1.5a.5.5 0 0 1 .5-.5v1.5Zm-.038-2.477a1.014 1.014 0 0 0-.463.848h1.5a.486.486 0 0 1-.217.408l-.82-1.256Z\" fill=\"#233043\"/><path d=\"M6.667 13.333h2.666M8 3.333v-1M2.333 8h1M12.667 8h1M4.374 4.707 3.667 4M11.626 4.707 12.333 4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.75 3.5a.75.75 0 0 0-1.5 0V5a.75.75 0 0 0 1.5 0V3.5ZM12 8.75a3.25 3.25 0 0 0-1.624 6.066.75.75 0 0 1 .374.649v.785h2.5v-.785a.75.75 0 0 1 .374-.65A3.25 3.25 0 0 0 12 8.75ZM7.25 12a4.75 4.75 0 1 1 7.5 3.873V17a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.127c-1.21-.86-2-2.274-2-3.873Zm2 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm-3.5-8a.75.75 0 0 0-.75-.75H3.5a.75.75 0 0 0 0 1.5H5a.75.75 0 0 0 .75-.75Zm14.75-.75a.75.75 0 0 1 0 1.5H19a.75.75 0 0 1 0-1.5h1.5ZM4.97 5.47a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061L4.97 6.531a.75.75 0 0 1 0-1.061Zm13 0a.75.75 0 1 1 1.06 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m18.667 20.62-.501-.866a1 1 0 0 0-.5.866h1Zm-5.334 0h1a1 1 0 0 0-.499-.866l-.5.866Zm0 2.047h-1a1 1 0 0 0 1 1v-1Zm5.334 0v1a1 1 0 0 0 1-1h-1ZM20.333 16c0 1.603-.87 3.003-2.167 3.754l1.001 1.731A6.331 6.331 0 0 0 22.333 16h-2ZM16 11.667A4.333 4.333 0 0 1 20.333 16h2A6.333 6.333 0 0 0 16 9.667v2ZM11.667 16A4.333 4.333 0 0 1 16 11.667v-2A6.333 6.333 0 0 0 9.667 16h2Zm2.167 3.754A4.331 4.331 0 0 1 11.667 16h-2a6.331 6.331 0 0 0 3.166 5.485l1.001-1.73Zm.5 2.913V20.62h-2v2.047h2Zm4.333-1h-5.334v2h5.334v-2Zm-1-1.047v2.047h2V20.62h-2Z\" fill=\"#233043\"/><path d=\"M13.333 26.667h5.334M16 6.667v-2M4.667 16h2M25.333 16h2M8.748 9.414 7.333 8M23.252 9.414 24.667 8\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Suggestion.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Suggestion;
