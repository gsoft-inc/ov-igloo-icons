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
const Rocket = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.333 6.506c0-2.772 1.978-4.111 2.527-4.43a.275.275 0 0 1 .28 0c.549.319 2.527 1.658 2.527 4.43v4.827H5.333V6.506Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M3.333 9.4c0-.117.061-.225.16-.285l1.334-.808a.333.333 0 0 1 .506.285v2.741H3.667A.333.333 0 0 1 3.333 11V9.4ZM12.667 9.4a.333.333 0 0 0-.16-.285l-1.334-.808a.333.333 0 0 0-.506.285v2.741h1.666c.184 0 .334-.149.334-.333V9.4Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"6.333\" r=\"1\" fill=\"#233043\"/><path d=\"M8 13.333V12M6 14v-1.333M10 14v-1.333\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.414 1.965a1.162 1.162 0 0 1 1.172 0c.898.521 4.164 2.727 4.164 7.294v1.902c.135.028.27.08.398.158l2 1.212c.374.226.602.632.602 1.069V16c0 .69-.56 1.25-1.25 1.25h-5.793a.747.747 0 0 1 .043.25v2a.75.75 0 0 1-1.5 0v-2c0-.088.015-.172.043-.25H5.5c-.69 0-1.25-.56-1.25-1.25v-2.4c0-.437.228-.843.602-1.07l2-1.211a1.26 1.26 0 0 1 .398-.158V9.26c0-4.567 3.266-6.773 4.164-7.294ZM7.25 12.832v2.918h-1.5v-2.01l1.5-.909Zm8 2.918h-6.5V9.258c0-3.507 2.336-5.32 3.25-5.894.914.574 3.25 2.387 3.25 5.895v6.491Zm3-2.01-1.5-.909v2.919h1.5v-2.01ZM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9 17.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm6.75.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.667 13.011c0-5.543 3.955-8.222 5.053-8.859a.55.55 0 0 1 .56 0c1.098.637 5.053 3.316 5.053 8.86v9.655H10.667V13.01ZM6.667 18.8c0-.233.121-.45.32-.57l2.667-1.617a.667.667 0 0 1 1.013.57v5.484H7.333A.667.667 0 0 1 6.667 22v-3.2ZM25.333 18.8a.666.666 0 0 0-.32-.57l-2.667-1.617a.667.667 0 0 0-1.013.57v5.484h3.334a.667.667 0 0 0 .666-.667v-3.2Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"12.667\" r=\"2\" fill=\"#233043\"/><path d=\"M16 26.667V24M12 28v-2.667M20 28v-2.667\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
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

export default Rocket;
