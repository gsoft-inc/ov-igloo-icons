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
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m8 2.5 1.763 3.573 3.943.573-2.853 2.781.674 3.927L8 11.5l-3.527 1.854.674-3.927-2.853-2.781 3.943-.573L8 2.5Z\" fill=\"#233043\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.673 4.557a.75.75 0 0 0-1.345 0L9.173 8.923l-4.819.7a.75.75 0 0 0-.416 1.28L7.425 14.3l-.823 4.8a.75.75 0 0 0 1.088.79L12 17.625l4.31 2.266a.75.75 0 0 0 1.088-.79l-.823-4.8 3.487-3.399a.75.75 0 0 0-.416-1.279l-4.819-.7-2.154-4.366Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m16 6.518 3.106 6.293 6.945 1.01-5.026 4.898 1.187 6.917L16 22.37l-6.212 3.266 1.187-6.917-5.026-4.899 6.945-1.009L16 6.518Z\" fill=\"#233043\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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
