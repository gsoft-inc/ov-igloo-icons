/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <NewTemplate /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const NewTemplate = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 6.571v6.096c0 .184.15.333.333.333H6.93M3 6.571V3.333C3 3.15 3.15 3 3.333 3H8M3 6.571h3.929m2.574 0H6.93m0 0V13m0 0h5.738c.184 0 .333-.15.333-.333V7.23\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M11.667 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\" fill=\"#FF5971\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 10v8.667c0 .184.15.333.333.333H10.5M5 10V5.333C5 5.15 5.15 5 5.333 5H12m-7 5h5.5m3.604 0H10.5m0 0v9m0 0h8.167c.184 0 .333-.15.333-.333v-7.744\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M17.5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\" fill=\"#FF5971\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.667 13.337v11.667c0 .184.149.333.333.333h7m-7.333-12V7.004c0-.184.149-.334.333-.334h9m-9.333 6.667H14m4.806 0H14m0 0v12m0 0h11c.184 0 .333-.15.333-.333V14.568\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M23.334 12.004a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\" fill=\"#FF5971\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

NewTemplate.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

NewTemplate.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default NewTemplate;
