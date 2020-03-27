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

    <section>
      <article v-for="group in groups" :key="group.key" class="mb-1">
        <h2 v-text="group.name" />

        <hr />

        <links-list :items="$data[group.key]" />
      </article>
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

      groups: [
        { name: 'Links', key: 'links' },
        { name: 'Project Sites', key: 'projects' },
        { name: 'Packages', key: 'packages' },
        { name: 'Experiments', key: 'experiments' }
      ],

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
          text: 'CCU PLUS',
          description: 'Course review for National Chung Cheng University.'
        },
        {
          to: 'https://laravel.bepsvpt.me',
          text: 'Top Laravel Packages',
          description: ' List top 1,000 downloads Laravel packages.'
        },
        {
          to: 'https://youtuber.bepsvpt.me',
          text: 'YouTuber Statistics',
          description: 'Track YouTuber channel and video statistics.'
        },
        {
          to: 'https://bookwalker.bepsvpt.me',
          text: 'BookWalker Searcher',
          description: 'Taiwan BOOK☆WALKER search tool.'
        }
      ],

      packages: [
        {
          to: 'https://github.com/bepsvpt/secure-headers',
          text: 'PHP Secure Headers',
          description: 'Add security related headers to HTTP response.'
        }
      ],

      experiments: [
        {
          to: 'https://github.com/bepsvpt/homebrew-updater',
          text: 'Homebrew Updater',
          description: 'Automatically check release of Homebrew formulas.'
        },
        {
          to: 'https://github.com/bepsvpt/remote-browser',
          text: 'Remote Browser',
          description: 'Use WebRTC to stream remote server puppeteer.'
        }
      ]
    }
  }
}
</script>
