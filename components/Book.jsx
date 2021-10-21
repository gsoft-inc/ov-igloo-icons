/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Book /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Book = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m7 13-3.83-1.276a.25.25 0 0 1-.17-.238v-8.14a.25.25 0 0 1 .33-.236L7 4.333M7 13h2m-2 0V4.333M9 13l3.83-1.276a.25.25 0 0 0 .17-.238v-8.14a.25.25 0 0 0-.33-.236L9 4.333M9 13V4.333m0 0H7\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.061 3.892a.75.75 0 0 1 .676-.104l5.885 1.962h2.756l5.885-1.962a.75.75 0 0 1 .987.712v13a.75.75 0 0 1-.513.712l-6 2a.75.75 0 0 1-.237.038h-3a.75.75 0 0 1-.237-.038l-6-2a.75.75 0 0 1-.513-.712v-13a.75.75 0 0 1 .311-.608ZM12.75 7.25h-1.5v11.5h1.5V7.25Zm1.5 11.21 4.5-1.5V5.54l-4.5 1.5v11.42Zm-4.5 0V7.04l-4.5-1.5v11.42l4.5 1.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m14 26-8-2.667V6l8 2.667M14 26h4m-4 0V8.667M18 26l8-2.667V6l-8 2.667M18 26V8.667m0 0h-4\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Book.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Book.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Book;
