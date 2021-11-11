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
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.156 18.563h7.176c.793 0 1.428-.568 1.58-1.354l1.057-5.303c.2-1.034-.584-1.995-1.627-1.995h-3.63a.416.416 0 0 1-.413-.419V5.837A.833.833 0 0 0 12.47 5h-.254a.829.829 0 0 0-.776.543l-2.284 5.964v7.056ZM7.656 18.563v-7.056H6a1 1 0 0 0-1 1v5.056a1 1 0 0 0 1 1h1.656Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.375 19.75h9.093c1.012 0 1.883-.72 2.077-1.716l1.29-6.724a2.121 2.121 0 0 0-2.077-2.53h-4.563a.53.53 0 0 1-.53-.53V3.562A1.06 1.06 0 0 0 12.609 2.5h-.325c-.441 0-.836.274-.991.689L8.375 10.75v9Zm-4.25-9a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2.75v-9h-2.75Z\" fill=\"#233043\"/></svg>"}
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

SatisfactionSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default SatisfactionSolid;
