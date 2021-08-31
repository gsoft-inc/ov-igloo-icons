/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <StarSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const StarSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m8 2.5 1.763 3.573 3.943.573-2.853 2.781.674 3.927L8 11.5l-3.527 1.854.674-3.927-2.853-2.781 3.943-.573L8 2.5z\" fill=\"#233043\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m12 4.889 2.33 4.72 5.208.757-3.769 3.674.89 5.187L12 16.777l-4.659 2.45.89-5.188-3.77-3.673 5.21-.757L12 4.889z\" fill=\"#233043\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m16 6.522 3.106 6.293 6.945 1.01-5.026 4.898 1.187 6.917L16 22.374 9.788 25.64l1.187-6.917-5.026-4.899 6.945-1.009L16 6.522z\" fill=\"#233043\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

StarSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

StarSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default StarSolid;
