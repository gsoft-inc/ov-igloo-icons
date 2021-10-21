/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Numbers /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Numbers = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.075 11.125V4.78h-.971c0 .784-.252 1.082-1.437 1.082v.896H2.01v4.368h1.065ZM9.313 11.125v-.961H6.168c.112-.579.308-.812 1.008-1.213l.915-.523c.784-.448 1.24-1.167 1.24-1.941 0-1.12-.792-1.82-2.071-1.82-1.353 0-2.221.886-2.221 2.268h1.11c0-.859.402-1.335 1.11-1.335.552 0 .934.383.934.943 0 .513-.27.914-.793 1.204l-.933.513c-1.102.607-1.568 1.465-1.568 2.865h4.414ZM12.852 11.237c1.288 0 2.194-.793 2.194-1.932 0-.793-.486-1.39-1.232-1.521.7-.224 1.073-.7 1.073-1.372 0-1.045-.83-1.745-2.072-1.745-1.316 0-2.156.774-2.156 1.988h1.055c0-.691.42-1.102 1.101-1.102.579 0 .98.355.98.859 0 .625-.336.933-1.017.933h-.458v.924h.448c.794 0 1.195.355 1.195 1.046 0 .606-.448 1.017-1.11 1.017-.803 0-1.26-.476-1.26-1.325H10.5c0 1.409.868 2.23 2.352 2.23Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.612 16.688v-9.52H3.156c0 1.176-.378 1.624-2.156 1.624v1.344h2.016v6.552h1.596ZM13.97 16.688v-1.442H9.252c.168-.868.462-1.218 1.512-1.82l1.372-.784c1.176-.672 1.862-1.75 1.862-2.912 0-1.68-1.19-2.73-3.108-2.73-2.03 0-3.332 1.33-3.332 3.402h1.666c0-1.288.602-2.002 1.666-2.002.826 0 1.4.574 1.4 1.414 0 .77-.406 1.372-1.19 1.806l-1.4.77c-1.652.91-2.352 2.198-2.352 4.298h6.622ZM19.279 16.856c1.932 0 3.29-1.19 3.29-2.898 0-1.19-.728-2.086-1.848-2.282 1.05-.336 1.61-1.05 1.61-2.058C22.33 8.05 21.085 7 19.223 7c-1.974 0-3.234 1.162-3.234 2.982h1.582c0-1.036.63-1.652 1.652-1.652.868 0 1.47.532 1.47 1.288 0 .938-.504 1.4-1.526 1.4h-.686v1.386h.672c1.19 0 1.792.532 1.792 1.568 0 .91-.672 1.526-1.666 1.526-1.204 0-1.89-.714-1.89-1.988H15.75c0 2.114 1.302 3.346 3.528 3.346Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.149 22.25V9.558H4.208c0 1.568-.504 2.166-2.875 2.166v1.792h2.688v8.736h2.128ZM18.627 22.25v-1.922h-6.291c.224-1.157.616-1.624 2.016-2.427l1.83-1.045c1.567-.896 2.482-2.333 2.482-3.883 0-2.24-1.587-3.64-4.144-3.64-2.707 0-4.443 1.774-4.443 4.536H12.3c0-1.717.802-2.669 2.22-2.669 1.102 0 1.868.765 1.868 1.885 0 1.027-.542 1.83-1.587 2.408l-1.867 1.027c-2.203 1.213-3.136 2.93-3.136 5.73h8.83ZM25.705 22.475c2.576 0 4.387-1.587 4.387-3.864 0-1.587-.971-2.782-2.464-3.043 1.4-.448 2.146-1.4 2.146-2.744 0-2.09-1.661-3.49-4.144-3.49-2.632 0-4.312 1.549-4.312 3.975h2.11c0-1.381.84-2.202 2.202-2.202 1.158 0 1.96.709 1.96 1.717 0 1.25-.672 1.867-2.035 1.867h-.914v1.848h.896c1.587 0 2.39.709 2.39 2.09 0 1.214-.897 2.035-2.222 2.035-1.605 0-2.52-.952-2.52-2.65H21c0 2.818 1.736 4.46 4.704 4.46Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Numbers.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Numbers.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Numbers;