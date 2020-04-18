<template>
  <ul class="list-disc">
    <li v-for="item in items" :key="item.to">
      <external-link :href="item.to" :text="item.text" />

      <template v-if="item.description">
        <span class="mx-1 select-none">-</span>
        <span v-text="item.description" />
      </template>
    </li>
  </ul>
</template>

<script>
import ExternalLink from '~/components/external-link.vue'

export default {
  name: 'LinksList',

  components: {
    ExternalLink,
  },

  props: {
    items: {
      required: true,
      type: Array,
    },
  },
}
</script>
