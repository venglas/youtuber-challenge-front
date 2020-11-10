<template>
  <div class="input-wrapper">
    <input
      :id="name"
      v-model="data"
      :type="type"
      :placeholder="name"
      class="input input--form"
      :required="required"
      :minlength="minlength"
    >
    <label :for="name" class="label" :style="{ backgroundColor: labelBg }">{{ name }}</label>
  </div>
</template>

<script>
import { ref, watch } from '@nuxtjs/composition-api'

export default {
  props: {
    labelBg: { type: String, default: '#f9f9f9' },
    name: { type: String, default: ' ' },
    type: { type: String, default: 'text' },
    dataMutationEntry: { type: String, default: '' },
    required: { type: Boolean, default: false },
    minlength: { type: Number, default: 0 }
  },
  setup (props, { root: { $store } }) {
    const data = ref('')

    watch(data, () => {
      $store.commit(props.dataMutationEntry, data.value)
    })

    return {
      data
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.input-wrapper {
  margin: 2rem 0;
  position: relative;
  .label {
    position: absolute;
    top: -7px;
    left: 5px;
    padding: 0 7px;
    z-index: 999;
    font-size: 1.2rem;
    font-weight: 100;
    color: $C_base-focused-input-border;
    opacity: 0;
    transition: opacity ease-in-out 250ms;
  }
  .input {
    &--form {
      height: 3rem;
      border: 1px solid $C_input-border;
      width: 100%;
      position: relative;
      @include space-p-h-med;
      &:focus {
        border-color: $C_base-focused-input-border;
        &::placeholder {
          transition: color ease-in-out 250ms;
          color: transparent;
        }
        + .label {
          opacity: 1;
        }
      }
    }
  }
}
</style>
