/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ProgressUpdate /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ProgressUpdate = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 7.895 7.143 10 11 6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M8 2a6 6 0 1 1 0 12\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4.942 2.783a.75.75 0 0 1-.138 1.051c-.364.28-.69.606-.97.97a.75.75 0 1 1-1.19-.914c.36-.467.779-.886 1.246-1.245a.75.75 0 0 1 1.052.138ZM2.148 6.473c.41.053.7.43.646.84a5.307 5.307 0 0 0 0 1.374.75.75 0 1 1-1.487.194 6.807 6.807 0 0 1 0-1.762.75.75 0 0 1 .84-.646ZM2.783 11.058a.75.75 0 0 1 1.051.138c.28.364.606.69.97.97a.75.75 0 0 1-.914 1.19 6.786 6.786 0 0 1-1.245-1.246.75.75 0 0 1 .138-1.052Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.25 4a.75.75 0 0 1 .75-.75 8.75 8.75 0 0 1 0 17.5.75.75 0 0 1 0-1.5 7.25 7.25 0 1 0 0-14.5.75.75 0 0 1-.75-.75Zm5.187 5.348c.3.284.313.76.028 1.06l-5.041 5.322a.75.75 0 0 1-1.075.014l-2.8-2.8a.75.75 0 1 1 1.06-1.06l2.255 2.255 4.513-4.763a.75.75 0 0 1 1.06-.028Zm-7.47-3.932a.75.75 0 0 0-.628-1.363 8.751 8.751 0 0 0-1.423.827.75.75 0 1 0 .871 1.22 7.252 7.252 0 0 1 1.18-.684Zm-3.5 3.441a.75.75 0 1 0-1.351-.65 8.75 8.75 0 0 0-.571 1.544.75.75 0 0 0 1.45.385 7.247 7.247 0 0 1 .472-1.279Zm-1.413 4.334a.75.75 0 0 1 .908.549 7.251 7.251 0 0 0 .45 1.287.75.75 0 1 1-1.363.626 8.763 8.763 0 0 1-.543-1.553.75.75 0 0 1 .548-.909Zm3.63 4.634a.75.75 0 0 0-.894 1.205 8.75 8.75 0 0 0 1.408.851.75.75 0 1 0 .652-1.351 7.23 7.23 0 0 1-1.167-.705Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.935 5.595a1 1 0 0 1-.244 1.393A11.068 11.068 0 0 0 6.988 9.69 1 1 0 0 1 5.35 8.542a13.068 13.068 0 0 1 3.191-3.191 1 1 0 0 1 1.393.244ZM4.353 12.93a1 1 0 0 1 .812 1.158 11.075 11.075 0 0 0 0 3.824 1 1 0 0 1-1.97.345 13.074 13.074 0 0 1 0-4.514 1 1 0 0 1 1.158-.813ZM5.595 22.065a1 1 0 0 1 1.393.244 11.067 11.067 0 0 0 2.703 2.703 1 1 0 1 1-1.149 1.637 13.067 13.067 0 0 1-3.191-3.191 1 1 0 0 1 .244-1.393Z\" fill=\"#233043\"/><path d=\"M16 4a12 12 0 0 1 0 24\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9 16.265 13.82 21l8.68-9\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ProgressUpdate.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default ProgressUpdate;
