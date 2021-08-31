/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <TeamSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const TeamSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"5.591\" cy=\"5.468\" r=\"2.11\" fill=\"#233043\"/><path d=\"M2.215 11.616a3.376 3.376 0 0 1 6.752 0v.537a.49.49 0 0 1-.49.49H2.705a.49.49 0 0 1-.49-.49v-.537z\" fill=\"#233043\"/><path d=\"M7.857 11.802a2.765 2.765 0 0 1 5.53 0v.44a.4.4 0 0 1-.401.4H8.258a.4.4 0 0 1-.401-.4v-.44z\" fill=\"#233043\"/><circle cx=\"10.622\" cy=\"6.682\" r=\"1.559\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8.386\" cy=\"8.201\" fill=\"#233043\" r=\"3.165\"/><path d=\"M3.322 17.424a5.064 5.064 0 0 1 10.128 0v1.15a.388.388 0 0 1-.388.389H3.71a.388.388 0 0 1-.388-.389v-1.15z\" fill=\"#233043\"/><path d=\"M11.786 17.703a4.147 4.147 0 0 1 8.294 0v.942a.318.318 0 0 1-.318.318h-7.658a.318.318 0 0 1-.318-.318v-.942z\" fill=\"#233043\"/><circle cx=\"15.933\" cy=\"10.022\" fill=\"#233043\" r=\"2.338\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"11.182\" cy=\"10.94\" r=\"4.22\" fill=\"#233043\"/><path d=\"M4.43 23.237a6.752 6.752 0 0 1 13.504 0v1.551a.5.5 0 0 1-.5.5H4.93a.5.5 0 0 1-.5-.5v-1.551z\" fill=\"#233043\"/><path d=\"M15.714 23.609a5.53 5.53 0 0 1 11.06 0v1.255c0 .235-.19.425-.425.425h-10.21a.424.424 0 0 1-.425-.425V23.61z\" fill=\"#233043\"/><circle cx=\"21.243\" cy=\"13.367\" fill=\"#233043\" r=\"3.117\"/></svg>"}
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

TeamSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default TeamSolid;
