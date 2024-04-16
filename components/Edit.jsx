/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Edit /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Edit = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m7 11 5.845-5.8a.25.25 0 0 0 .001-.354L10.84 2.84a.25.25 0 0 0-.349-.005L4.5 8.5M7 11 4.5 8.5M7 11l-3.173 1.16a.25.25 0 0 1-.325-.306L4.5 8.5\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.116 3.323a1.25 1.25 0 0 1 1.768 0l2.828 2.829a1.25 1.25 0 0 1 0 1.767l-9.283 9.284a.749.749 0 0 1-.333.193L6.08 18.49a1.25 1.25 0 0 1-1.534-1.535l1.093-4.015a.75.75 0 0 1 .194-.333l9.283-9.284ZM16 4.561l-8.576 8.576 2.475 2.475 8.576-8.576L16 4.56ZM8.454 16.288l-1.707-1.707-.639 2.346 2.346-.639Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.155 5.098c.65-.651 1.706-.651 2.357 0l3.771 3.77c.651.652.651 1.707 0 2.358L13.905 23.604a1 1 0 0 1-.444.257L8.107 25.32c-1.243.34-2.384-.802-2.046-2.046L7.52 17.92a1 1 0 0 1 .258-.445L20.155 5.098Zm1.178 1.65L9.898 18.181l3.3 3.3 11.435-11.435-3.3-3.3Zm-10.06 15.637-2.277-2.277-.852 3.128 3.128-.851Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Edit.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Edit;
