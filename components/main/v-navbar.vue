<template>
  <b-navbar toggleable="sm" type="light" variant="light" class="site__navbar" fixed="top">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <div class="header__title">
      <b-button variant="link" v-b-toggle.sidebar-1><span class="material-icons">reorder</span></b-button>
      <b-button variant="link" @click="exit"><span class="material-icons">keyboard_arrow_left</span></b-button>
      <div style="font-size: 18px">Комната {{ user.room }}</div>
    </div>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'v-navbar',
  computed: mapState(['user']),
  methods: {
    ...mapMutations(['clearData']),
    message () {
      this.$socket.emit('createMessage', {
        text: 'FROME CLIENT'
      })
    },
    exit () {
      this.$socket.emit('userLeft', this.user.id, () => {
        this.$router.push('/login?message=leftChat')
        this.clearData()
      })
    }
  }
}
</script>

<style scoped lang="scss">
 .site__navbar {
   padding-left: 350px;
 }
 .header__title {
   display: flex;
   margin-top: 5px;
   justify-content: space-between;
   align-items: center;
 }

</style>
