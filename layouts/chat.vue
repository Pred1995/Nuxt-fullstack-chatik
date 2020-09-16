<template>
  <div>
    <v-sidebar/>
    <v-navbar/>
    <b-container>
      <div style="height: 100%">
        <nuxt/>
      </div>
    </b-container>
    <v-bottom-navbar/>
  </div>
</template>

<script>
import vNavbar from '@/components/main/v-navbar'
import vSidebar from '@/components/main/v-sidebar'
import vBottomNavbar from '@/components/main/v-bottom-navbar'
export default {
  components: {
    vNavbar, vSidebar, vBottomNavbar
  },
  sockets: {
    connect () {
      console.log('Client IO connect')
    }
  }
}
</script>

<style lang="scss">
  .header__title {
    text-align: center;
    margin-top: 1.5rem;
  }
  .footer__form {
    margin-top: 130px;
  }
  .form__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .main__content {
    height: 100%;
    width: 100%;
  }

</style>


