/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Eye /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Eye = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.919 7.883a.223.223 0 0 1 .014.243c-.38.678-2.357 3.875-5.933 3.875-2.967 0-5.406-3.17-5.906-3.866a.226.226 0 0 1 0-.269C2.594 7.17 5.034 4 8 4c2.992 0 5.447 3.224 5.919 3.883z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"8\" r=\"2\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.835 11.765a.449.449 0 0 1 .026.49C20.21 13.396 17.255 18 12 18c-4.358 0-7.957-4.559-8.809-5.729a.457.457 0 0 1 0-.542C4.043 10.559 7.641 6 12 6c4.404 0 8.033 4.655 8.835 5.765z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"12\" r=\"3\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"33\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M27.784 15.69c.14.193.154.444.035.652-.87 1.524-4.808 7.662-11.816 7.662-5.812 0-10.611-6.08-11.747-7.64a.61.61 0 0 1 0-.723c1.136-1.56 5.935-7.639 11.747-7.639 5.873 0 10.711 6.208 11.78 7.687z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16.002\" cy=\"16.002\" r=\"4.001\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Eye.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Eye.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Eye;
