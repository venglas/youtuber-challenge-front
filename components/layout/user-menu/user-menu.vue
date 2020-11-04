<template>
  <h1 v-click-outside="toggleMenu" v-if="isMenuOpen">user menu</h1>
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

</style>
