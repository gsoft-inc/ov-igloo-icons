/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <AudioOff /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const AudioOff = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12Z\" fill=\"#233043\"/><path d=\"M6.15 2.698c.26-.382.999-.948 1.85-.948a2.3 2.3 0 0 1 2.3 2.3v2.467m-4.6-.7V7.45A2.3 2.3 0 0 0 8 9.75c.168 0 .681 0 1.242-.349\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><rect x=\"1.478\" y=\".478\" width=\"18.464\" height=\"1.5\" rx=\".75\" transform=\"rotate(45 1.478 .478)\" fill=\"#233043\"/><path d=\"M3.485 7.989c0 2.208 2.022 3.997 4.515 3.997 1.14 0 2.04-.268 2.834-.885m1.68-3.112a3.5 3.5 0 0 1-.289 1.352\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.354 5.186c-.098.41.223.775.64.838l.028.005c.08.012.16.01.239-.005.323-.064.543-.356.657-.666C10.193 4.607 11.004 4 12 4a2.25 2.25 0 0 1 2.25 2.25v4.954a.75.75 0 1 0 1.5 0V6.25A3.75 3.75 0 0 0 12 2.5c-1.62 0-3.26 1.076-3.646 2.686ZM8.25 12.25V9.12L3.44 4.31a.75.75 0 0 1 1.061-1.06l15.91 15.91a.75.75 0 1 1-1.06 1.06l-2.877-2.876c-1.022.93-2.289 1.48-3.724 1.62v2.286h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5v-2.291a6.751 6.751 0 0 1-6-6.709.75.75 0 0 1 1.5 0c0 2.9 2.35 5.25 5.25 5.25 1.368 0 2.514-.424 3.412-1.218l-1.089-1.088A3.75 3.75 0 0 1 8.25 12.25Zm1.5-1.63 3.507 3.507a1.335 1.335 0 0 0-.11.059A2.25 2.25 0 0 1 9.75 12.25v-1.63Zm9 1.63a.75.75 0 0 0-1.5 0c0 .711-.052 1.16-.252 1.704a.75.75 0 1 0 1.408.517c.283-.77.344-1.413.344-2.221Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.228 6.941c.278-1.822 1.689-3.14 3.772-3.14a3.772 3.772 0 0 1 3.772 3.773v6.724m-7.544-2.905v3.725a3.772 3.772 0 0 0 6.55 2.552\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M24.17 14.805c0 1.333-.18 2.477-.483 3.048M7.83 14.805A8.17 8.17 0 0 0 16 22.976c2.29 0 4.36-.901 5.843-2.4\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path stroke=\"#233043\" stroke-width=\"2\" d=\"M15.931 22.851v4.274\"/><path stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" d=\"M12.191 28.078h7.617M6.101 4.686l21.213 21.213\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

AudioOff.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default AudioOff;
