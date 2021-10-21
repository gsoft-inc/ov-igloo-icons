/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <NewSuggestion /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const NewSuggestion = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.667 8c0 .982-.53 1.84-1.32 2.302M8 5.333a2.667 2.667 0 0 0-1.347 4.97M6.667 10.39v.943h2.666v-.943M6.667 13.333h2.666M8 3.333v-1M2.333 8h1M12.667 8h1M4.374 4.707 3.667 4\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M11.667 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\" fill=\"#FF5971\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2.75a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V3.5a.75.75 0 0 1 .75-.75Zm0 6a3.25 3.25 0 0 0-1.64 6.056.75.75 0 0 1 .368.6.749.749 0 0 1 .022.179v.665h2.5v-.665c0-.063.008-.123.022-.18a.75.75 0 0 1 .37-.599A3.248 3.248 0 0 0 15.25 12a.75.75 0 1 1 1.5 0c0 1.6-.79 3.013-2 3.873V17a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.127A4.75 4.75 0 0 1 12 7.25a.75.75 0 0 1 0 1.5Zm-2 10.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Zm-5-8a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5H5Zm16.25.75a.75.75 0 0 0-.75-.75H19a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM6.03 5.47a.75.75 0 0 0-1.06 1.06l1.06 1.061a.75.75 0 0 0 1.061-1.06L6.031 5.47Z\" fill=\"#233043\"/><path d=\"M17.5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\" fill=\"#FF5971\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.334 16a5.331 5.331 0 0 1-2.64 4.604M16 10.667a5.333 5.333 0 0 0-2.693 9.937M13.333 20.78v1.886h5.334V20.78M13.334 26.667h5.333M16 6.667v-2M4.667 16h2M25.334 16h2M8.748 9.414 7.333 8\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M23.334 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z\" fill=\"#FF5971\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

NewSuggestion.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

NewSuggestion.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default NewSuggestion;
