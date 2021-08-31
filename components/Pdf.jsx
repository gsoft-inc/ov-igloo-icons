/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Pdf /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Pdf = ({size, ariaLabel, className, ...other}) => {
const svgData = {"32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 6.667H7.333a.667.667 0 0 0-.666.666v17.334c0 .368.298.666.666.666h17.334a.667.667 0 0 0 .666-.666V12M20 6.667 25.333 12M20 6.667v4.666c0 .368.298.667.667.667h4.666\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.583 21h1.076v-1.65h.905c1.17 0 1.852-.7 1.852-1.716 0-1.012-.669-1.725-1.825-1.725H9.583V21zm1.076-2.513v-1.698h.726c.621 0 .922.338.922.845 0 .505-.3.853-.917.853h-.731zM15.919 21c1.552 0 2.491-.96 2.491-2.55 0-1.586-.94-2.54-2.476-2.54h-1.82V21h1.805zm-.728-.922V16.83h.686c.955 0 1.46.488 1.46 1.619 0 1.136-.505 1.628-1.462 1.628h-.684zm4.017.922h1.076v-2.103h2.07v-.887h-2.07v-1.213h2.294v-.888h-3.37V21z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Pdf.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Pdf.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Pdf;
