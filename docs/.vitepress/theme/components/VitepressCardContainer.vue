<template>
  <div :class="['grid-container', getColsClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VitepressCardContainer",
  props: {
    cols: {
      type: Number,
      default: 1,
      validator: (value) => value >= 1 && value <= 3,
    },
  },
  computed: {
    getColsClass() {
      return `grid-cols-${this.cols}`;
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  gap: 0.3rem;
  justify-items: center;
}

.grid-cols-1, 
.grid-cols-2,
.grid-cols-3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

@media (max-width: 1024px) {
  .grid-cols-1,
  .grid-cols-2,
  .grid-cols-3 {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .grid-cols-1,
  .grid-cols-2,
  .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(100%, 1fr));
  }
}
</style>

