<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style scoped>
.card-container {
  display: grid;
  gap: 16px;
  justify-items: center;
  padding: 16px;
  background-color: var(--vp-c-bg-alt);
  border-radius: 10px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

@media (max-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: repeat(1, minmax(100%, 1fr));
  }
}
</style>
