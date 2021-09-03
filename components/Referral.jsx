/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Referral /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Referral = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.908 14.259s0 1.568 2.092 1.568c.135 0 2.091 0 2.091-2.091 0-2.092-2.091-2.092-2.091-2.092s-1.736 0-1.736-1.736c0-1.735 1.623-1.735 1.736-1.735.965 0 1.393.402 1.584.76\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 17.25v-1.125M12 6.75v1.125\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.908 14.259s0 1.568 2.092 1.568c.135 0 2.091 0 2.091-2.091 0-2.092-2.091-2.092-2.091-2.092s-1.736 0-1.736-1.736c0-1.735 1.623-1.735 1.736-1.735.965 0 1.393.402 1.584.76\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 17.25v-1.125M12 6.75v1.125\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16\" r=\"10.667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M13.21 19.012s0 2.091 2.79 2.091c.18 0 2.789 0 2.789-2.789s-2.79-2.789-2.79-2.789-2.314 0-2.314-2.314S15.85 10.897 16 10.897c1.286 0 1.858.536 2.111 1.013\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M16 23v-1.5M16 9v1.5\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Referral.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Referral.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Referral;
