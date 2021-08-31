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
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m12.913 6.133.488-.569-.488.57zM7.837 2.061l-.488-.57.488.57zm.326 0 .488-.57-.488.57zM3.087 6.133 2.6 5.564l.488.57zm.488.57 4.75-4.073-.976-1.138L2.6 5.564l.976 1.139zm.175 7.047V6.323h-1.5v7.427h1.5zm2.5-.5h-3v1.5h3v-1.5zm1 .5v-3.457h-1.5v3.457h1.5zm-.5-2.957h2.5v-1.5h-2.5v1.5zm2-.5v3.457h1.5v-3.457h-1.5zm4 2.957h-3v1.5h3v-1.5zm-.5-6.927v7.427h1.5V6.323h-1.5zM7.675 2.63l4.75 4.073.976-1.139-4.75-4.072-.976 1.138zm6.075 3.693a1 1 0 0 0-.35-.759l-.975 1.139a.5.5 0 0 1-.175-.38h1.5zm-1 8.427a1 1 0 0 0 1-1h-1.5a.5.5 0 0 1 .5-.5v1.5zm-4-1a1 1 0 0 0 1 1v-1.5a.5.5 0 0 1 .5.5h-1.5zm.5-2.957a.5.5 0 0 1-.5-.5h1.5a1 1 0 0 0-1-1v1.5zm-2-.5a.5.5 0 0 1-.5.5v-1.5a1 1 0 0 0-1 1h1.5zm-1 4.457a1 1 0 0 0 1-1h-1.5a.5.5 0 0 1 .5-.5v1.5zm-4-1a1 1 0 0 0 1 1v-1.5a.5.5 0 0 1 .5.5h-1.5zM8.325 2.63a.5.5 0 0 1-.65 0l.976-1.138a1 1 0 0 0-1.302 0l.976 1.138zM2.6 5.564a1 1 0 0 0-.349.76h1.5a.5.5 0 0 1-.175.379L2.6 5.564z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m5 10.5-.488-.57a.75.75 0 0 0-.262.57H5zm7-6 .488-.57a.75.75 0 0 0-.976 0L12 4.5zm-7 16h-.75c0 .414.336.75.75.75v-.75zm5 0v.75a.75.75 0 0 0 .75-.75H10zm0-6v-.75a.75.75 0 0 0-.75.75H10zm4 0h.75a.75.75 0 0 0-.75-.75v.75zm0 6h-.75c0 .414.336.75.75.75v-.75zm5 0v.75a.75.75 0 0 0 .75-.75H19zm0-10h.75a.75.75 0 0 0-.262-.57L19 10.5zm-13.512.57 7-6-.976-1.14-7 6 .976 1.14zm.262 9.43v-10h-1.5v10h1.5zm4.25-.75H5v1.5h5v-1.5zm.75.75v-6h-1.5v6h1.5zM10 15.25h4v-1.5h-4v1.5zm3.25-.75v6h1.5v-6h-1.5zM19 19.75h-5v1.5h5v-1.5zm-.75-9.25v10h1.5v-10h-1.5zm-6.738-5.43 7 6 .976-1.14-7-6-.976 1.14z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m6.667 13.333-.651-.759a1 1 0 0 0-.35.76h1zm9.333-8 .65-.759a1 1 0 0 0-1.3 0l.65.76zM6.667 26.667h-1a1 1 0 0 0 1 1v-1zm6.666 0v1a1 1 0 0 0 1-1h-1zm0-8v-1a1 1 0 0 0-1 1h1zm5.334 0h1a1 1 0 0 0-1-1v1zm0 8h-1a1 1 0 0 0 1 1v-1zm6.666 0v1a1 1 0 0 0 1-1h-1zm0-13.334h1a1 1 0 0 0-.349-.759l-.65.76zm-18.015.76 9.333-8-1.302-1.519-9.333 8 1.302 1.519zm.349 12.574V13.333h-2v13.334h2zm5.666-1H6.667v2h6.666v-2zm1 1v-8h-2v8h2zm-1-7h5.334v-2h-5.334v2zm4.334-1v8h2v-8h-2zm7.666 7h-6.666v2h6.666v-2zm-1-12.334v13.334h2V13.333h-2zm-8.984-7.24 9.334 8 1.301-1.519-9.333-8-1.302 1.519z\" fill=\"#233043\"/></svg>"}
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
