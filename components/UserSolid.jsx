/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <UserSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const UserSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"5.633\" r=\"2.11\" fill=\"#233043\"/><path d=\"M4 12.033a3.556 3.556 0 0 1 3.556-3.556h.888A3.556 3.556 0 0 1 12 12.033a.444.444 0 0 1-.444.444H4.444A.444.444 0 0 1 4 12.033z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"8.449\" r=\"3.165\" fill=\"#233043\"/><path d=\"M6 18.363a5.647 5.647 0 0 1 5.647-5.647h.706A5.647 5.647 0 0 1 18 18.363a.353.353 0 0 1-.353.353H6.353A.353.353 0 0 1 6 18.363z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"11.27\" fill=\"#233043\" r=\"4.22\"/><path d=\"M8 24.488a7.53 7.53 0 0 1 7.53-7.53h.94a7.53 7.53 0 0 1 7.53 7.53c0 .26-.21.47-.47.47H8.47a.47.47 0 0 1-.47-.47z\" fill=\"#233043\"/></svg>"}
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

UserSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default UserSolid;
