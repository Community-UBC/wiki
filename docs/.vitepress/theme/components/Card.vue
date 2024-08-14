<template>
  <a
    :href="disabled ? '#' : link"
    target="_blank"
    class="card"
    :class="{ disabled: disabled }"
    @click="handleClick"
  >
    <div class="card-image-wrapper">
      <img :src="image" alt="Card image" class="card-image" />
    </div>
    <div class="card-content">
      <h3 :class="{ 'disabled-text': disabled }" class="card-title">{{ title }}</h3>
      <p
        :class="{ 'disabled-text': disabled }"
        class="card-description"
        v-if="description"
        v-html="renderedDescription"
      ></p>
      <div class="card-tags" v-if="tags.length">
        <span
          class="tag"
          :class="{ 'disabled-tag': disabled }"
          v-for="tag in tags"
          :key="tag"
          >{{ tag }}</span
        >
      </div>
    </div>
    <div :class="{ 'disabled-footer': disabled }" class="card-footer">
      <span class="card-link-summary">
        <span v-if="disabled">Link Unavailable</span>
        <span v-else>{{ domain }}</span>
        <Icon
          :icon="disabled ? 'gg:unavailable' : 'gridicons:external'"
          class="external-icon"
        />
      </span>
    </div>
  </a>
</template>

<script>
import { Icon } from "@iconify/vue";
import MarkdownIt from "markdown-it";

export default {
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "/img/card-tools.jpg",
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
    disabled: {
      type: Boolean,
      default: false,
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
    renderedDescription() {
      const md = new MarkdownIt();
      return md.render(this.description);
    },
  },
  methods: {
    handleClick(event) {
      if (this.disabled || this.link === "#") {
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
  max-width: 300px;
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

.card.disabled {
  background-color: var(--card-disabled-bg-1);
  cursor: not-allowed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.card.disabled:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.card.disabled:active {
  transform: translateY(-1px);
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

.disabled-text {
  color: var(--card-disabled-text-1);
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

.disabled-tag {
  background-color: var(--card-disabled-bg-2);
  color: var(--card-disabled-text-1);
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

.disabled-footer {
  background-color: var(--card-disabled-bg-1);
  color: var(--card-disabled-text-1);
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
