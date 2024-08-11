// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { Icon } from '@iconify/vue';
import Card from './components/Card.vue';
import CardContainer from './components/CardContainer.vue';
import VitepressCard from './components/VitepressCard.vue';
import VitepressCardContainer from './components/VitepressCardContainer.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Icon', Icon);
    app.component('Card', Card);
    app.component('CardContainer', CardContainer);
    app.component('VitepressCard', VitepressCard);
    app.component('VitepressCardContainer', VitepressCardContainer);
  }
} satisfies Theme
