<template>
  <div>
    <v-header />

    <div class="hero-wrap js-fullheight" style="background-image: url('images/bg_1.jpg');"
         data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container-fluid px-md-5">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
             data-scrollax-parent="true">
          <div class="col-md-6 ftco-animate">
            <h2 class="subheading">Адвокат в Луцьку</h2>
            <h1 class="mb-4">Кваліфікована юридична допомога</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section ftco-no-pb ftco-no-pt services-section">
      <div class="container-fluid px-md-5 py-3">
        <div class="row py-4 d-flex">
          <div class="col-md-3 services align-self-stretch ftco-animate">
            <div class="media-body">
              <span class="num">01</span>
              <h3 class="heading mb-3"><a href="#">Отримайте юридичну консультацію</a></h3>
              <p>Far far away, behind the word mountains, far from the countries</p>
            </div>
          </div>
          <div class="col-md-3 services align-self-stretch ftco-animate">
            <div class="media-body">
              <span class="num">02</span>
              <h3 class="heading mb-3"><a href="#">Супровід бізнесу</a></h3>
              <p>Far far away, behind the word mountains, far from the countries</p>
            </div>
          </div>
          <div class="col-md-3 services align-self-stretch ftco-animate">
            <div class="media-body">
              <span class="num">03</span>
              <h3 class="heading mb-3"><a href="#">Помірна ціни за послуги</a></h3>
              <p>Far far away, behind the word mountains, far from the countries</p>
            </div>
          </div>
          <div class="col-md-3 services align-self-stretch ftco-animate">
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
          <div class="col-md-6 d-flex">
            <div
              class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end">
              <img src="images/main/LAS.jpg" alt="">
            </div>
          </div>
          <div class="col-md-6 px-5 py-5">
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
          <div class="col-md-6 px-5 py-5">
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
          <div class="col-md-6 d-flex">
            <div
              class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end">
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
              <p>{{ item.shortDescription }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <consultation />

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-10 text-center heading-section ftco-animate">
            <span class="subheading">Приклади справ</span>
            <h2 class="mb-4">500+ Успішно завершених справ</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 ftco-animate">
            <div class="case img d-flex align-items-center justify-content-center"
                 style="background-image: url(images/case-1.jpg);">
              <div class="text text-center">
                <h3><a href="#">Legal Seperation</a></h3>
                <span>Corporate</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="case img d-flex align-items-center justify-content-center"
                 style="background-image: url(images/case-2.jpg);">
              <div class="text text-center">
                <h3><a href="#">Legal Seperation</a></h3>
                <span>Corporate</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="case img d-flex align-items-center justify-content-center"
                 style="background-image: url(images/case-3.jpg);">
              <div class="text text-center">
                <h3><a href="#">Legal Seperation</a></h3>
                <span>Corporate</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="case img d-flex align-items-center justify-content-center"
                 style="background-image: url(images/case-4.jpg);">
              <div class="text text-center">
                <h3><a href="#">Legal Seperation</a></h3>
                <span>Corporate</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="case img d-flex align-items-center justify-content-center"
                 style="background-image: url(images/case-5.jpg);">
              <div class="text text-center">
                <h3><a href="#">Legal Seperation</a></h3>
                <span>Corporate</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="case img d-flex align-items-center justify-content-center"
                 style="background-image: url(images/case-6.jpg);">
              <div class="text text-center">
                <h3><a href="#">Legal Seperation</a></h3>
                <span>Corporate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
