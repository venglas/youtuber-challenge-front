<template>
  <form-wrapper>
    <template v-slot:title>
      Select your nickname
    </template>

    <template v-slot:short-description>
      You will be able to sign in with username
    </template>

    <template v-slot:form>
      <form @submit.prevent="setNickname()">
        <form-input name="Nickname" type="text" data-mutation-entry="userSignup/setUsername" required :minlength="3" />
        <base-error-line :msg="error" />

        <button-base button-base type="submit">
          Confirm
        </button-base>
      </form>
    </template>
  </form-wrapper>
</template>

<script>
import { computed, ref } from '@nuxtjs/composition-api'
export default {
  setup (_, { root: { $store, $axios, $router } }) {
    const username = computed(() => $store.state.userSignup.username)
    const email = computed(() => $store.state.userSignup.email)
    const error = ref('')
    const setNickname = () => {
      $axios.patch('signup/set-username', { username: username.value, email: email.value }).then((res) => {
        if (res.status === 201) {
          $router.push('/home')
          // TODO: dologin with this credentials
        }
      }).catch((err) => {
        error.value = err.response.data.msg
      })
    }

    return {
      setNickname,
      error
    }
  }
}
</script>

<style>

</style>
