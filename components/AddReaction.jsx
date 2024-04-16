/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <AddReaction /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const AddReaction = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.75 8a5.25 5.25 0 1 0 10.5 0 .75.75 0 0 1 1.5 0A6.75 6.75 0 1 1 8 1.25a.75.75 0 0 1 0 1.5A5.25 5.25 0 0 0 2.75 8Z\" fill=\"#233043\"/><path d=\"M6 6.688a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM11.5 6.688a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.6 8.265a.75.75 0 0 1 .885.584C5.657 9.69 6.624 10.5 8 10.5c1.376 0 2.344-.81 2.515-1.65a.75.75 0 1 1 1.47.301C11.634 10.865 9.89 12 8 12c-1.89 0-3.633-1.135-3.985-2.85a.75.75 0 0 1 .585-.885ZM9.75 3.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5 6.25a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.75 12a7.25 7.25 0 1 0 14.5 0 .75.75 0 0 1 1.5 0A8.75 8.75 0 1 1 12 3.25a.75.75 0 0 1 0 1.5A7.25 7.25 0 0 0 4.75 12Z\" fill=\"#233043\"/><path d=\"M9.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15 5.25a.75.75 0 0 0 0 1.5h2.25V9a.75.75 0 0 0 1.5 0V6.75H21a.75.75 0 0 0 0-1.5h-2.25V3a.75.75 0 0 0-1.5 0v2.25H15Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.87 12.261a.75.75 0 0 1 .869.608c.334 1.89 2.09 3.38 4.261 3.38 2.172 0 3.927-1.49 4.262-3.38a.75.75 0 0 1 1.477.262c-.47 2.65-2.886 4.619-5.739 4.619-2.852 0-5.269-1.968-5.738-4.62a.75.75 0 0 1 .607-.869Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.333 16c0 5.339 4.328 9.667 9.667 9.667 5.339 0 9.667-4.328 9.667-9.667a1 1 0 1 1 2 0c0 6.443-5.224 11.667-11.667 11.667S4.334 22.443 4.334 16 9.556 4.333 16 4.333a1 1 0 0 1 0 2A9.667 9.667 0 0 0 6.334 16Z\" fill=\"#233043\"/><path d=\"M12.667 13.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM22 13.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM20 7a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0V9h3a1 1 0 1 0 0-2h-3V4a1 1 0 1 0-2 0v3h-3Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.159 16.349a1 1 0 0 1 1.159.81c.446 2.52 2.786 4.508 5.682 4.508 2.896 0 5.235-1.989 5.682-4.508a1 1 0 0 1 1.97.349c-.627 3.534-3.849 6.159-7.652 6.159-3.804 0-7.025-2.625-7.651-6.16a1 1 0 0 1 .81-1.158Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

AddReaction.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default AddReaction;
