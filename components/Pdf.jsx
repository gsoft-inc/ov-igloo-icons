/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Pdf /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Pdf = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.429 3H3.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V6.571M9.429 3 13 6.571M9.429 3v2.821c0 .415.335.75.75.75H13\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4.791 11h.538v-.825h.453c.585 0 .926-.35.926-.858 0-.506-.334-.862-.912-.862H4.79V11Zm.538-1.257v-.848h.363c.311 0 .462.169.462.422 0 .252-.15.426-.46.426H5.33ZM7.96 11c.775 0 1.245-.48 1.245-1.275 0-.793-.47-1.27-1.238-1.27h-.91V11h.903Zm-.364-.461V8.916h.343c.477 0 .73.243.73.809 0 .568-.253.814-.732.814h-.341ZM9.604 11h.538V9.948h1.035v-.443h-1.035v-.607h1.147v-.443H9.604V11Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 5H5.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V9m-4-4 4 4m-4-4v3.5a.5.5 0 0 0 .5.5H19\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M7.187 16h.807v-1.238h.679c.878 0 1.389-.524 1.389-1.286 0-.76-.502-1.294-1.369-1.294H7.187V16Zm.807-1.885v-1.273h.545c.466 0 .691.253.691.634 0 .378-.225.64-.688.64h-.548ZM11.94 16c1.163 0 1.868-.72 1.868-1.913 0-1.19-.705-1.905-1.857-1.905h-1.365V16h1.354Zm-.547-.692v-2.434h.515c.716 0 1.094.365 1.094 1.213 0 .852-.378 1.221-1.096 1.221h-.513Zm3.013.692h.807v-1.577h1.553v-.666h-1.553v-.91h1.72v-.665h-2.527V16Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.667 24.333V7.667H19v3.666c0 .92.746 1.667 1.667 1.667h3.666v11.333H7.667ZM22.919 11l-1.92-1.92V11h1.92ZM7.333 5.667c-.92 0-1.666.746-1.666 1.666v17.334c0 .92.746 1.666 1.666 1.666h17.334c.92 0 1.666-.746 1.666-1.666V12a1 1 0 0 0-.293-.707L20.707 5.96A1 1 0 0 0 20 5.667H7.333ZM9.583 21h1.076v-1.65h.905c1.17 0 1.852-.699 1.852-1.716 0-1.012-.669-1.725-1.825-1.725H9.583V21Zm1.076-2.513v-1.698h.726c.621 0 .922.338.922.845 0 .505-.3.853-.917.853h-.731ZM15.919 21c1.552 0 2.491-.96 2.491-2.55 0-1.586-.94-2.54-2.476-2.54h-1.82V21h1.805Zm-.728-.922V16.83h.686c.955 0 1.46.488 1.46 1.619 0 1.136-.505 1.628-1.462 1.628h-.684Zm5.093.922h-1.076v-5.09h3.37v.887h-2.294v1.213h2.07v.887h-2.07V21Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Pdf.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Pdf;
