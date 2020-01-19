<template lang="pug">
.cta
  .container
    .cta__wrapper
      .cta__title Everything you need to collaborate on creative ideas&nbsp;tighter and better.
      .cta__form
        label.cta__form-label Enter your email to get early access to the platform
        .cta__form-group
          input.cta__form-input(type="email" placeholder="Your business email")
          button.cta__form-button Get Access
      img.cta__illustration(src="@/assets/images/illustrations/cta-monkey.png" srcset="@/assets/images/illustrations/cta-monkey@2x.png 2x")
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
