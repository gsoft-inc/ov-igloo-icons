/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Recognition /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Recognition = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.5 7v3.5a3.5 3.5 0 1 0 7 0v-5h-7V7Zm8.5-.75V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1.25H6A1.75 1.75 0 0 0 4.25 8v1.222c0 1.84 1.466 3.279 3.269 3.499a5.005 5.005 0 0 0 3.731 2.723v.806h-1a3 3 0 0 0-3 3 1.5 1.5 0 0 0 1.5 1.5h6.5a1.5 1.5 0 0 0 1.5-1.5 3 3 0 0 0-3-3h-1v-.806a5.006 5.006 0 0 0 3.731-2.723c1.803-.22 3.269-1.658 3.269-3.499V8A1.75 1.75 0 0 0 18 6.25h-1Zm0 1.5v2.75c0 .187-.01.372-.03.554.775-.334 1.28-1.055 1.28-1.832V8a.25.25 0 0 0-.25-.25h-1ZM7 10.5V7.75H6a.25.25 0 0 0-.25.25v1.222c0 .777.505 1.498 1.28 1.832A5.054 5.054 0 0 1 7 10.5Zm1.75 8.75a1.5 1.5 0 0 1 1.5-1.5h3.5a1.5 1.5 0 0 1 1.5 1.5h-6.5Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.5 10.133v.06a4.5 4.5 0 1 0 9 0V3.624h-9v6.508ZM18 3.125v1.524h1.75c.967 0 1.75.783 1.75 1.75v1.444c0 2.065-1.628 3.766-3.678 3.805a6.006 6.006 0 0 1-5.072 4.498v1.229h1a3 3 0 0 1 3 3 1.5 1.5 0 0 1-1.5 1.5h-6.5a1.5 1.5 0 0 1-1.5-1.5 3 3 0 0 1 3-3h1v-1.23a6.005 6.005 0 0 1-5.078-4.52C4.125 11.581 2.5 9.881 2.5 7.818V6.375c0-.966.783-1.75 1.75-1.75H6v-1.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm0 7V6.149h1.75a.25.25 0 0 1 .25.25v1.444c0 1.198-.885 2.165-2 2.292v-.01Zm-13.75-4H6v3.986c-1.115-.127-2-1.094-2-2.292V6.375a.25.25 0 0 1 .25-.25Zm4.5 14.25a1.5 1.5 0 0 1 1.5-1.5h3.5a1.5 1.5 0 0 1 1.5 1.5h-6.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 13.511v.079a6 6 0 0 0 12 0V4.833H10v8.678Zm14-9.344v2.031h2.333a2.333 2.333 0 0 1 2.334 2.334v1.926c0 2.752-2.17 5.02-4.904 5.073A8.008 8.008 0 0 1 17 21.528v1.639h1.333a4 4 0 0 1 4 4 2 2 0 0 1-2 2h-8.666a2 2 0 0 1-2-2 4 4 0 0 1 4-4H15v-1.64A8.008 8.008 0 0 1 8.23 15.5c-2.73-.056-4.897-2.323-4.897-5.073V8.5a2.333 2.333 0 0 1 2.334-2.333H8v-2c0-.737.597-1.334 1.333-1.334h13.334c.736 0 1.333.597 1.333 1.334Zm0 9.333V8.198h2.333c.184 0 .334.15.334.334v1.926c0 1.597-1.18 2.886-2.667 3.055V13.5ZM5.667 8.167H8v5.314c-1.487-.17-2.667-1.458-2.667-3.055V8.5c0-.184.15-.333.334-.333Zm6 19a2 2 0 0 1 2-2h4.666a2 2 0 0 1 2 2h-8.666Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Recognition.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Recognition.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Recognition;
