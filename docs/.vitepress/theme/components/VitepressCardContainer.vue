<template>
  <div :class="getColsClass">
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
      validator: (value) => value >= 1 && value <= 5,
    },
  },
  computed: {
    getColsClass() {
      return `grid-container grid-cols-${this.cols}`;
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  gap: 0.3rem;
}

.grid-cols-1 {
  grid-template-columns: 1fr;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

.grid-cols-5 {
  grid-template-columns: repeat(5, 1fr);
}
</style>
