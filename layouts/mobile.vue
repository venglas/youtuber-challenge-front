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
    'app-header-mobile': AppHeaderMobile
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
