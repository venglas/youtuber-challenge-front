<template>
  <div class="container">
    <h1>elo {{ test }}</h1>
    <testowy />
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/composition-api";

export default {
  setup() {
    const test = ref<String>("")
    test.value = "bartel"

    return {
      test,
    }
  }
}
</script>

<style></style>
