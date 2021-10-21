/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <RemoveUser /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const RemoveUser = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"7.955\" cy=\"7.21\" r=\"2.233\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.69 9.816a3.466 3.466 0 0 0-1.56-.373c-1.752 0-3.233 1.325-3.724 3.147M11.086 11.086l2.828 2.828M11.086 13.914l2.828-2.828\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M14 8a6 6 0 1 0-6 6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#a)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11 3.75a7.25 7.25 0 0 0-5.166 12.337c.582-1.367 1.569-2.501 2.805-3.173a3.75 3.75 0 1 1 4.894-.149c.045.02.09.042.134.064a.75.75 0 1 1-.672 1.341 3.906 3.906 0 0 0-1.76-.42c-1.845 0-3.506 1.33-4.177 3.336A7.216 7.216 0 0 0 11 18.25a.75.75 0 0 1 0 1.5A8.75 8.75 0 1 1 19.75 11a.75.75 0 0 1-1.5 0A7.25 7.25 0 0 0 11 3.75Zm0 4a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm3.348 6.598a.75.75 0 0 1 1.061 0L17 15.94l1.591-1.59a.75.75 0 0 1 1.06 1.06L18.062 17l1.59 1.591a.75.75 0 0 1-1.06 1.06L17 18.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06L15.938 17l-1.59-1.591a.75.75 0 0 1 0-1.06Z\" fill=\"#233043\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 6.333A9.667 9.667 0 0 0 6.333 16a9.636 9.636 0 0 0 2.78 6.783c.775-1.824 2.09-3.335 3.74-4.231a5 5 0 1 1 6.526-.198l.177.085a1 1 0 1 1-.897 1.788 5.207 5.207 0 0 0-2.346-.56c-2.46 0-4.674 1.774-5.569 4.447A9.62 9.62 0 0 0 16 25.667a1 1 0 1 1 0 2C9.557 27.667 4.333 22.443 4.333 16S9.557 4.333 16 4.333 27.667 9.557 27.667 16a1 1 0 0 1-2 0c0-5.339-4.328-9.667-9.667-9.667Zm0 5.334a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm4.465 8.798a1 1 0 0 1 1.414 0L24 22.585l2.122-2.12a1 1 0 0 1 1.414 1.414L25.414 24l2.122 2.121a1 1 0 1 1-1.415 1.415l-2.12-2.122-2.122 2.121a1 1 0 0 1-1.414-1.414L22.586 24l-2.121-2.121a1 1 0 0 1 0-1.415Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

RemoveUser.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

RemoveUser.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default RemoveUser;
