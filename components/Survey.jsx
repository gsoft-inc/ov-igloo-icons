/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Survey /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Survey = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m10 10.984 1.667 1.516 2.5-2.5M9.429 3H3.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75H8M9.429 3 13 6.571M9.429 3v2.821c0 .415.335.75.75.75H13m0 0V8.18\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 5.75v12.5h6.564a.75.75 0 0 1 0 1.5h-6.98a1.083 1.083 0 0 1-1.084-1.083V5.333c0-.598.485-1.083 1.084-1.083H15a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v3.567a.75.75 0 1 1-1.5 0V9.75h-2.916a1.083 1.083 0 0 1-1.084-1.083V5.75h-8.5Zm10 1.06 1.44 1.44h-1.44V6.81ZM8.25 9A.75.75 0 0 1 9 8.25h2a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9ZM9 11.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9ZM8.25 15a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm13.53.53a.75.75 0 0 0-1.06-1.06l-3.244 3.244-1.971-1.793a.75.75 0 0 0-1.01 1.11l2.5 2.274a.75.75 0 0 0 1.035-.025l3.75-3.75Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 6.667H7A.333.333 0 0 0 6.667 7v18c0 .184.15.333.333.333h9.418M20 6.667 25.334 12M20 6.667v5c0 .184.15.333.334.333h5m0 0v4.756M12 12h2.667M12 16h8M12 20h4M20 21.968 23.333 25l5-5\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Survey.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Survey;
