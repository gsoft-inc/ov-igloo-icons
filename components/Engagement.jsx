/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Engagement /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Engagement = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"3.153\" cy=\"9.61\" r=\"1.333\" fill=\"#233043\"/><circle cx=\"6.271\" cy=\"6.048\" r=\"1.333\" fill=\"#233043\"/><circle cx=\"12.847\" cy=\"4.715\" r=\"1.333\" fill=\"#233043\"/><circle cx=\"9.578\" cy=\"11.285\" r=\"1.333\" fill=\"#233043\"/><path d=\"m3.153 9.622 2.95-3.143a.333.333 0 0 1 .52.043l2.702 4.044c.14.21.455.194.572-.03l2.95-5.639\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"4.73\" cy=\"14.915\" r=\"2\" fill=\"#233043\"/><circle cx=\"9.407\" cy=\"9.572\" r=\"2\" fill=\"#233043\"/><circle cx=\"19.27\" cy=\"7.572\" r=\"2\" fill=\"#233043\"/><circle cx=\"14.367\" cy=\"17.428\" r=\"2\" fill=\"#233043\"/><path d=\"m4.73 14.932 4.424-4.713a.5.5 0 0 1 .78.064l4.053 6.066a.5.5 0 0 0 .859-.046l4.424-8.458\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"6.306\" cy=\"19.224\" r=\"2.667\" fill=\"#233043\"/><circle cx=\"12.543\" cy=\"12.1\" r=\"2.667\" fill=\"#233043\"/><circle cx=\"25.694\" cy=\"9.433\" r=\"2.667\" fill=\"#233043\"/><circle cx=\"19.155\" cy=\"22.574\" r=\"2.667\" fill=\"#233043\"/><path d=\"m6.306 19.247 5.9-6.285a.667.667 0 0 1 1.04.086l5.404 8.088c.28.421.91.387 1.145-.061l5.899-11.277\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Engagement.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Engagement.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Engagement;
