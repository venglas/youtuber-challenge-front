.<template>
  <header class="app-header--mobile">
    <logo />
    <searcher />
    <user-avatar @click.native="toggleMenu"/>
  </header>
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

    return { toggleMenu }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.app-header {
  &--mobile {
    @include shadow-box-small;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: $S_mobile_header_height;
    background-color: $C_light-header;
  }
}
</style>
