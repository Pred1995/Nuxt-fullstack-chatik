<template>
  <div>
    <div v-if="name === 'admin'" class="system">
      <b-row>
        <b-col md="12" class="text-center">{{ text }}!</b-col>
      </b-row>
      <hr>
    </div>
    <div v-else class="mes">
      <b-row>
        <b-col md="6" :offset-md="owner === true ? 6 : 0">
          <b-card :title="name">
            <b-card-text>
              {{ text }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-message',
  props: {
    name: String,
    text: String,
    owner: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  .system {
    margin-top: 10px;
    margin-bottom: 1rem;

  }
  .mes {
    margin-top: 10px;
  }

</style>
