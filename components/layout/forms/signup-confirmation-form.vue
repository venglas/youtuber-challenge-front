<template>
  <form-wrapper>
    <template v-slot:title>
      Retype your confirmation code form email.
    </template>

    <template v-slot:short-description>
      The code have to be 5 digits number.
    </template>

    <template v-slot:form>
      <form @submit.prevent="confirmation()">
        <form-input name="confirm" type="text" data-mutation-entry="userSignup/setVerificationCode" required />

        <base-error-line :msg="confirmationError" />

        <button-base type="submit" :active="activeButton">
          Confirm
        </button-base>
      </form>
    </template>
  </form-wrapper>
</template>

<script>
import { computed, onMounted, ref } from '@nuxtjs/composition-api'

export default {
  setup (_, { root: { $store, $axios } }) {
    const email = computed(() => $store.state.userSignup.email)
    const verificationCode = computed(() => $store.state.userSignup.verificationCode)
    const confirmationError = ref('')

    const activeButton = computed(() => {
      if (verificationCode.value.length !== 5) {
        return false
      }
      return true
    })

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

    return { confirmation, confirmationError, activeButton }
  }
}
</script>

<style lang="scss">
</style>
