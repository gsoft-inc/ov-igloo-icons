/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Tree /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Tree = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 1.75a2 2 0 0 0-.75 3.855V7.25H5A2.75 2.75 0 0 0 2.25 10v.395a2 2 0 1 0 1.5 0V10c0-.69.56-1.25 1.25-1.25h2.25v1.645a2 2 0 1 0 1.5 0V8.75H11c.69 0 1.25.56 1.25 1.25v.395a2 2 0 1 0 1.5 0V10A2.75 2.75 0 0 0 11 7.25H8.75V5.605A2 2 0 0 0 8 1.75Zm-.5 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm5 8.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm-10 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm5 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.25 4.75a2.75 2.75 0 1 1 3.5 2.646v3.854h4.5A2.75 2.75 0 0 1 20 14v2.604a2.751 2.751 0 1 1-1.5 0V14c0-.69-.56-1.25-1.25-1.25h-4.5v3.854a2.751 2.751 0 1 1-1.5 0V12.75h-4.5c-.69 0-1.25.56-1.25 1.25v2.604a2.751 2.751 0 1 1-1.5 0V14a2.75 2.75 0 0 1 2.75-2.75h4.5V7.396a2.751 2.751 0 0 1-2-2.646ZM12 6a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 6ZM4.75 20.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm7.25 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm6-1.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.333 6.333A3.667 3.667 0 1 1 17 9.862V15h6a3.667 3.667 0 0 1 3.667 3.667v3.471a3.668 3.668 0 0 1-1 7.195 3.667 3.667 0 0 1-1-7.195v-3.471c0-.92-.747-1.667-1.667-1.667h-6v5.138a3.668 3.668 0 0 1-1 7.195 3.667 3.667 0 0 1-1-7.195V17H9c-.92 0-1.667.746-1.667 1.667v3.471a3.668 3.668 0 0 1-1 7.195 3.667 3.667 0 0 1-1-7.195v-3.471A3.667 3.667 0 0 1 9 15h6V9.862a3.668 3.668 0 0 1-2.667-3.529ZM16 8a1.667 1.667 0 1 1 0-3.333A1.667 1.667 0 0 1 16 8ZM6.333 27.333a1.667 1.667 0 1 1 0-3.333 1.667 1.667 0 0 1 0 3.333Zm9.667 0A1.667 1.667 0 1 1 16 24a1.667 1.667 0 0 1 0 3.333Zm8-1.666a1.667 1.667 0 1 0 3.333 0 1.667 1.667 0 0 0-3.333 0Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Tree.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Tree;
