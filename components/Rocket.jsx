/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Rocket /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Rocket = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.333 6.506c0-2.772 1.978-4.111 2.527-4.43a.275.275 0 0 1 .28 0c.549.319 2.527 1.658 2.527 4.43v4.827H5.333V6.506Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M3.333 9.4c0-.117.061-.225.16-.285l1.334-.808a.333.333 0 0 1 .506.285v2.741H3.667A.333.333 0 0 1 3.333 11V9.4ZM12.667 9.4a.333.333 0 0 0-.16-.285l-1.334-.808a.333.333 0 0 0-.506.285v2.741h1.666c.184 0 .334-.149.334-.333V9.4Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"6.333\" r=\"1\" fill=\"#233043\"/><path d=\"M8 13.333V12M6 14v-1.334M10 14v-1.334\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 10.259c0-4.158 2.967-6.167 3.79-6.645a.412.412 0 0 1 .42 0c.823.478 3.79 2.487 3.79 6.645V17.5H8v-7.241Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M5 14.6a.5.5 0 0 1 .24-.428l2-1.212a.5.5 0 0 1 .76.428V17.5H5.5A.5.5 0 0 1 5 17v-2.4ZM19 14.6a.5.5 0 0 0-.24-.428l-2-1.212a.5.5 0 0 0-.76.428V17.5h2.5a.5.5 0 0 0 .5-.5v-2.4Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"12\" cy=\"10\" r=\"1.5\" fill=\"#233043\"/><path d=\"M12 20.5v-2M9 21.5v-2M15 21.5v-2\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.667 13.015c0-5.543 3.956-8.222 5.053-8.859a.55.55 0 0 1 .56 0c1.098.637 5.053 3.316 5.053 8.86v9.655H10.667v-9.656ZM6.667 18.804c0-.233.121-.45.32-.57l2.667-1.617a.667.667 0 0 1 1.013.57v5.484H7.333a.667.667 0 0 1-.666-.667v-3.2ZM25.334 18.804a.667.667 0 0 0-.322-.57l-2.666-1.617a.667.667 0 0 0-1.012.57v5.484h3.333a.667.667 0 0 0 .666-.667v-3.2Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"12.67\" r=\"2\" fill=\"#233043\"/><path d=\"M16 26.67v-2.666M12 28.004v-2.667M20 28.004v-2.667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Rocket.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Rocket.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Rocket;
