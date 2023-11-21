/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <CollapseRight /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const CollapseRight = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.003 2.753a.75.75 0 0 0-1.5 0V13.25a.75.75 0 1 0 1.5 0V2.753ZM1.753 8.75a.75.75 0 1 1 0-1.5h7.682L6.47 4.28a.75.75 0 0 1 1.062-1.06l4.245 4.251a.75.75 0 0 1 0 1.061L7.53 12.78a.75.75 0 0 1-1.06-1.06l2.968-2.97H1.753Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.498 5.75a.75.75 0 0 1 1.5 0v12.5a.75.75 0 0 1-1.5 0V5.75Zm-6.98.707a.75.75 0 0 0-1.034 1.086l3.893 3.707H3.754a.75.75 0 0 0 0 1.5h11.622l-3.892 3.707a.75.75 0 1 0 1.035 1.086l5.25-5a.75.75 0 0 0 0-1.086l-5.25-5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26 7a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0V7ZM5 15.003a1 1 0 1 0 0 2h14.583l-5.29 5.29a1 1 0 1 0 1.414 1.414l6.953-6.953a.998.998 0 0 0 .34-.751v-.001a.997.997 0 0 0-.293-.71l-7-7a1 1 0 1 0-1.414 1.415l5.296 5.296H5Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

CollapseRight.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

CollapseRight.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default CollapseRight;
