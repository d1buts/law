<template>
  <footer id="contacts" class="ftco-footer ftco-bg-dark ftco-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-3">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Про компанію</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts.</p>
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
              <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-5">
          <div class="ftco-footer-widget mb-4 ml-md-5">
            <h2 class="ftco-heading-2">Практики</h2>
            <ul class="list-unstyled">
              <li v-for="item in $options.PRACTICIES" :key="item.id">
                <nuxt-link :to="practicyLink(item.id)" class="py-1 d-block">
                  <span class="ion-ios-arrow-forward mr-3" />
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Контакти</h2>
            <div class="block-23 mb-3">
              <ul>
                <li><span class="icon icon-map-marker"></span><span class="text">м. Луцьк, проспект Волі 21</span>
                </li>
                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+380666004123</span></a>
                </li>
                <li><a href="#"><span class="icon icon-envelope"></span><span
                  class="text">info@yourdomain.com</span></a>
                </li>
              </ul>
            </div>
            <div class="opening-hours">
              <h4>Графік рботи:</h4>
              <p class="pl-3">
                <span>Понеділок – п'ятниця : з 9.00 до 18.00</span>
                <span>Субота : з 9.00 до 16.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">

          <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; {{ date }}
            All rights reserved | This template is made with <i class="icon-heart color-danger"
                                                                aria-hidden="true"></i> by
            <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import PRACTICIES from '@/assets/practicies'

export default {
  name: 'VFooter',

  PRACTICIES,

  data () {
    return {
      date: new Date().getFullYear()
    }
  },

  methods: {
    practicyLink (id) {
      return {
        name:   'practices',
        params: { id }
      }
    },
  }
}
</script>
