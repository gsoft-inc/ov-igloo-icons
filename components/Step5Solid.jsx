/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Step5Solid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Step5Solid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM6.124 4.437a.75.75 0 0 0-.75.75h.75-.75V7.529a.75.75 0 0 0 .982.713c.848-.276 1.66-.314 2.208-.15.266.079.436.195.538.318.096.116.174.286.174.564 0 .292-.075.472-.158.592a.976.976 0 0 1-.373.308c-.161.081-.337.131-.488.16-.15.028-.253.03-.257.03-.538 0-1.027-.306-1.32-.63a.75.75 0 0 0-1.111 1.008c.48.529 1.343 1.123 2.431 1.123.156 0 .792-.035 1.42-.351a2.47 2.47 0 0 0 .932-.795c.268-.388.424-.871.424-1.445 0-.588-.176-1.108-.519-1.521-.336-.405-.789-.657-1.264-.799-.643-.192-1.384-.201-2.119-.08V5.938H10.025v-.75.75a.75.75 0 0 0 0-1.5v.75-.75H6.125z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.5 7.498a.75.75 0 0 0-.75.75v3.122a.75.75 0 0 0 .981.713c1.16-.377 2.297-.44 3.092-.202.39.116.664.293.84.505.168.203.288.489.288.91 0 .437-.113.728-.254.932a1.55 1.55 0 0 1-.591.492A2.976 2.976 0 0 1 12 15l-.001.001c-.809 0-1.523-.457-1.945-.923a.75.75 0 1 0-1.112 1.008c.61.671 1.698 1.415 3.057 1.415.187 0 .992-.044 1.78-.441a3.044 3.044 0 0 0 1.15-.979c.327-.473.52-1.066.52-1.784 0-.733-.217-1.367-.633-1.869-.409-.493-.966-.806-1.565-.985-.897-.267-1.957-.257-3.003-.045v-1.4h4.452a.75.75 0 1 0 0-1.5H9.498z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16.004\" fill=\"#233043\" r=\"10.667\"/><path d=\"M19.601 11.002h-6.935v4.162C16 14.08 19.6 14.654 19.6 17.733c0 3.08-3.271 3.273-3.6 3.273-1.446 0-2.648-.8-3.336-1.559\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Step5Solid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Step5Solid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Step5Solid;
