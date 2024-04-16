/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <NewTemplate /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const NewTemplate = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 6.286v7.38c0 .185.15.334.333.334h4.381M2 6.286V2.333C2 2.15 2.15 2 2.333 2H9M2 6.286h4.714m4.286 0H6.714m0 0V14m0 0h6.953c.184 0 .333-.15.333-.333v-6.59\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M13 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\" fill=\"#FF5971\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 5.75H12a.75.75 0 0 0 0-1.5H5.333c-.598 0-1.083.485-1.083 1.083v13.334c0 .598.485 1.083 1.083 1.083h13.334c.598 0 1.083-.485 1.083-1.083v-7.744a.75.75 0 0 0-1.5 0v7.327h-7v-7.5h2.854a.75.75 0 0 0 0-1.5H5.75v-3.5Zm0 5v7.5h4v-7.5h-4Z\" fill=\"#233043\"/><path d=\"M17.5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\" fill=\"#FF5971\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.667 13.333V25c0 .184.149.333.333.333h7m-7.333-12V7c0-.184.149-.333.333-.333h9m-9.333 6.666H14m4.806 0H14m0 0v12m0 0h11c.184 0 .334-.149.334-.333V14.564\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M23.334 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z\" fill=\"#FF5971\"/></svg>"}
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

export default NewTemplate;
