// TODO:
// Add other options for menu
// hide element if user is logged out

<template>
  <nav class="menu-user" v-if="isMenuOpen" v-click-outside="toggleMenu">
    <ul>
      <li>signup</li>
      <li>login</li>
      <li>feedback</li>
      <li>help</li>
    </ul>
  </nav>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'
import clickOutside from 'vue-click-outside'

export default {
  directives: {
    clickOutside
  },
  setup(_, {root: { $store } }) {
    const isMenuOpen = computed(() => $store.state.app.menu.isOpen)
    const toggleMenu = () => { $store.commit('app/toggleMenu') }

    return { isMenuOpen, toggleMenu }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.menu-user {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: $C_light-user-menu-bg;
  @include position-max;
}
</style>
