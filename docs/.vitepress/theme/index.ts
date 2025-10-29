// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'maplibre-gl/dist/maplibre-gl.css';
import '@cynber/vitepress-valence/style.css'
import { Icon } from '@iconify/vue';
import { useRoute } from 'vitepress';
import {
  VpvContainerHorizontal,
  VpvContainerVertical,
  VpvCardHorizontal,
  VpvCardVertical,
  VpvImage,
  VpvImageGallery,
  VpvTableJSON
} from '@cynber/vitepress-valence'
import VitepressCard from './components/VitepressCard.vue';
import VitepressCardContainer from './components/VitepressCardContainer.vue';
import MapLibreMap from './components/MapLibreMap.vue';
import MapLibreMapLocator from './components/MapLibreMapLocator.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Icon', Icon);
    app.component('VpvContainerHorizontal', VpvContainerHorizontal);
    app.component('VpvContainerVertical', VpvContainerVertical);
    app.component('VpvCardHorizontal', VpvCardHorizontal);
    app.component('VpvCardVertical', VpvCardVertical);
    app.component('VpvImage', VpvImage);
    app.component('VpvImageGallery', VpvImageGallery);
    app.component('VpvTableJSON', VpvTableJSON);
    app.component('VitepressCard', VitepressCard);
    app.component('VitepressCardContainer', VitepressCardContainer);
    app.component('MapLibreMap', MapLibreMap);
    app.component('MapLibreMapLocator', MapLibreMapLocator);
  },
  setup() {
    // ...
    const route = useRoute();
  },
} satisfies Theme
