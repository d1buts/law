<template>
  <section id="consultation" class="ftco-consultation ftco-section img" style="background-image: url(images/bg_2.jpg);">
    <div class="overlay"></div>
    <div class="container">
      <div class="row d-md-flex justify-content-end">
        <div class="col-md-6 half p-3 p-md-5 ftco-animate heading-section">
          <span class="subheading">Звяжіться прямо зараз!</span>
          <h2 class="mb-4">Запис на консультацію</h2>
          <form action="#" class="consultation">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Ваше ім'я">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Телефон">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Тема">
            </div>
            <div class="form-group">
              <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Повідомлення" />
            </div>
            <div class="form-group">
              <input type="submit" value="Send message" class="btn btn-primary py-3 px-4">
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Consultation'
}
</script>

<style scoped>

</style>
