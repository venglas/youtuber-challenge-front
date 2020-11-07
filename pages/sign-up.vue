<template>
  <div class="container">
    <form @submit.prevent="signIn()">
      <form-input name="username" type="text" data-mutation-entry="userSignup/setUsername" />
      <form-input name="email" type="email" data-mutation-entry="userSignup/setEmail" />
      <form-input name="password" type="password" data-mutation-entry="userSignup/setPassword" />
      <form-input name="confirm" type="password" data-mutation-entry="userSignup/setConfirmPassword" />
      <input type="submit">
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
  setup () {
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')

    const signIn = () => { }

    return {
      username,
      email,
      password,
      confirmPassword,
      signIn
    }
  }
}
</script>

<style></style>
