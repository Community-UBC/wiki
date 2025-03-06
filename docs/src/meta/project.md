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


## Using the installed plugins

### Iconify

We are using Iconify to display icons on the site. 

1. Find an icon from [their website](https://icon-sets.iconify.design/)
   - For most cases, you will need to set it to Vue and copy the code.
   - In some cases, such as the Vitepress Style Cards below, you will need to copy the short code only.
2. Use the icon with text as follows:

```markdown
<h3 class="text-with-icon">
    <Icon icon="ci:folders" width="1.2em" height="1.2em" />
    Relevant Projects
</h3>
```

Customization:

- You can use the `icon-left`, `icon-right`, and `icon-middle` classes to change the position of the icon. For example: `<h3 class="text-with-icon icon-right">`.
- You can change other properties of the icon by using the menus on the Iconify website.

::: details Custom Components
Before you can use icons in custom components, you need to add the following code:

```ts
<script>
import { Icon } from "@iconify/vue"; // [!code ++]
// ...

export default {
  // ...
  components: {
    Icon, // [!code ++]
  },
  // ...
}
```
:::

### Medium Zoom

We are using Medium Zoom to allow for zooming in on images. You can see it in action on the [Places to Visit](../campus/ubc-sights.md) page and the [Study Spots](../campus/study.md) page.

To use it, you need to add the `data-zoomable` attribute to the image you want to zoom in on. For example:

```markdown
![image](/img/campus/ubc-sights/blossoms.jpg){ data-zoomable }
```



## Using our Custom Components

### Text + Image Section

You can see this in action on the [Study Spots](../campus/study.md) page.

To use it, you can copy the following code:

```markdown
<ImageText
  image-link="/img/campus/ubc-sights/blossoms.jpg"
  zoomable
  input="This can be a long paragraph of text."
></ImageText>
```

::: details More Information

- `image-link` - Path to the image you want to display. You should place your image in the `docs/src/public/img` directory corresponding to the section you are working on.
- `zoomable` (**optional**) - Allows the image to be zoomed in on.
- `input` - The text that will be displayed on the right side of the image.
- `image-size` (**optional**) - Set the width of the image in `px`. The default is 200px.
- `placement` (**optional**) - Determines the placement of the image and text. The default is `left` (image on the left, text on the right).
- `margin` (**optional**) - Determines the margin in `px` between the image and text. The default is `20px`.
:::