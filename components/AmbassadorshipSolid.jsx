/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <AmbassadorshipSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const AmbassadorshipSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.044 4h-.031a5.687 5.687 0 0 0-3.52 1.486l-.04-.113a.749.749 0 1 0-1.408.512l4.963 13.627A.749.749 0 1 0 10.415 19l-1.931-5.303a4.63 4.63 0 0 1 4.606-1.732c.364.088.737.132 1.112.133h.474a5.739 5.739 0 0 0 5.318-4.735.554.554 0 0 0-.808-.583 4.632 4.632 0 0 1-5.565-.868 1.015 1.015 0 0 1-.067-.068l-.005-.005c-.025-.027-.064-.069-.11-.111A5.67 5.67 0 0 0 9.498 4h-.454Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"m8.858 2.5-.039.001a7.08 7.08 0 0 0-4.7 2.161l-.164-.45a.75.75 0 1 0-1.41.513l6.293 17.282a.75.75 0 1 0 1.41-.514L7.876 14.98a5.765 5.765 0 0 1 6.02-2.564c.452.11.917.165 1.383.167h.55c.014 0 .027 0 .04-.002a7.144 7.144 0 0 0 6.62-5.893.69.69 0 0 0-1.005-.726 5.873 5.873 0 0 1-2.435.693 5.766 5.766 0 0 1-4.494-1.775 1.281 1.281 0 0 1-.082-.083l-.006-.007a2.393 2.393 0 0 0-.138-.138 7.058 7.058 0 0 0-4.906-2.15L9.407 2.5h-.549Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

AmbassadorshipSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

AmbassadorshipSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default AmbassadorshipSolid;
