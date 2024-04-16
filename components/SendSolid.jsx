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
const SendSolid = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.85 2.89 2.036 6.815A.5.5 0 0 0 2 7.727l3.382 1.69a.5.5 0 0 0 .577-.093l6.107-6.106c.154-.154-.014-.408-.216-.328ZM13.11 4.15l-3.925 9.813a.5.5 0 0 1-.912.038l-1.69-3.382a.5.5 0 0 1 .093-.577l6.106-6.107c.154-.154.408.014.328.216Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"m2.539 10.43 15.687-6.275c.202-.081.37.173.216.327L8.81 14.113a.5.5 0 0 1-.577.094l-5.732-2.866a.5.5 0 0 1 .038-.911ZM13.57 21.46l6.275-15.687c.081-.202-.173-.37-.327-.216L9.887 15.19a.5.5 0 0 0-.094.577l2.866 5.732a.5.5 0 0 0 .911-.038Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.341 6.324 3.454 13.879a.7.7 0 0 0-.053 1.276l7.555 3.777a.7.7 0 0 0 .808-.131L23.096 7.469c.539-.539-.048-1.428-.755-1.145ZM25.676 9.659l-7.555 18.887a.7.7 0 0 1-1.276.053l-3.777-7.555a.7.7 0 0 1 .131-.808L24.531 8.904c.539-.539 1.428.048 1.145.755Z\" fill=\"#233043\"/></svg>"}
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

export default SendSolid;
