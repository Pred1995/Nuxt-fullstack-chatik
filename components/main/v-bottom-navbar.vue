<template>
  <b-navbar type="light" variant="light" class="site__navbar" fixed="bottom">
    <b-nav-form @keydown.enter.prevent="send" @submit.prevent="send">
      <b-form-input class="mr-sm-2 input-form" placeholder="Написать сообщение" v-model="text"></b-form-input>
      <b-button variant="outline-primary" class="my-2 my-sm-0" type="submit">Отправить</b-button>
    </b-nav-form>
  </b-navbar>
</template>

<script>
export default {
  name: 'v-bottom-navbar',
  data: () => ({
    text: ''
  }),
  methods: {
    send () {
      this.$socket.emit('createMessage', {
        text: this.text,
        id: this.$store.state.user.id
      }, (data) => {
        if (typeof data === 'string') {
          console.error(data)
        } else {
          this.text = ''
        }
      })
    }
  },
}
</script>

<style scoped lang="scss">
  .site__navbar {
    padding-left: 370px;
  }
  .input-form {
    width: 1050px;
  }
</style>
