/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Reviews /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Reviews = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.402 4.596h.509v.012a.701.701 0 0 0 .7.705h4.77a.7.7 0 0 0 .7-.698v-.019h.517v8.152H4.402V4.596Zm7.897-1.402h-1.617A2.568 2.568 0 0 0 8.512 2H7.48c-.913 0-1.715.476-2.171 1.194H3.7A.7.7 0 0 0 3 3.895v9.554a.7.7 0 0 0 .701.7h8.598a.7.7 0 0 0 .701-.7V3.895a.7.7 0 0 0-.7-.7Zm-5.782.717h2.959a1.167 1.167 0 0 0-.965-.51h-1.03c-.4 0-.754.202-.964.51Zm2.156 2.518a.75.75 0 0 0-1.346 0L6.8 7.498l-1.18.171a.75.75 0 0 0-.415 1.28l.853.831-.201 1.175a.75.75 0 0 0 1.088.79L8 11.192l1.055.555a.75.75 0 0 0 1.088-.791L9.942 9.78l.853-.831a.75.75 0 0 0-.416-1.28L9.2 7.498l-.527-1.069ZM7.97 8.515 8 8.455l.03.06a.75.75 0 0 0 .564.41l.066.01-.048.047a.75.75 0 0 0-.215.663l.01.066-.058-.031a.75.75 0 0 0-.698 0l-.059.03.011-.065a.75.75 0 0 0-.215-.663l-.048-.047.066-.01a.75.75 0 0 0 .565-.41Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#233043\"><path d=\"M8.96 4.583c-.14.272-.22.58-.222.907l-.003.593H6.55V19.25h11.7V6.084h-2.194l.003-.573a1.99 1.99 0 0 0-.222-.928H19a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75H5.8a.75.75 0 0 1-.75-.75V5.334a.75.75 0 0 1 .75-.75h3.16Z\"/><path d=\"M7.988 5.486a2.75 2.75 0 0 1 2.75-2.736h3.321a2.75 2.75 0 0 1 2.75 2.765l-.005.922a.75.75 0 0 1-.75.746h-7.32a.75.75 0 0 1-.75-.754l.004-.943Zm2.75-1.236a1.25 1.25 0 0 0-1.25 1.244v.19h5.82v-.177A1.25 1.25 0 0 0 14.06 4.25h-3.32ZM12.4 8.984a.75.75 0 0 1 .672.418l.903 1.83 2.02.293a.75.75 0 0 1 .415 1.28l-1.46 1.424.344 2.01a.75.75 0 0 1-1.088.791l-1.806-.95-1.806.95a.75.75 0 0 1-1.089-.79l.345-2.011-1.46-1.425a.75.75 0 0 1 .415-1.279l2.02-.293.902-1.83a.75.75 0 0 1 .673-.418Zm0 2.444-.405.821a.75.75 0 0 1-.565.41l-.906.132.656.639a.75.75 0 0 1 .215.664l-.154.902.81-.426a.75.75 0 0 1 .698 0l.81.425-.155-.901a.75.75 0 0 1 .216-.664l.655-.64-.906-.13a.75.75 0 0 1-.564-.411l-.405-.82Z\"/></g></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#233043\"><path d=\"M17.146 13.085a1 1 0 0 0-1.793 0l-1.302 2.639-2.912.423a1 1 0 0 0-.554 1.705l2.107 2.054-.498 2.9a1 1 0 0 0 1.451 1.054l2.604-1.369 2.605 1.37a1 1 0 0 0 1.45-1.055l-.497-2.9 2.107-2.054a1 1 0 0 0-.554-1.705l-2.912-.423-1.302-2.639Zm-1.535 3.995.638-1.293.639 1.293a1 1 0 0 0 .752.547l1.427.208-1.032 1.006a1 1 0 0 0-.288.885l.244 1.421-1.276-.67a1 1 0 0 0-.93 0l-1.277.67.244-1.421a1 1 0 0 0-.288-.885l-1.032-1.006 1.426-.208a1 1 0 0 0 .753-.547Z\"/><path d=\"M25.65 6.261h-3.21a3 3 0 0 0-2.974-2.611h-6.427a3 3 0 0 0-2.975 2.611H6.85a1 1 0 0 0-1 1v20.89a1 1 0 0 0 1 1h18.8a1 1 0 0 0 1-1V7.26a1 1 0 0 0-1-1Zm-17.8 2h2.18l-.003.561a1 1 0 0 0 1 1.006h10.427a1 1 0 0 0 1-.995l.003-.572h2.193v18.89H7.85V8.26Zm5.189-2.611a1 1 0 0 0-1 .995l-.006 1.183h8.426l.007-1.173a1 1 0 0 0-1-1.005h-6.427Z\"/></g></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Reviews.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Reviews;
