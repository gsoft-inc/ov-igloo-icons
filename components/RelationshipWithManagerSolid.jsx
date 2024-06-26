/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <RelationshipWithManagerSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const RelationshipWithManagerSolid = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.869 4.328a2.328 2.328 0 1 1 4.656 0 2.328 2.328 0 0 1-4.656 0Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.32 10.188a2.91 2.91 0 0 1 2.91-2.911h2.094a2.91 2.91 0 0 1 2.91 2.91.858.858 0 0 1-.05.294H4.37a.857.857 0 0 1-.052-.293ZM4.508 11.235a1.508 1.508 0 1 0 0 3.015 1.508 1.508 0 0 0 0-3.015Zm3.769 0a1.508 1.508 0 1 0 0 3.015 1.508 1.508 0 0 0 0-3.015Zm3.77 0a1.508 1.508 0 1 0 0 3.015 1.508 1.508 0 0 0 0-3.015Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.5 17.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16.25 20a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm-6.438 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM7.969 5.781a4.031 4.031 0 1 1 8.062 0 4.031 4.031 0 0 1-8.062 0Zm-2.473 9.407a4.25 4.25 0 0 1 4.25-4.25h4.508a4.25 4.25 0 0 1 4.25 4.25v1.03H5.496v-1.03Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

RelationshipWithManagerSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default RelationshipWithManagerSolid;
