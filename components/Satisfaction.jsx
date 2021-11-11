/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Satisfaction /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Satisfaction = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.216 4.25c-.661 0-1.247.413-1.477 1.028l-2.12 5.535H6a1.75 1.75 0 0 0-1.75 1.75v5c0 .966.784 1.75 1.75 1.75h10.332c1.183 0 2.1-.854 2.316-1.96v-.002l1.056-5.298.001-.005c.287-1.487-.84-2.887-2.362-2.887h-3.294V5.837c0-.869-.7-1.587-1.579-1.587h-.254Zm-3.81 13.563v-5.5H6a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h2.406Zm1.5 0h6.426c.402 0 .753-.281.843-.746l.001-.005 1.056-5.298v-.002a.92.92 0 0 0-.89-1.101h-3.63c-.65 0-1.163-.531-1.163-1.169V5.837c0-.055-.043-.087-.079-.087h-.254a.08.08 0 0 0-.073.054l-.003.008-2.234 5.834v6.166Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.283 1.75c-.754 0-1.427.468-1.692 1.172L7.861 10H4.124a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h13.343a2.868 2.868 0 0 0 2.813-2.323v-.002l1.29-6.721v-.001a2.871 2.871 0 0 0-2.813-3.422h-4.342V3.56a1.81 1.81 0 0 0-1.808-1.811h-.325ZM7.625 19v-7.5h-3.5a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h3.5Zm1.5 0h8.343c.651 0 1.214-.463 1.34-1.109l1.29-6.722v-.002a1.371 1.371 0 0 0-1.34-1.636h-4.563a1.28 1.28 0 0 1-1.28-1.281V3.562a.31.31 0 0 0-.307-.312h-.325a.308.308 0 0 0-.288.201l-.003.008-2.867 7.43V19Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.377 2.333a2.411 2.411 0 0 0-2.256 1.563l-3.64 9.437H5.5a2.333 2.333 0 0 0-2.333 2.334V25A2.333 2.333 0 0 0 5.5 27.333h17.79c1.831 0 3.402-1.3 3.751-3.097v-.003l1.72-8.962h.001c.459-2.362-1.344-4.563-3.751-4.563h-5.79v-5.96a2.413 2.413 0 0 0-2.41-2.415h-.434Zm-6.21 23v-10H5.5a.333.333 0 0 0-.333.334V25c0 .184.149.333.333.333h4.667Zm2 0H23.29c.869 0 1.62-.617 1.788-1.478v-.001l1.72-8.962v-.002a1.828 1.828 0 0 0-1.787-2.182h-6.084A1.707 1.707 0 0 1 17.22 11V4.749a.413.413 0 0 0-.41-.416h-.434a.41.41 0 0 0-.384.269l-.004.01-3.822 9.908v10.813Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Satisfaction.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Satisfaction.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Satisfaction;
