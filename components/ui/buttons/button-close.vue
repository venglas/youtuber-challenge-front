<template>
  <button class="button button--close">
    <i-close />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.button {
  &--close {
    @include space-p-med;
    width: 4rem;
    height: auto;
    border-radius: 50%;
    background-color: $C_light-icon-bg;
  }
}
</style>