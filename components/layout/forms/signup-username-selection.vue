<template>
  <form @submit.prevent="setNickname()">
    <h2>Select your nickname</h2>

    <form-input name="Nickname" type="text" data-mutation-entry="userSignup/setUsername" required />

    <button-base type="submit">
      Confirm
    </button-base>
  </form>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'
export default {
  setup (_, { root: { $store, $axios, $router } }) {
    const username = computed(() => $store.state.userSignup.username)
    const email = computed(() => $store.state.userSignup.email)
    const setNickname = () => {
      $axios.patch('signup/set-username', { username: username.value, email: email.value }).then(res => {
        if (res.status === 201) {
          $router.push('/home')
          // TODO: login with this credentials
        }
      })
    }

    return {
      setNickname
    }
  }
}
</script>

<style>

</style>
