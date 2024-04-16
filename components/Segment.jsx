/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Segment /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Segment = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.606 9.506s0 1.046 1.394 1.046c.09 0 1.394 0 1.394-1.395C9.394 7.763 8 7.763 8 7.763s-1.157 0-1.157-1.157c0-1.158 1.082-1.158 1.157-1.158.643 0 .929.269 1.056.507\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M2.5 14h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.25 18.75V5.25h13.5v13.5H5.25ZM5 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H5Zm6.014 6.158c0-.312.072-.495.14-.603a.7.7 0 0 1 .28-.25c.254-.13.536-.132.566-.132.377 0 .59.077.707.145a.536.536 0 0 1 .215.217.75.75 0 0 0 1.324-.705 2.035 2.035 0 0 0-.789-.811c-.386-.223-.87-.346-1.457-.346h-.002c-.089 0-.67 0-1.252.3a2.198 2.198 0 0 0-.86.782c-.24.38-.372.848-.372 1.403 0 .566.144 1.04.397 1.42a2.273 2.273 0 0 0 .96.806 2.91 2.91 0 0 0 1.085.26h.043l.037.002a1.822 1.822 0 0 1 .674.18c.173.087.322.204.43.367.106.157.202.401.202.793 0 .401-.093.65-.193.809a.996.996 0 0 1-.397.355c-.34.175-.71.177-.752.177-.827 0-1.1-.292-1.206-.45a.855.855 0 0 1-.135-.372v-.01a.75.75 0 0 0-1.5.014h.75-.75v.02a1.37 1.37 0 0 0 .007.118 2.354 2.354 0 0 0 .38 1.062c.417.626 1.19 1.118 2.454 1.118h.002c.1 0 .77 0 1.439-.345.348-.18.707-.459.977-.887.272-.43.424-.965.424-1.61 0-.653-.166-1.194-.453-1.624a2.585 2.585 0 0 0-1.008-.876 3.32 3.32 0 0 0-1.333-.34H12.005a1.384 1.384 0 0 1-.538-.138.775.775 0 0 1-.308-.261.782.782 0 0 1-.101-.229 1.343 1.343 0 0 1-.044-.359Zm-.356 4.337v-.002.004-.002Zm0 .012v-.01.01ZM12 11.583v-.689.75-.061Zm0 .811v-.112.112Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.211 19.012s0 2.091 2.789 2.091c.18 0 2.789 0 2.789-2.789s-2.79-2.789-2.79-2.789-2.314 0-2.314-2.314S15.85 10.897 16 10.897c1.287 0 1.858.536 2.112 1.013\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6.5 26h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Segment.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Segment;
