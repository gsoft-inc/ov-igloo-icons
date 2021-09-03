/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Slider1 /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Slider1 = ({size, ariaLabel, className, ...other}) => {
const svgData = {"32":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.337 19.104c1.927-.784 3.474-2.756 3.893-5.15h1.679a2.136 2.136 0 1 0 0-4.27H18.76a8.74 8.74 0 0 0-.145-.342l-.663.297.663-.297c-.892-1.99-1.795-3.282-3.043-4.038-1.237-.748-2.693-.893-4.48-.894-.956-.047-2.295.223-3.511 1.11-1.132.824-2.118 2.154-2.606 4.163h-1.74a2.136 2.136 0 1 0 0 4.271h1.551c.507 2.84 2.408 4.413 4.49 5.131 2.185.753 4.64.598 6.06.02z\" fill=\"#fff\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"m4.847 10.3-.009.047-.002.048-.053 1.033-.002.029c-.058 1.124-.126 2.458.33 3.703.881 2.407 2.89 3.636 4.887 4.139 1.974.498 4.064.324 5.34-.195 1.697-.69 3.093-2.301 3.69-4.292.32-1.065.232-2.162.117-3.106l-.064-.527c-.07-.586-.19-1.226-.464-1.837-.893-1.99-1.796-3.282-3.044-4.038-1.237-.748-2.693-.893-4.48-.894-.956-.047-2.295.223-3.511 1.11-1.244.906-2.312 2.423-2.735 4.78z\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"M12 9v6M15 10.5v3M9 10.5v3\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Slider1.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Slider1.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Slider1;
