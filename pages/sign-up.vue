<template>
  <div class="container">
    <form v-if="firstStage" @submit.prevent="signIn()">
      <form-input name="email" type="email" data-mutation-entry="userSignup/setEmail" />
      <form-input name="password" type="password" data-mutation-entry="userSignup/setPassword" />
      <form-input name="confirm" type="password" data-mutation-entry="userSignup/setConfirmPassword" />

      <button-base>
        Sign up
      </button-base>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from '@nuxtjs/composition-api'

export default {
  layout: 'mobile',
  head () {
    return {
      title: 'Youtuber Challenge, rzuć wyzwanie youtuberowi! Zarejestruj się.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Znajdź swojego ulubionego youtubera i rzuć mu wyzwanie. Rejestracja.'
        }
      ]
    }
  },
  setup (_, { root: { $store, $axios } }) {
    const firstStage = ref(true)

    const signIn = () => {
      const { confirmPassword, email, password } = $store.state.userSignup

      $axios.post('signup', {
        email,
        password,
        retypedPassword: confirmPassword
      }).then((res: any) => {
        if (res.status === 201) {
          firstStage.value = false
        }
      })
    }

    return {
      signIn,
      firstStage
    }
  }
}
</script>

<style></style>
