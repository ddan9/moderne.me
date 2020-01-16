<template lang="pug">
.cta
  .container
    .cta__wrapper
      .cta__title Everything you need to&nbsp;collaborate tighter, create faster and present better.
      .cta__form
        label.cta__form-label Enter you details to get started
        .cta__form-group
          input.cta__form-input(type="email" placeholder="Your business email")
          button.cta__form-button Sign Up
      .cta__illustration
</template>

<script>
export default {
  props: {
  }
}
</script>

<style lang="scss">
  @import "./_cta.scss";
</style>
