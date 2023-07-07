import React from 'react';
import { attributesToProps, domToReact } from 'html-react-parser';
import cx from 'classnames';

const sizeMap = { small: 16, medium: 24, large: 32 };
const FIGMA_ICON_COLOR = '#233043';

export const getSvgProps = ({ size, ariaLabel, className, ...other }) => {
  const classes = cx(`ids-icon`, className);

  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.name === 'svg') {
        const svgProps = attributesToProps(domNode.attribs);
        const props = { ...svgProps, className: classes, ...other };
        return (
          <svg viewBox={`0 0 ${domNode.attribs.width} ${domNode.attribs.height}`} {...props}>
            {ariaLabel && <title>{ariaLabel}</title>}
            {domToReact(domNode.children, options)}
          </svg>
        );
      }

      if (domNode.attribs.stroke === FIGMA_ICON_COLOR) {
        return (domNode.attribs.stroke = 'currentColor');
      }

      if (domNode.attribs.fill === FIGMA_ICON_COLOR) {
        return (domNode.attribs.fill = 'currentColor');
      }
    },
  };

  return {
    iconSize: sizeMap[size],
    options,
  };
};
