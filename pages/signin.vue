<template lang="pug">
  .signin
    section-signin(
      title="Sign In"
      text="Enter your details below"
      type="signin"
    )
</template>

<script>
import signInForm from '~/components/signup-signin/form/form'

export default {
  components: {
    'section-signin': signInForm
  }
}
</script>

<style lang="scss" scoped>
  .pricing {
    padding: 203px 0 0;
  }
</style>
