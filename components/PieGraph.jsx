/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <PieGraph /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const PieGraph = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.693 8.75h.004A5.251 5.251 0 1 1 6.75 2.803V7.752c0 .555.448.998.998.998H12.693Z\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"M9.25 1.803a5.254 5.254 0 0 1 4.447 4.447H9.25V1.803Z\" stroke=\"#233043\" stroke-width=\"1.5\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.25 9.25V3.794a6.253 6.253 0 0 1 5.456 5.456H14.25Zm-.197-6.98c-.745-.053-1.303.556-1.303 1.23v5.998c0 .683.55 1.252 1.248 1.252H20c.675 0 1.284-.558 1.232-1.303a7.751 7.751 0 0 0-7.178-7.178ZM4.25 13a6.251 6.251 0 0 1 5.5-6.206v5.708c0 .687.554 1.248 1.247 1.248h5.709A6.251 6.251 0 0 1 4.25 13Zm7-6.5c0-.677-.56-1.283-1.303-1.23a7.75 7.75 0 1 0 8.284 8.283c.052-.738-.547-1.303-1.228-1.303H11.25V6.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19 13V5.726A8.338 8.338 0 0 1 26.274 13H19Zm-.263-9.307C17.744 3.623 17 4.435 17 5.334v7.997c0 .91.734 1.669 1.664 1.669h8.002c.9 0 1.712-.744 1.641-1.737a10.335 10.335 0 0 0-9.57-9.57ZM5.667 18A8.335 8.335 0 0 1 13 9.726v7.61c0 .917.739 1.664 1.663 1.664h7.611a8.335 8.335 0 0 1-16.607-1ZM15 9.333c0-.902-.746-1.71-1.737-1.64C7.899 8.07 3.667 12.54 3.667 18c0 5.707 4.626 10.333 10.333 10.333 5.46 0 9.929-4.232 10.307-9.596.07-.984-.728-1.737-1.637-1.737H15V9.333Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

PieGraph.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default PieGraph;
