<template>
  <div class="map-container">
    <div id="map" class="map"></div>
    <div class="location-list">
      <h3 class="list-title">{{ sidebarTitle }}</h3>
      <ul>
        <li
          v-for="location in locations"
          :key="location.id"
          @click="centerOnLocation(location)"
          class="location-item"
        >
          {{ location.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineProps, ref } from "vue";
import maplibregl from "maplibre-gl";

const props = defineProps({
  sidebarTitle: {
    type: String,
    default: "Locations",
  },
  locations: {
    type: Array,
    required: true,
  },
  defaultCenter: {
    type: Array,
    default: () => [-123.246, 49.2606], // Default to UBC
  },
  defaultZoom: {
    type: Number,
    default: 13,
  },
});

const map = ref(null);

function centerOnLocation(location) {
  if (map.value && location.lat !== undefined && location.lng !== undefined) {
    map.value.flyTo({ center: [location.lng, location.lat], zoom: 14 });
  }
}

onMounted(() => {
  map.value = new maplibregl.Map({
    container: "map",
    style: "https://tiles.openfreemap.org/styles/liberty",
    center: props.defaultCenter,
    zoom: props.defaultZoom,
  });

  const nav = new maplibregl.NavigationControl({ showCompass: true, showZoom: true });
  map.value.addControl(nav, "bottom-right");

  props.locations.forEach((location) => {
    new maplibregl.Marker()
      .setLngLat([location.lng, location.lat])
      .setPopup(new maplibregl.Popup().setHTML(`<h3>${location.name}</h3>`))
      .addTo(map.value);
  });
});
</script>

<style>
.map-container {
  display: flex;
  flex-direction: column;
}

.map {
  width: 100%;
  height: 500px;
}

.location-list {
  padding: 10px;
  border-top: 1px solid var(--vp-c-gray-3);
  overflow-y: auto;
}

.list-title {
  margin-top: 0;
  color: var(--vp-c-text-2);
  font-weight: bold;
}

.location-item {
  cursor: pointer;
  color: var(--vp-c-text-2);
  text-decoration: underline;
  margin: 5px 0;
}

@media (min-width: 768px) {
  .map-container {
    flex-direction: row;
  }

  .map {
    width: 75%;
  }

  .location-list {
    width: 25%;
    padding: 10px;
    border-left: 1px solid var(--vp-c-gray-3);
    border-top: none;
  }
}
</style>
