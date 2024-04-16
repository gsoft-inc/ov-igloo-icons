/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Link /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Link = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m7.256 8.488.083.084a2.353 2.353 0 0 0 3.327 0l1.581-1.581a2.47 2.47 0 0 0 0-3.494v0a2.47 2.47 0 0 0-3.494 0l-.749.749\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m8.753 6.99-.083-.082a2.353 2.353 0 0 0-3.328 0l-1.58 1.58a2.47 2.47 0 0 0 0 3.494v0a2.47 2.47 0 0 0 3.494 0l.748-.748\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.54 5.46a4.25 4.25 0 0 0-6.01 0l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.061-1.06a2.75 2.75 0 0 1 3.89 3.889l-2.24 2.24a2.583 2.583 0 0 1-3.653 0l-.118-.119a.75.75 0 0 0-1.061 1.061l.118.118a4.084 4.084 0 0 0 5.775 0l2.239-2.24a4.25 4.25 0 0 0 0-6.01ZM5.46 18.54a4.25 4.25 0 0 0 6.01 0l1.06-1.06a.75.75 0 0 0-1.06-1.06l-1.061 1.06a2.75 2.75 0 0 1-3.89-3.889l2.24-2.24a2.583 2.583 0 0 1 3.653 0l.118.119a.75.75 0 0 0 1.061-1.061l-.118-.118a4.083 4.083 0 0 0-5.775 0l-2.239 2.24a4.25 4.25 0 0 0 0 6.01Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m14.585 17.414.158.157a4.445 4.445 0 0 0 6.285 0l2.986-2.985a4.667 4.667 0 0 0 0-6.6v0a4.667 4.667 0 0 0-6.6 0L16 9.4\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m17.414 14.586-.157-.157a4.444 4.444 0 0 0-6.285 0l-2.986 2.985a4.667 4.667 0 0 0 0 6.6v0a4.667 4.667 0 0 0 6.6 0L16 22.6\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

export default Link;
