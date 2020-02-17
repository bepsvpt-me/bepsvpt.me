<template>
  <main>
    <section>
      <embedded-image
        alt="logo"
        class="inline-block w-full md:w-64"
        :origin="require('~/assets/img/logo.jpg')"
        :src="require('~/assets/img/logo.webp')"
      />

      <div class="sm:ml-4 sm:inline-block align-top">
        <h1>bepsvpt</h1>

        <h2>Email</h2>

        <hidden-info :value="email" />

        <h2 class="mt-2">Riot(Matrix)</h2>

        <hidden-info :value="riot" />
      </div>
    </section>

    <hr class="mt-2" />

    <section class="whitespace-no-wrap">
      <div class="four-columns">
        <h2>Links</h2>

        <links-list :items="links" />
      </div>

      <div class="four-columns">
        <h2>Projects</h2>

        <links-list :items="projects" />
      </div>

      <div class="four-columns">
        <h2>Packages</h2>

        <links-list :items="packages" />
      </div>

      <div class="four-columns">
        <h2>Experiments</h2>

        <links-list :items="experiments" />
      </div>
    </section>
  </main>
</template>

<script>
import EmbeddedImage from '~/components/embedded-image.vue'
import HiddenInfo from '~/components/hidden-info.vue'
import LinksList from '~/components/links-list.vue'

export default {
  components: {
    EmbeddedImage,
    HiddenInfo,
    LinksList
  },

  data() {
    return {
      email: 'hello@infinitefa.email',

      riot: '@me3rmzhwpfol1rh:matrix.bepsvpt.me:443',

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
        },
        {
          to: 'https://youtuber.bepsvpt.me',
          text: 'YouTuber Statistics'
        },
        {
          to: 'https://bookwalker.bepsvpt.me',
          text: 'BookWalker Searcher'
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
.four-columns {
  @apply mt-2;
  @apply whitespace-normal;
}

@screen md {
  .four-columns {
    @apply inline-block;
    @apply align-top;
    @apply w-1/4;
  }
}
</style>
