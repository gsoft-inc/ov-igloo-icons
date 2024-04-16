/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <PersonalGrowthSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const PersonalGrowthSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.056 8.905c-.92 0-1.668-.754-1.668-1.682 0-.673.394-1.245.954-1.514a1.677 1.677 0 0 1-.954-1.513c0-.929.747-1.682 1.668-1.682.354 0 .68.107.947.296l-.013-.128C5.99 1.754 6.737 1 7.658 1c.92 0 1.668.754 1.668 1.682l-.013.128a1.65 1.65 0 0 1 .947-.296c.92 0 1.668.753 1.668 1.682 0 .672-.394 1.244-.954 1.513.56.27.954.841.954 1.514 0 .928-.747 1.682-1.668 1.682-.354 0-.68-.108-.947-.296l.013.128c0 .928-.747 1.682-1.668 1.682-.92 0-1.668-.754-1.668-1.682l.013-.128a1.65 1.65 0 0 1-.947.296Zm4.27-3.196c0-.928-.747-1.682-1.668-1.682-.92 0-1.668.754-1.668 1.682 0 .929.747 1.682 1.668 1.682.92 0 1.668-.753 1.668-1.682ZM3 10.6c0-.198.165-.358.37-.358 2.037 0 3.754 1.316 4.288 3.113.534-1.797 2.251-3.113 4.287-3.113.206 0 .37.16.37.358 0 2.375-1.995 4.3-4.458 4.3-.067 0-.133-.001-.2-.004a4.682 4.682 0 0 1-.198.004C4.996 14.9 3 12.975 3 10.6Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.191 13.071a2.453 2.453 0 0 1-2.441-2.462c0-.985.576-1.822 1.396-2.216A2.455 2.455 0 0 1 5.75 6.178a2.453 2.453 0 0 1 2.441-2.462c.518 0 .996.157 1.387.433l-.02-.187A2.453 2.453 0 0 1 12 1.5a2.453 2.453 0 0 1 2.441 2.462l-.02.187c.401-.276.87-.433 1.388-.433a2.453 2.453 0 0 1 2.441 2.462c0 .984-.576 1.821-1.396 2.215a2.455 2.455 0 0 1 1.396 2.216 2.453 2.453 0 0 1-2.441 2.462c-.518 0-.996-.157-1.387-.433l.02.187A2.453 2.453 0 0 1 12 15.287a2.453 2.453 0 0 1-2.441-2.462l.02-.187c-.401.276-.87.433-1.388.433Zm6.25-4.678A2.453 2.453 0 0 0 12 5.931a2.453 2.453 0 0 0-2.441 2.462A2.453 2.453 0 0 0 12 10.855a2.453 2.453 0 0 0 2.441-2.462ZM4 15.115c0-.34.284-.615.637-.615 3.496 0 6.446 2.26 7.363 5.347.917-3.088 3.867-5.347 7.363-5.347.353 0 .637.275.637.615 0 4.079-3.429 7.385-7.659 7.385-.114 0-.228-.002-.341-.007a8.058 8.058 0 0 1-.341.007C7.428 22.5 4 19.194 4 15.115Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

PersonalGrowthSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default PersonalGrowthSolid;
