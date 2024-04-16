/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <TeamSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const TeamSolid = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"5.591\" cy=\"5.468\" r=\"2.11\" fill=\"#233043\"/><path d=\"M2.215 11.616a3.376 3.376 0 1 1 6.752 0v.537a.49.49 0 0 1-.489.49H2.704a.49.49 0 0 1-.49-.49v-.537Z\" fill=\"#233043\"/><path d=\"M7.857 11.802a2.765 2.765 0 0 1 5.53 0v.44a.4.4 0 0 1-.401.4H8.258a.4.4 0 0 1-.4-.4v-.44Z\" fill=\"#233043\"/><circle cx=\"10.622\" cy=\"6.681\" r=\"1.559\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.386 11.367a3.165 3.165 0 1 0 0-6.33 3.165 3.165 0 0 0 0 6.33Zm0 .993a5.064 5.064 0 0 0-5.064 5.065v1.15c0 .214.174.388.388.388h16.052a.318.318 0 0 0 .318-.318v-.942a4.147 4.147 0 0 0-7.264-2.735 5.063 5.063 0 0 0-4.43-2.608Zm7.547 0a2.338 2.338 0 1 0 0-4.676 2.338 2.338 0 0 0 0 4.676Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"11.182\" cy=\"10.935\" r=\"4.22\" fill=\"#233043\"/><path d=\"M4.43 23.233a6.752 6.752 0 0 1 13.504 0v1.551a.5.5 0 0 1-.5.5H4.93a.5.5 0 0 1-.5-.5v-1.551Z\" fill=\"#233043\"/><path d=\"M15.714 23.604a5.53 5.53 0 0 1 11.06 0v1.256c0 .234-.19.424-.425.424h-10.21a.424.424 0 0 1-.425-.424v-1.256Z\" fill=\"#233043\"/><circle cx=\"21.244\" cy=\"13.363\" fill=\"#233043\" r=\"3.117\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

TeamSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default TeamSolid;
