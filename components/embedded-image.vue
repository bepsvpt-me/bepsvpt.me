<template>
  <picture>
    <source :srcset="src" :type="type" />

    <img
      :alt="alt"
      class="rounded-sm"
      decoding="async"
      :height="height"
      importance="high"
      referrerpolicy="no-referrer"
      :src="fallback"
      :width="width"
    />
  </picture>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'EmbeddedImage',

  props: {
    alt: {
      default: `image-${+new Date()}`,
      type: String,
    },

    height: {
      default: undefined,
      type: [Number, String],
    },

    src: {
      required: true,
      type: String,
    },

    type: {
      default: 'image/webp',
      type: String,
    },

    origin: {
      default: null,
      type: String,
    },

    width: {
      default: undefined,
      type: [Number, String],
    },
  },

  computed: {
    fallback(): string {
      return this.origin || this.src
    },
  },
})
</script>
