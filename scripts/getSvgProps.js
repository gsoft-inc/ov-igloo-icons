import { attributesToProps, domToReact } from 'html-react-parser';
import cx from 'classnames';

const sizeMap = { small: 16, medium: 24, large: 32 };
const FIGMA_ICON_COLOR = '#233043';

export const getSvgProps = ({
  size,
  color,
  ariaLabel,
  className,
  ...other
}) => {
  const colorName = color[0].toUpperCase() + color.substring(1);
  const colorClass = color !== 'base' && `ids-icon--color${colorName}`;

  const classes = cx(`ids-icon`, colorClass, className);

  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.name === 'svg') {
        const svgProps = attributesToProps(domNode.attribs);
        const props = { ...svgProps, className: classes, ...other };
        return (
          <svg {...props}>
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
