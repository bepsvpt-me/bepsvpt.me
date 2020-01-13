<template>
  <main>
    <section>
      <embedded-image
        alt="logo"
        class="inline-block"
        :origin="require('~/assets/img/logo.jpg')"
        :src="require('~/assets/img/logo.webp')"
        width="256"
      />

      <div class="sm:ml-4 sm:inline-block align-top">
        <h2>Nickname</h2>

        <p>bepsvpt</p>

        <h2 class="mt-3">Email</h2>

        <button
          v-if="!emailVisible"
          class="email-button"
          @click="emailVisible = true"
          v-text="'Show'"
        />

        <p v-else v-text="email" />

        <h2 class="mt-4">Links</h2>

        <links-list :items="links" />
      </div>
    </section>

    <hr class="mt-4" />

    <section class="whitespace-no-wrap">
      <div class="three-columns">
        <h2>Projects</h2>

        <links-list :items="projects" />
      </div>

      <div class="three-columns">
        <h2>Packages</h2>

        <links-list :items="packages" />
      </div>

      <div class="three-columns">
        <h2>Experiments</h2>

        <links-list :items="experiments" />
      </div>
    </section>
  </main>
</template>

<script>
import EmbeddedImage from '~/components/embedded-image.vue'
import LinksList from '~/components/links-list.vue'

export default {
  components: {
    EmbeddedImage,
    LinksList
  },

  data() {
    return {
      email: 'nsevd0ub6rqvkhu@infinitefa.email',

      emailVisible: false,

      links: [
        {
          to: 'https://blog.bepsvpt.me',
          text: 'Blog'
        },
        {
          to: 'https://github.com/bepsvpt',
          text: 'GitHub'
        }
      ],

      projects: [
        {
          to: 'https://ccu.plus',
          text: 'CCU PLUS'
        },
        {
          to: 'https://laravel.bepsvpt.me',
          text: 'Top Laravel Packages'
        }
      ],

      packages: [
        {
          to: 'https://github.com/bepsvpt/secure-headers',
          text: 'PHP Secure Headers'
        }
      ],

      experiments: [
        {
          to: 'https://github.com/bepsvpt/homebrew-updater',
          text: 'Homebrew Updater'
        },
        {
          to: 'https://github.com/bepsvpt/remote-browser',
          text: 'Remote Browser'
        }
      ]
    }
  }
}
</script>

<style scoped>
.email-button {
  @apply bg-gray-400;
}

.email-button:hover {
  @apply bg-gray-600 text-gray-100;
}

.three-columns {
  @apply mt-3;
  @apply whitespace-normal;
}

@screen md {
  .three-columns {
    @apply inline-block;
    @apply align-top;
    @apply w-1/3;
  }
}
</style>
