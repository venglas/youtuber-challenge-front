<template>
  <div class="container">
    <signup-form v-if="signupStep === 0" />
    <signup-confirmation-form v-if="signupStep === 1" />
    <signup-username-selection v-if="signupStep === 2" />
  </div>
</template>

<script lang="ts">
import { computed } from '@nuxtjs/composition-api'

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
  setup (_, { root: { $store } }) {
    const signupStep = computed(() => $store.state.userSignup.signupStep)

    return {
      signupStep
    }
  }
}
</script>

<style></style>
