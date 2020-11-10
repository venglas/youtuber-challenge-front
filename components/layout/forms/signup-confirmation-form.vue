<template>
  <form @submit.prevent="confirmation()">
    <h2>Retype your confirmation code form email.</h2>
    <form-input name="confirm" type="text" data-mutation-entry="userSignup/setVerificationCode" required />

    <base-error-line :msg="confirmationError" />

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
    const confirmationError = ref('')

    onMounted(() => {
      $axios.get('signup/confirmation-code', { params: { email } }).then((res) => {
        $store.commit('userSignup/setVerificationCodeApi', res.data[0].confirmationCode)
      })
    })

    const confirmation = () => {
      if (verificationCode.value === $store.state.userSignup.verificationCodeApi) {
        $store.commit('userSignup/setSignupStep', 2)
      } else {
        confirmationError.value = 'Confirmation code is wrong.'
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
</style>
