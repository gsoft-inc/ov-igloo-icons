/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <RelationshipWithPeersSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const RelationshipWithPeersSolid = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 6.125a4.127 4.127 0 0 1-2.626 3.844v-.094c0-.54-.08-1.061-.232-1.551A2.78 2.78 0 0 0 12.458 6.9a.562.562 0 1 0-1.041-.427c-.141.345-.397.632-.723.814a5.272 5.272 0 0 0-2.389-2.19.562.562 0 1 0-.84-.3 5.258 5.258 0 0 0-1.434-.172A4.126 4.126 0 0 1 14 6.125Zm-1.688-1.5a.562.562 0 1 1-1.125 0 .562.562 0 0 1 1.125 0Zm-2.062 5.25a4.125 4.125 0 1 1-8.25 0 4.125 4.125 0 0 1 8.25 0Zm-5.438-1.5a.563.563 0 1 1-1.125 0 .563.563 0 0 1 1.126 0ZM8 8.938a.563.563 0 1 0 0-1.126.563.563 0 0 0 0 1.125Zm-4.15.979a.562.562 0 0 1 .733.308c.245.599.842 1.025 1.542 1.025.7 0 1.297-.426 1.542-1.025a.562.562 0 1 1 1.041.425 2.787 2.787 0 0 1-2.583 1.725 2.787 2.787 0 0 1-2.583-1.725.562.562 0 0 1 .307-.733Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.5 8.5a7.002 7.002 0 0 1-5.501 6.838 8.476 8.476 0 0 0-.492-2.7 4.522 4.522 0 0 0 3.186-2.688.75.75 0 1 0-1.388-.568 3.022 3.022 0 0 1-2.453 1.848A8.497 8.497 0 0 0 8.66 7 7 7 0 0 1 22.499 8.5ZM18.727 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5.481-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.252 9.5A7 7 0 1 1 1.5 15.498a7 7 0 0 1 14 0ZM12.728 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-7.481 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-.532 1.972a.75.75 0 0 1 .978.41A3.025 3.025 0 0 0 8.5 18.249a3.025 3.025 0 0 0 2.806-1.867.75.75 0 1 1 1.388.568 4.525 4.525 0 0 1-4.194 2.799 4.525 4.525 0 0 1-4.194-2.8.75.75 0 0 1 .41-.977Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

RelationshipWithPeersSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default RelationshipWithPeersSolid;
