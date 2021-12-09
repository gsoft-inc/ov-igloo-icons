/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <StarSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const StarSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.673 2.168a.75.75 0 0 0-1.346 0L5.74 5.388l-3.553.516a.75.75 0 0 0-.416 1.279l2.571 2.506-.607 3.538a.75.75 0 0 0 1.088.791L8 12.348l3.178 1.67a.75.75 0 0 0 1.088-.79l-.607-3.54 2.57-2.505a.75.75 0 0 0-.415-1.28l-3.553-.516-1.588-3.219Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.673 4.557a.75.75 0 0 0-1.345 0L9.173 8.923l-4.819.7a.75.75 0 0 0-.416 1.28L7.425 14.3l-.823 4.8a.75.75 0 0 0 1.088.79L12 17.625l4.31 2.266a.75.75 0 0 0 1.088-.79l-.823-4.8 3.487-3.399a.75.75 0 0 0-.416-1.279l-4.819-.7-2.154-4.366Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.897 6.075a1 1 0 0 0-1.794 0l-2.873 5.822-6.425.934a1 1 0 0 0-.554 1.706L9.9 19.068l-1.097 6.399a1 1 0 0 0 1.45 1.054L16 23.501l5.746 3.02a1 1 0 0 0 1.451-1.054L22.1 19.068l4.649-4.531a1 1 0 0 0-.554-1.706l-6.425-.934-2.873-5.822Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

StarSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

StarSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default StarSolid;
