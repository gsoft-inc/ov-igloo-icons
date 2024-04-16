/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <UserSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const UserSolid = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"5.633\" r=\"2.11\" fill=\"#233043\"/><path d=\"M4 12.033a3.556 3.556 0 0 1 3.556-3.556h.888A3.556 3.556 0 0 1 12 12.033a.444.444 0 0 1-.444.444H4.444A.444.444 0 0 1 4 12.033Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 11.614a3.165 3.165 0 1 0 0-6.33 3.165 3.165 0 0 0 0 6.33Zm-.353 1.102A5.647 5.647 0 0 0 6 18.363c0 .195.158.353.353.353h11.294a.353.353 0 0 0 .353-.353 5.647 5.647 0 0 0-5.647-5.647h-.706Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"11.266\" fill=\"#233043\" r=\"4.22\"/><path d=\"M8 24.484a7.53 7.53 0 0 1 7.53-7.53h.94a7.53 7.53 0 0 1 7.53 7.53c0 .26-.21.47-.47.47H8.47a.47.47 0 0 1-.47-.47Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

UserSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default UserSolid;
