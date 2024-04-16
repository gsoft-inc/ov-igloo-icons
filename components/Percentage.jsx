/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Percentage /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Percentage = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.89 4.427 10.134 4 5.1 11.275l.778.426 5.014-7.274ZM5.9 7.819c1.194 0 1.898-.854 1.898-1.814 0-.96-.704-1.813-1.898-1.813C4.704 4.192 4 5.045 4 6.005S4.704 7.82 5.899 7.82Zm0-.896c-.576 0-.886-.406-.886-.918s.31-.917.886-.917c.576 0 .885.405.885.917s-.31.918-.885.918Zm4.224 4.64c1.194 0 1.898-.854 1.898-1.814 0-.96-.704-1.813-1.898-1.813-1.195 0-1.899.853-1.899 1.813s.704 1.814 1.899 1.814Zm0-.896c-.576 0-.886-.406-.886-.918s.31-.917.886-.917c.576 0 .885.405.885.917s-.31.918-.885.918Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.336 6.64 15.2 6 7.648 16.912l1.168.64 7.52-10.912Zm-7.488 5.088c1.792 0 2.848-1.28 2.848-2.72 0-1.44-1.056-2.72-2.848-2.72C7.056 6.288 6 7.568 6 9.008c0 1.44 1.056 2.72 2.848 2.72Zm0-1.344c-.864 0-1.328-.608-1.328-1.376 0-.768.464-1.376 1.328-1.376.864 0 1.328.608 1.328 1.376 0 .768-.464 1.376-1.328 1.376Zm6.336 6.96c1.792 0 2.848-1.28 2.848-2.72 0-1.44-1.056-2.72-2.848-2.72-1.792 0-2.848 1.28-2.848 2.72 0 1.44 1.056 2.72 2.848 2.72Zm0-1.344c-.864 0-1.328-.608-1.328-1.376 0-.768.464-1.376 1.328-1.376.864 0 1.328.608 1.328 1.376 0 .768-.464 1.376-1.328 1.376Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.781 8.853 20.267 8l-10.07 14.55 1.558.853L21.78 8.853Zm-9.984 6.784c2.39 0 3.798-1.706 3.798-3.626s-1.408-3.627-3.798-3.627C9.408 8.384 8 10.091 8 12.011c0 1.92 1.408 3.626 3.797 3.626Zm0-1.792c-1.152 0-1.77-.81-1.77-1.834s.618-1.835 1.77-1.835c1.152 0 1.771.81 1.771 1.835 0 1.024-.619 1.834-1.77 1.834Zm8.448 9.28c2.39 0 3.798-1.706 3.798-3.626s-1.408-3.627-3.798-3.627c-2.389 0-3.797 1.707-3.797 3.627 0 1.92 1.408 3.626 3.797 3.626Zm0-1.792c-1.152 0-1.77-.81-1.77-1.834s.618-1.835 1.77-1.835c1.152 0 1.771.81 1.771 1.835 0 1.024-.619 1.834-1.77 1.834Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Percentage.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Percentage;
