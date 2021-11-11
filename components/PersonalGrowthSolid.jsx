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
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.648 13.182A2.158 2.158 0 0 1 6.5 11.016a2.16 2.16 0 0 1 1.229-1.95A2.16 2.16 0 0 1 6.5 7.116c0-1.196.963-2.166 2.148-2.166.456 0 .877.138 1.22.381l-.016-.165C9.852 3.971 10.814 3 12 3c1.186 0 2.148.97 2.148 2.166l-.017.165a2.125 2.125 0 0 1 1.22-.381c1.187 0 2.149.97 2.149 2.166a2.16 2.16 0 0 1-1.229 1.95 2.16 2.16 0 0 1 1.229 1.95 2.158 2.158 0 0 1-2.148 2.166c-.456 0-.877-.138-1.22-.38l.016.164A2.158 2.158 0 0 1 12 15.132a2.158 2.158 0 0 1-2.148-2.166l.017-.165a2.125 2.125 0 0 1-1.22.381Zm5.5-4.116A2.158 2.158 0 0 0 12 6.9c-1.186 0-2.148.97-2.148 2.166s.962 2.167 2.148 2.167c1.186 0 2.148-.97 2.148-2.167ZM6 15.366c0-.255.213-.461.478-.461 2.622 0 4.834 1.694 5.522 4.01.688-2.316 2.9-4.01 5.522-4.01.265 0 .478.206.478.461 0 3.06-2.572 5.539-5.744 5.539-.086 0-.171-.002-.256-.006-.085.004-.17.006-.256.006-3.172 0-5.744-2.48-5.744-5.539Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.191 13.071a2.453 2.453 0 0 1-2.441-2.462c0-.985.576-1.822 1.396-2.216A2.455 2.455 0 0 1 5.75 6.178a2.453 2.453 0 0 1 2.441-2.462c.518 0 .996.157 1.387.433l-.02-.187A2.453 2.453 0 0 1 12 1.5a2.453 2.453 0 0 1 2.441 2.462l-.02.187c.401-.276.87-.433 1.388-.433a2.453 2.453 0 0 1 2.441 2.462c0 .984-.576 1.821-1.396 2.215a2.455 2.455 0 0 1 1.396 2.216 2.453 2.453 0 0 1-2.441 2.462c-.518 0-.996-.157-1.387-.433l.02.187A2.453 2.453 0 0 1 12 15.287a2.453 2.453 0 0 1-2.441-2.462l.02-.187c-.401.276-.87.433-1.388.433Zm6.25-4.678A2.453 2.453 0 0 0 12 5.931a2.453 2.453 0 0 0-2.441 2.462A2.453 2.453 0 0 0 12 10.855a2.453 2.453 0 0 0 2.441-2.462ZM4 15.115c0-.34.284-.615.637-.615 3.496 0 6.446 2.26 7.363 5.347.917-3.088 3.867-5.347 7.363-5.347.353 0 .637.275.637.615 0 4.079-3.429 7.385-7.659 7.385-.114 0-.228-.002-.341-.007a8.058 8.058 0 0 1-.341.007C7.428 22.5 4 19.194 4 15.115Z\" fill=\"#233043\"/></svg>"}
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

PersonalGrowthSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default PersonalGrowthSolid;
