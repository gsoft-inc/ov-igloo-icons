/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Step2Solid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Step2Solid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"10\" r=\"6\" fill=\"#233043\"/><path d=\"M6.125 9.062c0-.625.375-1.875 1.875-1.875s1.875 1.25 1.875 1.875c0 1.876-3.75 3.75-3.75 3.75h3.75\" stroke=\"#fff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1.75-9.25c0-.297.095-.759.358-1.125C10.844 9.297 11.244 9 12 9c.756 0 1.156.298 1.392.626.263.366.358.828.358 1.125 0 .379-.194.84-.617 1.367-.413.518-.983 1.021-1.583 1.47a17.433 17.433 0 0 1-2.338 1.469l-.038.019-.008.004h-.002a.75.75 0 0 0 .336 1.422h5a.75.75 0 1 0 0-1.5h-2.34c.096-.07.193-.14.29-.213.65-.488 1.33-1.079 1.855-1.733.515-.645.945-1.434.945-2.305 0-.537-.154-1.325-.641-2.001-.514-.714-1.364-1.25-2.609-1.25-1.245 0-2.095.536-2.609 1.25a3.542 3.542 0 0 0-.641 2 .75.75 0 0 0 1.5 0z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16.004\" fill=\"#233043\" r=\"10.667\"/><path d=\"M12.666 14.337c0-1.111.667-3.334 3.334-3.334s3.334 2.223 3.334 3.334c0 3.334-6.668 6.668-6.668 6.668h6.668\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Step2Solid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Step2Solid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Step2Solid;
