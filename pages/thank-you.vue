<template lang="pug">
  .thank-you
    section-thankYou(
      title="Thank you!"
      text="We will reach you soon!"
    )
</template>

<script>
import thankYou from '~/components/signup-signin/form/form'

export default {
  components: {
    'section-thankYou': thankYou
  },
  head () {
    return {
      title: 'Thank you!'
    }
  }
}
</script>

<style lang="scss" scoped>
  .pricing {
    padding: 203px 0 0;
  }
</style>
