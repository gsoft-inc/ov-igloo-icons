/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <AddUser /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const AddUser = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 8a6 6 0 1 0-6 6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"7.25\" r=\"2.25\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.748 9.875A3.492 3.492 0 0 0 8.176 9.5c-1.764 0-3.257 1.334-3.752 3.17M12.5 10.5v4M10.5 12.5h4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 4.75a7.25 7.25 0 0 0-5.166 12.337c.582-1.367 1.569-2.501 2.805-3.173a3.75 3.75 0 1 1 4.894-.149c.045.02.09.042.134.064a.75.75 0 1 1-.672 1.341 3.906 3.906 0 0 0-1.76-.42c-1.845 0-3.506 1.33-4.177 3.336A7.216 7.216 0 0 0 12 19.25a.75.75 0 0 1 0 1.5A8.75 8.75 0 1 1 20.75 12a.75.75 0 0 1-1.5 0A7.25 7.25 0 0 0 12 4.75Zm0 4a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm5 4.5a.75.75 0 0 1 .75.75v2.25H20a.75.75 0 0 1 0 1.5h-2.25V20a.75.75 0 0 1-1.5 0v-2.25H14a.75.75 0 0 1 0-1.5h2.25V14a.75.75 0 0 1 .75-.75Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 6.333c-5.339 0-9.667 4.328-9.667 9.667a9.635 9.635 0 0 0 2.78 6.783c.775-1.824 2.09-3.335 3.74-4.231a5 5 0 1 1 6.526-.198l.176.085a1 1 0 1 1-.896 1.788 5.207 5.207 0 0 0-2.346-.56c-2.46 0-4.674 1.774-5.57 4.447A9.622 9.622 0 0 0 16 25.667a1 1 0 1 1 0 2C9.556 27.667 4.333 22.443 4.333 16S9.556 4.333 16 4.333c6.443 0 11.666 5.224 11.666 11.667a1 1 0 1 1-2 0c0-5.339-4.327-9.667-9.666-9.667Zm0 5.334a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.666 6a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

AddUser.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default AddUser;
