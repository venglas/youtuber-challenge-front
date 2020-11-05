<template>
  <div class="app-mobile">
    <app-header-mobile />
    <user-menu />
    <main>
      <Nuxt />
    </main>
    <app-footer-mobile />
  </div>
</template>

<script>
import { onMounted, computed } from '@nuxtjs/composition-api'
import AppHeaderMobile from '../components/layout/app-header/app-header-mobile.vue'

export default {
  components: {
    AppHeaderMobile
  },
  setup (_, { root: { $store } }) {
    const appWidth = computed(() => $store.state.app.appWidth)
    onMounted(() => {
      console.log(appWidth.value)
      $store.commit('app/setApplicationWidth', innerWidth)
      console.log(appWidth.value)
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/reset';
@import '@/assets/scss/base';
@import '@/assets/scss/variables';
.app-mobile {
  background-color: $C_light-base-bg;
  min-height: 100vh;
}
</style>
