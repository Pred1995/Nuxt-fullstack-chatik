<template>
  <b-container>
    <p class="text-center">Ошибка 404. Страница не найдена!</p>
  </b-container>
</template>

<script>
export default {
  name: 'error',
  beforeCreate() {
    this.$router.push('/chat')
  }
}
</script>

<style scoped>

</style>
