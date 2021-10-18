/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <SendSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const SendSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\" fill=\"#233043\"><path d=\"M11.85 2.89 2.036 6.815A.5.5 0 0 0 2 7.726l3.382 1.691a.5.5 0 0 0 .577-.093l6.107-6.107c.154-.153-.014-.408-.216-.327ZM13.11 4.15l-3.925 9.812a.5.5 0 0 1-.912.038l-1.69-3.382a.5.5 0 0 1 .093-.577l6.106-6.106c.154-.154.408.013.328.215Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h16v16H0z\"/></clipPath></defs></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\" fill=\"#233043\"><path d=\"M18.226 4.155 2.54 10.43a.5.5 0 0 0-.038.911l5.732 2.866a.5.5 0 0 0 .577-.093l9.632-9.632c.154-.154-.014-.408-.216-.327ZM19.845 5.774 13.57 21.461a.5.5 0 0 1-.911.038l-2.866-5.732a.5.5 0 0 1 .094-.577l9.631-9.632c.154-.153.408.014.327.216Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\" fill=\"#233043\"><path d=\"M22.341 6.328 3.454 13.882a.7.7 0 0 0-.053 1.277l7.555 3.777a.7.7 0 0 0 .808-.131L23.096 7.473c.539-.539-.048-1.428-.755-1.145ZM25.676 9.663 18.121 28.55a.7.7 0 0 1-1.276.053l-3.777-7.555a.7.7 0 0 1 .131-.808L24.531 8.908c.539-.539 1.428.048 1.145.755Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" transform=\"translate(0 .004)\" d=\"M0 0h32v32H0z\"/></clipPath></defs></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

SendSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

SendSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default SendSolid;
