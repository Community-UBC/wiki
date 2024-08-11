<template>
  <div class="card">
    <p class="text-with-icon">
      <Icon
        :icon="icon"
        width="1.2em"
        height="1.2em"
        v-if="icon"
        :style="{ color: iconColor }"
      />
      <span :class="['title', { 'no-icon': !icon }]">{{ title }}</span>
    </p>
    <div v-html="renderedBody" class="card-body"></div>
    <a v-if="link" :href="link" class="card-link">
      {{ actualLinkText }}
      <Icon icon="mdi:arrow-right" class="arrow-icon" />
    </a>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import MarkdownIt from "markdown-it";

export default {
  name: "VitepressCard",
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    linkText: {
      type: String,
      default: "Check it out",
    },
  },
  computed: {
    renderedBody() {
      const md = new MarkdownIt();
      return md.render(this.body);
    },
    actualLinkText() {
      return this.linkText || "Check it out";
    },
  },
};
</script>

<style scoped>
.card {
  padding: 12px 24px;
  margin: 1rem 0.5rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.text-with-icon {
  display: flex;
  align-items: center;
}

.text-with-icon .title {
  line-height: 24px;
  font-size: 18px;
  font-weight: 600;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
}

.text-with-icon .title.no-icon {
  margin-left: 0;
}

.text-with-icon .title:not(.no-icon) {
  margin-left: 0.5em;
}

.card-body {
  margin-top: 0.5rem;
}

.card-link {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 600;
}

.card-link:hover {
  color: var(--vp-c-brand-2);
}

.arrow-icon {
  margin-left: 0.5em;
  width: 1em;
  height: 1em;
}
</style>
