/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Team /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Team = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"5.501\" cy=\"5.188\" r=\"2.188\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M2 12.24a3.112 3.112 0 0 1 3.112-3.112h.778a3.112 3.112 0 0 1 3.113 3.112v0a.389.389 0 0 1-.39.39H2.39A.389.389 0 0 1 2 12.24v0Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7.438 12.629h6.228c.184 0 .334-.15.334-.334v0a2.674 2.674 0 0 0-2.674-2.674h-.607c-1.55 0-1.919.504-2.242.84\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"10.719\" cy=\"6.447\" r=\"1.617\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.971 8.202a2.415 2.415 0 1 1 4.83 0 2.415 2.415 0 0 1-4.83 0Zm2.415-3.916a3.915 3.915 0 1 0 0 7.83 3.915 3.915 0 0 0 0-7.83ZM7.322 13.15a4.75 4.75 0 0 0-4.75 4.75v.564c0 .69.56 1.25 1.25 1.25H20.195c.68 0 1.233-.552 1.233-1.233a4.618 4.618 0 0 0-4.618-4.618h-.877c-1.2 0-2.021.195-2.63.51-.154.079-.291.164-.413.251a4.736 4.736 0 0 0-3.44-1.474H7.323Zm12.595 5.065H14.2v-.315c0-.73-.164-1.423-.46-2.041.074-.054.155-.104.25-.153.334-.173.9-.343 1.943-.343h.877a3.118 3.118 0 0 1 3.107 2.852Zm-7.747-1.845a.749.749 0 0 1-.23-.56 3.243 3.243 0 0 0-2.49-1.16H7.323a3.25 3.25 0 0 0-3.25 3.25v.314H12.7V17.9c0-.494-.11-.962-.307-1.381a.75.75 0 0 1-.223-.149Zm2.175-6.347a1.588 1.588 0 1 1 3.176 0 1.588 1.588 0 0 1-3.177 0Zm1.588-3.088a3.088 3.088 0 1 0 0 6.176 3.088 3.088 0 0 0 0-6.176Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"11.182\" cy=\"10.935\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" r=\"4.22\"/><path d=\"M4.43 22.532a4 4 0 0 1 4-4h5.504a4 4 0 0 1 4 4v2.253a.5.5 0 0 1-.5.5H4.929a.5.5 0 0 1-.5-.5v-2.253Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14.916 25.285h12.155a.5.5 0 0 0 .5-.5v-1.302a4 4 0 0 0-4-4h-2.328c-2.989 0-3.12.368-3.743 1.017\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"21.244\" cy=\"13.363\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" r=\"3.117\"/></svg>"}
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
