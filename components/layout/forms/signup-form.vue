<template>
  <form @submit.prevent="signIn()">
    <form-input name="email" type="email" data-mutation-entry="userSignup/setEmail" required />
    <form-input name="password" type="password" data-mutation-entry="userSignup/setPassword" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" required />
    <form-input name="confirm" type="password" data-mutation-entry="userSignup/setConfirmPassword" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" required />

    <p class="error">
      {{error}}
    </p>

    <button-base type="submit">
      Sign up
    </button-base>
  </form>
</template>

<script lang="ts">
import { ref } from '@nuxtjs/composition-api'
export default {
  setup (_, { root: { $store, $axios } }) {
    const error = ref('')

    const signIn = () => {
      const { confirmPassword, email, password } = $store.state.userSignup

      $axios.post('signup', {
        email,
        password,
        retypedPassword: confirmPassword
      }).then((res: any) => {
        if (res.status === 201) {
          $store.commit('userSignup/setSignupStep', 1)
        }
      }).catch(err => {
        error.value = err.response.data.error
      })
    }

    return {
      signIn,
      error
    }
  }
}
</script>
