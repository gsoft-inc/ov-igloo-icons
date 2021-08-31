/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <CrownSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const CrownSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.609 3.49a.5.5 0 0 1 .782 0l2.037 2.557a.5.5 0 0 0 .642.121l1.933-1.121a.5.5 0 0 1 .738.545l-1.156 5.02a.5.5 0 0 1-.487.388H3.903a.5.5 0 0 1-.488-.388L2.26 5.592a.5.5 0 0 1 .738-.545L4.93 6.168a.5.5 0 0 0 .642-.12L7.609 3.49z\" fill=\"#233043\"/><path d=\"M12.505 13.25v-.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v.5c0 .414.335.75.75.75h7.5a.75.75 0 0 0 .75-.75z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.413 17.421a.33.33 0 0 1 .33.33v2.169a.33.33 0 0 1-.33.33H5.587a.33.33 0 0 1-.33-.33V17.75a.33.33 0 0 1 .33-.33h12.826zM11.74 4.083a.33.33 0 0 1 .52 0l3.607 4.624a.33.33 0 0 0 .429.08L20.34 6.39a.33.33 0 0 1 .49.357l-2.03 9.003a.33.33 0 0 1-.322.257H5.521a.33.33 0 0 1-.322-.257l-2.03-9.003a.33.33 0 0 1 .49-.357l4.045 2.398a.33.33 0 0 0 .429-.081l3.607-4.624z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.291 23.232a.7.7 0 0 1 .7.7v2.372a.7.7 0 0 1-.7.7H7.709a.7.7 0 0 1-.7-.7v-2.372a.7.7 0 0 1 .7-.7h16.582zm-8.843-17.52a.7.7 0 0 1 1.104 0l4.464 5.72a.7.7 0 0 0 .909.172l4.678-2.772a.7.7 0 0 1 1.04.756L25.114 20.8a.7.7 0 0 1-.683.546H7.57a.7.7 0 0 1-.683-.546L4.357 9.588a.7.7 0 0 1 1.04-.756l4.679 2.772a.7.7 0 0 0 .908-.172l4.464-5.72z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

CrownSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

CrownSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default CrownSolid;
