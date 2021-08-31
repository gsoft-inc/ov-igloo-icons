/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <OrderedList /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const OrderedList = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.333 3v2M2.667 7.667c0-.223.133-.667.666-.667.534 0 .667.444.667.667C4 8.333 2.667 9 2.667 9H4M2.667 11H4l-.667.667s.667 0 .667.666C4 13 3.377 13 3.333 13c-.666 0-.666-.5-.666-.5\" stroke=\"#233043\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6.5 4h7M6.5 8h7M6.5 12h7\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 6h10\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5 4.5v3\" stroke=\"#233043\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9 12h10\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4 11.5c0-.333.2-1 1-1s1 .667 1 1c0 1-2 2-2 2h2\" stroke=\"#233043\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9 18h10\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4 16.5h2l-1 1s1 0 1 1-.935 1-1 1c-1 0-1-.75-1-.75\" stroke=\"#233043\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 8h13.334\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6.667 6v4\" stroke=\"#233043\" stroke-width=\"1.333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 16h13.334\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5.333 15.333C5.333 14.89 5.6 14 6.668 14 7.734 14 8 14.889 8 15.333 8 16.667 5.333 18 5.333 18H8\" stroke=\"#233043\" stroke-width=\"1.333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 24h13.334\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5.333 22H8l-1.333 1.333S8 23.333 8 24.667C8 26 6.753 26 6.667 26c-1.333 0-1.333-1-1.333-1\" stroke=\"#233043\" stroke-width=\"1.333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

OrderedList.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

OrderedList.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default OrderedList;
