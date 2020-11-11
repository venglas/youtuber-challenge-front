<template>
  <button class="button button--base" :class="{ 'button--disactivated': !active }" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: { type: String, default: '' },
    active: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.button {
  &--base {
    width: 100%;
    height: 3.5rem;
    background-color: $C_base-focused-input-border;
    color: $C_light-base-bg;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1.4rem;
    border-radius: 4px;
    &:hover {
      background-color: $C_light-base-bg;
      color: $C_base-focused-input-border;
      border: 2px solid $C_base-focused-input-border;
    }
  }
  &--disactivated {
    background-color: $C_light-gray-font;
    cursor: not-allowed;
  }
}
</style>
