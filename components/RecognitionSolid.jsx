/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <RecognitionSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const RecognitionSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 4a1 1 0 0 0-1 1v1.25H6A1.75 1.75 0 0 0 4.25 8v1.222c0 1.84 1.466 3.279 3.269 3.499a5.005 5.005 0 0 0 3.731 2.723V17h-1A2.25 2.25 0 0 0 8 19.25c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75A2.25 2.25 0 0 0 13.75 17h-1v-1.556a5.006 5.006 0 0 0 3.731-2.723c1.803-.22 3.269-1.658 3.269-3.499V8A1.75 1.75 0 0 0 18 6.25h-1V5a1 1 0 0 0-1-1H8Zm9 3.75v2.75c0 .187-.01.372-.03.554.775-.334 1.28-1.055 1.28-1.832V8a.25.25 0 0 0-.25-.25h-1Zm-11 0h1v2.75c0 .187.01.372.03.554C6.255 10.72 5.75 10 5.75 9.222V8A.25.25 0 0 1 6 7.75Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 3.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6v-7Z\" fill=\"#233043\"/><path d=\"M18 10.567a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.25 19.875v-4.5h1.5v4.5h-1.5ZM4.25 6.5a.25.25 0 0 0-.25.25v1.444C4 9.481 5.02 10.5 6.25 10.5H7.5a.75.75 0 0 1 0 1.5H6.25C4.166 12 2.5 10.283 2.5 8.194V6.75C2.5 5.784 3.282 5 4.25 5H7.5a.75.75 0 0 1 0 1.5H4.25ZM19.75 6.524a.25.25 0 0 1 .25.25v1.444c0 1.287-1.02 2.306-2.25 2.306H16.5a.75.75 0 0 0 0 1.5h1.25c2.084 0 3.75-1.717 3.75-3.806V6.774a1.75 1.75 0 0 0-1.75-1.75H16.5a.75.75 0 0 0 0 1.5h3.25Z\" fill=\"#233043\"/><path d=\"M10.25 19h3.5c.966 0 1.75.784 1.75 1.75a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25c0-.966.784-1.75 1.75-1.75Z\" fill=\"#233043\" stroke=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

RecognitionSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

RecognitionSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default RecognitionSolid;
