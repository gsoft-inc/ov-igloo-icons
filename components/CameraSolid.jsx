/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <CameraSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const CameraSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.54 3a.75.75 0 0 0-.71.513L5.332 5H2.75a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-2.583l-.496-1.487A.75.75 0 0 0 9.459 3H6.541ZM10 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.54 4.5a.75.75 0 0 0-.71.513L8 7.5H4.717a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h14.566a.75.75 0 0 0 .75-.75V8.25a.75.75 0 0 0-.75-.75H16l-.83-2.487a.75.75 0 0 0-.71-.513H9.54Zm5.46 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.54 6a.75.75 0 0 0-.71.513L10.666 10H6.039a.75.75 0 0 0-.75.75v14.5c0 .414.336.75.75.75h19.922a.75.75 0 0 0 .75-.75v-14.5a.75.75 0 0 0-.75-.75h-4.628l-1.162-3.487A.75.75 0 0 0 19.459 6h-6.918ZM20 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

CameraSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default CameraSolid;
