/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ENps /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ENps = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.667 9.333A5.333 5.333 0 0 1 8 4v0a5.333 5.333 0 0 1 5.333 5.333v2.604a.063.063 0 0 1-.063.063H2.73a.063.063 0 0 1-.063-.063V9.333z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10 11.667a2 2 0 0 0-4 0M9.022 7.262l-.511 2.37\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"5.833\" r=\".5\" fill=\"#233043\"/><circle cx=\"5.167\" cy=\"7.167\" r=\".5\" fill=\"#233043\"/><circle cx=\"4.5\" cy=\"9.813\" r=\".5\" fill=\"#233043\"/><circle cx=\"11.5\" cy=\"9.813\" r=\".5\" fill=\"#233043\"/><circle cx=\"10.833\" cy=\"7.167\" r=\".5\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 14a8 8 0 0 1 8-8v0a8 8 0 0 1 8 8v3.874c0 .07-.057.126-.126.126H4.126A.126.126 0 0 1 4 17.874V14z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M15 17.5a3 3 0 1 0-6 0M13.533 10.894l-.766 3.553\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"8.75\" r=\".75\" fill=\"#233043\"/><circle cx=\"7.75\" cy=\"10.75\" r=\".75\" fill=\"#233043\"/><circle cx=\"6.75\" cy=\"14.72\" r=\".75\" fill=\"#233043\"/><circle cx=\"17.25\" cy=\"14.72\" r=\".75\" fill=\"#233043\"/><circle cx=\"16.25\" cy=\"10.75\" r=\".75\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.333 18.667C5.333 12.776 10.11 8 16 8v0c5.891 0 10.667 4.776 10.667 10.667v5.165a.168.168 0 0 1-.169.168H5.502a.168.168 0 0 1-.168-.168v-5.165z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M20 23.333a4 4 0 1 0-8 0M18.044 14.524l-1.022 4.738\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"11.667\" r=\"1\" fill=\"#233043\"/><circle cx=\"10.333\" cy=\"14.333\" r=\"1\" fill=\"#233043\"/><circle cx=\"9\" cy=\"19.626\" r=\"1\" fill=\"#233043\"/><circle cx=\"23\" cy=\"19.626\" r=\"1\" fill=\"#233043\"/><circle cx=\"21.667\" cy=\"14.333\" r=\"1\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ENps.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

ENps.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ENps;
