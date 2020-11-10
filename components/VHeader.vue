<template>
  <nav class="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container-fluid px-md-5">
      <nuxt-link class="navbar-brand" to="/">
        <img src="images/main/logo_white.png" class="logo white" alt="">
        <img src="images/main/logo_dark.png" class="logo dark" alt="">
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">
              Головна
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/practices" class="nav-link">
              Практики
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a href="/" @click.prevent="onClickContacts" class="nav-link">
              Контакти
            </a>
          </li>
          <li class="nav-item">
            <a href="/" @click.prevent="onClickConsultation" class="nav-link">
              Консультація
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import scrollToBlock from '@/lib/scrollToBlock'

export default {
  name: 'VHeader',

  methods: {
    onClickConsultation () {
      scrollToBlock('consultation')
    },

    onClickContacts () {
      scrollToBlock('contacts')
    }
  }
}
</script>

<style scoped>
.logo {
  width: 220px;
}

.logo.white {
  width: 180px;
}

.logo.dark {
  display: none;
}

.navbar-brand {
  padding: 0;
}
.ftco-navbar-light.scrolled .logo.white {
  display: none;
}

.ftco-navbar-light.scrolled .logo.dark {
  display: block;
}
</style>
