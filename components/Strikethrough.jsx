/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Strikethrough /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Strikethrough = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.333 8h9.334M8.078 8C6.562 8 5.333 6.955 5.333 5.667c0-1.289 1.23-2.334 2.745-2.334 1.195 0 2.212.65 2.589 1.556V3.333M7.922 8c1.516 0 2.745 1.045 2.745 2.333 0 1.289-1.23 2.334-2.745 2.334-1.195 0-2.212-.65-2.589-1.556v1.556\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.117 5.75C10.14 5.75 8.75 7.09 8.75 8.5s1.389 2.75 3.367 2.75H19a.75.75 0 0 1 0 1.5h-3.4c.71.726 1.15 1.675 1.15 2.75 0 2.457-2.298 4.25-4.867 4.25-1.173 0-2.275-.366-3.133-.994V19a.75.75 0 0 1-1.5 0v-2.333a.75.75 0 0 1 1.443-.288c.43 1.037 1.651 1.871 3.19 1.871 1.978 0 3.367-1.34 3.367-2.75s-1.389-2.75-3.367-2.75H5a.75.75 0 0 1 0-1.5h3.4c-.71-.726-1.15-1.675-1.15-2.75 0-2.457 2.298-4.25 4.867-4.25 1.173 0 2.275.366 3.133.995V5a.75.75 0 0 1 1.5 0v2.333a.75.75 0 0 1-1.443.288c-.43-1.037-1.651-1.871-3.19-1.871Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.156 7.667c-2.638 0-4.49 1.787-4.49 3.666 0 1.87 1.833 3.649 4.45 3.667h9.217a1 1 0 1 1 0 2H20.8c.947.968 1.534 2.233 1.534 3.667 0 3.275-3.063 5.666-6.49 5.666-1.563 0-3.032-.487-4.176-1.326v.326a1 1 0 0 1-2 0v-3.11a1 1 0 0 1 1.923-.385c.575 1.383 2.203 2.495 4.254 2.495 2.638 0 4.49-1.787 4.49-3.666 0-1.88-1.852-3.667-4.49-3.667H6.667a1 1 0 1 1 0-2H11.2c-.947-.969-1.534-2.233-1.534-3.667 0-3.275 3.063-5.666 6.489-5.666 1.564 0 3.033.487 4.177 1.326v-.326a1 1 0 1 1 2 0v3.11a1 1 0 0 1-1.923.385c-.575-1.383-2.203-2.495-4.254-2.495Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Strikethrough.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Strikethrough;
