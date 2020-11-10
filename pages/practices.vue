<template>
  <div class="box">
    <v-header />

    <div class="body">
      <div class="bg-container">
        <h1>Практики</h1>
      </div>
      <div class="container">
        <h3 class="content__title">Практики</h3>
        <ol class="content">
          <li v-for="item in $options.PRACTICIES" :key="item.title" class="content__item">
            <span @click="onClickPracticy(item.id)">{{ item.title }}</span>
          </li>
        </ol>
        <template v-for="item in $options.PRACTICIES">
          <div :id="item.id" :key="item.title" class="practicy">
            <div class="practicy__title">
              {{ item.title }}
            </div>
            <div class="practicy__content" v-html="item.description" />
          </div>
        </template>
      </div>
    </div>
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
import runJquery from '@/lib/mixins/runJquery'
import PRACTICIES from '@/assets/practicies'
import scrollToBlock from '@/lib/scrollToBlock'

export default {
  name: 'PagePractices',

  PRACTICIES,

  components: {
    VHeader,
    VFooter
  },

  mixins: [runJquery],

  methods: {
    onClickPracticy (id) {
      scrollToBlock(id)
    }
  },

  async mounted () {
    const id = this.$route?.params?.id

    if (id) {
      setTimeout(() => {
        scrollToBlock(id)
      }, 100)
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.body {
  flex-grow: 1;
}

.bg-container {
  padding: 220px 0;
  margin-bottom: 60px;
  background-image: url('/images/practice-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

h1 {
  text-align: center;
  color: white;
  font-size: 64px;
}

.content__title {
  font-size: 38px;
}

.content {
  margin-bottom: 60px;
}

.content li {
  margin-bottom: 4px;
}

.content span {
  cursor: pointer;
  text-decoration: underline;
}

.content span:hover {
  color: grey;
}

.practicy {
  margin-bottom: 40px;
}

.practicy__title {
  font-size: 28px;
}

.practicy__content {
}
</style>
