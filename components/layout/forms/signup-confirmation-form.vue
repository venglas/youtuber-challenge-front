<template>
  <form @submit.prevent="confirmation()">
    <h2>Retype your confirmation code form email.</h2>
    <form-input name="confirm" type="text" data-mutation-entry="userSignup/setVerificationCode" required />
    <p v-if="confirmationError" class="error">
      Confirmation code is wrong.
    </p>
    <button-base type="submit">
      Confirm
    </button-base>
  </form>
</template>

<script>
import { computed, onMounted, ref } from '@nuxtjs/composition-api'

export default {
  setup (_, { root: { $store, $axios } }) {
    const email = computed(() => $store.state.userSignup.email)
    const verificationCode = computed(() => $store.state.userSignup.verificationCode)
    const confirmationError = ref(false)

    onMounted(() => {
      $axios.get('signup/confirmation-code', { params: { email } }).then((res) => {
        $store.commit('userSignup/setVerificationCodeApi', res.data[0].confirmationCode)
      })
    })

    const confirmation = () => {
      if (verificationCode.value === $store.state.userSignup.verificationCodeApi) {
        $store.commit('userSignup/setSignupStep', 2)
      } else {
        confirmationError.value = true
      }
    }

    return {
      confirmation,
      confirmationError
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins';
@import '@/assets/scss/variables';

.error {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: $C_base-error-font;
}
</style>
