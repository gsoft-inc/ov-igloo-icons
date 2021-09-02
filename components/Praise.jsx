/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Praise /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Praise = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 10.289c0-.184.15-.333.333-.333H4V13.5H2.333A.333.333 0 0 1 2 13.168v-2.88z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"m6.504 8.544-.37-.652.37.652zM4.17 9.867l.37.653-.37-.653zm2.828-.974.738.131-.738-.131zM6.68 10.67l-.739-.131a.75.75 0 0 0 .739.881v-.75zm5.253.531-.604-.444.604.444zm-1.59 2.163-.605-.444.604.444zM6.134 7.892 3.799 9.215l.74 1.305 2.335-1.323-.74-1.305zm1.6 1.132c.161-.903-.802-1.584-1.6-1.132l.74 1.305a.417.417 0 0 1-.616-.436l1.476.263zm-.317 1.779.317-1.779-1.476-.263-.318 1.779 1.477.263zm-.738.618h4.985v-1.5H6.68v1.5zm4.985 0a.417.417 0 0 1-.336-.663l1.208.889a1.083 1.083 0 0 0-.872-1.726v1.5zm-.336-.663-1.59 2.163 1.208.888 1.59-2.162-1.208-.89zm-1.59 2.163a.417.417 0 0 1 .335-.17v1.5c.345 0 .669-.164.873-.442l-1.209-.888zm.335-.17h-5.74v1.5h5.74v-1.5zm-5.74 0c.23 0 .416.186.416.416h-1.5c0 .599.485 1.084 1.083 1.084v-1.5zm.416.416v-1.415h-1.5v1.415h1.5zm0-1.415v-.747h-1.5v.747h1.5zm-1.5-1.595v.848h1.5v-.848h-1.5zm.55-.942c-.34.192-.55.552-.55.942h1.5c0 .15-.08.289-.211.363l-.74-1.305z\" fill=\"#233043\"/><path d=\"m10.5 2.5.882 1.786 1.971.287-1.426 1.39.336 1.964L10.5 7l-1.763.927.336-1.963-1.426-1.391 1.971-.287L10.5 2.5z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 15.25a.5.5 0 0 1 .5-.5H6v5H3.5a.5.5 0 0 1-.5-.5v-4z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m9.576 12.763.364.656-.364-.656zm-3.319 1.844.364.656-.364-.656zm4.054-1.317-.738-.134.738.134zm-.447 2.46-.738-.134a.75.75 0 0 0 .738.884v-.75zm7.536.8-.6-.45.6.45zm-2.25 3 .6.45-.6-.45zm-5.938-7.442-3.319 1.844.728 1.31 3.32-1.843-.729-1.311zm1.837 1.316c.189-1.038-.915-1.829-1.837-1.316l.728 1.311a.25.25 0 0 1-.367-.263l1.476.268zm-.447 2.46.447-2.46-1.476-.268-.447 2.46 1.476.268zm-.738.616H17V15H9.864v1.5zm7.136 0a.25.25 0 0 1-.2-.4l1.2.9c.618-.824.03-2-1-2v1.5zm-.2-.4-2.25 3 1.2.9L18 17l-1.2-.9zm-2.25 3a.25.25 0 0 1 .2-.1v1.5a1.25 1.25 0 0 0 1-.5l-1.2-.9zm.2-.1H6.5v1.5h8.25V19zM6.5 19a.25.25 0 0 1 .25.25h-1.5c0 .69.56 1.25 1.25 1.25V19zm.25.25v-2h-1.5v2h1.5zm0-2v-1h-1.5v1h1.5zm-1.5-2.206v1.206h1.5v-1.206h-1.5zm.643-1.092a1.25 1.25 0 0 0-.643 1.092h1.5a.25.25 0 0 1-.129.219l-.728-1.311z\" fill=\"#233043\"/><path d=\"m16 4.25 1.47 2.977 3.285.478-2.377 2.318.56 3.272L16 11.75l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L16 4.25z\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 20.337c0-.368.299-.667.667-.667H8v6.667H4.667A.667.667 0 0 1 4 25.67v-5.333z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"m12.768 17.021.486.874-.486-.874zM8.343 19.48l.486.874-.486-.874zm5.405-1.757-.984-.179.984.18zm-.596 3.28-.984-.178a1 1 0 0 0 .984 1.178v-1zM23.2 22.07l.8.6-.8-.6zm-3 4 .8.6-.8-.6zm-7.917-9.923-4.426 2.458.972 1.749 4.425-2.459-.971-1.748zm2.449 1.755c.252-1.384-1.22-2.438-2.45-1.755l.972 1.748a.333.333 0 0 1-.49-.35l1.968.357zm-.597 3.28.597-3.28-1.968-.358-.596 3.28 1.967.358zm-.983.821h9.515v-2H13.15v2zm9.515 0a.333.333 0 0 1-.267-.533l1.6 1.2c.824-1.099.04-2.667-1.333-2.667v2zm-.267-.533-3 4 1.6 1.2 3-4-1.6-1.2zm-3 4a.333.333 0 0 1 .267-.133v2c.524 0 1.018-.247 1.333-.667l-1.6-1.2zm.267-.133h-11v2h11v-2zm-11 0c.184 0 .333.149.333.333H7c0 .92.746 1.667 1.667 1.667v-2zM9 25.67v-2.667H7v2.667h2zm0-2.667V21.67H7v1.333h2zm-2-2.94v1.607h2v-1.608H7zm.857-1.458C7.328 18.9 7 19.457 7 20.062h2a.333.333 0 0 1-.171.292l-.972-1.749z\" fill=\"#233043\"/><path d=\"m21.333 5.67 1.96 3.97 4.38.637-3.17 3.09.749 4.363-3.919-2.06-3.918 2.06.748-4.363-3.17-3.09 4.38-.637 1.96-3.97z\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Praise.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Praise.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Praise;
