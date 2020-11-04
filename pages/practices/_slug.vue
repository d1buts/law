<template>
  <div>
    <v-heaeder />

    <nuxt-link to="/">HOME</nuxt-link>
    <v-footer />

    <!-- loader -->
    <div id="ftco-loader" class="show fullscreen">
      <svg class="circular" width="48px" height="48px">
        <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
        <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
                stroke="#F96D00" />
      </svg>
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VFooter from '@/components/VFooter'

export default {
  name: 'PagePractices',

  components: {
    VHeader,
    VFooter,
  },

  mounted () {
    if (window.XXX) {
      window.XXX()
    }
  }
}
</script>
