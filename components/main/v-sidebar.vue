<template>
  <div>
        <b-sidebar id="sidebar-1" title="Sidebar" visible no-header shadow width="350px">
          <b-card header="Пользователи" no-body>
            <b-list-group flush v-for="u in users" :key="u.id">
              <b-list-group-item class="d-flex justify-content-between align-items-center" :active="u.id === user.id ? true : false">
                {{ u.name }}
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-sidebar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'v-sidebar',
  computed: mapState(['user', 'users']),
}
</script>

<style scoped lang="scss">
  .sidebar__title {
    padding-top: 1rem;
  }
  .sidebar__person {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
