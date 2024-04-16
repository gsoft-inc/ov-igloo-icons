/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Step2Solid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Step2Solid = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6ZM6.875 7.062c0-.375.225-1.125 1.125-1.125s1.125.75 1.125 1.125c0 .237-.112.467-.264.695-.205.308-.491.601-.8.871-1.009.884-2.272 1.514-2.272 1.514a.75.75 0 0 0 .336 1.421h3.75a.75.75 0 0 0 0-1.5H8.677c.334-.263.659-.551.939-.855.614-.664 1.009-1.415 1.009-2.146 0-.875-.525-2.625-2.625-2.625s-2.625 1.75-2.625 2.625a.75.75 0 0 0 1.5 0Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1.75-9.25c0-.297.095-.759.358-1.125C10.844 9.297 11.244 9 12 9c.756 0 1.156.298 1.392.626.263.366.358.828.358 1.125 0 .379-.194.84-.617 1.367-.413.518-.983 1.021-1.583 1.47a17.433 17.433 0 0 1-2.338 1.469l-.038.019-.008.004h-.002a.75.75 0 0 0 .336 1.422h5a.75.75 0 1 0 0-1.5h-2.34c.096-.07.193-.14.29-.213.65-.488 1.33-1.079 1.855-1.733.515-.645.945-1.434.945-2.305 0-.537-.154-1.325-.641-2.001-.514-.714-1.364-1.25-2.609-1.25-1.245 0-2.095.536-2.609 1.25a3.542 3.542 0 0 0-.641 2 .75.75 0 0 0 1.5 0Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 26.667c5.891 0 10.667-4.776 10.667-10.667S21.89 5.333 16 5.333 5.333 10.11 5.333 16 10.11 26.667 16 26.667Zm-2.334-12.334c0-.396.127-1.011.479-1.5.314-.436.847-.834 1.855-.834s1.54.398 1.856.835c.351.488.478 1.104.478 1.5 0 .505-.26 1.12-.823 1.823-.551.69-1.312 1.36-2.11 1.96a23.293 23.293 0 0 1-3.119 1.957l-.05.026-.011.005-.002.001a1 1 0 0 0 .447 1.895h6.668a1 1 0 1 0 0-2h-3.121c.128-.092.258-.187.387-.284.868-.65 1.774-1.438 2.473-2.31.687-.86 1.26-1.912 1.26-3.074 0-.716-.205-1.767-.854-2.668C18.793 10.713 17.659 10 16 10c-1.66 0-2.793.714-3.479 1.666-.648.901-.855 1.952-.855 2.668a1 1 0 1 0 2 0Z\" fill=\"#233043\"/></svg>"}
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

export default Step2Solid;
