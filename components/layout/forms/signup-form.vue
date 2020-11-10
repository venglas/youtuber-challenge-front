<template>
  <form @submit.prevent="signIn()">
    <form-input name="email" type="email" data-mutation-entry="userSignup/setEmail" required />
    <form-input name="password" type="password" data-mutation-entry="userSignup/setPassword" required />
    <form-input name="confirm" type="password" data-mutation-entry="userSignup/setConfirmPassword" required />

    <button-base type="submit">
      Sign up
    </button-base>
  </form>
</template>

<script lang="ts">
export default {
  setup (_, { root: { $store, $axios } }) {
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
      })
    }

    return {
      signIn
    }
  }
}
</script>
