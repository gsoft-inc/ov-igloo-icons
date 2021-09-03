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
const SectionBlock = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.125 6.75H4.875a.375.375 0 0 0-.375.375v2.25c0 .207.168.375.375.375h14.25a.375.375 0 0 0 .375-.375v-2.25a.375.375 0 0 0-.375-.375zM4.5 13.5h15M4.5 17.25h15\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.125 6.75H4.875a.375.375 0 0 0-.375.375v2.25c0 .207.168.375.375.375h14.25a.375.375 0 0 0 .375-.375v-2.25a.375.375 0 0 0-.375-.375zM4.5 13.5h15M4.5 17.25h15\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.5 9h-19a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM6 18h20M6 23h20\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

SectionBlock.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default SectionBlock;
