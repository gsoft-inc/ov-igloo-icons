/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Sparkles /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Sparkles = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 9.75a.75.75 0 0 0-1.5 0v1h-1a.75.75 0 0 0 0 1.5h1v1a.75.75 0 0 0 1.5 0v-1h1a.75.75 0 0 0 0-1.5h-1v-1ZM13.25 2.75a.75.75 0 0 0-1.5 0v1h-1a.75.75 0 0 0 0 1.5h1v1a.75.75 0 0 0 1.5 0v-1h1a.75.75 0 0 0 0-1.5h-1v-1Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 2c.287 0 .541.184.63.456l1.01 3.06 2.701 1.122a.663.663 0 0 1 0 1.224L7.39 8.984l-1.008 3.06a.664.664 0 0 1-1.262 0l-1.008-3.06-2.702-1.122a.663.663 0 0 1 0-1.224L4.11 5.516l1.008-3.06A.664.664 0 0 1 5.75 2Zm0 2.783-.473 1.435a.663.663 0 0 1-.375.405l-1.51.627 1.51.627a.663.663 0 0 1 .375.405l.473 1.435.473-1.435a.663.663 0 0 1 .375-.405l1.51-.627-1.51-.627a.663.663 0 0 1-.375-.405L5.75 4.783Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.25 3a.75.75 0 0 1 .712.516l1.514 4.6 4.062 1.692a.75.75 0 0 1 0 1.384l-4.062 1.692-1.514 4.6a.75.75 0 0 1-1.424 0l-1.514-4.6-4.062-1.692a.75.75 0 0 1 0-1.384l4.062-1.692 1.514-4.6A.75.75 0 0 1 8.25 3Zm0 3.15-.908 2.761a.75.75 0 0 1-.424.458L4.202 10.5l2.716 1.13a.75.75 0 0 1 .424.459l.908 2.76.908-2.76a.75.75 0 0 1 .424-.458l2.716-1.131-2.716-1.13a.75.75 0 0 1-.424-.459l-.908-2.76Z\" fill=\"#233043\"/><path d=\"M12 17.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM16.5 17.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM15.75 13.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM15.75 18a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM18.75 3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM15.75 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM20.25 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM19.5 8.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11 4a1 1 0 0 1 .95.688l2.018 6.134 5.416 2.255a1 1 0 0 1 0 1.846l-5.416 2.255-2.018 6.134a1 1 0 0 1-1.9 0l-2.018-6.134-5.416-2.255a1 1 0 0 1 0-1.846l5.416-2.255 2.018-6.134A1 1 0 0 1 11 4Zm0 4.2-1.21 3.682a1 1 0 0 1-.566.61L5.602 14l3.622 1.508a1 1 0 0 1 .565.61L11 19.8l1.21-3.68a1 1 0 0 1 .566-.611L16.398 14l-3.622-1.508a1 1 0 0 1-.565-.61L11 8.2Z\" fill=\"#233043\"/><path d=\"M22 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM18 22a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM24 22a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM23 25a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2ZM26 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM22 8a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM28 8a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM27 11a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Sparkles.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Sparkles;
