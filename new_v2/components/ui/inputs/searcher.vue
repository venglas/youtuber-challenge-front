<template>
  <div class="searcher" :class="{ 'searcher--full-size': isSearcherOpen }">
    <i-arrow v-show="isSearcherOpen" class="searcher__icon" @click.native="toggleSearcher" />
    <input
      ref="searcherInput"
      v-model="searchingText"
      type="text"
      class="searcher__input"
      placeholder="Search youtuber"
    >
    <i-loupe class="searcher__icon" @click.native="toggleSearcher" />
  </div>
</template>

<script lang="ts">
import { ref, watch } from '@vue/composition-api'

export default {
  setup () {
    const isSearcherOpen = ref<Boolean>(false)
    const searcherInput = ref<HTMLElement | null>(null)
    const searchingText = ref<String>('')

    const toggleSearcher = () => {
      isSearcherOpen.value = !isSearcherOpen.value
      searcherInput.value?.focus()
    }

    watch(isSearcherOpen, () => {
      if (isSearcherOpen.value === false) {
        searchingText.value = ''
        searcherInput.value?.blur()
      }
    })

    return {
      isSearcherOpen,
      toggleSearcher,
      searcherInput,
      searchingText
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/space';
@import '@/assets/scss/variables';

.searcher {
  display: flex;
  height: 3rem;
  &--full-size {
    @include space-p-h-med;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    background-color: #fff;
    justify-content: space-between;
    .searcher__input {
      @include space-p-small;
      border-bottom: 1px solid #000;
      height: 3rem;
      width: 75%;
      font-size: $S_base-font;
      opacity: 1;
    }
  }
  &__input {
    opacity: 0;
  }
  &__icon {
    width: 3.5rem;
    height: 3.5rem;
    @include space-p-med;
    background-color: $C_light-icon-bg;
    border-radius: 50%;
  }
}
</style>
