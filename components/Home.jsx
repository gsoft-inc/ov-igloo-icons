/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Home /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Home = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m12.913 6.134.488-.57-.488.57ZM7.837 2.06l-.488-.57.488.57Zm.326 0 .488-.57-.488.57ZM3.087 6.134l-.488-.57.488.57Zm.488.569 4.75-4.073-.976-1.138L2.6 5.564l.976 1.139Zm.175 7.047V6.323h-1.5v7.427h1.5Zm2.5-.5h-3v1.5h3v-1.5Zm1 .5v-3.457h-1.5v3.457h1.5Zm-.5-2.957h2.5v-1.5h-2.5v1.5Zm2-.5v3.457h1.5v-3.457h-1.5Zm4 2.957h-3v1.5h3v-1.5Zm-.5-6.927v7.427h1.5V6.323h-1.5ZM7.675 2.63l4.75 4.073.976-1.139-4.75-4.072-.976 1.138Zm6.075 3.693a1 1 0 0 0-.35-.759l-.975 1.139a.5.5 0 0 1-.175-.38h1.5Zm-1 8.427a1 1 0 0 0 1-1h-1.5a.5.5 0 0 1 .5-.5v1.5Zm-4-1a1 1 0 0 0 1 1v-1.5a.5.5 0 0 1 .5.5h-1.5Zm.5-2.957a.5.5 0 0 1-.5-.5h1.5a1 1 0 0 0-1-1v1.5Zm-2-.5a.5.5 0 0 1-.5.5v-1.5a1 1 0 0 0-1 1h1.5Zm-1 4.457a1 1 0 0 0 1-1h-1.5a.5.5 0 0 1 .5-.5v1.5Zm-4-1a1 1 0 0 0 1 1v-1.5a.5.5 0 0 1 .5.5h-1.5ZM8.325 2.63a.5.5 0 0 1-.65 0l.976-1.138a1 1 0 0 0-1.302 0l.976 1.138ZM2.6 5.564a1 1 0 0 0-.349.76h1.5a.5.5 0 0 1-.175.379L2.6 5.564Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m5 10-.488-.57a.75.75 0 0 0-.262.57H5Zm7-6 .488-.57a.75.75 0 0 0-.976 0L12 4ZM5 20h-.75c0 .414.336.75.75.75V20Zm5 0v.75a.75.75 0 0 0 .75-.75H10Zm0-6v-.75a.75.75 0 0 0-.75.75H10Zm4 0h.75a.75.75 0 0 0-.75-.75V14Zm0 6h-.75c0 .414.336.75.75.75V20Zm5 0v.75a.75.75 0 0 0 .75-.75H19Zm0-10h.75a.75.75 0 0 0-.262-.57L19 10Zm-13.512.57 7-6-.976-1.14-7 6 .976 1.14ZM5.75 20V10h-1.5v10h1.5Zm4.25-.75H5v1.5h5v-1.5Zm.75.75v-6h-1.5v6h1.5ZM10 14.75h4v-1.5h-4v1.5Zm3.25-.75v6h1.5v-6h-1.5ZM19 19.25h-5v1.5h5v-1.5ZM18.25 10v10h1.5V10h-1.5Zm-6.738-5.43 7 6 .976-1.14-7-6-.976 1.14Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.35 4.574a1 1 0 0 1 1.3 0l9.334 8a1 1 0 0 1 .35.76v13.333a1 1 0 0 1-1 1h-6.667a1 1 0 0 1-1-1v-7h-3.334v7a1 1 0 0 1-1 1H6.667a1 1 0 0 1-1-1V13.333a1 1 0 0 1 .349-.759l9.333-8Zm-7.683 9.22v11.873h4.666v-7a1 1 0 0 1 1-1h5.334a1 1 0 0 1 1 1v7h4.666V13.793L16 6.65l-8.333 7.143Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Home.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Home.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Home;
