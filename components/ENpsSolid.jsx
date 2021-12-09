/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ENpsSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ENpsSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.167 9.333a5.833 5.833 0 1 1 11.666 0v2.583a.584.584 0 0 1-.584.584h-2.504a2.752 2.752 0 0 0-1.764-2.403l.73-2.193a.75.75 0 1 0-1.423-.475L7.44 9.973A2.751 2.751 0 0 0 5.255 12.5H2.75a.584.584 0 0 1-.584-.584V9.333ZM6.76 12.5h2.478a1.25 1.25 0 0 0-2.478 0ZM8.5 5.833a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM5.167 7.667a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 9.813a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-.167-3.147a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.25 13.5a8.75 8.75 0 0 1 17.5 0v3.874a.876.876 0 0 1-.876.876h-4.132a3.752 3.752 0 0 0-2.746-3.366l1.215-3.647a.75.75 0 1 0-1.422-.474l-1.343 4.028a3.752 3.752 0 0 0-3.188 3.459H4.126a.876.876 0 0 1-.876-.876V13.5Zm8.766 2.75h-.032a2.25 2.25 0 0 0-2.22 2h4.472a2.25 2.25 0 0 0-2.22-2ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3.5 1.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-1.75 4.72a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM18 14.22a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.25 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 7C9.557 7 4.333 12.223 4.333 18.667v5.165c0 .645.523 1.168 1.169 1.168h20.996c.645 0 1.169-.523 1.169-1.168v-5.165C27.667 12.223 22.443 7 16 7Z\" fill=\"#233043\"/><path d=\"M20 25.333a4 4 0 0 0-8 0M16 21.333l2-6\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"16\" cy=\"11.667\" r=\"1\" fill=\"#fff\"/><circle cx=\"10.333\" cy=\"14.333\" r=\"1\" fill=\"#fff\"/><circle cx=\"9\" cy=\"19.626\" r=\"1\" fill=\"#fff\"/><circle cx=\"23\" cy=\"19.626\" r=\"1\" fill=\"#fff\"/><circle cx=\"21.667\" cy=\"14.333\" r=\"1\" fill=\"#fff\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ENpsSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

ENpsSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ENpsSolid;
