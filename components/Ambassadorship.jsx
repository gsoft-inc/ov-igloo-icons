/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Ambassadorship /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Ambassadorship = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.81 1a4.96 4.96 0 0 1 3.448 1.512c.04.037.075.073.097.097l.004.005a.9.9 0 0 0 .083.083 4.052 4.052 0 0 0 4.06 1.059l.003-.001.15-.048c.217-.074.428-.166.63-.275a.484.484 0 0 1 .708.51 5.01 5.01 0 0 1-.249.906l-.015.04a5.02 5.02 0 0 1-4.417 3.197h-.387c-.327 0-.654-.04-.972-.117a4.052 4.052 0 0 0-4.03 1.516l1.69 4.64a.655.655 0 0 1-1.231.447L2.789 7.452l-1.393-3.82a.105.105 0 0 1-.003-.013l-.353-.97a.655.655 0 0 1 1.23-.448l.037.1A4.975 4.975 0 0 1 5.413 1h.397Zm6.855 4.416h.01a3.526 3.526 0 0 1-2.394 1.169h-.354a2.681 2.681 0 0 1-.685-.089 5.748 5.748 0 0 0-1.427-.098h-.008a5.552 5.552 0 0 0-3.311 1.358L3.023 3.714A3.475 3.475 0 0 1 5.443 2.5h.343a3.46 3.46 0 0 1 2.393 1.054c.02.021.041.041.063.061l.016.018.005.005.005.005c.021.023.065.07.12.121a5.552 5.552 0 0 0 4.27 1.653h.007Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.993 3.764a.75.75 0 0 1 .962.448l6.293 17.281a.75.75 0 0 1-1.41.514L2.545 4.725a.75.75 0 0 1 .448-.961Z\" fill=\"#233043\"/><path d=\"M13.79 5.172a1.699 1.699 0 0 1 .13.13h-.001l.006.006h0v.001c.038.04.08.085.13.13a6.515 6.515 0 0 0 5.036 1.964h.003a6.623 6.623 0 0 0 2.634-.723 6.394 6.394 0 0 1-5.9 5.152h-.547s0 0 0 0a5.202 5.202 0 0 1-1.241-.153 6.793 6.793 0 0 0-1.687-.116h0-.004a6.516 6.516 0 0 0-5.08 2.975c-.055.085-.095.17-.124.24l-.033.006a5.481 5.481 0 0 0-.072.013L3.825 6.07a10.077 10.077 0 0 1 .149-.133 4.15 4.15 0 0 0 .123-.114c.038-.037.091-.09.14-.153A6.33 6.33 0 0 1 8.86 3.25h.55c1.656.041 3.229.732 4.38 1.922Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.991 5.019a1 1 0 0 1 1.282.597l8.39 23.042a1 1 0 1 1-1.879.684L3.394 6.301a1 1 0 0 1 .597-1.282Z\" fill=\"#233043\"/><path d=\"m18.386 6.896.045.044c.045.041.086.084.127.129h0l.009.008h0v.002c.05.053.106.113.173.172a8.688 8.688 0 0 0 6.715 2.62l.004-.001a8.83 8.83 0 0 0 3.512-.964 8.525 8.525 0 0 1-7.867 6.87h-.73a6.928 6.928 0 0 1-1.654-.204 9.063 9.063 0 0 0-2.25-.155h0-.005a8.688 8.688 0 0 0-6.773 3.967 2.01 2.01 0 0 0-.165.32 4 4 0 0 0-.14.026L5.1 8.092l.118-.106.08-.071a5.53 5.53 0 0 0 .164-.152c.051-.05.122-.121.188-.205a8.44 8.44 0 0 1 6.163-3.225h.734a8.41 8.41 0 0 1 5.84 2.563Zm1.037-.312-.626.609h0l.626-.609Zm-.626.609h0Z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Ambassadorship.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Ambassadorship;
