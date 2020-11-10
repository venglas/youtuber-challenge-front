<template>
  <transition name="opacity">
    <p v-if="msg.length > 4" class="error">
      {{ msg }}
    </p>
  </transition>
</template>

<script>
export default {
  props: {
    msg: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.error {
  font-size: 1.5rem;
  text-align: center;
  margin: 1.5rem 0;
  color: $C_base-error-font;
}
</style>
