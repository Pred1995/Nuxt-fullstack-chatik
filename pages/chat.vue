<template>
  <div class="main__content" ref="chatik">
    <div class="main__chat">
      <v-message v-for="mes in messages" :key="mes.text" :name="mes.name" :text="mes.text" :owner="mes.id === user.id"/>
    </div>
  </div>
</template>

<script>
import vMessage from '@/components/main/v-message'
import { mapState } from 'vuex'
export default {
  name: 'chat',
  layout: 'chat',
  computed: mapState(['user', 'messages']),
  components: {
    vMessage
  },
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
  middleware: ['chat'],
  head () {
    return {
      title: `Комната ${this.user.room}`
    }
  },
  watch: {
    messages () {
      setTimeout(() => {
        // this.window.scrollTop = this.window.scrollHeight
      })
    }
  }
}
</script>

<style scoped>
  .main__content {
    position: relative;
    overflow: hidden;
    height: 100%;
    margin-top: 80px;
    margin-bottom: 5rem;
  }
</style>
