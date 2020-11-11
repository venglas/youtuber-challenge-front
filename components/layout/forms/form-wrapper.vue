<template>
  <div class="form-wrapper">
    <header class="header">
      <h2 class="header__title">
        <slot name="title" />
      </h2>
      <p class="header__short-description">
        <slot name="short-description" />
      </p>
    </header>

    <slot name="form" />
  </div>
</template>

<style lang="scss">
.form-wrapper {
  .header {
    &__title {
      font-weight: 300;
      font-size: 1.7rem;
    }
    &__short-description {
      font-weight: 300;
      font-size: 1.1rem;
    }
  }
}
</style>
