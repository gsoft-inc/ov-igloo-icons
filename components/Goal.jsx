/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Goal /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Goal = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"8\" r=\"3\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"8\" cy=\"8\" r=\".25\" fill=\"#233043\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m8 8 6-6\" stroke=\"#233043\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M13.077 2.688V1.656a.5.5 0 0 1 .147-.353l.684-.684a.25.25 0 0 1 .413.098l.205.614a.25.25 0 0 0 .158.158l.614.204a.25.25 0 0 1 .098.414l-.684.684a.5.5 0 0 1-.354.147h-1.03a.25.25 0 0 1-.25-.25Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"m19.154 5.406-.46.46a8.75 8.75 0 1 1-1.06-1.06l.482-.483v-.942a.5.5 0 0 1 .147-.353l1.241-1.242a.25.25 0 0 1 .414.098l.351 1.053a.5.5 0 0 0 .317.316l1.053.351a.25.25 0 0 1 .098.414L20.494 5.26a.5.5 0 0 1-.354.146h-.987ZM4.75 11.5a7.25 7.25 0 0 1 11.819-5.63l-1.782 1.783a4.75 4.75 0 1 0 1.06 1.06l1.783-1.782A7.25 7.25 0 1 1 4.75 11.5ZM12 8.25c.626 0 1.21.177 1.706.483l-1.53 1.53a1.25 1.25 0 1 0 1.06 1.06l1.53-1.53A3.25 3.25 0 1 1 12 8.25Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"m25.539 7.875-.612.613A11.62 11.62 0 0 1 27.667 16c0 6.443-5.224 11.667-11.667 11.667S4.333 22.443 4.333 16 9.557 4.333 16 4.333a11.62 11.62 0 0 1 7.512 2.74l.643-.642V5.175c0-.177.07-.346.195-.471l1.656-1.656a.333.333 0 0 1 .552.13l.468 1.405c.066.199.222.355.422.421l1.404.468a.333.333 0 0 1 .13.552L27.327 7.68a.667.667 0 0 1-.472.195H25.54ZM6.333 16c0-5.339 4.328-9.667 9.667-9.667 2.31 0 4.43.81 6.092 2.161l-2.377 2.377a6.333 6.333 0 1 0 1.414 1.414l2.377-2.377A9.626 9.626 0 0 1 25.666 16 9.667 9.667 0 0 1 16 25.667c-5.339 0-9.667-4.328-9.667-9.667ZM16 11.667c.834 0 1.613.236 2.275.644l-2.04 2.039a1.667 1.667 0 1 0 1.414 1.414l2.04-2.039A4.333 4.333 0 1 1 16 11.666Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Goal.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Goal;
