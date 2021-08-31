/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ThumbsDown /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ThumbsDown = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m5.376 8.533 2.256 4.205c.311.58 1.186.406 1.25-.249L9.14 9.9c.017-.17.16-.3.332-.3h2.765a1.098 1.098 0 0 0 .83-.367 1.062 1.062 0 0 0 .254-.86l-.748-4.8a1.062 1.062 0 0 0-.37-.652 1.094 1.094 0 0 0-.714-.254H5.376m0 5.866V2.667m0 5.866H3.75c-.287 0-.563-.112-.766-.312a1.058 1.058 0 0 1-.317-.754V3.733c0-.282.114-.554.317-.754.203-.2.479-.312.766-.312h1.626\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m8.064 12.8 3.384 6.307c.467.87 1.779.61 1.876-.374l.386-3.882a.5.5 0 0 1 .498-.451h4.148a1.648 1.648 0 0 0 1.245-.55 1.591 1.591 0 0 0 .38-1.29l-1.121-7.2a1.594 1.594 0 0 0-.555-.98A1.641 1.641 0 0 0 17.234 4h-9.17m0 8.8V4m0 8.8H5.626c-.431 0-.845-.168-1.15-.469A1.587 1.587 0 0 1 4 11.201V5.6c0-.425.171-.832.476-1.132A1.64 1.64 0 0 1 5.626 4h2.438\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m10.753 17.07 4.511 8.41c.623 1.16 2.372.812 2.502-.498l.514-5.177c.034-.341.32-.6.663-.6h5.531a2.197 2.197 0 0 0 1.66-.734 2.1 2.1 0 0 0 .507-1.72l-1.495-9.6a2.125 2.125 0 0 0-.739-1.306 2.189 2.189 0 0 0-1.428-.507H10.753m0 11.733V5.338m0 11.733H7.5a2.186 2.186 0 0 1-1.533-.625 2.116 2.116 0 0 1-.635-1.509V7.471c0-.566.229-1.109.635-1.509.407-.4.958-.624 1.533-.624h3.252\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

ThumbsDown.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ThumbsDown;
