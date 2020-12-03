<template>
  <div>
    <v-header />

    <div class="hero-wrap js-fullheight" style="background-image: url('images/bg_1.jpg');"
         data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container-fluid px-md-5">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
             data-scrollax-parent="true">
          <div class="col ftco-animate">
<!--            <h2 class="subheading">Юридична компанія</h2>-->
            <h1 class="mb-4 intro-title">Юридична компанія</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section ftco-no-pb ftco-no-pt services-section">
      <div class="container-fluid px-md-5 py-3">
        <div class="row py-4 d-flex">
          <div class="col-md-3 text-center services align-self-stretch ftco-animate">
            <div class="media-body">
              <span class="num">01</span>
              <h3 class="heading mb-3"><a href="#">Отримайте юридичну консультацію</a></h3>
              <p>Far far away, behind the word mountains, far from the countries</p>
            </div>
          </div>
          <div class="col-md-3 text-center services align-self-stretch ftco-animate">
            <div class="media-body">
              <span class="num">02</span>
              <h3 class="heading mb-3"><a href="#">Супровід бізнесу</a></h3>
              <p>Far far away, behind the word mountains, far from the countries</p>
            </div>
          </div>
          <div class="col-md-3 text-center services align-self-stretch ftco-animate">
            <div class="media-body">
              <span class="num">03</span>
              <h3 class="heading mb-3"><a href="#">Помірна ціни за послуги</a></h3>
              <p>Far far away, behind the word mountains, far from the countries</p>
            </div>
          </div>
          <div class="col-md-3 text-center services align-self-stretch ftco-animate">
            <div class="media-body">
              <span class="num">04</span>
              <h3 class="heading mb-3"><a href="#">Експертиза в документах справи</a></h3>
              <p>Far far away, behind the word mountains, far from the countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-no-pt">
      <div class="container">
        <div class="row d-flex">
          <div class="col-sm-6 d-flex">
            <div
              class="img d-flex  align-items-start justify-content-center justify-content-md-center pt-5">
              <img src="images/main/LAS.jpg" alt="">
            </div>
          </div>
          <div class="col-sm-6 p-3 px-md-5 py-4">
            <div class="row justify-content-start pt-3 pb-3">
              <div class="col-md-12 heading-section ftco-animate">
                <span class="subheading">Партнер. Адвокат</span>
                <h3 class="mb-4">Лизун Андрій Сергійович</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                  life
                  One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far
                  World
                  of Grammar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-no-pt ftco-no-pb">
      <div class="container">
        <div class="row d-flex">
          <div class="col-sm-6 p-3 px-md-5 py-4">
            <div class="row justify-content-start pt-3 pb-3">
              <div class="col-md-12 heading-section ftco-animate">
                <span class="subheading">Партнер. Адвокат</span>
                <h3 class="mb-4">Грищенко Ярослав Анатолійович</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                  life
                  One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far
                  World
                  of Grammar.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 d-flex">
            <div
              class="img d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end pt-5">
              <img src="images/main/GJA.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
      <div class="container">
        <div class="row no-gutters justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <span class="subheading">Послуги адвокатів</span>
            <h2 class="mb-4">Практики</h2>
          </div>
        </div>
        <div class="row no-gutters d-flex justify-content-center">
          <div v-for="item in $options.PRACTICIES" :key="item.id" class="col-md-4 text-center">
            <nuxt-link :to="practicyLink(item.id)" class="practice-area ftco-animate">
              <div class="icon d-flex justify-content-center align-items-center">
                <span :class="item.iconClassAttr" />
              </div>
              <h3>{{ item.title }}</h3>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <consultation />

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
import Consultation from '@/components/Consultation'

export default {
  name: 'PageIndex',

  PRACTICIES,

  components: {
    Consultation,
    VHeader,
    VFooter
  },

  methods: {
    practicyLink(id) {
      return {
        name: 'practices',
        params: { id }
      }
    }
  },

  mixins: [runJquery],
}
</script>

<style lang="scss" scoped>
@media (max-width: 576px) {
  h1.intro-title {
    text-align: center;
  }
}
a.practice-area {
  position: relative;  

  &::before, &::after {
    content: '';
    position: absolute;    
    top: 5%;
    right: 5%;
    bottom: 5%;
    left: 5%;
    transition: .5s;        
  }

  &::before {
    border-top: 2px solid #83b582;
    border-bottom: 2px solid #83b582;
    transform: scaleX(0);    
  }

  &::after {
    border-left: 2px solid #83b582;
    border-right: 2px solid #83b582;
    transform: scaleY(0);
  }

  &:hover {
    div {
      transform: scale(1.2);
    }
    &::before, &::after {
      transform: scale(1);
    }
  }
}

.media-body {
  transition: .2s;

  &:hover {
    transform: scale(1.1);
  }
}

</style>