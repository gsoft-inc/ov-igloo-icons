/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Note /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Note = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.429 3H3.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V6.571M9.429 3 13 6.571M9.429 3v2.821c0 .415.335.75.75.75H13\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 5.5H5.5A.5.5 0 0 0 5 6v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V9.5m-4-4 4 4m-4-4V9a.5.5 0 0 0 .5.5H19M9 9.5h2M9 12.5h6M9 15.5h6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 6.667H7.333a.667.667 0 0 0-.666.666v17.334c0 .368.298.666.666.666h17.334a.667.667 0 0 0 .666-.666V12M20 6.667 25.333 12M20 6.667v4.666c0 .369.298.667.667.667h4.666M12 12h2.667M12 16h8M12 20h8\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Note.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Note.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Note;
