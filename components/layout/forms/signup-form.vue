<template>
  <form-wrapper>
    <template v-slot:title>
      Create your Youtuber Challenge Acoount
    </template>

    <template v-slot:short-description>
      Fill fields below to go to next step
    </template>

    <template v-slot:form>
      <form @submit.prevent="signIn()" >
        <form-input name="email" type="email" data-mutation-entry="userSignup/setEmail" required />
        <form-input
          name="password"
          type="password"
          data-mutation-entry="userSignup/setPassword"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          active-info="Minimum 8 characters, at least one letter and one number"
          required
        />
        <form-input name="confirm" type="password" data-mutation-entry="userSignup/setConfirmPassword" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" required />

        <base-error-line :msg="error" />

        <button-base type="submit">
          Sign up
        </button-base>
      </form>
    </template>
  </form-wrapper>
</template>

<script lang="ts">
import { ref } from '@nuxtjs/composition-api'

export default {
  setup (_: any, { root: { $store, $axios } }) {
    const error = ref('')

    const signIn = (): void => {
      const { confirmPassword, email, password } = $store.state.userSignup

      interface data {
        email: string;
        password: string;
        retypedPassword: string;
      }

      const data: data = {
        email,
        password,
        retypedPassword: confirmPassword
      }

      $axios.post('signup', data).then((res: Response): void => {
        if (res.status === 201) {
          $store.commit('userSignup/setSignupStep', 1)
        }
      }).catch((err: any): void => {
        error.value = err.response.data.error
      })
    }

    return { signIn, error }
  }
}
</script>
