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
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.157 1c-.574 0-1.082.358-1.281.891L5.038 6.69h-2.27c-.839 0-1.518.68-1.518 1.517v4.336c0 .838.68 1.517 1.517 1.517h8.959c1.025 0 1.821-.74 2.007-1.699v-.002l.917-4.594v-.004c.25-1.29-.727-2.503-2.048-2.503H9.746V2.376C9.746 1.623 9.14 1 8.377 1h-.22Zm-.063 1.348a.069.069 0 0 1 .063-.047h.22c.031 0 .068.027.068.075v3.17c0 .552.446 1.012 1.01 1.012h3.147c.486 0 .868.452.772.955v.002l-.916 4.594-.001.004c-.078.403-.383.646-.731.646H6.154V7.412l1.937-5.058.003-.006ZM2.55 8.208c0-.12.097-.217.216-.217h2.087v4.768H2.767a.217.217 0 0 1-.216-.216V8.207Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.283 1.75c-.754 0-1.427.468-1.692 1.172L7.861 10H4.124a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h13.343a2.868 2.868 0 0 0 2.813-2.323v-.002l1.29-6.721v-.001a2.871 2.871 0 0 0-2.813-3.422h-4.342V3.56a1.81 1.81 0 0 0-1.808-1.811h-.325ZM7.625 19v-7.5h-3.5a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h3.5Zm1.5 0h8.343c.651 0 1.214-.463 1.34-1.109l1.29-6.722v-.002a1.371 1.371 0 0 0-1.34-1.636h-4.563a1.28 1.28 0 0 1-1.28-1.281V3.562a.31.31 0 0 0-.307-.312h-.325a.308.308 0 0 0-.288.201l-.003.008-2.867 7.43V19Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.377 2.333a2.411 2.411 0 0 0-2.256 1.563l-3.64 9.437H5.5a2.333 2.333 0 0 0-2.333 2.334V25A2.333 2.333 0 0 0 5.5 27.333h17.79c1.831 0 3.402-1.3 3.751-3.097v-.003l1.72-8.962h.001c.459-2.362-1.344-4.563-3.751-4.563h-5.79v-5.96a2.413 2.413 0 0 0-2.41-2.415h-.434Zm-6.21 23v-10H5.5a.333.333 0 0 0-.333.334V25c0 .184.149.333.333.333h4.667Zm2 0H23.29c.869 0 1.62-.617 1.788-1.478v-.001l1.72-8.962v-.002a1.828 1.828 0 0 0-1.787-2.182h-6.084A1.707 1.707 0 0 1 17.22 11V4.749a.413.413 0 0 0-.41-.416h-.434a.41.41 0 0 0-.384.269l-.004.01-3.822 9.908v10.813Z\" fill=\"#233043\"/></svg>"}
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

export default Satisfaction;
