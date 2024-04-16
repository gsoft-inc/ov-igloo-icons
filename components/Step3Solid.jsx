/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Step3Solid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Step3Solid = ({size = "medium", ariaLabel="", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm0-8.063h.065-.001l-.004.004-.003.004-.003.003-.004.003-.003.004-.003.003-.004.003-.003.004-.004.003-.003.004-.003.003-.004.004-.003.003-.004.003-.003.004-.004.003-.003.004-.004.003L8 6.003l-.004.003-.003.004-.004.004-.004.003-.003.004-.004.003-.003.004-.004.003-.003.004-.004.004-.004.003-.003.004-.004.004-.004.003-.003.004-.004.004-.004.003-.004.004-.003.004-.004.004-.004.004-.004.003-.004.004-.003.004-.004.004-.004.004-.004.003-.004.004-.004.004-.004.004-.003.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.005.004-.004.004-.004.004-.004.005-.004.004-.004.004-.004.004-.005.004-.004.004-.004.005-.004.004-.005.004-.004.005-.004.004-.005.004-.004.004-.004.005-.005.004-.004.005-.004.004-.005.004-.004.005-.005.004-.004.005-.005.004-.004.005-.005.004-.004.005-.005.004-.004.005L7.7 6.3l-.004.005-.005.005-.005.004-.004.005-.005.005-.005.004-.005.005-.004.005-.005.005-.005.004-.005.005-.004.005-.005.005-.005.005-.005.004-.005.005-.005.005-.005.005-.005.005-.004.005-.005.005-.005.005-.005.005-.005.005-.006.005-.005.005-.005.005-.005.005-.005.006-.005.005-.005.005-.005.005-.006.005-.005.005-.005.006-.005.005-.006.005-.005.006-.005.005-.006.005-.005.006-.006.005-.005.006-.005.005-.006.005-.005.006a.75.75 0 0 0 .524 1.28h.002a1.552 1.552 0 0 1 .174.02c.127.02.284.061.432.136.146.072.269.17.357.302.084.127.167.33.167.668 0 .348-.08.556-.16.684a.816.816 0 0 1-.327.29c-.287.15-.604.151-.639.151-.72 0-.939-.251-1.017-.369a.688.688 0 0 1-.108-.298v-.005a.75.75 0 0 0-1.5.016h.75-.75V9.427a1.299 1.299 0 0 0 .006.112 2.189 2.189 0 0 0 .353.988c.391.586 1.11 1.037 2.266 1.037h.002c.094 0 .71 0 1.326-.318.321-.166.655-.425.906-.823.252-.4.392-.894.392-1.484 0-.6-.152-1.1-.42-1.5a2.362 2.362 0 0 0-.787-.734l.002-.002.003-.003.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.002-.002.003-.003.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.003-.003.002-.002.003-.003.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.003-.003.002-.002.003-.003.003-.003.003-.003.003-.003.002-.002.003-.003.003-.003.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.003-.003.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.002-.003.003-.002.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.004.004-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.003.003-.004.004-.003.003-.003.003-.003.003-.003.003-.003.003-.004.004-.003.003-.003.003-.003.003-.003.004-.004.003-.003.003-.003.003-.003.004-.004.003-.003.003-.003.003-.003.004-.004.003-.003.003-.003.004-.004.003-.003.003-.003.004-.004.003-.003.003-.004.004-.003.003-.003.004-.004.003-.003.004-.004.003-.003.004-.004.003-.003.003-.004.004-.003.003-.004.004-.003.004-.004.003-.003.004-.004.003-.003.004-.004.003-.003.004-.004.004-.004.003-.003.004-.004.003-.004.004-.003.004-.004.003-.004.004-.003.004-.004.004-.004.003-.003.004-.004.004-.004.004-.004.003-.003.004-.004.004-.004.004-.004.004-.004.004-.004.003-.003.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.004-.004.005-.005.004-.004.004-.004.004-.004.004-.004.004-.004.005-.005.004-.004.004-.004.004-.004.005-.005.004-.004.004-.004.005-.005.004-.004.004-.004.005-.005.004-.004.005-.005.004-.004.004-.004.005-.005.004-.004.005-.005.004-.004.005-.005.004-.005.005-.004.005-.005.004-.004.005-.005.004-.005.005-.004.005-.005.005-.005.004-.004.005-.005.005-.005.004-.005.005-.004.005-.005.005-.005.005-.005.005-.005.004-.005.005-.004.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.006.006-.005.005-.005.005-.005.005-.005.005-.005.006-.006.005-.005.005-.005.005-.005.006-.006.005-.005.005-.005.006-.006.005-.005.006-.006.005-.005.005-.006.006-.005a.75.75 0 0 0-.53-1.28H6.123a.75.75 0 0 0 0 1.5H8Zm-.005 1.875h.002-.002Zm-.002 0h.002-.001Zm0 0Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9.5 8.999h3.19l-1.22 1.22a.75.75 0 0 0 .525 1.28h.008l.051.004a2.325 2.325 0 0 1 .861.23c.224.112.425.268.571.488.143.215.265.536.265 1.03 0 .504-.116.83-.252 1.045a1.336 1.336 0 0 1-.532.476 2.264 2.264 0 0 1-.967.23c-1.032 0-1.408-.37-1.564-.604a1.166 1.166 0 0 1-.187-.534.75.75 0 0 0-1.5.013v.02a1.4 1.4 0 0 0 .008.13 2.667 2.667 0 0 0 .43 1.202c.47.704 1.344 1.272 2.813 1.272h.002c.114 0 .886 0 1.653-.396a2.835 2.835 0 0 0 1.112-1.009c.308-.487.484-1.1.484-1.845 0-.757-.191-1.374-.517-1.862a2.944 2.944 0 0 0-1.261-1.051l1.558-1.559a.75.75 0 0 0-.53-1.28H9.498a.75.75 0 1 0 0 1.5Zm0 4.877h-.75.75Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 26.667c5.891 0 10.667-4.776 10.667-10.667S21.89 5.333 16 5.333 5.333 10.11 5.333 16 10.11 26.667 16 26.667Zm0-14.669h.92l-.004.004-.005.005-.005.005-.005.005-.004.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.004-.005.005-.005.005-.005.005-.005.005-.004.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.004-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.006-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.006.005-.005.005-.005.005-.005.005-.005.006-.005.005-.005.005-.005.005-.006.005-.005.005-.005.005-.005.006-.005.005-.006.005-.005.005-.005.006-.005.005-.006.005-.005.005-.005.006-.005.005-.006.005-.005.005-.005.006-.006.005-.005.005-.005.006-.006.005-.005.006-.005.005-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.006-.006.005-.005.006-.006.006-.006.005-.005.006-.006.006-.006.005-.006.006-.006.006-.005.006-.006.006-.006.005-.006.006-.006.006-.005.006-.006.006-.006.006-.006.006-.006.005-.006.007-.006.006-.006.005-.006.006-.006.006-.006.006-.006.007-.006.006-.006.006-.006.006-.006.006-.007.006-.006.006-.006.006-.006.007-.006.006-.007.006-.006.006-.006.007-.006.006-.007.006-.006.007-.007.006-.006.006-.006.007-.007.006-.006.007-.007.006-.006.007-.007.006-.006.007-.007.006-.007.007-.006.007-.007.006-.007.007-.006.007-.007.006-.007.007-.006.007-.007.007-.007.006-.007.007-.007.007-.007.007-.006.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.007-.008.007-.007.007-.007.007-.007.008-.007.007-.007.007-.008.007-.007.008-.007.007-.008.007-.007.008-.007.007-.008.007-.007.008-.008.007-.007.008-.008.007-.007.008-.008.008-.007.007-.008.008-.008.007-.008.008-.007.008-.008.008-.008.007-.008.008-.008.008-.007.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.008-.009.008-.008.008-.008.009-.008.008-.009.008-.008.008-.008.009-.009.008-.008.009-.008.008-.009.008-.008.01-.009.008-.009.008-.008.009-.009.008-.008.01-.01.008-.008.008-.009.01-.009.008-.008.009-.01.009-.008.009-.01.009-.008.009-.01.009-.008.009-.01.009-.008.009-.01.01-.009.008-.009.01-.01.009-.009.01-.009.008-.01.01-.009.01-.01.009-.009.01-.01.009-.009.01-.01.009-.009.01-.01.01-.01.009-.01.01a1 1 0 0 0 .702 1.707h.01a3.094 3.094 0 0 1 .352.038c.248.041.562.122.864.273.298.15.566.357.761.65.192.287.353.715.353 1.373 0 .672-.155 1.107-.336 1.394-.183.291-.432.492-.709.636a3.02 3.02 0 0 1-1.289.305c-1.376 0-1.877-.492-2.086-.805a1.558 1.558 0 0 1-.249-.711 1 1 0 0 0-2 .015h1l-1 .001v.027a1.835 1.835 0 0 0 .012.174 3.558 3.558 0 0 0 .574 1.603c.624.937 1.79 1.696 3.749 1.696h.003c.151 0 1.181 0 2.204-.529a3.782 3.782 0 0 0 1.483-1.345c.41-.65.644-1.466.644-2.46 0-1.01-.255-1.832-.689-2.483a3.926 3.926 0 0 0-1.681-1.402l.002-.002.005-.005.005-.005.006-.006.005-.005.005-.005.005-.006.006-.005.005-.005.005-.005.006-.006.005-.005.005-.005.005-.005.006-.006.005-.005.005-.005.005-.005.005-.005.006-.006.005-.005.005-.005.005-.005.005-.005.005-.005.005-.006.006-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.004-.004.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.004-.004.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.004-.004.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.004-.004.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.004-.004.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.004-.004.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.006-.006.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.005-.005.006-.005.005-.006.005-.005.005-.005.005-.005.005-.005.006-.005.005-.006.005-.005.005-.005.005-.005.006-.006.005-.005.005-.005.005-.005.006-.006.005-.005.005-.005.005-.005.006-.006.005-.005.006-.005.005-.006.005-.005.006-.006.005-.005.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.005-.005.006-.006.006-.006.005-.005.006-.006.006-.006.005-.005.006-.006.006-.006.005-.005.006-.006.006-.006.006-.006.006-.005.005-.006.006-.006.006-.006.006-.006.006-.006.006-.006.005-.006.006-.006.006-.005.006-.006.006-.006.006-.006.006-.006.006-.006.006-.007.007-.006.006-.006.006-.006.006-.006.006-.006.006-.006.006-.006.007-.007.006-.006.006-.006.006-.006.007-.007.006-.006.006-.006.007-.007.006-.006.006-.007.007-.006.006-.006.007-.007.006-.006.007-.007.006-.006.007-.007.006-.006.007-.007.007-.007.006-.006.007-.007.007-.007.006-.006.007-.007.007-.007.007-.007.006-.006.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.007-.007.008-.008.007-.007.007-.007.007-.007.007-.008.008-.007.007-.007.008-.008.007-.007.007-.007.008-.008.007-.007.008-.008.007-.007.008-.008.007-.007.008-.008.008-.008.007-.007.008-.008.008-.008.008-.008.007-.007.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.008-.008.009-.009.008-.008.008-.008.008-.008.009-.009.008-.008.009-.009.008-.008.009-.008.008-.009.008-.008.01-.01.008-.008.008-.008.009-.009.009-.009.008-.009.01-.008.008-.01.009-.008.009-.009.009-.009.009-.009.009-.009.009-.009.009-.009.009-.009.009-.009.01-.01.008-.008.01-.01.009-.009.01-.01.008-.008.01-.01.01-.01.009-.009.01-.01.009-.009.01-.01.009-.009.01-.01.01-.01.009-.009.01-.01a1 1 0 0 0-.708-1.707H12.665a1 1 0 1 0 0 2H16Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Step3Solid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Step3Solid;
