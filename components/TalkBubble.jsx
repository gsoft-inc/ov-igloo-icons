/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <TalkBubble /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const TalkBubble = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.588 12.642v-.75h-.003l.003.75zm5.205-.582-.498.56.498-.56zm-1.332-1.184.498-.561-.498.56zM3.75 8.07c0-2.11 1.71-3.821 3.821-3.821v-1.5A5.321 5.321 0 0 0 2.25 8.071h1.5zm3.821 3.821a3.821 3.821 0 0 1-3.821-3.82h-1.5a5.321 5.321 0 0 0 5.321 5.32v-1.5zm.014 0h-.014v1.5h.02l-.006-1.5zm4.987 0H7.588v1.5h4.984v-1.5zm-.277.729a.417.417 0 0 1 .277-.729v1.5c.996 0 1.464-1.23.72-1.893l-.997 1.121zm-1.332-1.185 1.332 1.184.997-1.12-1.333-1.185-.996 1.121zm.43-3.365a3.8 3.8 0 0 1-.605 2.064l1.262.81a5.3 5.3 0 0 0 .842-2.874h-1.5zM7.57 4.25c2.11 0 3.821 1.71 3.821 3.821h1.5a5.321 5.321 0 0 0-5.32-5.321v1.5zm4.388 6.065a.49.49 0 0 1 .09.63l-1.26-.81c-.258.399-.215.956.174 1.301l.996-1.121z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.407 19v-.75.75zm7.685 0v.75V19zm.332-.874-.498.56.498-.56zm-2.318-2.06-.61-.436a.75.75 0 0 0 .112.996l.498-.56zM5.157 12a6.25 6.25 0 0 1 6.25-6.25v-1.5A7.75 7.75 0 0 0 3.657 12h1.5zm6.25 6.25A6.25 6.25 0 0 1 5.157 12h-1.5a7.75 7.75 0 0 0 7.75 7.75v-1.5zm7.685 0h-7.685v1.5h7.685v-1.5zm-.166.437a.25.25 0 0 1 .166-.437v1.5c1.15 0 1.69-1.42.83-2.184l-.996 1.12zm-2.318-2.06 2.318 2.06.996-1.121-2.318-2.06-.996 1.12zM17.657 12c0 1.355-.43 2.607-1.161 3.63l1.22.872A7.718 7.718 0 0 0 19.157 12h-1.5zm-6.25-6.25a6.25 6.25 0 0 1 6.25 6.25h1.5a7.75 7.75 0 0 0-7.75-7.75v1.5z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.248 25.333v-1h-.004l.004 1zm10.65-1.165-.663.748.664-.748zm-3.09-2.747-.814-.582a1 1 0 0 0 .15 1.33l.664-.748zM6.876 16a8.333 8.333 0 0 1 8.333-8.334v-2C9.502 5.667 4.876 10.293 4.876 16h2zm8.333 8.332A8.333 8.333 0 0 1 6.876 16h-2c0 5.707 4.626 10.333 10.333 10.333v-2zm.035 0h-.035v2h.043l-.008-2zm10.212 0H15.248v2h10.208v-2zm-.221.583a.333.333 0 0 1 .221-.583v2c1.533 0 2.253-1.894 1.107-2.912l-1.328 1.495zm-3.091-2.748 3.09 2.748 1.33-1.495-3.092-2.747-1.328 1.494zM23.543 16a8.29 8.29 0 0 1-1.549 4.84l1.628 1.162A10.291 10.291 0 0 0 25.542 16h-2zm-8.334-8.333A8.333 8.333 0 0 1 23.543 16h2c0-5.707-4.627-10.333-10.334-10.333v2z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

TalkBubble.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

TalkBubble.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default TalkBubble;
