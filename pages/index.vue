<template>
  <div class="container">
    <h1>index</h1>
  </div>
</template>

<script lang="ts">
// import { ref } from "@vue/composition-api";

export default {
  layout: 'mobile',
  head () {
    return {
			title: "Youtuber Challenge, rzuć wyzwanie youtuberowi!",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Znajdź swojego ulubionego youtubera i rzuć mu wyzwanie."
				}
			]
		}
  },
  setup () {}
}
</script>

<style></style>
