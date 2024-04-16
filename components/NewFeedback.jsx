/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <NewFeedback /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const NewFeedback = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 6.025a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\" fill=\"#F96155\"/><path d=\"M8.528 3.6a4.571 4.571 0 1 0-.957 9.042H12.59c.3 0 .441-.37.217-.57l-1.514-1.346a4.55 4.55 0 0 0 .805-3.295\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.285 11.875c0-3.452 2.746-6.25 6.134-6.25.447 0 .882.048 1.301.14a.736.736 0 0 0 .875-.574.75.75 0 0 0-.564-.891 7.494 7.494 0 0 0-1.612-.175c-4.2 0-7.606 3.47-7.606 7.75 0 4.28 3.405 7.75 7.606 7.75l.042-.001h7.497c1.128 0 1.658-1.421.814-2.184l-1.716-1.554c.675-1.196.968-2.593.968-4.011 0-.366-.025-.726-.074-1.08a.738.738 0 0 0-.83-.639.748.748 0 0 0-.627.847c.039.284.059.576.059.872 0 1.416-.34 2.703-1.047 3.698a.762.762 0 0 0-.019.852.747.747 0 0 0 .143.175l1.683 1.524H11.42l-.04.001c-3.37-.022-6.094-2.812-6.094-6.25Z\" fill=\"#233043\"/><path d=\"M17.626 9.225a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\" fill=\"#F96155\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.164 6.872a9.333 9.333 0 1 0-1.954 18.462h10.246a.667.667 0 0 0 .443-1.166l-3.091-2.747A9.291 9.291 0 0 0 24.543 16c0-.445-.031-.881-.091-1.308\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M24 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z\" fill=\"#F96155\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

NewFeedback.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default NewFeedback;
