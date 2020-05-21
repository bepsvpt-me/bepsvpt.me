<template>
  <a
    class="text-blue-700"
    :href="href"
    referrerpolicy="same-origin"
    rel="noopener"
    :target="target"
    v-text="text"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ExternalLink',

  props: {
    href: {
      required: true,
      type: String,
    },

    target: {
      default: '_self',
      type: String,
      validator: (value) => ['_self', '_blank'].includes(value),
    },

    text: {
      default() {
        return this.href
      },
      type: String,
    },
  },
})
</script>
