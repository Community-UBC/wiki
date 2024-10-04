<template>
  <div id="map" style="width: 100%; height: 500px"></div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
import maplibregl from "maplibre-gl";

const props = defineProps({
  center: {
    type: Array,
    default: () => [-123.246, 49.2606], // Default to UBC coordinates [longitude, latitude]
  },
  zoom: {
    type: Number,
    default: 13, // Default zoom level
  },
});

onMounted(() => {
  const map = new maplibregl.Map({
    container: "map",
    style: "https://tiles.openfreemap.org/styles/liberty",
    center: props.center,
    zoom: props.zoom,
  });

  // navigation controls
  const nav = new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
  });

  map.addControl(nav, "bottom-right");
});
</script>

<style>
/* Currently blank */
</style>
