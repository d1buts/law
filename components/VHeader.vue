<template>
  <nav class="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container-fluid px-md-5">
      <nuxt-link class="navbar-brand" to="/">
        <img src="images/main/logo_white.png" alt="">
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><nuxt-link to="/practices/AAA" class="nav-link">practices</nuxt-link></li>
          <li class="nav-item"><a href="#" class="nav-link">Про нас</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Практики</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Відгуки</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Контакти</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'VHeader',
}
</script>
