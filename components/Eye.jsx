/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Eye /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Eye = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.919 7.883a.223.223 0 0 1 .014.243c-.38.678-2.357 3.875-5.933 3.875-2.967 0-5.406-3.17-5.906-3.866a.226.226 0 0 1 0-.269C2.594 7.17 5.034 4 8 4c2.992 0 5.447 3.224 5.919 3.883Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"8\" r=\"2\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.76 14.497c-1.35-1.12-2.359-2.36-2.836-2.997.477-.636 1.485-1.878 2.835-2.997C8.255 7.263 10.077 6.25 12 6.25c1.944 0 3.783 1.034 5.287 2.292a18.354 18.354 0 0 1 2.826 3.007 12.712 12.712 0 0 1-2.45 2.943c-1.386 1.213-3.27 2.258-5.663 2.258-1.923 0-3.745-1.012-5.24-2.253ZM12 4.75c-2.435 0-4.592 1.267-6.198 2.598a19.81 19.81 0 0 0-3.217 3.44c-.31.426-.31.998 0 1.425.444.61 1.599 2.097 3.217 3.439C7.408 16.983 9.565 18.25 12 18.25c2.862 0 5.083-1.257 6.651-2.63a14.16 14.16 0 0 0 2.862-3.494 1.199 1.199 0 0 0-.07-1.3 19.831 19.831 0 0 0-3.194-3.435C16.637 6.043 14.461 4.75 12 4.75ZM9.75 11.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM12 7.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M27.784 15.69c.14.193.154.444.035.652-.87 1.524-4.809 7.662-11.816 7.662-5.812 0-10.611-6.08-11.747-7.64a.61.61 0 0 1 0-.723c1.136-1.56 5.935-7.639 11.747-7.639 5.873 0 10.711 6.208 11.78 7.687Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16.003\" cy=\"16.002\" r=\"4.001\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

export default Eye;
