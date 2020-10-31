<template>
  <nuxt-link :to="link" class="footer-link">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { computed } from '@vue/composition-api'
export default {
  props: {
    linkTo: { type: String, default: '' }
  },
  setup (props: any) {
    const link = computed((): String => `/${props.linkTo}`)

    return {
      link
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/space';

.footer-link {
  .icon {
    @include space-p-big;
    width: 70px;
  }
}
</style>
