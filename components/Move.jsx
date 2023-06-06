/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Move /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Move = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 2.667v10.666M8 2.667l1.667 1.481M8 2.667 6.333 4.148M8 13.333l1.667-1.481M8 13.333l-1.667-1.481M2.667 8h10.666M2.666 8l1.482-1.667M2.667 8l1.481 1.667M13.333 8l-1.481-1.667M13.333 8l-1.481 1.667\"/></g></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 4v16m0-16 2.5 2.222M12 4 9.5 6.222M12 20l2.5-2.222M12 20l-2.5-2.222M4 12h16M4 12l2.222-2.5M4 12l2.222 2.5M20 12l-2.222-2.5M20 12l-2.222 2.5\"/></g></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 5.333v21.334m0-21.334 3.333 2.963M16 5.333l-3.334 2.963M16 26.666l3.333-2.962M16 26.667l-3.334-2.963M5.333 16h21.334M5.333 16l2.963-3.333M5.334 16l2.962 3.333M26.666 16l-2.962-3.333M26.667 16l-2.963 3.333\"/></g></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Move.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Move.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Move;
