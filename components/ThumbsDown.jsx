/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ThumbsDown /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ThumbsDown = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m5.376 8.533 2.256 4.205c.311.58 1.186.406 1.25-.25L9.14 9.9c.017-.17.16-.3.332-.3h2.765a1.098 1.098 0 0 0 .83-.367 1.062 1.062 0 0 0 .254-.86l-.748-4.8a1.062 1.062 0 0 0-.37-.652 1.094 1.094 0 0 0-.714-.254H5.376m0 5.866V2.667m0 5.866H3.75c-.287 0-.563-.112-.766-.312a1.058 1.058 0 0 1-.317-.754V3.733c0-.283.114-.554.317-.754.203-.2.479-.312.766-.312h1.626\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.787 19.462c.817 1.523 3.113 1.065 3.284-.655l.363-3.657h3.918a2.397 2.397 0 0 0 1.811-.803 2.342 2.342 0 0 0 .56-1.901l-1.122-7.2a2.345 2.345 0 0 0-.814-1.44 2.392 2.392 0 0 0-1.557-.556H5.626a2.39 2.39 0 0 0-1.676.684c-.447.44-.7 1.039-.7 1.666v5.6c0 .627.253 1.226.7 1.666a2.39 2.39 0 0 0 1.676.684h1.99l3.171 5.912ZM7.314 12.05H5.626a.89.89 0 0 1-.624-.253.837.837 0 0 1-.252-.597V5.6c0-.221.09-.436.252-.597a.89.89 0 0 1 .624-.253h1.688v7.3Zm1.5-7.3h8.428a.892.892 0 0 1 .582.206c.16.134.264.319.294.518l1.122 7.2a.828.828 0 0 1-.201.68.898.898 0 0 1-.675.297l-.008-.001h-4.148a1.25 1.25 0 0 0-1.244 1.127l-.386 3.882a.235.235 0 0 1-.062.149.264.264 0 0 1-.138.072.264.264 0 0 1-.155-.014.235.235 0 0 1-.114-.113l-3.295-6.141V4.75Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m10.753 17.067 4.511 8.41c.623 1.16 2.372.811 2.502-.5l.514-5.176c.034-.341.32-.6.663-.6h5.531c.314.003.626-.061.912-.188.287-.126.542-.313.749-.546a2.1 2.1 0 0 0 .507-1.72l-1.496-9.6a2.125 2.125 0 0 0-.739-1.306 2.19 2.19 0 0 0-1.428-.507H10.753m0 11.733V5.334m0 11.733H7.5a2.186 2.186 0 0 1-1.533-.625 2.116 2.116 0 0 1-.635-1.508V7.467c0-.566.229-1.109.635-1.509.407-.4.958-.624 1.533-.624h3.252\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ThumbsDown.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default ThumbsDown;
