.<template>
  <header class="app-header--mobile">
    <logo />
    <!-- searcher -->
    <!-- user avatar -->
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
    height: $S_mobile_header_height;
    border: 1px solid red;
  }
}
</style>
