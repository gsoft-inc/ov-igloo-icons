/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ActivatedStickyNote /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ActivatedStickyNote = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.429 13H3.75a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 3.75 3H8m1.429 10L13 9.43M9.429 13V10.18a.75.75 0 0 1 .75-.75H13m0 0V7.82\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\" fill=\"#FCC205\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 18.25V5.75H12a.75.75 0 0 0 0-1.5H5.5c-.69 0-1.25.56-1.25 1.25v13c0 .69.56 1.25 1.25 1.25H14a.75.75 0 0 0 .53-.22l5-5a.75.75 0 0 0 .22-.53v-2.25a.75.75 0 0 0-1.5 0v1.5H14.5c-.69 0-1.25.56-1.25 1.25v3.75h-7.5Zm9-1.06 2.44-2.44h-2.44v2.44Z\" fill=\"#233043\"/><path d=\"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\" fill=\"#FCC205\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.667 24.333V7.667H16a1 1 0 1 0 0-2H7.333c-.92 0-1.666.746-1.666 1.666v17.334c0 .92.746 1.666 1.666 1.666h11.334a1 1 0 0 0 .707-.293l6.666-6.666a1 1 0 0 0 .293-.707v-3a1 1 0 1 0-2 0v2h-5c-.92 0-1.666.746-1.666 1.666v5h-10Zm12-1.414 3.252-3.252h-3.252v3.252Z\" fill=\"#233043\"/><path d=\"M24 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z\" fill=\"#FCC205\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ActivatedStickyNote.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default ActivatedStickyNote;
