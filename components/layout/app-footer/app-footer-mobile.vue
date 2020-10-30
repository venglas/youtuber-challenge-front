<template>
  <footer class="app-footer--mobile">
    <footer-link link-to="home">
      <i-home class="icon" />
    </footer-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.app-footer {
  &--mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: $S_mobile_header_height;
    background-color: $C_light-header;
  }
}
</style>
