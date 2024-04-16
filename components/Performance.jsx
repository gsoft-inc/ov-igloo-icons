/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Performance /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Performance = ({size = "medium", ariaLabel = "", className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path clip-rule=\"evenodd\" d=\"M11.785 8.63c1.936-1.936 2.392-5.649 2.096-5.945-.296-.296-4.009.16-5.945 2.096-1.225 1.225-2.533 3.422-2.533 3.422l2.96 2.96s2.197-1.308 3.422-2.533Z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M10.554 7.414a.997.997 0 1 1-1.41-1.41.997.997 0 0 1 1.41 1.41Z\" fill=\"#233043\"/><path d=\"M5.653 12.302c-.084.083-.301.234-.654.418-.334.174-.732.348-1.124.493-.28.104-.544.188-.77.247a10.122 10.122 0 0 1 .74-1.893c.184-.353.335-.57.419-.654a.982.982 0 1 1 1.389 1.389Zm-3.084 1.246.021.002a.076.076 0 0 1-.02-.002Zm.447.427.002.021c0 .001-.002-.006-.002-.02Z\" stroke=\"#233043\" stroke-width=\"1.5\"/><path d=\"m11.956 8.459-.35 3.149-2.45 2.449-.699-2.8M8.108 4.61l-3.15.35L2.51 7.409l2.8.7\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.702 5.515c-1.63.43-3.46 1.222-4.682 2.444-.807.806-1.662 1.957-2.328 2.93-.328.481-.605.91-.8 1.218l3.306 3.306c.309-.195.737-.472 1.217-.8.974-.666 2.125-1.52 2.932-2.328 1.221-1.221 2.012-3.052 2.443-4.682.213-.806.33-1.534.37-2.07.012-.158.016-.293.016-.404-.111 0-.246.005-.404.016-.536.04-1.264.157-2.07.37Zm-4.615 10.847.384.645.003-.002.008-.005.027-.017a27.355 27.355 0 0 0 .485-.3c.321-.201.767-.49 1.268-.832.992-.678 2.237-1.597 3.145-2.505 1.488-1.488 2.37-3.61 2.833-5.36.234-.883.368-1.702.416-2.341a5.35 5.35 0 0 0 .005-.852c-.01-.12-.03-.249-.064-.37a1.044 1.044 0 0 0-.256-.458 1.043 1.043 0 0 0-.458-.257 2.048 2.048 0 0 0-.37-.064 5.343 5.343 0 0 0-.853.006c-.639.047-1.458.182-2.341.415-1.75.462-3.872 1.345-5.36 2.833-.908.908-1.827 2.153-2.505 3.145a40.872 40.872 0 0 0-1.132 1.753l-.017.028-.005.007v.002s-.001.001.643.385l-.644-.384a.75.75 0 0 0 .114.914l4.144 4.144a.75.75 0 0 0 .914.114l-.384-.644Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.865 10.44a.443.443 0 1 0 .626-.626.443.443 0 0 0-.626.627Zm-1.06 1.061a1.943 1.943 0 1 0 2.747-2.748 1.943 1.943 0 0 0-2.748 2.748ZM7.17 18.142c.487-.254.739-.439.805-.505a.924.924 0 1 0-1.307-1.307c-.066.066-.251.318-.505.805a13.731 13.731 0 0 0-.754 1.761l.24-.086a13.713 13.713 0 0 0 1.521-.668Zm-3.522 2.515c.49.49 4.44-1.012 5.387-1.959a2.424 2.424 0 1 0-3.428-3.428c-.947.946-2.449 4.897-1.959 5.387ZM17.372 17.067l.49-4.408-1.49-.166-.461 4.146-2.306 2.306-.658-2.633-1.455.364.979 3.918a.75.75 0 0 0 1.258.348l3.428-3.428a.75.75 0 0 0 .215-.447ZM7.24 6.933l4.407-.49.166 1.491-4.147.46L5.361 10.7l2.633.659-.364 1.455-3.918-.98a.75.75 0 0 1-.349-1.258l3.429-3.428a.75.75 0 0 1 .447-.215Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.15 14.957a2.887 2.887 0 1 0 4.084-4.083 2.887 2.887 0 0 0-4.083 4.083Zm1.415-1.414a.887.887 0 1 0 1.254-1.255.887.887 0 0 0-1.254 1.255Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.378 22.887 9.221 16.73l-5.554-1.388a1 1 0 0 1-.464-1.677L8.297 8.57a1 1 0 0 1 .596-.287l6.257-.695c2.13-1.827 4.912-2.951 7.252-3.57 1.307-.345 2.517-.543 3.459-.613a7.83 7.83 0 0 1 1.247-.009c.174.016.357.043.53.092.144.04.41.131.63.352.22.22.31.485.352.63.048.172.075.355.091.53.032.352.027.779-.008 1.247-.07.942-.269 2.151-.614 3.458-.619 2.34-1.743 5.122-3.57 7.252l-.694 6.257a1 1 0 0 1-.287.596l-5.094 5.094a1 1 0 0 1-1.677-.464l-1.389-5.553Zm7.535-16.935c-2.43.642-5.174 1.825-7.009 3.66-1.206 1.207-2.482 2.924-3.472 4.372-.49.718-.904 1.358-1.193 1.818l-.046.072 5.04 5.04.073-.045a58.6 58.6 0 0 0 1.817-1.194c1.449-.99 3.165-2.265 4.372-3.472 1.835-1.835 3.018-4.579 3.66-7.009.318-1.204.493-2.292.553-3.096.022-.292.028-.533.023-.721-.189-.005-.43 0-.721.022-.805.06-1.893.235-3.097.553Zm4.179-.54a.08.08 0 0 1-.004-.001l.004.001Zm-.395-.392a.09.09 0 0 1-.002-.005l.002.005ZM16.085 22.18l.127.213-.127-.213Zm6.186-3.095a44.226 44.226 0 0 1-3.019 2.241c-.742.508-1.404.935-1.88 1.235l-.012.007.919 3.673 3.597-3.597.395-3.559Zm-9.249-9.249-3.56.396-3.596 3.597 3.673.918.007-.011c.3-.477.727-1.138 1.235-1.88a44.24 44.24 0 0 1 2.241-3.02Zm-3.094 6.186-.214-.127.214.127Z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.546 28.561c.728.728 6.598-1.504 8.005-2.91a3.602 3.602 0 0 0-5.094-5.095c-1.407 1.407-3.639 7.278-2.911 8.005Zm5.339-3.534c.727-.379 1.128-.667 1.252-.79A1.602 1.602 0 0 0 7.87 21.97c-.124.123-.412.524-.791 1.251a20.627 20.627 0 0 0-1.281 3.086 20.621 20.621 0 0 0 3.086-1.281Zm-4.793 1.676c-.048 0-.036-.006.018 0H4.092Zm1.312 1.294c.006.054.001.067 0 .019v-.018Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Performance.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Performance;
