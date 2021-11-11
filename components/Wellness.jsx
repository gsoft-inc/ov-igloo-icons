/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Wellness /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Wellness = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.75 9.4c0-2.05 1.6-3.65 3.65-3.65a4.04 4.04 0 0 1 3.029 1.408.75.75 0 0 0 1.142 0A4.04 4.04 0 0 1 15.6 5.75c2.05 0 3.65 1.6 3.65 3.65 0 1.266-.562 2.473-1.706 3.871-1.151 1.41-2.813 2.92-4.888 4.805l-.62.561a.05.05 0 0 1-.068 0l-.623-.568h-.001c-2.075-1.882-3.737-3.39-4.888-4.799C5.312 11.873 4.75 10.666 4.75 9.4ZM8.4 4.25A5.107 5.107 0 0 0 3.25 9.4c0 1.758.798 3.295 2.044 4.82 1.229 1.502 2.97 3.08 4.994 4.916l.047.043h.001l.623.567a1.55 1.55 0 0 0 2.082.004l.622-.561.001-.002.069-.062c2.015-1.832 3.748-3.406 4.973-4.904 1.246-1.526 2.044-3.063 2.044-4.821a5.107 5.107 0 0 0-5.15-5.15A5.534 5.534 0 0 0 12 5.61a5.534 5.534 0 0 0-3.6-1.36Zm2.85 8.25h-1.5a.75.75 0 1 1 0-1.5h1.5V9.5a.75.75 0 1 1 1.5 0V11h1.5a.75.75 0 1 1 0 1.5h-1.5V14a.75.75 0 1 1-1.5 0v-1.5Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.75 9c0-2.666 2.084-4.75 4.75-4.75 1.513 0 2.977.708 3.929 1.826a.75.75 0 0 0 1.142 0c.952-1.118 2.416-1.826 3.929-1.826 2.666 0 4.75 2.084 4.75 4.75 0 1.644-.732 3.194-2.174 4.958-1.45 1.774-3.54 3.673-6.13 6.026l-.776.701a.25.25 0 0 1-.336 0l-.78-.71c-2.59-2.35-4.68-4.245-6.13-6.019C3.482 12.194 2.75 10.644 2.75 9ZM7.5 2.75C4.006 2.75 1.25 5.506 1.25 9c0 2.136.968 4.016 2.513 5.906 1.527 1.867 3.694 3.832 6.232 6.133l.05.046h.001l.779.71a1.75 1.75 0 0 0 2.35.004l.778-.703h.001l.077-.07c2.527-2.297 4.684-4.257 6.206-6.119 1.545-1.89 2.513-3.77 2.513-5.907 0-3.494-2.756-6.25-6.25-6.25-1.683 0-3.3.668-4.5 1.763C10.8 3.418 9.183 2.75 7.5 2.75ZM11.25 13h-2a.75.75 0 1 1 0-1.5h2v-2a.75.75 0 1 1 1.5 0v2h2a.75.75 0 1 1 0 1.5h-2v2a.75.75 0 1 1-1.5 0v-2Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.667 12c0-3.554 2.779-6.333 6.333-6.333 2.017 0 3.969.944 5.239 2.435a1 1 0 0 0 1.522 0C18.031 6.61 19.983 5.667 22 5.667c3.554 0 6.333 2.779 6.333 6.333 0 2.191-.976 4.258-2.899 6.61-1.934 2.367-4.719 4.898-8.172 8.036h-.001l-1.034.935a.333.333 0 0 1-.448-.001l-1.04-.946v-.002c-3.454-3.131-6.24-5.659-8.173-8.024-1.923-2.35-2.9-4.417-2.9-6.608ZM10 3.667C5.341 3.667 1.667 7.34 1.667 12c0 2.848 1.29 5.355 3.35 7.875 2.036 2.489 4.926 5.109 8.31 8.177l.066.06.002.002 1.038.945c.887.808 2.244.81 3.135.006l1.036-.936.002-.002.102-.093c3.369-3.062 6.246-5.676 8.275-8.158 2.06-2.52 3.35-5.028 3.35-7.876 0-4.659-3.674-8.333-8.333-8.333-2.244 0-4.4.89-6 2.35-1.6-1.46-3.756-2.35-6-2.35Zm5 13.666h-2.667a1 1 0 1 1 0-2H15v-2.666a1 1 0 1 1 2 0v2.666h2.667a1 1 0 0 1 0 2H17V20a1 1 0 0 1-2 0v-2.667Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Wellness.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Wellness.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Wellness;
