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
const RelationshipWithPeersSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 9.5a5.502 5.502 0 0 1-3.501 5.126l.001-.126c0-.72-.109-1.415-.31-2.069a3.708 3.708 0 0 0 1.754-1.897.75.75 0 1 0-1.388-.568c-.188.459-.53.841-.964 1.084a7.03 7.03 0 0 0-3.185-2.92.75.75 0 1 0-1.121-.4A7.01 7.01 0 0 0 9.375 7.5 5.502 5.502 0 0 1 20 9.5Zm-2.25-2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.75 7a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.25-2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-5.534 1.306a.75.75 0 0 1 .978.41A2.216 2.216 0 0 0 9.5 16.333c.934 0 1.729-.568 2.056-1.367a.75.75 0 0 1 1.388.568 3.716 3.716 0 0 1-3.444 2.3 3.716 3.716 0 0 1-3.444-2.3.75.75 0 0 1 .41-.978Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.5 8.5a7.002 7.002 0 0 1-5.501 6.838 8.476 8.476 0 0 0-.492-2.7 4.522 4.522 0 0 0 3.186-2.688.75.75 0 1 0-1.388-.568 3.022 3.022 0 0 1-2.453 1.848A8.497 8.497 0 0 0 8.66 7 7 7 0 0 1 22.499 8.5ZM18.727 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5.481-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.252 9.5A7 7 0 1 1 1.5 15.498a7 7 0 0 1 14 0ZM12.728 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-7.481 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-.532 1.972a.75.75 0 0 1 .978.41A3.025 3.025 0 0 0 8.5 18.249a3.025 3.025 0 0 0 2.806-1.867.75.75 0 1 1 1.388.568 4.525 4.525 0 0 1-4.194 2.799 4.525 4.525 0 0 1-4.194-2.8.75.75 0 0 1 .41-.977Z\" fill=\"#233043\"/></svg>"}
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

RelationshipWithPeersSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default RelationshipWithPeersSolid;
