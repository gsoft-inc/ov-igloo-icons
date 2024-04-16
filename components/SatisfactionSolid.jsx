/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <SatisfactionSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const SatisfactionSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.969 12.688h5.125c.567 0 1.02-.406 1.129-.968l.755-3.787a1.193 1.193 0 0 0-1.162-1.425H9.223a.297.297 0 0 1-.295-.3v-2.61A.595.595 0 0 0 8.336 3h-.182a.592.592 0 0 0-.554.388L5.97 7.648v5.04ZM4.897 12.688v-5.04H3.714A.714.714 0 0 0 3 8.362v3.611c0 .395.32.714.714.714h1.183Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.375 19.75h9.093c1.012 0 1.883-.72 2.077-1.716l1.29-6.724a2.121 2.121 0 0 0-2.077-2.53h-4.563a.53.53 0 0 1-.53-.53V3.562A1.06 1.06 0 0 0 12.609 2.5h-.325c-.441 0-.836.274-.991.689L8.375 10.75v9Zm-4.25-9a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2.75v-9h-2.75Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

SatisfactionSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default SatisfactionSolid;
