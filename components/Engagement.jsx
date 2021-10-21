/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Engagement /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Engagement = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"3.153\" cy=\"9.61\" r=\"1.333\" fill=\"#233043\"/><circle cx=\"6.271\" cy=\"6.048\" r=\"1.333\" fill=\"#233043\"/><circle cx=\"12.847\" cy=\"4.715\" r=\"1.333\" fill=\"#233043\"/><circle cx=\"9.578\" cy=\"11.285\" r=\"1.333\" fill=\"#233043\"/><path d=\"m3.153 9.622 2.95-3.143a.333.333 0 0 1 .52.043l2.702 4.044c.14.21.455.194.572-.03l2.95-5.639\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.73 14.415a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM11.407 9.072a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21.27 7.072a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM16.366 16.928a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.618 6.68a.75.75 0 0 1 .317 1.013l-4.425 8.458a1.25 1.25 0 0 1-2.146.115L9.486 10.46l-4.21 4.485a.75.75 0 1 1-1.093-1.027l4.424-4.714a1.25 1.25 0 0 1 1.951.161l3.819 5.716 4.229-8.084a.75.75 0 0 1 1.012-.317Zm-5.007 8.752Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"6.306\" cy=\"19.22\" r=\"2.667\" fill=\"#233043\"/><circle cx=\"12.543\" cy=\"12.096\" r=\"2.667\" fill=\"#233043\"/><circle cx=\"25.694\" cy=\"9.429\" r=\"2.667\" fill=\"#233043\"/><circle cx=\"19.155\" cy=\"22.57\" r=\"2.667\" fill=\"#233043\"/><path d=\"m6.306 19.243 5.9-6.285a.667.667 0 0 1 1.04.086l5.403 8.088c.282.421.91.387 1.146-.061l5.899-11.277\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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
