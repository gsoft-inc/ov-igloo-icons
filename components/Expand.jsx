/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Expand /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Expand = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.06 12h1.271a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75V9.412a.75.75 0 1 1 1.5 0v1.527l1.799-1.798.002-.002L10.939 4H9.67a.75.75 0 1 1 0-1.5h3.081a.75.75 0 0 1 .75.75v3.338a.75.75 0 0 1-1.5 0V5.06l-1.799 1.798-.002.002L5.061 12Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m13.284 11.854-5.691 5.594h2.851a.777.777 0 1 1 0 1.552H5.778A.777.777 0 0 1 5 18.224v-4.656a.777.777 0 0 1 1.556 0v2.783l6.222-6.177 3.63-3.622h-2.852a.777.777 0 1 1 0-1.552h4.666c.43 0 .778.347.778.776v4.656a.777.777 0 0 1-1.556 0V7.65l-3.5 3.546a.776.776 0 0 1-.066.075l-.263.258-.256.26a.768.768 0 0 1-.075.065Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.802 23.53h3.375a.941.941 0 0 1 0 1.882H7.529a.941.941 0 0 1-.94-.941v-5.648a.941.941 0 1 1 1.882 0v3.375L22.198 8.471h-3.375a.941.941 0 0 1 0-1.883h5.648c.52 0 .94.422.94.941v5.648a.941.941 0 0 1-1.882 0V9.802L9.802 23.529Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Expand.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Expand;
