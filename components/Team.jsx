/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Team /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Team = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"5.501\" cy=\"5.188\" r=\"2.188\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M2 12.24a3.112 3.112 0 0 1 3.112-3.112h.778a3.112 3.112 0 0 1 3.113 3.112v0a.39.39 0 0 1-.39.39H2.39A.39.39 0 0 1 2 12.24v0z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7.438 12.63h6.228c.184 0 .334-.15.334-.335v0a2.674 2.674 0 0 0-2.674-2.674h-.607c-1.55 0-1.919.504-2.242.84\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"10.719\" cy=\"6.447\" r=\"1.617\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8.386\" cy=\"8.202\" r=\"3.165\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M3.322 17.9a4 4 0 0 1 4-4H9.45a4 4 0 0 1 4 4v.564a.5.5 0 0 1-.5.5H3.82a.5.5 0 0 1-.5-.5v-.565z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M11.187 18.964h9.008a.483.483 0 0 0 .483-.484v0a3.868 3.868 0 0 0-3.868-3.868h-.877c-2.242 0-2.775.73-3.243 1.216\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"15.933\" cy=\"10.022\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" r=\"2.338\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"11.182\" cy=\"10.94\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" r=\"4.22\"/><path d=\"M4.43 22.536a4 4 0 0 1 4-4h5.504a4 4 0 0 1 4 4v2.253a.5.5 0 0 1-.5.5H4.929a.5.5 0 0 1-.5-.5v-2.253z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14.916 25.29h12.155a.5.5 0 0 0 .5-.5v-1.303a4 4 0 0 0-4-4h-2.328c-2.989 0-3.7.973-4.323 1.622\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"21.243\" cy=\"13.367\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" r=\"3.117\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Team.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Team.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Team;
