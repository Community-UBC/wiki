<template>
  <a :href="link" target="_blank" class="card" @click="handleClick">
    <div class="card-image-wrapper">
      <img :src="image" alt="Card image" class="card-image" />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description" v-if="description">{{ description }}</p>
      <div class="card-tags" v-if="tags.length">
        <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
    <div class="card-footer">
      <span class="card-link-summary">
        {{ domain }}
        <Icon icon="gridicons:external" class="external-icon" />
      </span>
    </div>
  </a>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
      default: "Project Title",
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/300x150",
      validator: (value) => /^https?:\/\/.+\.(jpg|jpeg|png|webp|svg|gif)$/.test(value),
    },
    link: {
      type: String,
      default: "#",
      validator: (value) => /^https?:\/\/|^#/.test(value),
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    domain() {
      try {
        return new URL(this.link).hostname.replace("www.", "");
      } catch {
        return "";
      }
    },
  },
  methods: {
    handleClick(event) {
      if (this.link === "#") {
        event.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 350px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out,
    background-color 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.card:active {
  transform: translateY(2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.card-image-wrapper {
  width: 100%;
  padding-top: 56.25%;
  position: relative;
}

.card-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 12px;
  flex-grow: 1;
}

.card-title {
  font-size: 1rem;
  margin: 0;
  color: var(--vp-c-text-1);
}

.card-description {
  font-size: 0.875rem;
  margin-top: 4px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.card-tags {
  margin-top: 8px;
}

.tag {
  display: inline-block;
  background-color: var(--vp-c-gray-soft);
  color: var(--vp-c-text-1);
  border-radius: 15px;
  padding: 2px 8px;
  margin: 2px;
  font-size: 0.75rem;
}

.card-footer {
  margin-top: auto;
  background-color: var(--vp-c-bg);
  padding: 8px;
  text-align: center;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-gray-1);
}

.card-link-summary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.external-icon {
  width: 1.2em;
  height: 1.2em;
}
</style>
