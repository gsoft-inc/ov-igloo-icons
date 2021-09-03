/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Slider /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Slider = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1.5\" y=\"7.5\" width=\"13\" height=\"1\" rx=\".5\" stroke=\"#233043\"/><circle cx=\"8\" cy=\"8\" r=\"4.25\" fill=\"#fff\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"M8 9.5v-3M10 9V7M6 9V7\" stroke=\"#233043\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m24.822 12.456-.912.409.912-.41c-1.19-2.651-2.394-4.375-4.059-5.382-1.649-.998-3.59-1.192-5.972-1.193-1.276-.063-3.06.297-4.682 1.479-1.51 1.1-2.824 2.873-3.474 5.552h-2.32a2.848 2.848 0 0 0 0 5.695h2.068c.676 3.785 3.21 5.884 5.987 6.84 2.913 1.005 6.185.797 8.08.026 2.569-1.046 4.63-3.675 5.19-6.866h2.238a2.848 2.848 0 0 0 0-5.695h-2.863c-.06-.152-.125-.303-.193-.455z\" fill=\"#fff\" stroke=\"#233043\" stroke-width=\"2\"/><path d=\"m6.462 13.734-.011.063-.003.063-.071 1.377-.002.039c-.077 1.499-.169 3.278.44 4.938 1.175 3.209 3.852 4.847 6.516 5.518 2.631.663 5.418.433 7.119-.26 2.263-.921 4.124-3.068 4.92-5.722.426-1.42.31-2.883.157-4.142l-.085-.703c-.095-.781-.254-1.634-.62-2.45l-.883.397.883-.396c-1.19-2.652-2.394-4.376-4.058-5.383-1.65-.998-3.59-1.192-5.972-1.193-1.276-.063-3.062.297-4.683 1.479-1.659 1.209-3.083 3.231-3.647 6.375z\" stroke=\"#233043\" stroke-width=\"2\"/><path d=\"M16 12v8M20 14v4M12 14v4\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Slider.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Slider.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Slider;
