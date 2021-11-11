/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Feedback /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Feedback = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.394 15.5a.75.75 0 0 0-.512.202L9.48 18.88a.46.46 0 0 1-.49.084c-.17-.066-.24-.185-.24-.307V16.25A.75.75 0 0 0 8 15.5a3.25 3.25 0 0 1-3.25-3.25v-4A3.25 3.25 0 0 1 8 5h8a3.25 3.25 0 0 1 3.25 3.25v4A3.25 3.25 0 0 1 16 15.5h-2.606Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><circle r=\"1\" transform=\"matrix(-1 0 0 1 15.5 10.25)\" fill=\"#233043\"/><circle r=\"1\" transform=\"matrix(-1 0 0 1 12.05 10.25)\" fill=\"#233043\"/><circle r=\"1\" transform=\"matrix(-1 0 0 1 8.5 10.25)\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.177 16.25a1.5 1.5 0 0 0-1.093.472L8.5 19.468V17.75a1.5 1.5 0 0 0-1.5-1.5H6a2.5 2.5 0 0 1-2.5-2.5v-6A2.5 2.5 0 0 1 6 5.25h12a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5h-5.823ZM18 17.75h-5.823l-3.47 3.687c-.63.669-1.707.195-1.707-.752V17.75H6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4Zm-10-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.236 21.667a2 2 0 0 0-1.457.629l-3.446 3.661v-2.29a2 2 0 0 0-2-2H8a3.333 3.333 0 0 1-3.333-3.334v-8A3.333 3.333 0 0 1 8 7h16a3.333 3.333 0 0 1 3.333 3.333v8A3.333 3.333 0 0 1 24 21.667h-7.764Zm7.764 2h-7.764l-4.627 4.915c-.84.893-2.276.26-2.276-1.002V23.667H8a5.333 5.333 0 0 1-5.333-5.334v-8A5.333 5.333 0 0 1 8 5h16a5.333 5.333 0 0 1 5.333 5.333v8A5.333 5.333 0 0 1 24 23.667Zm-13.333-8a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667Zm4-1.334a1.333 1.333 0 1 0 2.666 0 1.333 1.333 0 0 0-2.666 0Zm6.666 1.334a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Feedback.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Feedback.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Feedback;
