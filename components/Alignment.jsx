/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Alignment /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Alignment = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.18-10.577a1.188 1.188 0 0 1 1.396 1.398l-.804 4.02c-.094.47-.461.838-.931.932l-4.02.804a1.188 1.188 0 0 1-1.398-1.397l.804-4.02c.094-.471.462-.839.932-.933l4.02-.804Zm-.166 1.563-3.357.671-.67 3.357 3.355-.671.672-3.357ZM8 8.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.908-15.443a1.25 1.25 0 0 1 1.535 1.535l-1.816 6.658a1.25 1.25 0 0 1-.877.877l-6.658 1.816a1.25 1.25 0 0 1-1.535-1.534l1.816-6.66c.116-.426.45-.76.877-.876l6.658-1.816Zm-.027 1.562L9.782 9.782l-1.663 6.1 6.098-1.664 1.664-6.099ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 27.333c6.26 0 11.333-5.074 11.333-11.333C27.333 9.74 22.26 4.667 16 4.667 9.74 4.667 4.667 9.74 4.667 16c0 6.26 5.074 11.333 11.333 11.333Zm0 2c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333C8.636 2.667 2.667 8.637 2.667 16c0 7.364 5.97 13.333 13.333 13.333Zm5.21-20.59c1.245-.34 2.386.802 2.047 2.046l-2.421 8.878c-.155.57-.6 1.014-1.17 1.17l-8.877 2.42c-1.244.34-2.386-.801-2.046-2.046l2.42-8.878c.156-.57.6-1.014 1.17-1.17l8.878-2.42Zm-.036 2.082-8.131 2.218-2.217 8.132 8.13-2.218 2.218-8.132ZM16 17.334a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Alignment.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Alignment;
