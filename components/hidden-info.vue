<template>
  <button v-if="!visible" type="button" @click="visible = true" v-text="text" />

  <input v-else readonly size="33" :value="value" @focus="onFocus" />
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      text: 'Show',
      visible: false
    }
  },

  methods: {
    onFocus({ target }) {
      requestAnimationFrame(() => {
        target.setSelectionRange(0, this.value.length)
      })
    }
  }
}
</script>

<style scoped>
button {
  @apply bg-gray-400;
}

button:hover {
  @apply bg-gray-600 text-gray-100;
}

input {
  @apply appearance-none;
  @apply px-2 w-full block bg-white;
  @apply border border-gray-300 rounded-lg;
}

input:focus {
  @apply shadow-outline;
}
</style>
