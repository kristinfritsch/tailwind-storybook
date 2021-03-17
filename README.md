# Storybook w/ Tailwind

This is an experimental development environment that leverages the next version of Storybook (6.2) with Tailwind (via `@storybook/addon-postcss`) and Webpack 5.

## Why

[Storybook](https://storybook.js.org/) is a tool for developing UI components in isolation using React. [Tailwind](https://tailwindcss.com/) is a utility-first CSS framework that generates classes that can be composed to implement any design. Together, these libraries can create a robust development environment that enables engineers to rapidly implement UI components, no matter the complexity, in isolation with the advantage of low-level composability via Tailwind's utility classes.

## Setup

1. `yarn`
2. `yarn storybook`
3. http://localhost:6006

## Build

1. `yarn build`

# External Usage

## Importing a component

`import { Button } from 'components-web';`

## Importing Tailwind preset

```
module.exports = {
  presets: [require("components-web/styles")],
};
```

# Other stuff

## Features

- [Tailwind IntelliSense](https://tailwindcss.com/docs/intellisense)
- generated classes for [Circle's color palette](https://brand.circle.com/d/M9z54TaEwsWL/circle-brand-guide#/circle/color-palette) (see [tailwind.config.js](tailwind.config.js) for more info)
- uses the next version of Storybook for Webpack 5
  - sets up upgrade path to next-gen bundlers like [ESBuild](https://esbuild.github.io/) & [Vite](https://vitejs.dev/)

## Resources

- https://tailwindcss.com/
- https://github.com/aniftyco/awesome-tailwindcss
- https://github.com/tailwindlabs/headlessui
