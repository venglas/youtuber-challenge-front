.<template>
  <header class="app-header--mobile">
    <logo />
    <searcher />
    <user-avatar />
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.app-header {
  &--mobile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: $S_mobile_header_height;
    background-color: $C_light-header;
  }
}
</style>
