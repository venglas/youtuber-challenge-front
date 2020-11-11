<template>
  <div class="container">
    <!-- TODO:
      add login form
     -->

    <router-link to="/sign-up">
      Załóz konto
    </router-link>
  </div>
</template>

<script lang="ts">
// import { ref } from "@vue/composition-api";

export default {
  layout: 'mobile',
  head () {
    return {
      title: 'Youtuber Challenge, rzuć wyzwanie youtuberowi!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Znajdź swojego ulubionego youtubera i rzuć mu wyzwanie.'
        }
      ]
    }
  },
  setup () {}
}
</script>

<style></style>
