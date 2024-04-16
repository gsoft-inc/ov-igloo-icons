/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <StickyNote /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const StickyNote = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.429 13H3.75a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 3.75 3h8.5a.75.75 0 0 1 .75.75v5.679m-3.571 3.57L13 9.43m-3.571 3.57v-2.82a.75.75 0 0 1 .75-.75H13\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 18.25V5.75h12.5v7.5H14.5c-.69 0-1.25.56-1.25 1.25v3.75h-7.5Zm9-1.06 2.44-2.44h-2.44v2.44ZM4.25 18.5c0 .69.56 1.25 1.25 1.25H14a.75.75 0 0 0 .53-.22l5-5a.75.75 0 0 0 .22-.53V5.5c0-.69-.56-1.25-1.25-1.25h-13c-.69 0-1.25.56-1.25 1.25v13Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.667 24.333V7.667h16.666v10h-5c-.92 0-1.666.746-1.666 1.666v5h-10Zm12-1.414 3.252-3.252h-3.252v3.252Zm-14 1.748c0 .92.746 1.666 1.666 1.666h11.334a1 1 0 0 0 .707-.293l6.667-6.666a1 1 0 0 0 .292-.707V7.333c0-.92-.746-1.666-1.666-1.666H7.333c-.92 0-1.666.746-1.666 1.666v17.334Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

StickyNote.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default StickyNote;
