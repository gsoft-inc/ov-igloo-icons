# `@igloo-ui/icons`

A set of icons handcrafted by Officevibe

## Getting started

To install @igloo-ui/icons in your project, you will need to run the following command using [npm](https://www.npmjs.com/):

```
npm install @igloo-ui/icons
```

If you prefer [Yarn](https://classic.yarnpkg.com/en/), use the following command instead:

```
yarn add @igloo-ui/icons
```

## Usage

Icons in this package support the following sizes: `16`, `24`, and `32` pixels. You can import an icon component into your project by referring to its name:

```js
import Alert from '@igloo-ui/icons/dist/Alert';

function MyComponent() {
  return (
    <>
      <Alert /> Uh oh, something went wrong
    </>
  );
}
```

### Changing the size

You can change the size of an icon by passing a prop `size` which takes `small`, `medium` and `large`. For example:

```js
import Clock from '@igloo-ui/icons/dist/Calendar';

function MyComponent() {
  return (
    <>
      <Calendar size="large" /> Monday, Feb 2022
    </>
  );
}
```

| Prop     | Rendered Size                |
| -------- | ---------------------------- |
| `small`  | 16px                         |
| `medium` | 24px is the **default** size |
| `Large`  | 32px                         |

### Changing the color

You can change the color of an icon by passing in a custom class name that sets this property.

First install tokens

`yarn add @igloo-ui/tokens`

For example:

```css
@import '@igloo-ui/tokens/dist/variables.css';

.my-custom-class {
  color: var(--dandelion-600);
}
```

```js
import Alert from '@igloo-ui/icons/dist/Alert';

function MyComponent() {
  return (
    <>
      <Alert className="my-custom-class" /> Uh oh, something went wrong
    </>
  );
}
```

### Accessibility

If the icon used without text, then use the `ariaLabel` prop to give the icon a text alternative. The label should describe the icon.

```js
import Alert from '@igloo-ui/icons/dist/Alert';

function MyComponent() {
  return <Alert ariaLabel=" Uh oh, something went wrong" />;
}
```

## SVG files

For projects that don’t use React, icons are also available as \*.svg files in the `dist/svg` folder.

## License

Copyright © 2019, GSoft inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.
