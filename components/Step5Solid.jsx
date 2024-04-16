/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Step5Solid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Step5Solid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12ZM6.124 4.437a.75.75 0 0 0-.75.75h.75-.75V7.529a.75.75 0 0 0 .982.713c.848-.276 1.66-.314 2.208-.15.266.079.436.195.538.318.096.116.174.286.174.564 0 .292-.075.472-.158.592a.976.976 0 0 1-.373.308c-.161.081-.337.131-.488.16-.15.028-.253.03-.257.03-.538 0-1.027-.306-1.32-.63a.75.75 0 0 0-1.111 1.008c.48.529 1.343 1.123 2.431 1.123.156 0 .792-.035 1.42-.351a2.47 2.47 0 0 0 .932-.795c.268-.388.424-.871.424-1.445 0-.588-.176-1.108-.519-1.521-.336-.405-.789-.657-1.264-.799-.643-.192-1.384-.201-2.119-.08V5.938H10.025v-.75.75a.75.75 0 0 0 0-1.5v.75-.75H6.125Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9.5 7.498a.75.75 0 0 0-.75.75v3.122a.75.75 0 0 0 .981.713c1.16-.377 2.297-.44 3.092-.202.39.116.664.293.84.505.168.203.288.489.288.91 0 .437-.113.728-.254.932a1.55 1.55 0 0 1-.591.492A2.976 2.976 0 0 1 12 15l-.001.001c-.809 0-1.523-.457-1.945-.923a.75.75 0 1 0-1.112 1.008c.61.671 1.698 1.415 3.057 1.415.187 0 .992-.044 1.78-.441a3.044 3.044 0 0 0 1.15-.979c.327-.473.52-1.066.52-1.784 0-.733-.217-1.367-.633-1.869-.409-.493-.966-.806-1.565-.985-.897-.267-1.957-.257-3.003-.045v-1.4h4.452a.75.75 0 1 0 0-1.5H9.498Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 26.667c5.891 0 10.667-4.776 10.667-10.667S21.89 5.333 16 5.333 5.333 10.11 5.333 16 10.11 26.667 16 26.667Zm-3.335-16.67a1 1 0 0 0-1 1h1-1V15.162a1 1 0 0 0 1.31.95c1.546-.503 3.062-.586 4.123-.27.519.155.884.39 1.119.673.225.271.384.652.384 1.215 0 .582-.15.97-.339 1.242a2.065 2.065 0 0 1-.788.656 3.65 3.65 0 0 1-.957.313 3.99 3.99 0 0 1-.517.061c-1.078 0-2.03-.609-2.594-1.23a1 1 0 1 0-1.481 1.344c.811.895 2.264 1.887 4.075 1.887.249 0 1.323-.059 2.375-.59a4.06 4.06 0 0 0 1.532-1.304c.436-.63.694-1.421.694-2.38 0-.976-.29-1.822-.845-2.49-.545-.658-1.288-1.075-2.086-1.313-1.196-.357-2.61-.343-4.005-.06V11.997H19.601v-1 1a1 1 0 1 0 0-2v1-1H12.664Z\" fill=\"#233043\"/></svg>"}
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

export default Step5Solid;
