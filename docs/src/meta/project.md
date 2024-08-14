---
layout: doc
---

# UBC Community Wiki Project

The UBCWiki was initially started by moderators of the /r/UBC subreddit. It has since been moved to Github pages to allow for easier collaboration and a much nicer platform to work with.

This page includes some general links, and then information on how you can contribute to the website directly. It requires a little bit of technical knowledge, but there are [many other ways to contribute](../index.md#contributing).

## Setup Guide

This project is built using Vitepress, a Vue.js powered static site generator. 

1. Clone the repository from GitHub: https://github.com/community-ubc/wiki
2. Install the dependencies with `npm install`
3. Run the development server with `npm run docs:dev`
4. Open the link provided in your browser to see the site, or press `o` in the terminal to open it automatically.

Once the site is running:
- Press `h` for other options, such as reloading the page with `r` after making changes.
- See the [official documentation](https://vitepress.vuejs.org/) to learn more about how to use Vitepress.


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





### Cards

These cards should be used listing resources from other websites. You can see the cards in action in the [Registration Tools](../course-planning/registration#_1-pick-your-courses) section. 

To use them, you can copy the following code:

```markdown
<CardContainer>
    <Card 
        title="Example Card"
        image="/img/card-tools.jpg"
        description="This is a description of the card. Try to keep it within 2 lines."
        link="https://example.com"
        :tags="['Course Difficulty', 'GPA']"
    />
    <!-- copy this card as many times as you need -->
</CardContainer>
```

::: details More Information
You can use the other sections of the site as a reference for how to use these cards.

Card:

- `image` - Path to the image you want to display on the card. You should place your image in the `docs/src/public/img` directory corresponding to the section you are working on.
- `link` - URL that the card will take the user to when clicked
- `tags` - An array of strings that will be displayed on the card as pill shaped tags
- `disabled` (**optional**) - Causes the card to be greyed and unclickable.

CardContainer:

- `:cols` (**optional**) - Sets the number of columns in the card container: `<CardContainer :cols="2">`.
:::



### Vitepress Style Cards

These cards should be used when displaying a list of links to pages on this site. You can see the cards on the [About](./index.md) page.

To use them, you can copy the following code:

```markdown
<VitepressCardContainer :cols="2">
  <VitepressCard
    icon="material-symbols:image-outline"
    iconColor="#123456"
    title="Example Card"
    body="This is a description of the card. Try to keep it within 2 lines."
    link="./page"
    linkText="Jump to section"
  />
  <!-- copy this card as many times as you need -->
</VitepressCardContainer>
```

::: details More Information
You can use the other sections of the site as a reference for how to use these cards.

VitepressCard:
- `icon` (**optional**) - The icon that will be displayed on the card. You can icon codes from [here](https://icon-sets.iconify.design).
- `iconColor` (**optional**) - The colour of the icon, represented as a hex code.
- `link` (**optional**) - The relative location of the page you are linking to.
- `linkText` (**optional**) - The text that will be displayed on the link

VitepressCardContainer:
- `:cols` (**optional**) - Sets the number of columns in the card container: `<CardContainer :cols="2">`.
:::

## Creating Components

You can see our components in the `docs/.vitepress/theme/components` directory. These components can be reused across the site.

1. Create a new `.vue` file in the `docs/.vitepress/theme/components` directory. See the [Official Vue.js documentation](https://v3.vuejs.org/guide/introduction.html) for more information on how to create components.
2. Update `docs/.vitepress/theme/index.ts` to include the new component. For example:

```ts
import MyNewComponent from './components/MyNewComponent.vue'; // [!code ++]
// ...
export default {
  // ...
  enhanceApp({ app, router, siteData }) {
    app.component('MyNewComponent', MyNewComponent); // [!code ++]
  },
  // ...
} satisfies Theme
```



## One Time Setup

**You SHOULD NOT need to look at this.** This section is for reference in case we need to rebuild the project from scratch.

::: details Installing Iconify

Use the most up to date instructions [here](https://iconify.design/docs/icon-components/vue/).

If needed, the steps are listed below:

1. Install with `npm install --save-dev @iconify/vue`
2. Add the following code to `index.ts` and `style.css`:

::: code-group

```ts [index.ts]
import { Icon } from '@iconify/vue'; // [!code ++]
// ...
  enhanceApp({ app, router, siteData }) {
    app.component('Icon', Icon); // [!code ++]
    // ...
  },
```

```css [style.css]
.text-with-icon {
  display: flex;
  align-items: center;
}

.text-with-icon .iconify {
  margin-right: 0.5em;
}

.icon-left .iconify {
  /* default */
  margin-right: 0.5em;
}

.icon-right .iconify {
  margin-right: 0;
  margin-left: 0.5em;
}

.icon-middle .iconify {
  margin-left: 0.5em;
  margin-right: 0.5em;
}
```
:::

::: details Installing Medium Zoom

**Links:**

- Reference: https://github.com/vuejs/vitepress/issues/854

**Steps:**

1. Run `npm i medium-zoom`
2. Enter the following code in `index.ts` and `style.css`:

::: code-group

```ts [index.ts]
import { onMounted, watch, nextTick } from 'vue'; // [!code ++]
import { useRoute } from 'vitepress';             // [!code ++]
import mediumZoom from 'medium-zoom';             // [!code ++]

export default {
  // ...
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    // ...
    const route = useRoute(); // [!code ++]
    const initZoom = () => { // [!code ++]
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });  // [!code ++]
    }; // [!code ++]
    onMounted(() => { // [!code ++]
      initZoom(); // [!code ++]
    }); // [!code ++]
    watch( // [!code ++]
      () => route.path, // [!code ++]
      () => nextTick(() => initZoom()) // [!code ++]
    ); // [!code ++]
  },
  // ...
```

```css [style.css]

.medium-zoom-overlay {
  z-index: 30;
}

.medium-zoom-image--opened {
  z-index: 31;
}
```
:::