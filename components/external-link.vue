<template>
  <a
    class="text-blue-500"
    :href="href"
    referrerpolicy="same-origin"
    rel="noopener"
    :target="target"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'ExternalLink',

  props: {
    href: {
      required: true,
      type: String
    },

    target: {
      default: '_self',
      type: String,
      validator: (value) => ['_self', '_blank'].includes(value)
    },

    text: {
      default: () => this.href,
      type: String
    }
  }
}
</script>
