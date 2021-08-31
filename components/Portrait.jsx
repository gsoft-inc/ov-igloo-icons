/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Portrait /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Portrait = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"5.5\" r=\"1.75\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5 11.667A2.667 2.667 0 0 1 7.667 9h.666A2.667 2.667 0 0 1 11 11.667v0c0 .184-.15.333-.333.333H5.333A.333.333 0 0 1 5 11.667v0zM14 5V2.333A.333.333 0 0 0 13.667 2H11M5 2H2.333A.333.333 0 0 0 2 2.333V5m0 6v2.667c0 .184.15.333.333.333H5m6 0h2.667c.184 0 .333-.15.333-.333V11\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"9\" r=\"2.5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M8 17.056a3.556 3.556 0 0 1 3.556-3.556h.888A3.556 3.556 0 0 1 16 17.056v0a.444.444 0 0 1-.444.444H8.444A.444.444 0 0 1 8 17.056v0zM20 8V4.5a.5.5 0 0 0-.5-.5H16M8 4H4.5a.5.5 0 0 0-.5.5V8m0 8v3.5a.5.5 0 0 0 .5.5H8m8 0h3.5a.5.5 0 0 0 .5-.5V16\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"12.004\" r=\"3.333\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10.666 22.745a4.74 4.74 0 0 1 4.741-4.741h1.185a4.74 4.74 0 0 1 4.741 4.74v0a.593.593 0 0 1-.592.593h-9.482a.593.593 0 0 1-.593-.592v0zM26.667 10.67V6.005A.667.667 0 0 0 26 5.337h-4.667m-10.666 0H6a.667.667 0 0 0-.667.667v4.667m0 10.666v4.667c0 .368.299.666.667.666h4.667m10.666 0H26a.667.667 0 0 0 .667-.666v-4.667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Portrait.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Portrait.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Portrait;
