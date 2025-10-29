---
layout: doc
---

# UBC Community Wiki Project

This page includes some general links, and then information on how you can contribute to the website directly. It requires a little bit of technical knowledge, but there are [many other ways to contribute](../index.md#contributing).

## Setup Guide

Make sure you are familiar with Git, GitHub, and npm. You will need to have Node installed.

This project is built using Vitepress

1. Clone the repository from GitHub: https://github.com/community-ubc/wiki
2. Run `pnpm install` to install the dependencies
3. Run `pnpm docs:dev` to run the dev server locally on your machine.
4. In your browser, open the link provided.

- See the [official VitePress documentation](https://vitepress.vuejs.org/) for information on how to use Vitepress.
- See the [VitePress Valence](https://cynber.dev/projects/vitepress-valence/) for information on how to use the library used in this project


::: info Pull Requests

Before opening a pull request, please check if the project builds successfully with `npm run docs:build`. Some issues will not be caught by the development server, but this command will catch them.

:::


## Installed Tools and Libraries

We are using the following third-party tools and libraries. If you need help with any of these, please check the documentation for each tool.

- Iconify: https://iconify.design/
- MapLibre: https://maplibre.org/
- Mapbox GL: https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-vue/
- markdown-it: https://github.com/markdown-it/markdown-it
- VitePress Valence: https://vitepress-valence.cynber.dev/