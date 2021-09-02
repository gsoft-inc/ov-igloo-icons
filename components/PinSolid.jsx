/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <PinSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const PinSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.788 2.628a.333.333 0 0 0-.472 0L7.19 5.755a.347.347 0 0 1-.28.097c-1-.099-2.032.194-2.845.879a.312.312 0 0 0-.01.461l4.952 4.952c.13.13.342.13.46-.01a3.828 3.828 0 0 0 .88-2.845.347.347 0 0 1 .097-.28l3.126-3.127a.333.333 0 0 0 0-.47l-2.782-2.784z\" fill=\"#233043\"/><path d=\"m6.536 9.674-2.828 2.828\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.182 3.942a.5.5 0 0 0-.707 0L10.727 8.69a.341.341 0 0 1-.28.096 5.743 5.743 0 0 0-4.476 1.42.32.32 0 0 0-.007.464l7.664 7.664c.13.13.342.13.465-.007a5.742 5.742 0 0 0 1.419-4.475.342.342 0 0 1 .095-.28l4.749-4.749a.5.5 0 0 0 0-.707l-4.174-4.174z\" fill=\"#233043\"/><path d=\"m9.805 14.51-4.243 4.243\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.34 5.025a.333.333 0 0 0-.472 0l-6.605 6.605a.338.338 0 0 1-.28.096 7.657 7.657 0 0 0-6.104 1.96.323.323 0 0 0-.005.466l10.375 10.376c.13.13.342.13.467-.005a7.657 7.657 0 0 0 1.96-6.104.338.338 0 0 1 .095-.28l6.605-6.606a.333.333 0 0 0 0-.471L21.34 5.025z\" fill=\"#233043\"/><path d=\"m13.073 19.351-5.657 5.657\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

PinSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

PinSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default PinSolid;
