<template>
  <div class="app-mobile">
    <app-header-mobile />
    <Nuxt />
  </div>
</template>

<script>
import AppHeaderMobile from '../components/layout/app-header/app-header-mobile.vue'
export default {
  components: {
    AppHeaderMobile
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
