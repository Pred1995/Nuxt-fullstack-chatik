<template>
  <div>
    <b-card class="mx-auto card__login" style="width: 800px;"  bg-variant="light">
      <b-card-title>Nuxt чатик</b-card-title>
      <b-card-body><b-form @submit.stop.prevent="onSubmit">
        <b-form-group id="example-input-group-1" label="Имя" label-for="example-input-1">
          <b-form-input
            id="example-input-1"
            name="example-input-1"
            v-model="$v.form.name.$model"
            :state="validateState('name')"
            aria-describedby="input-1-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="input-1-live-feedback"
          >Ваше имя не должно быть пустым.</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group id="example-input-group-2" label="Комната" label-for="example-input-2">
          <b-form-input
            id="example-input-2"
            name="example-input-2"
            v-model="$v.form.room.$model"
            :state="validateState('room')"
            aria-describedby="input-2-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
            id="input-2-live-feedback">
            Введите комнату.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-button type="submit" pill variant="outline-secondary">Войти</b-button>
      </b-form></b-card-body>
    </b-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import { mapMutations } from 'vuex'
export default {
  name: 'login',
  layout: 'empty',
  head: {
    title: 'Добро пожаловать в Nuxt чат'
  },
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: null,
        room: null
      },
      message: ''
    };
  },
  mounted () {
    const { message } = this.$route.query
    if (message === 'noUser') {
      this.message = 'Введите данные'
      this.onModalBox('Введите данные')
    } else if (message === 'leftChat') {
      this.message = 'Вы вышли из чата'
      this.onModalBox('Вы вышли из чата')
    }
  },
  validations: {
    form: {
      room: {
        required
      },
      name: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onModalBox (text) {
      this.$bvModal.msgBoxOk(text, {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'success',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      const user = {
        name: this.form.name,
        room: this.form.room
      }
      this.$socket.emit('userJoined', user, data => {
        if (typeof data === 'string') {
          console.error(data)
        } else {
          user.id = data.userId
          this.setUser(user)
          this.$router.push('/chat')
        }
      })
    },

  }

}
</script>

<style scoped>
  .card__login {
    margin-top: 8rem;
  }
</style>
