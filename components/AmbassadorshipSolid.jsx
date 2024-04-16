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
const AmbassadorshipSolid = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.782 2h-.024A4.264 4.264 0 0 0 3.12 3.115l-.031-.085a.561.561 0 0 0-1.055.384l3.721 10.218a.561.561 0 0 0 1.055-.384L5.362 9.27a3.472 3.472 0 0 1 3.454-1.3c.272.067.552.1.833.1H10.005a4.303 4.303 0 0 0 3.988-3.55.415.415 0 0 0-.606-.437 3.473 3.473 0 0 1-4.173-.651.77.77 0 0 1-.05-.05l-.003-.004c-.02-.02-.048-.052-.083-.083A4.25 4.25 0 0 0 6.122 2h-.34Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"m8.858 2.5-.039.001a7.08 7.08 0 0 0-4.7 2.161l-.164-.45a.75.75 0 1 0-1.41.513l6.293 17.282a.75.75 0 1 0 1.41-.514L7.876 14.98a5.765 5.765 0 0 1 6.02-2.564c.452.11.917.165 1.383.167h.55c.014 0 .027 0 .04-.002a7.144 7.144 0 0 0 6.62-5.893.69.69 0 0 0-1.005-.726 5.873 5.873 0 0 1-2.435.693 5.766 5.766 0 0 1-4.494-1.775 1.281 1.281 0 0 1-.082-.083l-.006-.007a2.393 2.393 0 0 0-.138-.138 7.058 7.058 0 0 0-4.906-2.15L9.407 2.5h-.549Z\" fill=\"#233043\"/></svg>"}
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

export default AmbassadorshipSolid;
