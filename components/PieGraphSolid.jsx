/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <PieGraphSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const PieGraphSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.252 8c.414 0 .753.337.702.749A6.001 6.001 0 1 1 7.25 2.046c.412-.05.749.289.749.703V7.25c0 .414.334.749.748.749h4.504z\" fill=\"#233043\"/><path d=\"M14.954 6.251c.05.412-.29.749-.705.749h-4.5A.75.75 0 0 1 9 6.248V1.75c0-.414.337-.755.749-.704a6.003 6.003 0 0 1 5.205 5.205z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.442 12.793c.182 0 .328.148.32.33a7.635 7.635 0 1 1-7.958-7.958.32.32 0 0 1 .33.323v6.978c0 .183.145.327.327.327h6.981z\" fill=\"#233043\"/><path d=\"M20.494 10.873a.323.323 0 0 1-.327.334H13.2a.334.334 0 0 1-.333-.335V3.906c0-.184.15-.335.334-.327a7.635 7.635 0 0 1 7.294 7.294z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24.33 17.062c.386 0 .697.314.671.7-.36 5.296-4.769 9.48-10.156 9.48-5.622 0-10.18-4.558-10.18-10.18 0-5.387 4.185-9.796 9.48-10.156.386-.026.7.289.7.675v8.784c0 .387.31.697.696.697h8.788z\" fill=\"#233043\"/><path d=\"M27.31 14.246c.027.386-.29.7-.677.7h-8.781a.7.7 0 0 1-.697-.703V5.468c0-.387.314-.704.7-.678a10.181 10.181 0 0 1 9.456 9.456z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

PieGraphSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

PieGraphSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default PieGraphSolid;
