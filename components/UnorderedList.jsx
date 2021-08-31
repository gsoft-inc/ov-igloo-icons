/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./getSvgProps";

import './icon.css';

/**
 * Renders a <UnorderedList /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const UnorderedList = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.5 4h7M6.5 8h7M6.5 12h7\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"3.5\" cy=\"4\" r=\"1\" fill=\"#233043\"/><circle cx=\"3.5\" cy=\"8\" r=\"1\" fill=\"#233043\"/><circle cx=\"3.5\" cy=\"12\" r=\"1\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 6.5h10M9 12.5h10M9 18.5h10\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"5.25\" cy=\"6.5\" r=\"1.25\" fill=\"#233043\"/><circle cx=\"5.25\" cy=\"12.5\" r=\"1.25\" fill=\"#233043\"/><circle cx=\"5.25\" cy=\"18.5\" r=\"1.25\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 8h13.333M12 16h13.333M12 24h13.333\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"7\" cy=\"8\" r=\"1.667\" fill=\"#233043\"/><circle cx=\"7\" cy=\"16\" r=\"1.667\" fill=\"#233043\"/><circle cx=\"7\" cy=\"24\" r=\"1.667\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

UnorderedList.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

UnorderedList.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default UnorderedList;
