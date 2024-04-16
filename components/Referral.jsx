/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Referral /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Referral = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"6\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M6.5 9.424s0 1.024 1.5 1.024c.097 0 1.5 0 1.5-1.366S8 7.716 8 7.716s-1.245 0-1.245-1.134S7.92 5.448 8 5.448c.692 0 1 .263 1.136.497\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M8 11.5v-.75M8 4.5v.75\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"8\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M9.908 14.259s0 1.568 2.092 1.568c.135 0 2.091 0 2.091-2.091 0-2.092-2.091-2.092-2.091-2.092s-1.736 0-1.736-1.736c0-1.735 1.623-1.735 1.736-1.735.965 0 1.393.402 1.584.76\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 17.25v-1.125M12 6.75v1.125\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.333 16c0-5.339 4.328-9.667 9.667-9.667 5.339 0 9.667 4.328 9.667 9.667A9.667 9.667 0 0 1 16 25.667c-5.339 0-9.667-4.328-9.667-9.667ZM16 4.333C9.557 4.333 4.333 9.557 4.333 16S9.557 27.667 16 27.667 27.667 22.443 27.667 16 22.443 4.333 16 4.333Zm-1.315 8.878c0-.417.096-.66.187-.804l-.129 1.281a1.791 1.791 0 0 1-.058-.477Zm.728 1.186a1.546 1.546 0 0 1-.123-.055 1.035 1.035 0 0 1-.41-.348c-.05-.073-.1-.172-.137-.306l-.25 2.49a3.03 3.03 0 0 1-1.278-1.074c-.338-.508-.53-1.14-.53-1.893 0-.74.176-1.365.495-1.871a2.93 2.93 0 0 1 1.147-1.042c.23-.12.46-.203.673-.262V9a1 1 0 1 1 2 0v1c.353.078.667.199.943.359.518.299.848.7 1.051 1.08a1 1 0 0 1-1.765.94.716.716 0 0 0-.286-.288c-.156-.09-.44-.194-.943-.194-.04 0-.417.003-.755.177a.933.933 0 0 0-.373.333l.541 1.99Zm-1.202 4.593a1 1 0 0 0-2 .022h1-1v.027a1.478 1.478 0 0 0 .01.157 3.14 3.14 0 0 0 .507 1.416c.436.655 1.165 1.2 2.272 1.405V23a1 1 0 1 0 2 0v-1.019c.284-.068.603-.174.921-.338.464-.24.943-.612 1.303-1.183.362-.573.565-1.287.565-2.146 0-.872-.221-1.593-.604-2.167a3.446 3.446 0 0 0-1.343-1.167 4.425 4.425 0 0 0-1.818-.454h-.017l-.035-.002a1.937 1.937 0 0 1-.558-.127l.579 2.129h-.016l-.036-.002a3.811 3.811 0 0 1-.467-.049 3.876 3.876 0 0 1-.98-.297l-.283 2.812Zm0 .003 1.782-2.467h.005a2.386 2.386 0 0 1 .273.03c.196.032.442.096.676.213.23.115.43.271.574.488.14.21.268.535.268 1.057 0 .536-.123.868-.256 1.08a1.329 1.329 0 0 1-.53.472 2.362 2.362 0 0 1-1.003.237c-1.103 0-1.468-.39-1.608-.6a1.138 1.138 0 0 1-.18-.496l-.001-.014Zm0 0v-.003.003ZM16 15.445v-.92 1-.08Zm-.001 1.08v-.163.164Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Referral.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Referral;
