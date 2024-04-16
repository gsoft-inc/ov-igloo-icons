/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Gift /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Gift = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 5.5h12V8H2V5.5ZM8 8H3v6h5m0-6h5v6H8m0-6v6M6.375 2.643c.654.354 1.774 2.32 1.774 2.32s-2.31.107-2.964-.248c-.655-.355-.919-1.107-.59-1.679.329-.572 1.126-.748 1.78-.393Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.625 2.643c-.654.354-1.774 2.32-1.774 2.32s2.31.107 2.964-.248c.655-.355.918-1.107.59-1.679-.329-.572-1.126-.748-1.78-.393Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.386 5.175c-.167.299-.074.818.435 1.102.067.037.27.1.642.15a11.327 11.327 0 0 0 1.318.085l-.1-.153a11.308 11.308 0 0 0-.665-.924c-.237-.29-.397-.43-.464-.468-.509-.284-1-.09-1.166.208Zm3.528.329c.224-.34.48-.704.736-1.018.247-.302.56-.641.895-.828 1.099-.614 2.566-.362 3.207.786.426.764.323 1.63-.117 2.306H20a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.25v8.25a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-8.25H4a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 4 6.75h3.193c-.44-.675-.543-1.542-.117-2.306.641-1.148 2.108-1.4 3.207-.786.335.187.648.526.895.828.257.314.512.677.736 1.018Zm6.336 5.746h-5.5v7.5h5.5v-7.5Zm-7 0h-5.5v7.5h5.5v-7.5ZM19 9.75h.25v-1.5h-6.5v1.5H19Zm-7.75 0v-1.5h-6.5v1.5h6.5Zm3.757-3.473c.509-.284.602-.803.435-1.102-.167-.298-.657-.492-1.166-.208-.067.038-.227.177-.464.468a11.332 11.332 0 0 0-.765 1.077c.06 0 .121-.002.183-.004.392-.011.793-.035 1.136-.081.371-.05.575-.113.641-.15Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 14.667h10.667v-4H16m0 4H5.333v-4H16m0 4v-4M16 14.667H6.667v12H16m0-12h9.333v12H16m0-12v12M13.223 6.417c1.072.598 2.906 3.912 2.906 3.912s-3.784.178-4.855-.42c-1.072-.598-1.504-1.865-.966-2.83.539-.964 1.844-1.26 2.915-.662Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M18.547 6.417c-1.071.598-2.905 3.912-2.905 3.912s3.784.178 4.855-.42c1.072-.598 1.504-1.865.966-2.83-.539-.964-1.844-1.26-2.916-.662Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Gift.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Gift;
