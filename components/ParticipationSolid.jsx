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
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.978 8a4.667 4.667 0 1 1 8.442 2.744l1.49 1.342a.333.333 0 0 1-.222.58H7.334v-.01A4.667 4.667 0 0 1 2.978 8Zm7.308-.816A.75.75 0 0 0 9.2 6.15L7.163 8.284l-.913-.837a.75.75 0 0 0-1.014 1.106L6.45 9.665a1.083 1.083 0 0 0 1.516-.05l2.32-2.43Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.468 5A7 7 0 0 0 11 18.985V19h8.03a.5.5 0 0 0 .335-.872l-2.236-2.012A7 7 0 0 0 11.468 5Z\" fill=\"#233043\"/><path d=\"m8.614 12 1.821 1.669a.5.5 0 0 0 .7-.023L14.615 10\" stroke=\"#fff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.29 6.67a9.333 9.333 0 0 0-.622 18.647v.02H25.375c.611 0 .9-.753.446-1.162l-2.98-2.683A9.333 9.333 0 0 0 15.29 6.67Z\" fill=\"#233043\"/><path d=\"m11.486 16.004 2.427 2.225a.667.667 0 0 0 .933-.03l4.64-4.862\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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
