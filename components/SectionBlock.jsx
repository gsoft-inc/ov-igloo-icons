/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <SectionBlock /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const SectionBlock = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.75 3h-9.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25ZM3 9.5h10M3 13h10\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.125 6.75H4.875a.375.375 0 0 0-.375.375v2.25c0 .207.168.375.375.375h14.25a.375.375 0 0 0 .375-.375v-2.25a.375.375 0 0 0-.375-.375ZM4.5 13.5h15M4.5 17.25h15\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 9.5A1.5 1.5 0 0 1 6.5 8h19A1.5 1.5 0 0 1 27 9.5v3a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 5 12.5v-3Zm2 .5v2h18v-2H7Zm-2 8a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H6Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

SectionBlock.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default SectionBlock;
