/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <Csv /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Csv = ({size, ariaLabel, className, ...other}) => {
const svgData = {"32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 6.667H7.333a.667.667 0 0 0-.666.666v17.334c0 .368.298.666.666.666h17.334a.667.667 0 0 0 .666-.666V12M20 6.667 25.333 12M20 6.667v4.666c0 .368.298.667.667.667h4.666\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M13.39 17.691c-.14-1.175-1.03-1.851-2.209-1.851-1.345 0-2.371.95-2.371 2.614 0 1.661 1.009 2.616 2.371 2.616 1.305 0 2.093-.868 2.21-1.805l-1.089-.005c-.102.544-.53.857-1.104.857-.773 0-1.297-.574-1.297-1.663 0-1.058.517-1.663 1.305-1.663.589 0 1.014.341 1.096.9h1.089zm3.534-.318h1.032c-.015-.907-.76-1.534-1.894-1.534-1.116 0-1.934.617-1.93 1.542-.002.75.528 1.18 1.388 1.387l.554.139c.555.134.863.293.865.636-.002.373-.355.627-.902.627-.56 0-.962-.259-.997-.768H14c.027 1.1.815 1.67 2.05 1.67 1.243 0 1.974-.594 1.977-1.526-.003-.848-.642-1.298-1.527-1.497l-.457-.109c-.443-.102-.813-.266-.805-.631 0-.329.29-.57.817-.57.515 0 .83.234.87.634zm2.745-1.464h-1.195L20.23 21h1.387l1.755-5.09H22.18l-1.233 3.867H20.9l-1.23-3.868z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Csv.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Csv.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Csv;
