// TODO:
// hide login and sign up when user is logged in
// add log out id user is logged in
// add links
<template>
<transition name="toggle-user-menu">
  <nav class="menu-user" v-if="isMenuOpen" v-click-outside="toggleMenu">
    <header class="menu-user__header">
      <logo />
      <button-close @click.native="toggleMenu" class="menu-user__button-close"/>
    </header>
    <section class="menu-items-wrapper">
      <ul class="menu">
        <router-link v-for="{ name, icon, link } in menuItems" :key="name" class="menu__item" :to="link" @click.native="toggleMenu()" tag="li">
          <component :is="icon" class="menu__icon"/>
          <span>
            {{ name }}
          </span>
        </router-link>
      </ul>
    </section>
  </nav>
</transition>
</template>

<script>
import { computed, ref } from '@nuxtjs/composition-api'
import clickOutside from 'vue-click-outside'
import iSignUp from '@/components/layout/icons/i-sign-up'
import iLogin from '@/components/layout/icons/i-login'
import iFeedback from '@/components/layout/icons/i-feedback'
import iHelp from '@/components/layout/icons/i-help'
import iSettings from '@/components/layout/icons/i-settings'

export default {
  directives: {
    clickOutside
  },
  setup(_, {root: { $store } }) {
    const isMenuOpen = computed(() => $store.state.app.menu.isOpen)
    const toggleMenu = () => { $store.commit('app/toggleMenu') }
    // const delayedToggleMenu = () => setTimeout(() => {
    //   $store.commit('app/toggleMenu')
    // }, 250)
    const menuItems = ref([
      { name: 'Sign up', icon: iSignUp, link: '/sign-up' },
      { name:'Login', icon: iLogin, link: '/sign-up' },
      { name: 'Feedback', icon: iFeedback, link: '/sign-up' },
      { name: 'Help', icon: iHelp, link: '/sign-up' },
      { name: 'Settings', icon: iSettings, link: '/sign-up' }
    ])

    return { isMenuOpen, menuItems, toggleMenu }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';
@import '@/assets/scss/helpers';
@import '@/assets/scss/vue-transitions';

.menu-user {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: $C_light-base-bg;
  @include position-max;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $S_mobile_header_height;
    @include shadow-box-small;
    @include space-p-h-med;
    background-color: $C_light-user-menu-bg;
    .button-close {}
  }
  .menu-items-wrapper {
    @include space-p-big;
    .menu {
      &__item {
        height: 5rem;
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: $C_light-gray-font;
        @include space-p-h-med;
        @include animate-bg-on-click(400ms, #fff);
      }
      &__icon {
        height: 70%;
        margin-right: 4rem;
        svg {
          width: auto;
        }
      }
    }
  }
}
</style>
