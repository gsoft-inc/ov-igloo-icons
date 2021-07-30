import React from 'react';

import AddCalendar from '../dist/AddCalendar';

export default {
  component: AddCalendar,
  title: 'Components/AddCalendar',
};

export const basic = () => (
  <>
    <AddCalendar />
    <AddCalendar size="medium" />
    <AddCalendar size="large" />
  </>
);

export const colored = () => (
  <>
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      <AddCalendar color="grey500" />
      <AddCalendar color="grey500" size="medium" />
      <AddCalendar color="grey500" size="large" />
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      <AddCalendar color="grey600" />
      <AddCalendar color="grey600" size="medium" />
      <AddCalendar color="grey600" size="large" />
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      <AddCalendar color="base" />
      <AddCalendar color="base" size="medium" />
      <AddCalendar color="base" size="large" />
    </div>
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      <AddCalendar color="interactive" />
      <AddCalendar color="interactive" size="medium" />
      <AddCalendar color="interactive" size="large" />
    </div>
  </>
);
