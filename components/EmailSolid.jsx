/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <EmailSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const EmailSolid = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.413 5.342a.25.25 0 0 0-.413.19v6.718c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.531a.25.25 0 0 0-.413-.19L8.776 9.466a1.192 1.192 0 0 1-1.552 0L2.413 5.342Zm9.921-.902a.25.25 0 0 0-.162-.44H3.828a.25.25 0 0 0-.162.44l4.171 3.576a.25.25 0 0 0 .326 0l4.171-3.576Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.75 6a.75.75 0 0 0-.75.75c0 .068.03.132.082.176l7.598 6.331a.5.5 0 0 0 .64 0l7.598-6.331A.229.229 0 0 0 20 6.75a.75.75 0 0 0-.75-.75H4.75ZM20 9.877a.5.5 0 0 0-.82-.384l-6.38 5.316a1.25 1.25 0 0 1-1.6 0L4.82 9.493a.5.5 0 0 0-.82.384v7.373c0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75V9.877Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.083 8.004a.747.747 0 0 0-.446.147c-.31.23.033.588.36.794.056.034.109.074.16.118l9.382 8.21a.7.7 0 0 0 .922 0l9.383-8.21c.05-.044.103-.084.158-.118.328-.206.671-.564.36-.794a.747.747 0 0 0-.445-.147H6.083Zm20.584 5.204a.7.7 0 0 0-1.161-.527l-8.244 7.213a1.917 1.917 0 0 1-2.524 0l-8.244-7.213a.7.7 0 0 0-1.16.527v10.046c0 .414.335.75.75.75h19.833a.75.75 0 0 0 .75-.75V13.208Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

EmailSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

EmailSolid.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default EmailSolid;
