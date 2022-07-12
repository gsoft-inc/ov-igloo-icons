/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Play /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Play = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.168 8 4.143 3.944v8.112L11.168 8Zm1.562.901a1.04 1.04 0 0 0 0-1.802L4.143 2.14a1.04 1.04 0 0 0-1.561.901v9.916a1.04 1.04 0 0 0 1.56.901l8.588-4.958Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17 11.5 7.25 5.87v11.26L17 11.5Zm1.5.866a1 1 0 0 0 0-1.732L7.25 4.139a1 1 0 0 0-1.5.866v12.99a1 1 0 0 0 1.5.866l11.25-6.495Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M26.526 15.859a.163.163 0 0 1 0 .282L7.637 27.046l.488.846-.488-.846a.163.163 0 0 1-.244-.14V5.094c0-.126.136-.204.244-.141l18.889 10.905Z\" stroke=\"#233043\" stroke-width=\"2\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Play.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Play.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Play;
