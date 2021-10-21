/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Slider /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Slider = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1.5\" y=\"7.5\" width=\"13\" height=\"1\" rx=\".5\" stroke=\"#233043\"/><circle cx=\"8\" cy=\"8\" r=\"4.25\" fill=\"#fff\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"M8 9.5v-3M10 9V7M6 9V7\" stroke=\"#233043\" stroke-width=\"1.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.337 19.104c1.927-.784 3.474-2.756 3.893-5.15h1.679a2.136 2.136 0 1 0 0-4.27H18.76a8.74 8.74 0 0 0-.145-.342l-.663.297.663-.297c-.892-1.99-1.795-3.282-3.043-4.038-1.237-.748-2.693-.893-4.48-.894-.956-.047-2.295.223-3.511 1.11-1.132.824-2.118 2.154-2.606 4.163h-1.74a2.136 2.136 0 1 0 0 4.271h1.551c.507 2.84 2.408 4.413 4.49 5.131 2.185.753 4.64.598 6.06.02Z\" fill=\"#fff\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"m4.847 10.3-.009.047-.002.048-.053 1.033-.002.029c-.058 1.124-.126 2.458.33 3.703.881 2.407 2.89 3.636 4.887 4.139 1.974.498 4.064.324 5.34-.195 1.697-.69 3.092-2.301 3.69-4.292.32-1.065.231-2.162.117-3.106l-.064-.527c-.07-.586-.19-1.226-.464-1.837-.893-1.99-1.796-3.282-3.044-4.038-1.237-.748-2.693-.893-4.48-.894-.956-.047-2.295.223-3.511 1.11-1.244.906-2.312 2.423-2.735 4.78Z\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"M12 9v6M15 10.5v3M9 10.5v3\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.983 17.606H2.045v-3.695h5.134c1.078-5.827 5.348-7.147 7.548-7.031 4.897 0 7.03.8 9.43 5.985.161.35.3.698.417 1.046h5.581v3.695h-5.12c-.273 3.264-2.333 5.952-4.835 6.94-3.415 1.348-12.465.846-13.217-6.94Z\" fill=\"#fff\"/><path d=\"M16.63 13.058a.75.75 0 0 0-1.5 0v5.884a.75.75 0 0 0 1.5 0v-5.884ZM12.735 14.052a.75.75 0 1 0-1.5 0v3.896a.75.75 0 0 0 1.5 0v-3.896ZM20.015 13.421a.75.75 0 0 1 .75.75v3.658a.75.75 0 0 1-1.5 0V14.17a.75.75 0 0 1 .75-.75Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.59 7.946c1.746-1.46 3.775-1.884 5.156-1.816 2.453 0 4.384.196 6.012 1.152 1.643.964 2.857 2.629 4.08 5.268.094.204.18.407.26.61h2.722c1.152 0 1.94.434 2.4 1.121.422.632.485 1.363.485 1.83 0 .573-.19 1.25-.663 1.794-.49.566-1.237.934-2.222.934h-2.209c-.634 3.006-2.67 5.431-5.136 6.405-2.005.791-5.635.98-8.726-.253-1.564-.625-3.026-1.628-4.063-3.14a8.373 8.373 0 0 1-1.27-3.012H4.18c-.985 0-1.731-.367-2.222-.934a2.772 2.772 0 0 1-.663-1.793c0-.468.063-1.2.485-1.83.46-.688 1.248-1.121 2.4-1.121h2.39c.565-2.424 1.69-4.103 3.02-5.215Zm16.215 9.393h2.015c.582 0 .904-.203 1.089-.416.203-.235.296-.548.296-.811 0-.369-.059-.738-.233-.998-.136-.204-.415-.453-1.152-.453h-2.256a9.8 9.8 0 0 1 .24 2.678ZM6.2 15.867c-.026.512-.022 1.003.009 1.472H4.18c-.583 0-.904-.203-1.089-.416a1.272 1.272 0 0 1-.296-.811c0-.369.059-.738.233-.998.136-.204.415-.453 1.152-.453h2.125c-.047.386-.082.788-.104 1.206Zm1.498.076c.183-3.59 1.446-5.67 2.853-6.846 1.43-1.195 3.085-1.523 4.136-1.468h.04c2.434 0 4.012.208 5.27.946 1.248.732 2.3 2.06 3.478 4.605 2.22 4.796-.306 9.388-3.551 10.669-1.643.648-4.878.843-7.62-.251-1.352-.54-2.548-1.38-3.381-2.595-.83-1.21-1.338-2.848-1.225-5.06Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Slider.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Slider.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Slider;
