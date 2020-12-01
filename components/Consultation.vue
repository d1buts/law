<template>
  <section id="consultation" class="ftco-consultation ftco-section img" style="background: url(images/bg_2.jpg) no-repeat; background-size: cover; ">
    <div class="overlay"></div>
    <div class="container-lg">
      <div class="row d-md-flex justify-content-end form__wrapper">
        <div class="col-sm-8 col-md-6 half px-4 px-md-5 ftco-animate heading-section">
          <span v-if="form.submitStatus !== 'OK'" class="subheading">Звяжіться прямо зараз!</span>
          <h2 v-if="form.submitStatus !== 'OK'" class="mb-4">Запис на консультацію</h2>

          <form v-if="form.submitStatus !== 'OK'"
          @submit.prevent="submit"           
          class="consultation">

            <!-- NAME START -->
            <div 
              class="form-group" 
              :class="{ 'form-group--error': $v.form.name.$invalid && form.submitStatus === 'ERROR' }">

              <label class="form-label" >
               Ваше ім'я *
              </label>

              <input 
                type="text"
                v-model.trim='$v.form.name.$model'
                class="form-control"
                placeholder="Введіть ваше ім'я"
              >                

                <!-- ERROR BLOCKS START -->

                <div class="error" v-if="!$v.form.name.required && form.submitStatus === 'ERROR'">Ім'я є обов'язковим полем</div>                               
                <div class="error" v-if="!$v.form.name.minLength && form.submitStatus === 'ERROR'">Ім'я повинно містити мінімум {{$v.form.name.$params.minLength.min}} літери</div>
                <div class="error" v-if="!$v.form.name.maxLength && form.submitStatus === 'ERROR'">Ім'я повинно містити максимум {{$v.form.name.$params.maxLength.max}} літер</div>
                <!-- ERROR BLOCKS END -->
            </div>

            <!-- NAME END -->

            <!-- PHONE NUMBER START -->

            <div 
              class="form-group" 
              :class="{ 'form-group--error': $v.form.phoneNumber.$invalid && form.submitStatus === 'ERROR' }"
            >

              <label class="form-label">Ваш номер телефону *</label>
              <input 
                type="text" 
                v-model.trim='$v.form.phoneNumber.$model'
                class="form-control" 
                placeholder="0991234567"
              >

              <div class="error" v-if="!$v.form.phoneNumber.required && form.submitStatus === 'ERROR'">Номер телефону є обов'язковим полем</div>
              <div class="error" v-if="!$v.form.phoneNumber.numeric && form.submitStatus === 'ERROR'">Номер телефона може містити тільки цифри</div>
              <div class="error" v-else-if="!$v.form.phoneNumber.minLength && form.submitStatus === 'ERROR'">Номер телефона повинен містити мінімум {{$v.form.phoneNumber.$params.minLength.min}} цифер</div>
              <div class="error" v-else-if="!$v.form.phoneNumber.maxLength && form.submitStatus === 'ERROR'">Номер телефона повинен містити максимум {{$v.form.phoneNumber.$params.maxLength.max}} цифер</div>               
            </div>

            <!-- PHONE NUMBER END -->

            <div class="form-group">
              <label class="form-label">Тема повідомлення</label>
              <input type="text" class="form-control" placeholder="Супровід бізнесу ...">
            </div>

            <div class="form-group form-group_text-area">              
              <label class="form-label">Повідомлення</label>
              <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="Повідомлення" />
            </div>

            <div class="form-group">
              <input type="submit" :value="form.submitValue" :disabled="form.submitStatus === 'PENDING'" class="btn btn-primary py-3 px-4">
              
              <p class="submit-status" v-if="form.submitStatus === 'ERROR'">Будь ласка, заповніть поля правильно</p>              
            </div>
          </form>

          <p class="submit-answer" v-if="form.submitStatus === 'OK'">Дякуємо за звернення. <br> Ми зателефонуємо Вам найближчим часом.</p>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'Consultation',
  data() {
    return {
      form: {
        name: '',
        phoneNumber: '',
        submitStatus: null,
        submitValue: 'Віправити'
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(40)
      },
      phoneNumber: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10)
      }
    }    
    
    // phoneNumber: {
    //   required,
    //   minLength: minLength(10)
    // }
  },
  methods: {    
    submit() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        this.form.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.form.submitStatus = 'PENDING'
        this.form.submitValue = 'Відправлення...'     
        setTimeout(() => {
          this.form.submitStatus = 'OK'
        }, 2000)
      }
    }
  },  
}
</script>

<style lang="scss" scoped>


.form__wrapper {
  min-height: 670px;
}

.form-group {
  margin-bottom: 0;
  min-height: 99px;
}

.form-label {
  margin-bottom: 0;
  font-size: 14px;
  line-height: 14px;
  padding-left: 5px;
  color: #fff;
  text-shadow: 2px 1px 5px black;  
}

.form-group--error {
  .form-label {
    color: red;
    text-shadow: 2px 2px 10px#647c70;
  }
  .form-control {
    border: 2px solid red;
  }  
}

.error {
  color: #1a4719;
  padding: 5px 5px 0;
  font-size: 14px;
  line-height: 14px;
  text-shadow: 2px 2px 10px #fff;
}

.form-group_text-area {  
  margin-bottom: 15px;

  .form-control {
    resize: none;
  }
}

.submit-status {
  color: #1a4719;
  text-shadow: 2px 1px 5px #fff; 
  font-size: 16px;
  font-weight: 600;
}

.ftco-section {
  padding: 50px 0
}


.submit-answer {
  font-size: 30px;
  color: #1a4719;
  text-shadow:2px 1px 5px #fff;
  font-weight: 600;
  text-align: center;
  margin-top: 50%;  
}
</style>
