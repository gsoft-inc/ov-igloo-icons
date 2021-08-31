/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Link /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Link = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m7.256 9.488.083.084a2.353 2.353 0 0 0 3.327 0l1.581-1.581a2.47 2.47 0 0 0 0-3.494v0a2.47 2.47 0 0 0-3.494 0l-.749.749\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m8.753 7.99-.083-.082a2.353 2.353 0 0 0-3.328 0l-1.58 1.58a2.47 2.47 0 0 0 0 3.494v0a2.47 2.47 0 0 0 3.494 0l.748-.748\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m10.94 13.06.117.119a3.333 3.333 0 0 0 4.714 0l2.24-2.24a3.5 3.5 0 0 0 0-4.95v0a3.5 3.5 0 0 0-4.95 0L12 7.05\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m13.06 10.94-.117-.118a3.333 3.333 0 0 0-4.714 0l-2.24 2.239a3.5 3.5 0 0 0 0 4.95v0a3.5 3.5 0 0 0 4.95 0L12 16.95\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m14.585 17.418.158.157a4.444 4.444 0 0 0 6.285 0l2.986-2.986a4.667 4.667 0 0 0 0-6.6v0a4.667 4.667 0 0 0-6.6 0L16 9.405\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m17.414 14.59-.157-.158a4.445 4.445 0 0 0-6.285 0l-2.986 2.986a4.667 4.667 0 0 0 0 6.6v0a4.667 4.667 0 0 0 6.6 0L16 22.603\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Link.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Link.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Link;
