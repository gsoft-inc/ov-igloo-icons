/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Shield /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Shield = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.143 2 3 4.357v3.098M8.143 2l5.143 2.357v3.098M8.143 2v5.455M3 7.455C3 10.482 5.194 13.313 8.143 14M3 7.455h5.143m0 6.545c2.948-.687 5.143-3.518 5.143-6.545M8.143 14V7.455m5.143 0H8.143\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3.75 4.929 6.991v4.259M12 3.75l7.071 3.241v4.259M12 3.75v7.5m-7.071 0c0 4.162 3.017 8.055 7.071 9m-7.071-9H12m0 9c4.054-.945 7.071-4.838 7.071-9m-7.071 9v-9m7.071 0H12\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 5.004 6.571 9.325v5.679m9.429-10 9.429 4.321v5.679M16 5.004v10m-9.429 0c0 5.55 4.023 10.74 9.429 12m-9.429-12H16m0 12c5.406-1.26 9.429-6.45 9.429-12m-9.429 12v-12m9.429 0H16\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Shield.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Shield.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Shield;