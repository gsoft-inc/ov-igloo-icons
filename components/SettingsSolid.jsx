/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <SettingsSolid /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const SettingsSolid = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.457 3.595a.532.532 0 0 0 .317-.289l.43-1.003A.5.5 0 0 1 7.662 2h.674c.2 0 .38.12.46.303l.43 1.003c.058.137.175.24.316.289.165.057.325.124.48.199.135.064.29.075.429.02l1.013-.406a.5.5 0 0 1 .54.111l.476.477a.5.5 0 0 1 .11.539l-.405 1.013a.532.532 0 0 0 .02.428c.075.156.142.316.2.48.049.142.15.259.288.318l1.003.43a.5.5 0 0 1 .303.459v.674a.5.5 0 0 1-.303.46l-1.003.43a.532.532 0 0 0-.289.316 4.624 4.624 0 0 1-.199.48.532.532 0 0 0-.02.429l.406 1.013a.5.5 0 0 1-.111.54l-.477.476a.5.5 0 0 1-.539.11l-1.013-.405a.532.532 0 0 0-.428.02 4.622 4.622 0 0 1-.48.2.532.532 0 0 0-.318.288l-.43 1.003a.5.5 0 0 1-.459.303h-.674a.5.5 0 0 1-.46-.303l-.43-1.003a.532.532 0 0 0-.316-.289 4.625 4.625 0 0 1-.48-.199.532.532 0 0 0-.429-.02l-1.013.405a.5.5 0 0 1-.54-.11l-.476-.477a.5.5 0 0 1-.11-.539l.405-1.013a.532.532 0 0 0-.02-.428 4.64 4.64 0 0 1-.2-.48.532.532 0 0 0-.288-.318l-1.003-.43A.5.5 0 0 1 2 8.338v-.674c0-.2.12-.38.303-.46l1.003-.43a.532.532 0 0 0 .288-.316c.058-.165.125-.325.2-.48a.532.532 0 0 0 .02-.429l-.406-1.013a.5.5 0 0 1 .111-.54l.477-.476a.5.5 0 0 1 .539-.11l1.013.405a.532.532 0 0 0 .428-.02c.156-.075.316-.142.48-.2ZM8 10.267a2.267 2.267 0 1 0 0-4.534 2.267 2.267 0 0 0 0 4.534Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.79 5.08a.339.339 0 0 0 .21-.187l.873-2.036a.33.33 0 0 1 .303-.2h1.648a.33.33 0 0 1 .303.2L14 4.893c.039.09.116.158.21.188.396.126.778.285 1.142.473.087.046.19.052.281.016l2.057-.823a.33.33 0 0 1 .356.073l1.165 1.165a.33.33 0 0 1 .073.356l-.822 2.057a.338.338 0 0 0 .015.281c.188.364.347.746.473 1.143.03.093.098.17.189.21l2.035.872a.33.33 0 0 1 .2.303v1.648a.33.33 0 0 1-.2.303l-2.035.873a.338.338 0 0 0-.189.21 7.26 7.26 0 0 1-.473 1.142.338.338 0 0 0-.015.281l.822 2.057a.33.33 0 0 1-.073.356l-1.165 1.165a.33.33 0 0 1-.356.073l-2.057-.823a.339.339 0 0 0-.281.016 7.252 7.252 0 0 1-1.143.473.338.338 0 0 0-.21.188l-.872 2.036a.33.33 0 0 1-.303.2h-1.648a.33.33 0 0 1-.303-.2L10 19.17a.338.338 0 0 0-.21-.188 7.251 7.251 0 0 1-1.142-.473.339.339 0 0 0-.281-.016l-2.057.823a.33.33 0 0 1-.356-.073L4.79 18.077a.33.33 0 0 1-.073-.356l.823-2.057a.339.339 0 0 0-.016-.281 7.246 7.246 0 0 1-.473-1.142.339.339 0 0 0-.188-.21l-2.036-.873a.33.33 0 0 1-.2-.303v-1.648a.33.33 0 0 1 .2-.303l2.036-.873a.339.339 0 0 0 .188-.21c.126-.396.285-.778.473-1.142a.339.339 0 0 0 .016-.281l-.823-2.057a.33.33 0 0 1 .073-.356L5.954 4.82a.33.33 0 0 1 .356-.073l2.057.823c.091.036.194.03.281-.016a7.245 7.245 0 0 1 1.143-.473ZM12 15.573a3.541 3.541 0 1 0 0-7.082 3.541 3.541 0 0 0 0 7.082Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.938 6.812a.73.73 0 0 0 .444-.401l1.048-2.444a.7.7 0 0 1 .643-.425h1.854a.7.7 0 0 1 .644.425l1.047 2.444a.73.73 0 0 0 .444.401c.448.149.881.329 1.298.538a.73.73 0 0 0 .598.03l2.47-.987a.7.7 0 0 1 .754.155l1.312 1.311a.7.7 0 0 1 .155.755l-.988 2.47a.73.73 0 0 0 .03.598c.21.416.39.85.538 1.297a.73.73 0 0 0 .401.444l2.445 1.048a.7.7 0 0 1 .424.643v1.855a.7.7 0 0 1-.424.643L25.63 18.66a.73.73 0 0 0-.4.444 9.65 9.65 0 0 1-.539 1.297.73.73 0 0 0-.03.598l.988 2.47a.7.7 0 0 1-.155.755l-1.312 1.311a.7.7 0 0 1-.755.155l-2.47-.988a.729.729 0 0 0-.597.03c-.416.21-.85.39-1.298.539a.73.73 0 0 0-.444.4l-1.047 2.445a.7.7 0 0 1-.644.424h-1.854a.7.7 0 0 1-.643-.424l-1.048-2.444a.73.73 0 0 0-.444-.401 9.678 9.678 0 0 1-1.298-.538.73.73 0 0 0-.598-.031l-2.47.988a.7.7 0 0 1-.754-.155l-1.312-1.311a.7.7 0 0 1-.155-.755l.988-2.47a.73.73 0 0 0-.03-.598c-.21-.416-.39-.85-.538-1.297a.73.73 0 0 0-.401-.444l-2.445-1.048a.7.7 0 0 1-.424-.643v-1.855a.7.7 0 0 1 .424-.643l2.445-1.048a.73.73 0 0 0 .4-.444c.15-.448.33-.881.539-1.297a.73.73 0 0 0 .03-.598l-.988-2.47a.7.7 0 0 1 .155-.755l1.312-1.311a.7.7 0 0 1 .755-.155l2.47.988a.73.73 0 0 0 .597-.03c.416-.21.85-.39 1.298-.539ZM16 20.763a4.722 4.722 0 1 0 0-9.443 4.722 4.722 0 0 0 0 9.443Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

SettingsSolid.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default SettingsSolid;
