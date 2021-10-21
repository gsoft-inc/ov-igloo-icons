/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Folder /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Folder = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.25 13.5h9.5c.69 0 1.25-.56 1.25-1.25V5.812c0-.69-.56-1.25-1.25-1.25H8.415a.25.25 0 0 1-.174-.07L6.269 2.57a.25.25 0 0 0-.175-.071H3.25C2.56 2.5 2 3.06 2 3.75v8.5c0 .69.56 1.25 1.25 1.25Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.125 18h9.75c1.035 0 1.875-.84 1.875-1.875v-6c0-1.036-.84-1.875-1.875-1.875h-4.373a.375.375 0 0 1-.257-.102l-2.166-2.046A.375.375 0 0 0 9.821 6H7.126C6.089 6 5.25 6.84 5.25 7.875v8.25C5.25 17.16 6.09 18 7.125 18Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 9A1.5 1.5 0 0 0 8 10.5v11A1.5 1.5 0 0 0 9.5 23h13a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5h-5.83a1.5 1.5 0 0 1-1.03-.41L12.895 9H9.5ZM6 10.5A3.5 3.5 0 0 1 9.5 7h3.595a1.5 1.5 0 0 1 1.03.41L16.868 10H22.5a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 6 21.5v-11Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Folder.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Folder.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Folder;
