/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <PersonalGrowth /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const PersonalGrowth = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.957 2.621A2.123 2.123 0 0 1 7.973 1.15c.944 0 1.74.62 2.017 1.471a2.128 2.128 0 0 1 2.557 2.09c0 .553-.21 1.051-.55 1.426.34.376.55.874.55 1.427a2.128 2.128 0 0 1-2.557 2.09 2.123 2.123 0 0 1-2.017 1.471c-.944 0-1.74-.62-2.016-1.471A2.128 2.128 0 0 1 3.4 7.564c0-.553.21-1.051.549-1.426A2.118 2.118 0 0 1 3.4 4.71a2.128 2.128 0 0 1 2.557-2.09Zm.993.637.01.09a.549.549 0 0 1-.863.505.992.992 0 0 0-.576-.179c-.56 0-1.023.46-1.023 1.037 0 .412.24.765.588.932a.549.549 0 0 1 0 .99c-.348.166-.588.519-.588.931A1.03 1.03 0 0 0 5.52 8.601c.217 0 .41-.065.582-.183a.549.549 0 0 1 .857.51l-.01.089a1.03 1.03 0 0 0 1.023 1.01 1.03 1.03 0 0 0 1.023-1.01l-.01-.09a.549.549 0 0 1 .863-.505.992.992 0 0 0 .577.179c.56 0 1.023-.46 1.023-1.037 0-.412-.24-.765-.588-.932a.549.549 0 0 1 0-.99c.347-.166.588-.519.588-.931a1.03 1.03 0 0 0-1.023-1.037c-.217 0-.412.065-.582.182a.549.549 0 0 1-.857-.508l.01-.09a1.03 1.03 0 0 0-1.024-1.01 1.03 1.03 0 0 0-1.023 1.01ZM7.973 5.54a.55.55 0 1 0 .001 1.099.55.55 0 0 0 0-1.099Zm-1.646.55a1.647 1.647 0 1 1 3.293 0 1.647 1.647 0 0 1-3.293 0ZM8.16 14.8c.18 0 .36-.011.534-.033 2.069-.253 3.668-1.956 3.668-4.02a.343.343 0 0 0-.349-.337c-1.39 0-2.624.651-3.389 1.655-.29.381-.513.813-.652 1.279a3.981 3.981 0 0 0-.652-1.279 4.248 4.248 0 0 0-3.389-1.655c-.193 0-.35.15-.35.337 0 2.064 1.6 3.767 3.67 4.02a4.384 4.384 0 0 0 .721.029c.062.003.125.004.188.004Zm-3.338-3.17c.997.283 1.772 1.029 2.074 1.95-.998-.281-1.77-1.026-2.074-1.95Zm4.226 1.95c.303-.921 1.078-1.667 2.075-1.95-.305.924-1.077 1.669-2.075 1.95Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 .75a3.196 3.196 0 0 0-3.062 2.303 3.219 3.219 0 0 0-.747-.087C6.424 2.966 5 4.41 5 6.178c0 .866.341 1.643.89 2.215A3.188 3.188 0 0 0 5 10.61c0 1.767 1.424 3.212 3.191 3.212.259 0 .509-.03.747-.088A3.196 3.196 0 0 0 12 16.037a3.196 3.196 0 0 0 3.062-2.303c.24.057.49.087.747.087 1.767 0 3.191-1.445 3.191-3.212 0-.866-.341-1.643-.89-2.216.549-.572.89-1.35.89-2.215 0-1.768-1.424-3.212-3.191-3.212-.259 0-.508.03-.747.087A3.196 3.196 0 0 0 12 .75Zm-1.676 3.321-.015-.145A1.702 1.702 0 0 1 12 2.25c.916 0 1.672.742 1.691 1.676l-.015.145a.75.75 0 0 0 1.171.696c.281-.194.603-.301.962-.301.927 0 1.691.761 1.691 1.712 0 .682-.398 1.264-.971 1.54a.75.75 0 0 0 0 1.351c.573.276.971.858.971 1.54 0 .95-.764 1.712-1.691 1.712-.364 0-.691-.11-.955-.296a.75.75 0 0 0-1.178.69l.015.146A1.702 1.702 0 0 1 12 14.537a1.702 1.702 0 0 1-1.691-1.677l.015-.144a.75.75 0 0 0-1.171-.696 1.665 1.665 0 0 1-.962.301A1.703 1.703 0 0 1 6.5 10.609c0-.682.398-1.264.971-1.54a.75.75 0 0 0 0-1.352 1.705 1.705 0 0 1-.971-1.54c0-.95.764-1.711 1.691-1.711.364 0 .691.11.955.296a.75.75 0 0 0 1.178-.69Zm-.015 4.322c0-.95.764-1.712 1.691-1.712.928 0 1.691.762 1.691 1.712 0 .951-.764 1.712-1.691 1.712a1.703 1.703 0 0 1-1.691-1.712ZM12 5.181c-1.768 0-3.191 1.445-3.191 3.212 0 1.768 1.423 3.212 3.191 3.212 1.768 0 3.191-1.444 3.191-3.212 0-1.767-1.423-3.212-3.191-3.212Zm.341 17.319c.148 0 .294-.004.439-.012 4.026-.219 7.22-3.436 7.22-7.373a.625.625 0 0 0-.637-.615c-2.741 0-5.146 1.389-6.499 3.476a7.218 7.218 0 0 0-.864 1.87 7.218 7.218 0 0 0-.864-1.87C9.783 15.89 7.378 14.5 4.636 14.5a.625.625 0 0 0-.636.615c0 3.937 3.194 7.154 7.22 7.373a8.07 8.07 0 0 0 .78.005c.113.005.227.007.341.007Zm-1.779-2.226.197.664c-2.677-.372-4.75-2.38-5.178-4.87 2.413.355 4.339 2.043 4.981 4.206Zm2.876 0-.197.664c2.677-.372 4.75-2.38 5.178-4.87-2.413.355-4.339 2.043-4.981 4.206Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 1c-1.936 0-3.563 1.3-4.082 3.07a4.292 4.292 0 0 0-.996-.116c-2.357 0-4.255 1.927-4.255 4.283 0 1.154.455 2.191 1.186 2.954a4.25 4.25 0 0 0-1.186 2.954c0 2.357 1.898 4.283 4.255 4.283.345 0 .677-.04.996-.117.519 1.771 2.145 3.071 4.082 3.071 1.936 0 3.563-1.3 4.082-3.07.32.076.654.116.996.116 2.357 0 4.255-1.926 4.255-4.283a4.251 4.251 0 0 0-1.186-2.954 4.251 4.251 0 0 0 1.186-2.954c0-2.356-1.898-4.283-4.255-4.283-.345 0-.677.04-.996.117C19.564 2.301 17.937 1 16 1Zm-2.235 4.428-.02-.193C13.77 3.99 14.78 3 16 3c1.221 0 2.23.99 2.255 2.235l-.02.193a1 1 0 0 0 1.561.928 2.22 2.22 0 0 1 1.282-.402c1.237 0 2.255 1.015 2.255 2.283 0 .91-.53 1.686-1.294 2.053a1 1 0 0 0 0 1.803 2.273 2.273 0 0 1 1.294 2.053c0 1.267-1.018 2.282-2.255 2.282a2.19 2.19 0 0 1-1.272-.395 1 1 0 0 0-1.571.921l.02.193c-.025 1.246-1.034 2.235-2.255 2.235-1.221 0-2.23-.99-2.255-2.235l.02-.193a1 1 0 0 0-1.561-.927 2.22 2.22 0 0 1-1.282.401c-1.237 0-2.255-1.015-2.255-2.283 0-.91.53-1.685 1.295-2.052a1 1 0 0 0 0-1.803 2.273 2.273 0 0 1-1.295-2.053c0-1.268 1.018-2.283 2.255-2.283.484 0 .92.147 1.272.395a1 1 0 0 0 1.571-.92Zm-.02 5.763c0-1.267 1.018-2.282 2.255-2.282 1.237 0 2.255 1.015 2.255 2.282 0 1.268-1.018 2.283-2.255 2.283-1.237 0-2.255-1.015-2.255-2.283ZM16 6.91c-2.357 0-4.255 1.926-4.255 4.282s1.898 4.283 4.255 4.283 4.255-1.927 4.255-4.283c0-2.356-1.898-4.282-4.255-4.282ZM16.455 30c.197 0 .392-.005.585-.016 5.367-.292 9.627-4.582 9.627-9.83a.833.833 0 0 0-.85-.82c-3.654 0-6.86 1.85-8.665 4.634A9.623 9.623 0 0 0 16 26.462a9.62 9.62 0 0 0-1.152-2.494c-1.804-2.783-5.01-4.635-8.666-4.635a.833.833 0 0 0-.849.82c0 5.25 4.26 9.539 9.627 9.831a10.687 10.687 0 0 0 1.04.006c.15.007.303.01.455.01Zm-2.372-2.968.263.886c-3.57-.496-6.335-3.174-6.905-6.493 3.218.472 5.785 2.724 6.642 5.607Zm3.834 0-.263.886c3.57-.496 6.335-3.174 6.905-6.493-3.218.472-5.785 2.724-6.642 5.607Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

PersonalGrowth.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

PersonalGrowth.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default PersonalGrowth;
