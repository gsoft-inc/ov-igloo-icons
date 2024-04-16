/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ActivatedNote /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ActivatedNote = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\" fill=\"#FCC205\"/><path d=\"M9.429 3H3.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75H8M9.429 3 13 6.571M9.429 3v2.821c0 .415.335.75.75.75H13m0 0V8.18\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\" fill=\"#FCC205\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 18.25V5.75h8.5V8.5c0 .69.56 1.25 1.25 1.25h2.75V13a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.22-.53l-4-4a.75.75 0 0 0-.53-.22H5.5c-.69 0-1.25.56-1.25 1.25v13c0 .69.56 1.25 1.25 1.25H13a.75.75 0 0 0 0-1.5H5.75Zm11.44-10-1.44-1.44v1.44h1.44ZM9 8.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H9ZM8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 14.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H9Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z\" fill=\"#FCC205\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.667 24.333V7.667H19v3.666c0 .92.746 1.667 1.667 1.667h3.666v4.333a1 1 0 0 0 2 0V12a1 1 0 0 0-.292-.707L20.707 5.96A1 1 0 0 0 20 5.667H7.333c-.92 0-1.666.746-1.666 1.666v17.334c0 .92.746 1.666 1.666 1.666h10a1 1 0 0 0 0-2H7.667ZM22.919 11 21 9.08V11h1.92ZM12 11a1 1 0 1 0 0 2h2.667a1 1 0 0 0 0-2H12Zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ActivatedNote.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default ActivatedNote;
