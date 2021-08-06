import React from 'react';

import * as Icon from '../iconsList';

export default {
  component: Icon,
  title: 'Components/Icon',
};

export const all = () => {
  const iconsList = Icon.iconName;

  const ListIcon = ({ size }) => {
    return iconsList.map((name, index) => {
      const Component = Icon[name];
      return (
        <div className="icon-card">
          <div className="icon-card__icon">
            <Component size={size} key={index.toString()} />
          </div>
          <div className="icon-card__description" title={name}>
            {name}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="icon-render">
      <section className="icon-section">
        <h2 className="icon-section__title">16px</h2>
        <div className="icon-section__content">
          <ListIcon size="small" />
        </div>
      </section>

      <section className="icon-section">
        <h2 className="icon-section__title">24px</h2>
        <div className="icon-section__content">
          <ListIcon />
        </div>
      </section>

      <section className="icon-section">
        <h2 className="icon-section__title">32px</h2>
        <div className="icon-section__content">
          <ListIcon size="large" />
        </div>
      </section>
    </div>
  );
};
