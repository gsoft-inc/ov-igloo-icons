/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Shield /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Shield = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.143 2 3 4.357v3.098M8.143 2l5.143 2.357v3.098M8.143 2v5.455M3 7.455C3 10.482 5.194 13.313 8.143 14M3 7.455h5.143m0 6.545c2.948-.687 5.143-3.518 5.143-6.545M8.143 14V7.455m5.143 0H8.143\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.688 3.068a.75.75 0 0 1 .624 0l7.072 3.241a.75.75 0 0 1 .437.682v4.259c0 4.502-3.248 8.704-7.65 9.73a.75.75 0 0 1-.341 0c-4.403-1.026-7.651-5.228-7.651-9.73V6.991c0-.293.17-.56.437-.682l7.072-3.24Zm-6.01 4.404V10.5h5.572V4.919L5.679 7.472ZM12.75 4.92V10.5h5.571V7.472L12.75 4.92ZM18.286 12H12.75v7.243c3.005-1.11 5.232-4.031 5.536-7.243Zm-7.036 7.243C8.245 18.133 6.018 15.212 5.714 12h5.536v7.243Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 5 6.57 9.321V15M16 5l9.428 4.321V15M16 5v10M6.57 15c0 5.55 4.023 10.74 9.429 12M6.57 15H16m0 12c5.406-1.26 9.428-6.45 9.428-12M16 27V15m9.428 0H16\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Shield.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Shield;
