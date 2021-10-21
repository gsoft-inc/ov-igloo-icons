/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ParticipationSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ParticipationSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.979 8a4.667 4.667 0 1 1 8.441 2.744l1.49 1.342a.333.333 0 0 1-.222.58H7.334v-.01A4.667 4.667 0 0 1 2.979 8Zm7.307-.816A.75.75 0 1 0 9.2 6.15L7.163 8.284l-.913-.837a.75.75 0 0 0-1.014 1.106L6.45 9.665a1.083 1.083 0 0 0 1.516-.05l2.32-2.43Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.468 12a7 7 0 1 1 12.662 4.116l2.236 2.012a.5.5 0 0 1-.335.872h-8.03v-.015A7 7 0 0 1 4.468 12Zm10.689-1.482a.75.75 0 0 0-1.085-1.036l-3.31 3.469-1.64-1.504a.75.75 0 0 0-1.014 1.106l1.82 1.669a1.25 1.25 0 0 0 1.75-.059l3.479-3.645Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.29 6.667a9.333 9.333 0 0 0-.622 18.646v.02H25.375c.611 0 .9-.753.446-1.162l-2.98-2.683A9.292 9.292 0 0 0 24.622 16a9.333 9.333 0 0 0-9.333-9.333Z\" fill=\"#233043\"/><path d=\"m11.486 16 2.427 2.225a.667.667 0 0 0 .933-.03l4.64-4.862\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ParticipationSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

ParticipationSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ParticipationSolid;
