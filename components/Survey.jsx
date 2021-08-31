/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Survey /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Survey = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m10 10.984 1.667 1.516 2.5-2.5M9.429 3H3.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75H8M9.429 3 13 6.571M9.429 3v2.821c0 .415.335.75.75.75H13m0 0V8.18\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 5H5.334A.333.333 0 0 0 5 5.333v13.334c0 .184.15.333.334.333h6.98M15 5l4 4m-4-4v3.667c0 .184.15.333.334.333H19m0 0v3.567M9 9h2M9 12h6M9 15h3M15 16.476l2.5 2.274L21.25 15\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 6.67H7a.333.333 0 0 0-.333.334v18c0 .184.15.333.333.333h9.418M20 6.67l5.334 5.334M20 6.67v5c0 .184.15.334.334.334h5m0 0v4.756M12 12.004h2.667M12 16.004h8M12 20.004h4M20 21.972l3.333 3.032 5-5\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Survey.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Survey.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Survey;
