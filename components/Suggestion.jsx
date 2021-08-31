/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Suggestion /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Suggestion = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m6.544 10.234.41-.628-.41.628zm2.912 0 .41.628-.41-.628zM9.916 8c0 .672-.344 1.263-.87 1.606l.82 1.256A3.414 3.414 0 0 0 11.416 8h-1.5zM8 6.083c1.059 0 1.917.858 1.917 1.917h1.5A3.417 3.417 0 0 0 8 4.583v1.5zM6.083 8c0-1.059.859-1.917 1.917-1.917v-1.5A3.417 3.417 0 0 0 4.583 8h1.5zm.871 1.606A1.914 1.914 0 0 1 6.084 8h-1.5c0 1.2.618 2.254 1.55 2.862l.82-1.256zm.463 1.477v-.629h-1.5v.63h1.5zm1.666-.5H6.917v1.5h2.166v-1.5zm-.5-.129v.63h1.5v-.63h-1.5zm-2.666.63a1 1 0 0 0 1 1v-1.5a.5.5 0 0 1 .5.5h-1.5zm.217-.222a.486.486 0 0 1-.217-.408h1.5c0-.365-.195-.673-.463-.848l-.82 1.256zm2.95 1.221a1 1 0 0 0 1-1h-1.5a.5.5 0 0 1 .5-.5v1.5zm-.038-2.477a1.014 1.014 0 0 0-.463.848h1.5c0 .186-.098.331-.217.408l-.82-1.256z\" fill=\"#233043\"/><path d=\"M6.667 13.333h2.666M8 3.333v-1M2.333 8h1M12.667 8h1M4.374 4.707 3.667 4M11.626 4.707 12.333 4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m14 15.465-.376-.65a.75.75 0 0 0-.374.65H14zm-4 0h.75a.75.75 0 0 0-.374-.65l-.376.65zM10 17h-.75c0 .414.336.75.75.75V17zm4 0v.75a.75.75 0 0 0 .75-.75H14zm1.25-5a3.249 3.249 0 0 1-1.626 2.816l.752 1.298A4.748 4.748 0 0 0 16.75 12h-1.5zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25v1.5zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12h1.5zm1.626 2.816A3.249 3.249 0 0 1 8.75 12h-1.5c0 1.76.957 3.294 2.374 4.114l.752-1.298zM10.75 17v-1.535h-1.5V17h1.5zm3.25-.75h-4v1.5h4v-1.5zm-.75-.785V17h1.5v-1.535h-1.5z\" fill=\"#233043\"/><path d=\"M10 20h4M12 5V3.5M3.5 12H5M19 12h1.5M6.56 7.06 5.5 6M17.44 7.06 18.5 6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m18.667 20.624-.501-.866a1 1 0 0 0-.5.866h1zm-5.334 0h1a1 1 0 0 0-.499-.866l-.5.866zm0 2.047h-1a1 1 0 0 0 1 1v-1zm5.334 0v1a1 1 0 0 0 1-1h-1zm1.666-6.667c0 1.603-.87 3.003-2.167 3.754l1.002 1.731a6.331 6.331 0 0 0 3.165-5.485h-2zM16 11.671a4.333 4.333 0 0 1 4.333 4.333h2A6.333 6.333 0 0 0 16 9.671v2zm-4.333 4.333A4.333 4.333 0 0 1 16 11.671v-2a6.333 6.333 0 0 0-6.333 6.333h2zm2.167 3.754a4.331 4.331 0 0 1-2.167-3.754h-2a6.331 6.331 0 0 0 3.166 5.485l1.001-1.73zm.5 2.913v-2.047h-2v2.047h2zm4.333-1h-5.334v2h5.334v-2zm-1-1.047v2.047h2v-2.047h-2z\" fill=\"#233043\"/><path d=\"M13.333 26.67h5.334M16 6.67v-2M4.667 16.004h2M25.333 16.004h2M8.747 9.418 7.333 8.004M23.252 9.418l1.415-1.414\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

Suggestion.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Suggestion;
