<template lang="pug">
.signup
  section-signup(
    title="Get started"
    text="Please use your work email address so we can connect you with your team"
    type="signup"
  )
</template>

<script>
import signUpForm from '~/components/signup-signin/form/form'

export default {
  components: {
    'section-signup': signUpForm
  }
}
</script>

<style lang="scss" scoped>
  .pricing {
    padding: 203px 0 0;
  }
</style>
